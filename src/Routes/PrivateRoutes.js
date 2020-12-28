import { Fragment } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
// import { getAllowedRoutes } from '../commons/utils';
import Header from '../components/Header';
import MapAllowedRoutes from './MapAllowedRoutes';
import { PrivateRoutesConfig } from '../config';
import { bindActionCreators } from 'redux';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLogin, selectToken, selectDecode } from '../store/selectors';
import { intersection } from 'lodash';




const rolesIdToWord = (decodeToken) => {
    
    const { roleId } = decodeToken
    switch (roleId) {
        case 0:
            return ["GUEST"]
        case 1:
            return ["ADMIN"]
        case 2:
            return ["TEACHER"]
        case 3:
            return ["STUDENT"]
        default:
            return "empty"
    }
}

const isArrayWithLength = (arr) => {
    return (Array.isArray(arr) && arr.length)
}

const getAllowedRoutes = (routes, roles) => {

    return routes.filter(({ permission }) => {
        if (!permission) return true;
        else if (!isArrayWithLength(permission)) return true;
        else return intersection(permission, roles).length;
    });
}


const PrivateRoutes = (props) => {
    console.log(props.decode)
    console.log(props.token)
    console.log(props.loginState)
    const match = useRouteMatch("/app")
    let allowedRoutes = [];
    if (!props.loginState) {
        const roles = rolesIdToWord(props.decode)
        allowedRoutes = getAllowedRoutes(PrivateRoutesConfig, roles);
    }
    else {
        return <Redirect to="/" />
    }

    return (<Fragment>
        <Header routes={allowedRoutes} prefix={match.path} className="bg-white" />
        <MapAllowedRoutes routes={allowedRoutes} basePath="/app" isAddNotFound />
    </Fragment>)


}

const mapStateToProps = createStructuredSelector({
    loginState: selectLogin(),
    token: selectToken(),
    decode: selectDecode()
})



export default connect(mapStateToProps)(PrivateRoutes)


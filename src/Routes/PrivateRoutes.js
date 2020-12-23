import { Fragment, useEffect, useState } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
// import { getAllowedRoutes } from '../commons/utils';
import Header from '../components/Header';
import MapAllowedRoutes from './MapAllowedRoutes';
import { PrivateRoutesConfig } from '../config';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLogin } from '../store/selectors';
import { intersection } from 'lodash';




const rolesIdToWord = () => {
    const { roleId } = JSON.parse(localStorage.getItem("persist:root"));
    switch (roleId) {
        case "0":
            return ["GUEST"]
        case "1":
            return ["ADMIN"]
        case "2":
            return ["TEACHER"]
        case "3":
            return ["STUDENT"]
        default:
            return "empty"
    }
}

const isArrayWithLength = (arr) => {
    return (Array.isArray(arr) && arr.length)
}

const getAllowedRoutes = (routes) => {
    const roles = rolesIdToWord()
    return routes.filter(({ permission }) => {
        if (!permission) return true;
        else if (!isArrayWithLength(permission)) return true;
        else return intersection(permission, roles).length;
    });
}


const PrivateRoutes = (props) => {

    const match = useRouteMatch("/app")
    let allowedRoutes = [];

    if (!props.loginState) {

        allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
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
    loginState: selectLogin()
})

export default connect(mapStateToProps)(PrivateRoutes)


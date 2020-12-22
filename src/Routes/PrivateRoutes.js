import React, { Fragment } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { getAllowedRoutes, isLoggedIn } from '../commons/utils';
import Header from '../components/Header';
import MapAllowedRoutes from './MapAllowedRoutes';
import { PrivateRoutesConfig } from '../config';



const PrivateRoutes = () => {

    // const match = useRouteMatch("/app")
    let allowedRoutes = [];

    if (isLoggedIn())
        allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
    else
        return <Redirect to="/" />

    return (
        <Fragment>
            <Header />
            <MapAllowedRoutes routes={allowedRoutes} basePath="/app" isAddNotFound />

        </Fragment>
    )


}

export default PrivateRoutes
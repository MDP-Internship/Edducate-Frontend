import React, { memo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NotFound from '../components/NotFound';

const MapAllowedRoutes = ({ routes, basePath, isAddNotFound }) => {

    const match = useRouteMatch(basePath)

    return (
        <Switch>
            {
                routes.map(({ path, component, title, permission, ...rest }) =>
                    <Route {...rest} key={path} path={`${match.path}${path}`} component={component} />)
            }

            {isAddNotFound && <Route component={NotFound} />}
        </Switch>
    )
}

export default memo(MapAllowedRoutes)
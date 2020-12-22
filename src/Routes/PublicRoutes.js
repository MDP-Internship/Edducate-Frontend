import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

//Pages
import * as Pages from "../pages"


const PublicRoutes = () => {
    return (

        <Fragment>
            <Switch>
                <Route path="/Register" component={Pages.Register} />
                <Route path="/Login" component={Pages.Login} />
                <Route path="" component={Pages.Home} />
            </Switch>
        </Fragment>
    )
}

export default PublicRoutes
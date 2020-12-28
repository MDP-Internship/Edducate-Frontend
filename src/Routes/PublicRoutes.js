import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "../components/Header"
//Pages
import * as Pages from "../pages"

const navOptions = [
    { title: 'Home', path: '/' },
];

const PublicRoutes = () => {
    return (

        <Fragment>
            <Header routes={navOptions} />
            <Switch>
                <Route path="/Register" component={Pages.Register} />
                <Route path="/Login" component={Pages.Login} />
                <Route path="" component={Pages.Home} />
            </Switch>
        </Fragment>
    )
}

export default PublicRoutes
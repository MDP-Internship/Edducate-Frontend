import React from 'react'
import {Router, Route, Switch } from "react-router-dom"
import history from "../commons/history"
import PrivateRoutes from './PrivateRoutes'
import Auth from "./Auth"

// const page =()=><div>Sayfa</div>

function Routes() {

    return (
        <Router history={history}>
            <Switch>
                <Route path="/app" component={PrivateRoutes} />
                <Route path="" component={Auth} />
            </Switch>
        </Router>
    )
}

export default Routes

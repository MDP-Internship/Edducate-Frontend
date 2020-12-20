import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Register from '../pages/Register';

const Routes = () => (
    <div>
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Admin" exact component={Admin} />
        <Route path="/Register" exact component={Register} />
    </div>
);

export default Routes;

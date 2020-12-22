import React from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../commons/utils';
import PublicRoutes from './PublicRoutes';


//login true false işlemine göre ayarla
const Auth = () => false ? <Redirect to="/app" /> : <PublicRoutes />

export default Auth
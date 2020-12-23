import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import PublicRoutes from './PublicRoutes';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLogin } from '../store/selectors';

// import PropTypes from 'prop-types';

//login true false işlemine göre ayarla
const Auth = (props) => {
    return !props.loginState ? <Redirect to="/app" /> : <PublicRoutes />
}

const mapStateToProps = createStructuredSelector({
    loginState: selectLogin()
})


export default connect(mapStateToProps)(Auth)
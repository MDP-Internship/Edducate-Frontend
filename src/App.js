import React, { Component } from 'react'
import Routes from './commons/Routes'
import { HashRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectLogin } from './store/selectors';

class App extends Component {




  componentDidMount() {
    console.log(this.props.loginState)
    window.location.hash = this.isLogin(this.props.loginState)
  }

  isLogin = (isLoginBool) => (isLoginBool ? "Login" : "");

  render() {
    return (
      <HashRouter>
        <Routes></Routes>
      </HashRouter>
    )
  }
}


App.propTypes = {
  loginState: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  closeToast: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  getInit: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginState: selectLogin(),
});

const mapDispatchToProps = (dispatch) => (
  (
    bindActionCreators({
      // getInit,
    }, dispatch)
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(App);



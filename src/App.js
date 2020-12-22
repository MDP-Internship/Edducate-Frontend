import React, { Component } from 'react'
import Routes from "./Routes"

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectLogin } from './store/selectors';

class App extends Component {

  render() {
    return (
      <Routes></Routes>
    )
  }
  
}


App.propTypes = {
  loginState: PropTypes.bool.isRequired,
  // open: PropTypes.bool.isRequired,
  // message: PropTypes.string.isRequired,
  // variant: PropTypes.string.isRequired,
  // closeToast: PropTypes.func.isRequired,
  // loading: PropTypes.bool.isRequired,
  // getInit: PropTypes.func.isRequired,
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



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as serviceWorker from './serviceWorker'

import "antd/dist/antd.css"

//redux config
import { Provider } from "react-redux"
import store from "./helpers/store"
import setAuthorizationToken from './helpers/setAuthorizationToken';

const jwtToken = localStorage.getItem("jwtToken")
if (jwtToken) {
  setAuthorizationToken(jwtToken)
}

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

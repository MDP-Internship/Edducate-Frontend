import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { persistReducer, persistStore, createTransform } from 'redux-persist';
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger'

import reducers from './store/reducer'
import sagas from './store/saga'
import { PersistGate } from 'redux-persist/integration/react';


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token", "login"]
}

//localstorage middleware redux
const persistedReducer = persistReducer(persistConfig, reducers);

//????
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(

  persistedReducer,
  composeEnhancer(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger)
  )

);

const persistor = persistStore(store);

sagaMiddleware.run(sagas)

ReactDOM.render(

  <Provider store={store}>
    <PersistGate loading={<div>loading</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

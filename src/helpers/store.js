import { createStore, applyMiddleWare } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from "../store/reducers/rootReducer"

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleWare(thunkMiddleware, loggerMiddleware))

export default store
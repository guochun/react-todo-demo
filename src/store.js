import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './middleware/logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)))
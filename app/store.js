import { createStore, applyMiddleware, combineReducers } from 'redux';
import mainReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk




export default createStore(mainReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware)))

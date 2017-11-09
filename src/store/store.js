import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';
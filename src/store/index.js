import { createBrowserHistory } from 'history';
import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import authReducer from '../reducer/authReducer';

export const history = createBrowserHistory({ basename: '/authroute' });
const reducer = combineReducers({
  router: connectRouter(history),
  authReducer
});

const initState = {
  authReducer:{
    login:false,
  }
};

const store = createStore(
  reducer,
  initState,
  compose(applyMiddleware(thunk, routerMiddleware(history)))
);

export default store;

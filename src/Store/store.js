import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from '../reducers/Authreducer';
import createReducer from '../reducers/createReducer';
import getReducer from '../reducers/getReducer';
import activityReducer from '../reducers/ActivityReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  create:createReducer,
  getdata:getReducer,
  activity:activityReducer
});


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;

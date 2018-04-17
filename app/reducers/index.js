// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import user from './user';
import registration from './registration';

const rootReducer = combineReducers({
  user,
  registration,
  router,
});

export default rootReducer;

// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import user from './user';
import registration from './registration';
import dashboard from './dashboard';

const rootReducer = combineReducers({
  user,
  registration,
  dashboard,
  router,
});

export default rootReducer;

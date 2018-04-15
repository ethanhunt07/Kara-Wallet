/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import DashboardPage from './containers/Dashboard';

export default () => (
  <App>
    <Switch>
      {/* <Route path="/counter" component={CounterPage} /> */}
      <Route path="/" exact component={HomePage} />
      <Route path="/dashboard" component={DashboardPage} />
    </Switch>
  </App>
);

// @flow
import React, { Component } from 'react';

import Dashboard from '../../components/Dashboard';

type Props = {};

class DashboardPage extends Component<Props> {
  props: Props;

  render() {
    const { props } = this;
    return (
      <Dashboard {...props} />
    );
  }
}

export default DashboardPage;

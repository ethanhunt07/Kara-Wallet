// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Home from '../components/Home';

type Props = {};

class HomePage extends Component<Props> {
  props: Props;

  render() {
    const { props } = this;
    return (
      <Home {...props} />
    );
  }
}

export default withRouter(HomePage);

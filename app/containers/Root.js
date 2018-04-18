// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter, replace } from 'react-router-redux';
import PropTypes from 'prop-types';
import Routes from '../routes';

import { setWallet } from '../actions/user';

class Root extends Component {
  componentDidMount() {
    const walletString = localStorage.getItem('walletString');
    if (walletString) {
      this.props.store.dispatch(setWallet(walletString));
      this.props.store.dispatch(replace('/dashboard'));
    } else {
      this.props.store.dispatch(replace('/'));
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  history: PropTypes.shape({
    go: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
  store: PropTypes.shape({
    getState: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default Root;

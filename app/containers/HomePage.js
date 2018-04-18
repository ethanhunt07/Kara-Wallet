// @flow
import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from '../components/Home';

const HomePage = ({ wallet }) => (wallet.nonExistant ? <Home /> : <Redirect to="/dashboard" />);

HomePage.propTypes = {
  wallet: PropTypes.shape({
    nonExistant: PropTypes.bool
  }).isRequired,
};

const mapStateToProps = (state) => ({ wallet: state.user.wallet });

const mapDispatchToProps = () => ({ });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));

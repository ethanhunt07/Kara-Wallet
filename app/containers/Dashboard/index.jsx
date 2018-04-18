// @flow
import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dashboard from '../../components/Dashboard';

import { deleteRegistrationBranch } from '../../actions/registration';


// const DashboardPage = ({ wallet }) => (wallet.nonExistant ? <Redirect exact to="/" /> : <Dashboard />);

class DashboardPage extends Component {
  // componentDidUpdate() {
  //   const { deleteRegistrationBranch } = this.props;
  //   deleteRegistrationBranch();
  // }

  render() {
    const { wallet } = this.props;
    if (wallet.nonExistant) {
      return <Redirect exact to="/" />;
    }

    return <Dashboard />;
  }
}


DashboardPage.propTypes = {
  wallet: PropTypes.shape({
    nonExistant: PropTypes.bool
  }).isRequired,
};

const mapStateToProps = (state) => ({ wallet: state.user.wallet });

const mapDispatchToProps = (dispatch) => ({
  deleteRegistrationBranch: () => {
    dispatch(deleteRegistrationBranch());
  }
});

// export default DashboardPage;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardPage));

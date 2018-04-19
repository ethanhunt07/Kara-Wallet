import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './style.scss';

import { deleteUserBranch } from '../../actions/user';
import { toggleSendModal, toggleReceiveModal } from '../../actions/dashboard';

// import DashboardTabsPanel from '../../containers/DashboardTabsPanel';
import SendModal from '../../containers/SendModal';
import DashboardTransactionsTable from '../DashboardTransactionsTable';

const DashboardPanel = ({ children, title }) => (
  <div className={classnames('mui-panel', styles['dashboard-panel'])}>
    <header className={styles['dashboard-panel--header']}>
      {title}
    </header>
    <main>
      {children}
    </main>
  </div>
);

DashboardPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  transactionsList: state.user.transactions,
  location: state.router.location,
  walletAddress: state.user.wallet.address,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(deleteUserBranch());
    localStorage.removeItem('walletString');
    dispatch(push('/'));
  },
  toggleSendModalState: () => {
    dispatch(toggleSendModal());
  },
  toggleReceiveModalState: () => {
    dispatch(toggleReceiveModal());
  },
});

// Though not directly used, we are passing location as a property to the component
// This is done as, when using redux, the app may not detect changes to the location unless
// The location is passed as a property... and hence the view gets re-rendered (route-change)
// when the location is changed.
const Dashboard = ({ transactionsList, logout, location, walletAddress, toggleSendModalState, toggleReceiveModalState }) => ( // eslint-disable-line 
  <div className={styles['page-container']}>
    <Container>
      <header
        className={classnames(styles['dashboard-header'], 'd-flex justify-content-center align-items-center')}
      >
        <p>Full Node Status: Running</p>
        <nav>
          <Button
            className={classnames(styles['nav-button'], styles['toggle-full-node-button'])}
            variant="raised"
          >
            Start/Stop Full Node
          </Button>
        </nav>
      </header>
      <Row>
        <Col>
          <DashboardPanel title="Account Details">
            <div className={styles['grey-data-panel']}>
              Address: { walletAddress }
              <br />
              Balance: 50 KRA
            </div>
          </DashboardPanel>
        </Col>
        <Col>
          <DashboardPanel title="Network Details">
            <div className={styles['grey-data-panel']}>
              Network: Testnet
              <br />
              Peers: 350
              <br />
              Current Block Number: 50,000
            </div>
          </DashboardPanel>
        </Col>
      </Row>
      <Panel>
        <nav className="d-flex justify-content-center">
          <Button
            className={classnames(styles['nav-button'], styles['send-button'])}
            onClick={toggleSendModalState}
            variant="raised"
          >
            Send
          </Button>
          <Button className={styles['nav-button']} onClick={toggleReceiveModalState} variant="raised">Receive Kara</Button>
          <Button className={styles['nav-button']} variant="raised" onClick={logout}>Logout</Button>
        </nav>
      </Panel>
      {/* <DashboardTabsPanel /> */}
      <DashboardTransactionsTable transactionsList={transactionsList} />
      <SendModal />
    </Container>
  </div>
);

Dashboard.propTypes = {
  transactionsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    fromAddress: PropTypes.string.isRequired,
    toAddress: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    fee: PropTypes.number.isRequired,
  })).isRequired,
  logout: PropTypes.func.isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired
  }).isRequired,
  walletAddress: PropTypes.string.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));

// const referenceObject = {
//   time: referenceTime,
//   id: '0',
//   fromAddress: '123',
//   toAddress: '321',
//   amount: 100,
//   fee: 20,

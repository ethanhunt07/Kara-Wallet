import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import Toggle from 'react-toggle';
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { ipcRenderer } from 'electron';

import getStore from '../../store/appStore';


import styles from './style.scss';

import { deleteUserBranch } from '../../actions/user';
import { toggleSendModal, toggleReceiveModal, toggleClientExec, clientExecStarted, clientExecStopped } from '../../actions/dashboard';

// import DashboardTabsPanel from '../../containers/DashboardTabsPanel';
import SendModal from '../../containers/SendModal';
import ReceiveModal from '../../containers/ReceiveModal';
import DashboardTransactionsTable from '../DashboardTransactionsTable';

const applicationStore = getStore();

const startClient = () => {
  ipcRenderer.send('full-node-channel', 'START');
};

const stopClient = () => {
  ipcRenderer.send('full-node-channel', 'STOP');
};

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
  fullNodeRunning: state.dashboard.clientRunning,
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
  toggleFullNodeStatus: () => {
    dispatch(toggleClientExec());
  }
});

ipcRenderer.on('connection-status-channel', (event, arg) => {
  if (arg === 'OPENED') {
    applicationStore.dispatch(clientExecStarted());
  } else if (arg === 'CLOSED') {
    applicationStore.dispatch(clientExecStopped());
  }
});


class Dashboard extends Component {
  componentDidMount() {
    stopClient();
  }

  render() {
    const {
      transactionsList, logout,
      location, walletAddress,
      toggleSendModalState, toggleReceiveModalState,
      fullNodeRunning
    } = this.props;
    return (
      <div className={styles['page-container']}>
        <Container>
          <header
            className={classnames(styles['dashboard-header'], 'd-flex justify-content-center align-items-center')}
          >
            <nav className="d-flex align-items-center">
              <label htmlFor="toggle">
                <span>Full Node Status: { fullNodeRunning ? 'Running' : 'Stopped' }</span>
              </label>
              <Toggle
                id="toggle"
                name="toggle"
                icons={false}
                checked={fullNodeRunning}
                onClick={fullNodeRunning ? stopClient : startClient}
              />
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
          <ReceiveModal />
        </Container>
      </div>
    );
  }
}

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
  fullNodeRunning: PropTypes.bool.isRequired,
  toggleSendModalState: PropTypes.func.isRequired,
  toggleReceiveModalState: PropTypes.func.isRequired,
  toggleFullNodeStatus: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));

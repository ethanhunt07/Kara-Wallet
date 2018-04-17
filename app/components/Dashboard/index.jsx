import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './style.scss';

// import DashboardTabsPanel from '../../containers/DashboardTabsPanel';
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

const mapStateToProps = (state) => ({ transactionsList: state.user.transactions });

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(replace('/'));
  }
});

const Dashboard = ({ transactionsList, logout }) => (
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
              Address:0 xca11123333aa9
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
            variant="raised"
          >
            Send
          </Button>
          <Button className={styles['nav-button']} variant="raised">Receive Kara</Button>
          <Button className={styles['nav-button']} variant="raised" onClick={logout}>Logout</Button>
        </nav>
      </Panel>
      {/* <DashboardTabsPanel /> */}
      <DashboardTransactionsTable transactionsList={transactionsList} />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

// const referenceObject = {
//   time: referenceTime,
//   id: '0',
//   fromAddress: '123',
//   toAddress: '321',
//   amount: 100,
//   fee: 20,

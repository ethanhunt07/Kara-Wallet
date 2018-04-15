import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from 'muicss/lib/react/button';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './style.scss';

import DashboardTabsPanel from '../../containers/DashboardTabsPanel';

const DashboardPanel = ({ children, title }) => (
  <div className={classnames('mui-panel', styles['dashboard-panel'])}>
    <header className={styles['dashboard-panel--header']}>
      { title }
    </header>
    <main>
      { children }
    </main>
  </div>
);

DashboardPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default class Dashboard extends Component < rops> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles['page-container']}>
        <Container>
          <header
            className={classnames(styles['dashboard-header'], 'd-flex justify-content-between align-items-center')}>
            <h2 className={styles['dashboard-title']}>Karacoin Wallet</h2>
            <nav className="ml-auto">
              <Button
                className={classnames(styles['nav-button'], styles['send-button'])}
                variant="raised"
              >
                Send
              </Button>
              <Button className={styles['nav-button']} variant="raised">Receive Kara</Button>
              <Button className={styles['nav-button']} variant="raised">Logout</Button>
            </nav>
          </header>
          <Row>
            <Col>
              <DashboardPanel title="Address">
                <div className={styles['grey-data-panel']}>
                  12214044115343504305L
                </div>
              </DashboardPanel>
            </Col>
            <Col>
              <DashboardPanel title="Peer">
                <div className={styles['grey-data-panel']}>
                  <header>Mainnet</header>
                  node05.karachain.io : 443
                </div>
              </DashboardPanel>
            </Col>
            <Col>
              <DashboardPanel title="Balance">
                <div className={styles['grey-data-panel']}>
                  0 Kara
                </div>
              </DashboardPanel>
            </Col>
          </Row>
          <DashboardTabsPanel />
        </Container>
      </div>
    );
  }
}

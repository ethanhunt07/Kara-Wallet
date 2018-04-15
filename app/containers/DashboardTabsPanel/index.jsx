import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import Button from 'muicss/lib/react/button';
import classnames from 'classnames';

import styles from './style.scss';

export default class DashboardTabsPanel extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <div className={classnames('mui-panel', styles['nav-links-panel'])}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ [styles['active-nav-link']]: this.state.activeTab === '1', [styles['nav-link']]: true })}
              onClick={() => { this.toggle('1'); }}
            >
              Transactions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ [styles['active-nav-link']]: this.state.activeTab === '2', [styles['nav-link']]: true })}
              onClick={() => { this.toggle('2'); }}
            >
              Other Section
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className={styles['tab-content']} activeTab={this.state.activeTab}>
          <TabPane className={styles['transactions-tab']} tabId="1">
            <Row>
              <Col>
                There are no transactions, yet.
                <Button className={styles['receive-kara-button']} variant="raised">Receive Kara</Button>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col>
                Other Section
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

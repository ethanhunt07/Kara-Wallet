import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from 'muicss/lib/react/button';
import classnames from 'classnames';

import styles from './style.scss';

export default class Dashboard extends Component <Props> {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styles['page-container']}>
        <Container>
          <header className={classnames(styles['dashboard-header'], 'd-flex justify-content-between align-items-center')}>
            <h2 className={styles['dashboard-title']}>Karacoin Wallet</h2>
            <nav className="ml-auto">
              <Button className={classnames(styles['nav-button'], styles['send-button'])} variant="raised">Send</Button>
              <Button className={styles['nav-button']} variant="raised">Receive Kara</Button>
              <Button className={styles['nav-button']} variant="raised">Logout</Button>
            </nav>
          </header>
          <Row>
            <Col>
              Page Loaded!
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

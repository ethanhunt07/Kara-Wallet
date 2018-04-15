// @flow
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';
import LoginFrom from './LoginForm';
import styles from './Home.css';

import RegistrationModal from '../containers/RegisterModal';

// type Props = {};

export default class Home extends Component <Props> {
  // props : Props;
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.toggleModalState = this.toggleModalState.bind(this);
  }

  toggleModalState() {
    this.setState({
      modalOpen: !this.modalOpen,
    });
  }

  render() {
    return (
      <div className={styles['page-container']}>
        <Container>
          <header className={styles['home-header']}>
            <h2 className={styles['app-title']}>Karacoin Wallet</h2>
          </header>
          <Row>
            <Col>
              <LoginFrom modalOpenFunc={() => { this.setState({ modalOpen: true }); }} />
            </Col>
          </Row>
          <RegistrationModal modalOpen={this.state.modalOpen} modalToggle={this.toggleModalState} />
        </Container>
      </div>
    );
  }
}

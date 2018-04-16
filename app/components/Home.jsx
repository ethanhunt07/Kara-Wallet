// @flow
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
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
    this.modalOpenFunc = this.modalOpenFunc.bind(this);
    this.modalCloseFunc = this.modalCloseFunc.bind(this);
  }

  toggleModalState(evt) {
    evt.preventDefault();
    this.setState({
      modalOpen: !this.modalOpen,
    });
  }

  modalOpenFunc() { this.setState({ modalOpen: true }); }
  modalCloseFunc() { this.setState({ modalOpen: false }); }

  render() {
    const historyObject = this.props.history;
    return (
      <div className={styles['page-container']}>
        <Container>
          <header className={styles['home-header']}>
            <h2 className={styles['app-title']}>Karacoin Wallet</h2>
          </header>
          <Row>
            <Col>
              <LoginForm history={historyObject} modalOpenFunc={this.modalOpenFunc} />
            </Col>
          </Row>
          <RegistrationModal
            modalOpen={this.state.modalOpen}
            modalCloseFunc={this.modalCloseFunc}
            modalToggle={this.toggleModalState}
          />
        </Container>
      </div>
    );
  }
}

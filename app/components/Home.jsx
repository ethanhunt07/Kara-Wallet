// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import styles from './Home.css';

import RegistrationModal from '../containers/RegisterModal';

import { openModal } from '../actions/registration';

// type Props = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  openModalInstance: (evt) => {
    evt.preventDefault();
    dispatch(openModal());
  },
  navigateToDashboard: (evt) => {
    evt.preventDefault();
    dispatch(push('/dashboard'));
  },
});

const Home = ({ openModalInstance, navigateToDashboard }) => (
  <div className={styles['page-container']}>
    <Container>
      <header className={styles['home-header']}>
        <h2 className={styles['app-title']}>Karachain Wallet</h2>
      </header>
      <Row>
        <Col>
          <LoginForm navigateToDashboard={navigateToDashboard} modalOpenFunc={openModalInstance} />
        </Col>
      </Row>
      <RegistrationModal />
    </Container>
  </div>
);

Home.propTypes = {
  openModalInstance: PropTypes.func.isRequired,
  navigateToDashboard: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

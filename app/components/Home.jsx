// @flow
import React from 'react';
import { withAlert } from 'react-alert';
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
import { setWallet } from '../actions/user';

import { GenerateWalletUsingPhrase } from '../utils/generateWallet';

// type Props = {};

const mapStateToProps = () => ({ });

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModalInstance: (evt) => {
    evt.preventDefault();
    dispatch(openModal());
  },
  login: (evt, phraseInput) => {
    evt.preventDefault();
    const generatedWallet = GenerateWalletUsingPhrase(phraseInput);
    if (!generatedWallet) {
      if (ownProps.alert) {
        ownProps.alert.show('Invalid input. Please re-check your input.');
      }
      return false;
    }
    const walletString = JSON.stringify(generatedWallet);
    localStorage.setItem('walletString', walletString);
    dispatch(setWallet(walletString));
    dispatch(push('/dashboard'));
  },
});

const Home = ({ openModalInstance, login }) => (
  <div className={styles['page-container']}>
    <Container>
      <header className={styles['home-header']}>
        <h2 className={styles['app-title']}>Karachain Wallet</h2>
      </header>
      <Row>
        <Col>
          <LoginForm login={login} modalOpenFunc={openModalInstance} />
        </Col>
      </Row>
      <RegistrationModal />
    </Container>
  </div>
);

Home.propTypes = {
  openModalInstance: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  // alert: PropTypes.shape({
  //   show: PropTypes.func.isRequired,
  // }).isRequired,
};

export default withRouter(withAlert(connect(mapStateToProps, mapDispatchToProps)(Home)));

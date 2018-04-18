import React from 'react';
import { Modal, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import Button from 'muicss/lib/react/button';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './style.scss';

import { GenerateWalletUsingPhrase } from '../../utils/generateWallet';

import { NUMBER_OF_STEPS, ALL_STEPS } from './Steps';
import { proceedToNextStep, backToPrevStep, closeModal, toggleModal, deleteRegistrationBranch } from '../../actions/registration';
import { setWallet } from '../../actions/user';

const RegistrationModal = ({
  currentStep, goForward, goBack,
  closeModalInstance, isModalOpen, toggleModalInstance,
  generateWalletInstance, chosenPhrase,
}) => {
  const CurrentStepComponent = ALL_STEPS[currentStep].component;
  const currentValidate = ALL_STEPS[currentStep].validate;

  const BackButton = () => <Button className={styles['cancel-button']} variant="raised" onClick={goBack}>Back</Button>;
  const CancelButton = () => <Button className={styles['cancel-button']} variant="raised" onClick={closeModalInstance}>Cancel</Button>;

  const NextButton = () => <Button disabled={!currentValidate()} className={classnames({ [styles['next-button']]: true })} variant="raised" onClick={goForward}>Next</Button>;
  const CompleteButton = () => <Button disabled={!currentValidate()} className={classnames({ [styles['complete-button']]: true })} variant="raised" onClick={(evt) => generateWalletInstance(evt, chosenPhrase)}>Complete</Button>;

  return (
    <Modal
      isOpen={isModalOpen}
      toggle={toggleModalInstance}
      className={styles['registration-modal']}
    >
      <header className={styles['modal-header']}>
        <h3>New Account</h3>
      </header>
      <main className={styles['modal-body']}>
        <Container fluid>
          <Row>
            <Col>
              <CurrentStepComponent />
            </Col>
          </Row>
        </Container>
      </main>
      <footer className={classnames(styles['modal-footer'], 'd-flex justify-content-between')}>
        { currentStep === 0 ? <CancelButton /> : <BackButton /> }
        { currentStep === NUMBER_OF_STEPS - 1 ? <CompleteButton /> : <NextButton /> }
      </footer>
    </Modal>
  );
};

RegistrationModal.propTypes = {
  currentStep: PropTypes.number.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  chosenPhrase: PropTypes.string.isRequired,
  goForward: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  closeModalInstance: PropTypes.func.isRequired,
  toggleModalInstance: PropTypes.func.isRequired,
  generateWalletInstance: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentStep: state.registration.currentStep,
  isModalOpen: state.registration.modalOpen,
  chosenPhrase: state.registration.chosenPhrase,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  goForward: (evt) => {
    evt.preventDefault();
    dispatch(proceedToNextStep());
  },
  goBack: (evt) => {
    evt.preventDefault();
    dispatch(backToPrevStep());
  },
  closeModalInstance: (evt) => {
    evt.preventDefault();
    if (ownProps.isModalOpen) {
      dispatch(deleteRegistrationBranch());
    }
    dispatch(closeModal());
  },
  toggleModalInstance: (evt) => {
    evt.preventDefault();
    dispatch(toggleModal());
  },
  generateWalletInstance: (evt, chosenPhrase) => {
    evt.preventDefault();
    const newWallet = GenerateWalletUsingPhrase(chosenPhrase);
    if (!newWallet) {
      console.error('Wallet creation failed');
      return false;
    }
    const walletString = JSON.stringify(newWallet);
    localStorage.setItem('walletString', walletString);
    dispatch(setWallet(walletString));
    dispatch(replace('/dashboard'));
    // dispatch(deleteRegistrationBranch());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationModal));

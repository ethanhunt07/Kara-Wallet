import React, { Component } from 'react';
import { Modal, Container, Row, Col } from 'reactstrap';
import Button from 'muicss/lib/react/button';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './style.scss';

import { NUMBER_OF_STEPS, ALL_STEPS } from './Steps';

type Props = {
  modalOpen: PropTypes.bool.isRequired,
  modalToggle: PropTypes.func.isRequired,
  className: PropTypes.string
};

class RegistrationModal extends Component {
  props: Props;
  constructor(props) {
    super(props);
    this.state = {
      // modalOpen: false
      currentStep: 0,
    };

    this.backToPrevStep = this.backToPrevStep.bind(this);
    this.proceedToNextStep = this.proceedToNextStep.bind(this);
  }

  backToPrevStep(evt) {
    evt.preventDefault();
    const { currentStep } = this.state;
    const targetStep = currentStep >= 1 ? currentStep - 1 : 0;
    console.log(targetStep);
    this.setState({ currentStep: targetStep });
  }

  proceedToNextStep(evt) {
    evt.preventDefault();
    const { currentStep } = this.state;
    const targetStep = currentStep <= NUMBER_OF_STEPS - 2 ? currentStep + 1 : NUMBER_OF_STEPS - 1;
    this.setState({ currentStep: targetStep });
  }

  completeAccountCreation(evt) {
    evt.preventDefault();
    const { currentStep } = this.state;
    if (currentStep !== NUMBER_OF_STEPS - 1) {
      console.error(new Error('Steps still left to complete'));
      return false;
    }
  }

  render() {
    const { currentStep } = this.state;

    const { backToPrevStep, proceedToNextStep } = this;
    const { modalCloseFunc } = this.props;

    const CurrentStepComponent = ALL_STEPS[currentStep].component;
    const currentValidate = ALL_STEPS[currentStep].validate;

    const BackButton = () => <Button className={styles['cancel-button']} variant="raised" onClick={backToPrevStep}>Back</Button>;
    const CancelButton = () => <Button className={styles['cancel-button']} variant="raised" onClick={modalCloseFunc}>Cancel</Button>;

    const NextButton = () => <Button className={classnames({ [styles['next-button']]: true, [styles['next-button-disabled']]: !currentValidate() })} variant="raised" onClick={proceedToNextStep}>Next</Button>;
    const CompleteButton = () => <Button className={classnames({ [styles['complete-button']]: true, [styles['complete-button-disabled']]: !currentValidate() })} variant="raised" onClick={proceedToNextStep}>Complete</Button>;

    return (
      <Modal
        isOpen={this.props.modalOpen}
        toggle={this.props.modalToggle}
        className={classnames(this.props.className, 'mui-panel', styles['registration-modal'])}
      >
        <header className={styles['modal-header']}>
          <h3>New Account</h3>
        </header>
        <main className={styles['modal-body']}>
          <Container fluid>
            <Row>
              <Col>
                {/* <p>
                  Please click Next, then move around your mouse randomly to generate a random
                  passphrase.
                </p>

                <p>
                  Note: After the registration is complete, your passphrase will be required for
                  logging in to your account. Please keep it in a safe place.
                </p> */}
                <CurrentStepComponent />
              </Col>
            </Row>
          </Container>

        </main>
        <footer className={classnames(styles['modal-footer'], 'd-flex justify-content-between')}>
          { currentStep === 0 ? <CancelButton /> : <BackButton /> }
          { currentStep === NUMBER_OF_STEPS - 2 ? <CompleteButton /> : <NextButton /> }
        </footer>
      </Modal>
    );
  }
}

RegistrationModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  modalToggle: PropTypes.func.isRequired,
  modalCloseFunc: PropTypes.func.isRequired,
  className: PropTypes.string,
};

RegistrationModal.defaultProps = {
  className: '',
};

export default RegistrationModal;

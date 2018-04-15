import React, { Component } from 'react';
import { Modal, Container, Row, Col } from 'reactstrap';
import Button from 'muicss/lib/react/button';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './style.scss';

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
    };
  }

  render() {
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
                <p>
                  Please click Next, then move around your mouse randomly to generate a random
                  passphrase.
                </p>

                <p>
                  Note: After the registration is complete, your passphrase will be required for
                  logging in to your account. Please keep it in a safe place.
                </p>
              </Col>
            </Row>
          </Container>

        </main>
        <footer className={classnames(styles['modal-footer'], 'd-flex justify-content-between')}>
          <Button className={styles['cancel-button']} variant="raised" onClick={this.props.modalCloseFunc}>Cancel</Button>
          <Button className={styles['next-button']} variant="raised" onClick={this.toggle}>Do Something</Button>
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

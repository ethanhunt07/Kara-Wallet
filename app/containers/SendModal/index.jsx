import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Modal, Container, Row, Col } from 'reactstrap';
import Button from 'muicss/lib/react/button';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SendForm from '../../components/SendForm';

import styles from './style.scss';

import { updateSendReceiveAddress, updateSendTransactionAmount, toggleSendModal } from '../../actions/dashboard';

const mapStateToProps = (state) => ({
  sendModalOpen: state.dashboard.sendModalOpen,
  recepientAddress: state.dashboard.sendForm.recepientAddress,
  transactionAmount: state.dashboard.sendForm.transactionAmount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModalState: (evt) => {
    evt.preventDefault();
    dispatch(toggleSendModal());
  },
  onReceiveAddressChange: (evt, newReceiveAddress) => {
    evt.preventDefault();
    dispatch(updateSendReceiveAddress(newReceiveAddress));
  },
  onReceiveTransactionAmount: (evt, newTransactionAmount) => {
    evt.preventDefault();
    dispatch(updateSendTransactionAmount(newTransactionAmount));
  }
});

class SendModal extends Component {
  render() {
    const {
      sendModalOpen, toggleModalState,
      recepientAddress, transactionAmount,
      onReceiveAddressChange, onReceiveTransactionAmount
    } = this.props;

    return (
      <Modal
        isOpen={sendModalOpen}
        toggle={toggleModalState}
        className={styles['send-modal']}
      >
        <header className={styles['modal-header']}>
          <h3>Send</h3>
        </header>

        <main className={styles['modal-body']}>
          <Container fluid>
            <Row>
              <Col>
                <SendForm
                  transactionAmount={transactionAmount}
                  recepientAddress={recepientAddress}
                  toggleModalState={toggleModalState}
                  send={() => {}}
                  onAddressChange={onReceiveAddressChange}
                  onAmountChange={onReceiveTransactionAmount}
                />
              </Col>
            </Row>
          </Container>
        </main>

        <footer className={classnames(styles['modal-footer'], 'd-flex justify-content-between')}>
          <Button className={styles['cancel-button']} onClick={toggleModalState} variant="raised">Cancel</Button>;
          <Button className={classnames(styles['send-button'], 'ml-auto')} variant="raised">Send</Button>;
        </footer>
      </Modal>
    );
  }
}

SendModal.propTypes = {
  sendModalOpen: PropTypes.bool.isRequired,
  toggleModalState: PropTypes.func.isRequired,
  recepientAddress: PropTypes.string.isRequired,
  transactionAmount: PropTypes.string.isRequired,
  onReceiveAddressChange: PropTypes.func.isRequired,
  onReceiveTransactionAmount: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SendModal));

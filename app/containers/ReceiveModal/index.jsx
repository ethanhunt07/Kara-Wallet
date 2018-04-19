import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Modal, Container, Row, Col } from 'reactstrap';
import QRCode from 'qrcode.react';
import Button from 'muicss/lib/react/button';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.scss';

import { toggleReceiveModal } from '../../actions/dashboard';

const mapStateToProps = (state) => ({
  receiveModalOpen: state.dashboard.receiveModalOpen,
  receiverAddress: state.user.wallet.address,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModalState: (evt) => {
    evt.preventDefault();
    dispatch(toggleReceiveModal());
  },
});

class SendModal extends Component {
  render() {
    const {
      receiveModalOpen, toggleModalState, receiverAddress
    } = this.props;

    return (
      <Modal
        isOpen={receiveModalOpen}
        toggle={toggleModalState}
        className={styles['receive-modal']}
      >
        <header className={styles['modal-header']}>
          <h3>Send</h3>
        </header>

        <main className={styles['modal-body']}>
          <Container fluid>
            <Row>
              <Col className={styles['address-column']}>
                {/* <SendForm
                  transactionAmount={transactionAmount}
                  recepientAddress={recepientAddress}
                  toggleModalState={toggleModalState}
                  send={() => {}}
                  onAddressChange={onReceiveAddressChange}
                  onAmountChange={onReceiveTransactionAmount}
                /> */}
                <h4 className={styles['address-title']}>Address</h4>

                <p className={styles['greyed-address-section']}>{ receiverAddress }</p>

                <QRCode size={384} value={receiverAddress} />
              </Col>
            </Row>
          </Container>
        </main>

        <footer className={classnames(styles['modal-footer'], 'd-flex justify-content-between')}>
          <Button className={styles['cancel-button']} onClick={toggleModalState} variant="raised">Cancel</Button>
          <Button className={classnames(styles['send-button'], 'ml-auto')} variant="raised">Send</Button>
        </footer>
      </Modal>
    );
  }
}

SendModal.propTypes = {
  receiveModalOpen: PropTypes.bool.isRequired,
  toggleModalState: PropTypes.func.isRequired,
  receiverAddress: PropTypes.string.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SendModal));

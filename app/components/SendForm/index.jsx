import React from 'react';
import { Container } from 'reactstrap';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './style.scss';

const SendForm = ({
  recepientAddress, transactionAmount,
  onAddressChange, onAmountChange,
}) => (
  <div className={styles['send-form-component']}>
    <Container>
      <Form
        className={classnames('d-flex flex-column justify-content-between', styles['login-form'])}
      >
        <Input required name="recepientAddress" value={recepientAddress} onChange={onAddressChange} floatingLabel label="Recipient Address *" />
        <Input required name="transactionAmount" value={transactionAmount} onChange={onAmountChange} floatingLabel label="Transaction Amount *" />
      </Form>
    </Container>
  </div>
);

SendForm.propTypes = {
  recepientAddress: PropTypes.string.isRequired,
  transactionAmount: PropTypes.string.isRequired,
  onAddressChange: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func.isRequired,
};

export default SendForm;

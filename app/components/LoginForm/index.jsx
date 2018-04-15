import React from 'react';
import { Container } from 'reactstrap';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './style.scss';

// type Props = {};

const LoginForm = ({ modalOpenFunc }) => (
  <div className={classnames('mui-panel', styles['login-form-component'])}>
    <Container>
      <Form
        className={classnames('d-flex flex-column justify-content-between', styles['login-form'])}
      >
        <Input floatingLabel label="Enter your passphrase *" />

        <div className="d-flex justify-content-center">
          <Button className={styles['new-account-button']} variant="raised" onClick={modalOpenFunc}>New Account</Button>
          <Button className={styles['login-button']} variant="raised">Login</Button>
        </div>
      </Form>
    </Container>
  </div>
);

LoginForm.propTypes = {
  modalOpenFunc: PropTypes.func.isRequired,
};

export default LoginForm;

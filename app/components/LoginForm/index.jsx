import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './style.scss';

// type Props = {};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localInputState: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(evt) {
    evt.preventDefault();
    this.setState({
      localInputState: evt.target.value,
    });
  }

  render() {
    const {
      modalOpenFunc, login,
    } = this.props;

    return (
      <div className={classnames('mui-panel', styles['login-form-component'])}>
        <Container>
          <Form
            className={classnames('d-flex flex-column justify-content-between', styles['login-form'])}
          >
            <Input required value={this.state.localInputState} onChange={this.onInputChange} floatingLabel label="Enter your passphrase *" />
    
            <div className="d-flex justify-content-center">
              <Button className={styles['new-account-button']} variant="raised" onClick={modalOpenFunc}>New Account</Button>
              <Button className={styles['login-button']} onClick={(evt) => login(evt, this.state.localInputState)} variant="raised">Login</Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}


LoginForm.propTypes = {
  modalOpenFunc: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default LoginForm;

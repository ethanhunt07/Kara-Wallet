import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'muicss/lib/react/button';

import styles from './style.scss';

import { createPhrase, acceptPhrase } from '../../../actions/registration';
import getStore from '../../../store/appStore';

import generatePassPhrase from '../../../utils/generatePassPhrase';

const store = getStore();

const StepOne = () => (
  <div>
    <p>
      Please click Next, then move around your mouse randomly to generate a random
      passphrase.
    </p>

    <p>
      Note : After the registration is complete, your passphrase will be required for
      logging in to your account.Please keep it in a safe place.
    </p>
  </div>
);

const mapStateToPropsStepTwo = (state) => ({
  generatedPhrase: state.registration.generatedPhrase,
  phraseAccepted: state.registration.phraseAccepted,
});

const mapDispatchToPropsStepTwo = (dispatch) => ({
  generatePhr: () => {
    const newPhrase = generatePassPhrase();
    dispatch(createPhrase(newPhrase));
  },
  acceptPhr: () => {
    dispatch(acceptPhrase());
  }
});

const PassPhraseStep = ({
  generatedPhrase, phraseAccepted, generatePhr, acceptPhr
}) => (
  <div>
    {
      !phraseAccepted && !generatedPhrase.length &&
      <p>
        Click to generate passphrase: <Button className={styles['modal-black-button']} onClick={generatePhr} variant="raised">Generate</Button>
      </p>
    }

    { generatedPhrase && generatedPhrase.length &&
      <div>
        <p className={styles['passphrase-panel']}>
          { generatedPhrase }
        </p>
      </div>}

    { !phraseAccepted &&
    <div>
      <p><Button className={styles['modal-black-button']} onClick={acceptPhr} variant="raised">Click</Button> to accept passphrase.</p>
    </div> }

    { phraseAccepted &&
    <p>
      Success! Complete to generate wallet.
    </p> }
  </div>
);

PassPhraseStep.propTypes = {
  generatedPhrase: PropTypes.string.isRequired,
  phraseAccepted: PropTypes.bool.isRequired,
  generatePhr: PropTypes.func.isRequired,
  acceptPhr: PropTypes.func.isRequired,
};

const ConnectedPhraseStep = connect(
  mapStateToPropsStepTwo,
  mapDispatchToPropsStepTwo
)(PassPhraseStep);

const ALL_STEPS = [
  {
    component: StepOne,
    validate: () => true,
  },
  {
    component: ConnectedPhraseStep,
    validate: () => {
      const currentState = store.getState();
      console.log('Current state: ', currentState);
      return currentState.registration.phraseAccepted;
    },
  }
];

const NUMBER_OF_STEPS = ALL_STEPS.length;

export {
  ALL_STEPS,
  NUMBER_OF_STEPS,
};

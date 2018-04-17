import React from 'react';
import { Redirect } from 'react-router-dom';

import styles from './style.scss';

import GeneratePassPhrase from '../../../utils/generatePassPhrase';

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

const PassPhraseStep = () => {
  const passPhrase = GeneratePassPhrase();
  return (
    <div>
      <p>Below is your passphrase:</p>

      <p className={styles['passphrase-panel']}>{ passPhrase }</p>
    </div>
  );
};

const FinishStep = () => (
  <div>
    <p>Click Next to Proceed once ONLY if you&apos;ve saved your passphrase.</p>
  </div>
);

const RedirectStep = () => <Redirect to="/dashboard" />;

const ALL_STEPS = [
  {
    component: StepOne,
    validate: () => true,
  },
  {
    component: PassPhraseStep,
    validate: (containerState) => {
      return containerState.phraseSaved;
    },
  },
  {
    component: FinishStep,
    validate: () => false,
  },
  {
    component: RedirectStep,
    validate: () => true,
  },
];

const NUMBER_OF_STEPS = ALL_STEPS.length;

export {
  ALL_STEPS,
  NUMBER_OF_STEPS,
};

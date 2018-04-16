import React from 'react';
import { Redirect } from 'react-router-dom';

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


const StepTwo = () => (
  <div>
    <p>
      Below is your passphrase:
    </p>

    <p>
      The quick brown fox jumped over the lazy dog.
    </p>
  </div>
);

const StepThree = () => (
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
    component: StepTwo,
    validate: () => true,
  },
  {
    component: StepThree,
    validate: () => false,
  },
  {
    component: RedirectStep,
  },
];

const NUMBER_OF_STEPS = ALL_STEPS.length;

export {
  ALL_STEPS,
  NUMBER_OF_STEPS,
};

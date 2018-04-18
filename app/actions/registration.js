export const PROCEED_TO_NEXT_STEP = 'PROCEED_TO_NEXT_STEP';
export const BACK_TO_PREV_STEP = 'BACK_TO_PREV_STEP';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CREATE_PASSPHRASE = 'CREATE_PASSPHRASE';
export const ACCEPT_PASSPHRASE = 'ACCEPT_PASSPHRASE';
export const DELETE_REGISTRATION_BRANCH = 'DELETE_REGISTRATION_BRANCH';
export const ADD_WALLET = 'ADD_WALLET';
export const INVALID_INPUT_ERROR = 'INVALID_INPUT_ERROR';

export function proceedToNextStep() {
  return {
    type: PROCEED_TO_NEXT_STEP,
  };
}

export function backToPrevStep() {
  return {
    type: BACK_TO_PREV_STEP,
  };
}

export function openModal() {
  return {
    type: OPEN_MODAL,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

export function toggleModal() {
  return {
    type: TOGGLE_MODAL,
  };
}

export function createPhrase(phrase) {
  return {
    type: CREATE_PASSPHRASE,
    payload: phrase,
  };
}

export function acceptPhrase() {
  return {
    type: ACCEPT_PASSPHRASE,
  };
}

export function addWallet(walletStringified) {
  return {
    type: ADD_WALLET,
    payload: walletStringified,
  };
}

export function deleteRegistrationBranch() {
  return {
    type: DELETE_REGISTRATION_BRANCH,
  };
}

export function generateInvalidInputError() {
  return {
    type: INVALID_INPUT_ERROR,
  };
}

export const actionCreators = {
  proceedToNextStep,
  backToPrevStep,
  openModal,
  closeModal,
  toggleModal,
  createPhrase,
  acceptPhrase,
  addWallet,
  deleteRegistrationBranch,
  generateInvalidInputError,
};

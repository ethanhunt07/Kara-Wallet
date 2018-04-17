export const PROCEED_TO_NEXT_STEP = 'PROCEED_TO_NEXT_STEP';
export const BACK_TO_PREV_STEP = 'BACK_TO_PREV_STEP';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CREATE_PASSPHRASE = 'CREATE_PASSPHRASE';
export const ACCEPT_PASSPHRASE = 'ACCEPT_PASSPHRASE';
export const GENERATE_WALLET = 'GENERATE_WALLET';
export const DELETE_REGISTRATION_BRANCH = 'DELETE_REGISTRATION_BRANCH';

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

export function createPhrase() {
  return {
    type: CREATE_PASSPHRASE,
  };
}

export function acceptPhrase() {
  return {
    type: ACCEPT_PASSPHRASE,
  };
}

export function generateWallet() {
  return {
    type: GENERATE_WALLET,
  };
}

export function deleteRegistrationBranch() {
  return {
    type: DELETE_REGISTRATION_BRANCH,
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
  generateWallet,
  deleteRegistrationBranch,
};

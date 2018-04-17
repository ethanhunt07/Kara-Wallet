// @flow
import { PROCEED_TO_NEXT_STEP, BACK_TO_PREV_STEP, OPEN_MODAL, CLOSE_MODAL, TOGGLE_MODAL, CREATE_PASSPHRASE, ACCEPT_PASSPHRASE, DELETE_REGISTRATION_BRANCH } from '../actions/registration';
import generatePassphrase from '../utils/generatePassPhrase';

const initialState = {
  currentStep: 0,
  modalOpen: false,
  generatedPhrase: '',
  phraseAccepted: false,
};


export default
function registration(state = initialState, action = {}) {
  let newPassphrase = null;
  if (action.type === CREATE_PASSPHRASE) {
    newPassphrase = generatePassphrase();
  }
  switch (action.type) {
    case PROCEED_TO_NEXT_STEP:
      return { ...state, ...{ currentStep: state.currentStep + 1 } };
    case BACK_TO_PREV_STEP:
      return { ...state, ...{ currentStep: state.currentStep - 1 } };
    case OPEN_MODAL:
      return { ...state, ...{ modalOpen: true } };
    case CLOSE_MODAL:
      return { ...state, ...{ modalOpen: false } };
    case TOGGLE_MODAL:
      return { ...state, ...{ modalOpen: !state.modalOpen } };
    case CREATE_PASSPHRASE:
      return { ...state, ...{ generatedPhrase: newPassphrase } };
    case ACCEPT_PASSPHRASE:
      return { ...state, ...{ generatedPhrase: '', phraseAccepted: true } };
    case DELETE_REGISTRATION_BRANCH:
      return initialState;
    default:
      return state;
  }
}

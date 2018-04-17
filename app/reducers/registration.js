// @flow
import { PROCEED_TO_NEXT_STEP, BACK_TO_PREV_STEP, OPEN_MODAL, CLOSE_MODAL } from '../actions/registration';

export type registrationStateType = {
  +currentStep: number,
  +modalOpen: boolean
};


export default
function registration(state: registrationStateType = { currentStep: 0, modalOpen: false }, action = {}) {
  switch (action.type) {
    case PROCEED_TO_NEXT_STEP:
      return { ...state, ...{ currentStep: state.currentStep + 1 } };
    case BACK_TO_PREV_STEP:
      return { ...state, ...{ currentStep: state.currentStep - 1 } };
    case OPEN_MODAL:
      return { ...state, ...{ modalOpen: true } };
    case CLOSE_MODAL:
      return { ...state, ...{ modalOpen: false } };
    default:
      return state;
  }
}

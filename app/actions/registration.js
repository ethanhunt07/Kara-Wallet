export const PROCEED_TO_NEXT_STEP = 'PROCEED_TO_NEXT_STEP';
export const BACK_TO_PREV_STEP = 'BACK_TO_PREV_STEP';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

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

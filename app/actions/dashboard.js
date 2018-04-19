export const TOGGLE_SEND_MODAL = 'TOGGLE_SEND_MODAL';
export const TOGGLE_RECEIVE_MODAL = 'TOGGLE_RECEIVE_MODAL';
export const DELETE_DASHBOARD_BRANCH = 'DELETE_DASHBOARD_BRANCH';
export const UPDATE_SEND_RECEPIENT_ADDRESS = 'UPDATE_SEND_RECEPIENT_ADDRESS';
export const UPDATE_SEND_TRANSACTION_AMOUNT = 'UPDATE_SEND_TRANSACTION_AMOUNT';
export const TOGGLE_CLIENT_EXEC = 'TOGGLE_CLIENT_EXEC';
export const CLIENT_EXEC_STARTED = 'CLIENT_EXEC_STARTED';
export const CLIENT_EXEC_STOPPED = 'CLIENT_EXEC_STOPPED';

export function toggleSendModal() {
  return {
    type: TOGGLE_SEND_MODAL,
  };
}

export function toggleReceiveModal() {
  return {
    type: TOGGLE_RECEIVE_MODAL,
  };
}

export function deleteDashboardBranch() {
  return {
    type: DELETE_DASHBOARD_BRANCH,
  };
}

export function updateSendReceiveAddress(recepientAddress) {
  return {
    type: UPDATE_SEND_RECEPIENT_ADDRESS,
    payload: recepientAddress,
  };
}

export function updateSendTransactionAmount(transactionAmount) {
  return {
    type: UPDATE_SEND_TRANSACTION_AMOUNT,
    payload: transactionAmount,
  };
}

export function toggleClientExec() {
  return {
    type: TOGGLE_CLIENT_EXEC,
  };
}

export function clientExecStarted() {
  return {
    type: CLIENT_EXEC_STARTED,
  };
}

export function clientExecStopped() {
  return {
    type: CLIENT_EXEC_STOPPED,
  };
}

export const actionCreators = {
  toggleSendModal,
  toggleReceiveModal,
  deleteDashboardBranch,
  updateSendReceiveAddress,
  updateSendTransactionAmount,
  toggleClientExec,
  clientExecStarted,
  clientExecStopped,
};

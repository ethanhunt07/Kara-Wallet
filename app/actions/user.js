export const ACCEPT_PASSPHRASE = 'ACCEPT_PASSPHRASE';
export const NEW_TRANSACTION = 'NEW_TRANSACTION';
export const DELETE_USER_BRANCH = 'DELETE_REGISTRATION_BRANCH';
export const SET_WALLET = 'SET_WALLET';
export const UNSET_WALLET = 'UNSET_WALLET';

export function addTransaction(transaction) {
  return {
    type: NEW_TRANSACTION,
    transaction,
  };
}

export function setWallet(walletStringified) {
  return {
    type: SET_WALLET,
    payload: walletStringified,
  };
}

export function deleteUserBranch() {
  return {
    type: DELETE_USER_BRANCH,
  };
}


export const actionCreators = {
  addTransaction,
  setWallet,
  deleteUserBranch,
};

export const ACCEPT_PASSPHRASE = 'ACCEPT_PASSPHRASE';

export const NEW_TRANSACTION = 'NEW_TRANSACTION';

export function addTransaction(transaction) {
  return {
    type: NEW_TRANSACTION,
    transaction,
  };
}

export const actionCreators = {
  addTransaction,
};
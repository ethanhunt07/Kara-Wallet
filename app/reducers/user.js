// @flow
import { ACCEPT_PASSPHRASE, NEW_TRANSACTION } from '../actions/user';

export type userStateType = {
  +passPhrase: string,
  +loggedIn: boolean,
  +transactions: array
};


export default function user(state: userStateType = { passPhrase: '', loggedIn: false, transactions: [] }, action = {}) {
  switch (action.type) {
    case ACCEPT_PASSPHRASE:
      return { ...state, passPhrase: action.passPhrase };
    case NEW_TRANSACTION:
      return { ...state, ...{ transactions: state.transactions.concat(action.transaction) } };
    default:
      return state;
  }
}

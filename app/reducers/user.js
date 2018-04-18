// @flow
import { NEW_TRANSACTION } from '../actions/user';

export default function user(state = {
  loggedIn: false,
  transactions: [],
  wallet: {}
}, action = {}) {
  switch (action.type) {
    case NEW_TRANSACTION:
      return { ...state, ...{ transactions: state.transactions.concat(action.transaction) } };
    default:
      return state;
  }
}

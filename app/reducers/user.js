// @flow
import { NEW_TRANSACTION, SET_WALLET, DELETE_USER_BRANCH } from '../actions/user';

const initialState = {
  loggedIn: false,
  transactions: [],
  wallet: {
    nonExistant: true,
  },
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case NEW_TRANSACTION:
      return { ...state, ...{ transactions: state.transactions.concat(action.transaction) } };
    case SET_WALLET:
      return { ...state, ...{ wallet: JSON.parse(action.payload) } };
    case DELETE_USER_BRANCH:
      return initialState;
    default:
      return state;
  }
}

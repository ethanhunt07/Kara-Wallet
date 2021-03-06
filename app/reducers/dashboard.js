import { TOGGLE_SEND_MODAL, TOGGLE_RECEIVE_MODAL, DELETE_DASHBOARD_BRANCH, UPDATE_SEND_RECEPIENT_ADDRESS, UPDATE_SEND_TRANSACTION_AMOUNT, TOGGLE_CLIENT_EXEC, CLIENT_EXEC_STARTED, CLIENT_EXEC_STOPPED } from '../actions/dashboard';

const initialState = {
  sendModalOpen: false,
  receiveModalOpen: false,
  sendForm: {
    recepientAddress: '',
    transactionAmount: '',
  },
  clientRunning: false,
};

export default
function dashboardReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_SEND_MODAL:
      return { ...state, ...{ sendModalOpen: !state.sendModalOpen } };
    case TOGGLE_RECEIVE_MODAL:
      return { ...state, ...{ receiveModalOpen: !state.receiveModalOpen } };
    case DELETE_DASHBOARD_BRANCH:
      return initialState;
    case UPDATE_SEND_RECEPIENT_ADDRESS:
      return {
        ...state,
        ...{
          sendForm:
            { recepientAddress: action.payload, transactionAmount: state.transactionAmount }
        }
      };
    case UPDATE_SEND_TRANSACTION_AMOUNT:
      return {
        ...state,
        ...{
          sendForm:
          { recepientAddress: action.payload, transactionAmount: state.transactionAmount }
        }
      };
    case TOGGLE_CLIENT_EXEC:
      return {
        ...state,
        ...{
          clientRunning: !state.clientRunning,
        }
      };
    case CLIENT_EXEC_STARTED:
      return {
        ...state,
        ...{
          clientRunning: true,
        }
      };
    case CLIENT_EXEC_STOPPED:
      return {
        ...state,
        ...{
          clientRunning: false,
        }
      };
    default:
      return state;
  }
}

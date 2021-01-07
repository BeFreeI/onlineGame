import { UPDATE_QUANTITY_USERS, IN_MESSAGE } from '../actionTypes/constant';
import initState from '../initialState';

export default (state = initState, { type, payload }) => {
  const newState = { ...state };
  switch(type) {
    case UPDATE_QUANTITY_USERS:
      newState.quantity = payload;
      break;
    case IN_MESSAGE:
      newState.messagesHistory = [...newState.messagesHistory, payload];
      break;
    default:
      break;
  }
  return newState;
};

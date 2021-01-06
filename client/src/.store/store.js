import { createStore, applyMiddleware } from 'redux';
import { UPDATE_QUANTITY_USERS, IN_MESSAGE } from './actionTypes/constant';
import * as wsMethods from './actionsCreators/wsMessages';
import initState from './initialState';
import { wsMiddleware } from './wsMiddlewares';

export const socket = new WebSocket('ws://192.168.1.107:4000');

const reducer = (state = initState, { type, payload }) => {
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

export const store = createStore(reducer, applyMiddleware(wsMiddleware));

socket.onmessage = ({data}) => {
  store.dispatch(wsMethods.updateQuantity(JSON.parse(data)));
};

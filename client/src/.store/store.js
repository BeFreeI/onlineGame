import { createStore } from 'redux';
import { UPDATE_QUANTITY_USERS } from './actionTypes/constant'
import initState from './initialState';

const socket = new WebSocket('ws://localhost:4000');

const reducer = (state = initState, { type, payload }) => {
  const newState = { ...state };
  switch(type) {
    case UPDATE_QUANTITY_USERS:
      newState.quantity = payload;
      break;
    default:
      break;
  }
  return newState;
};

const store = createStore(reducer);


socket.onmessage = ({data}) => {
  store.dispatch({ type: UPDATE_QUANTITY_USERS, payload: JSON.parse(data).value})
};

export default store;

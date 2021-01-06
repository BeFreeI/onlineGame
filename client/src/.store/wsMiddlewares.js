import { UPDATE_QUANTITY_USERS, SEND_MESSAGE } from './actionTypes/constant';
import { socket } from './store';

export const wsMiddleware = storeAPI => next => action => {
  if(action.type === UPDATE_QUANTITY_USERS) {
  } else if(action.type === SEND_MESSAGE) {
    socket.send(JSON.stringify({
      target: 'send',
      value: action.payload,
    }))
  }

  return next(action);
}

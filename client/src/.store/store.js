import { createStore, applyMiddleware } from 'redux';
import * as wsMethods from './actionsCreators/wsMessages';
import initState from './initialState';
import rootReduser from './reducers/rootReducer';
import { wsMiddleware } from './wsMiddlewares';

export const socket = new WebSocket('ws://192.168.1.107:4000');

export const store = createStore(rootReduser, applyMiddleware(wsMiddleware));

socket.addEventListener('message', (({ data }) => {
  store.dispatch(wsMethods.updateQuantity(JSON.parse(data)));
}));

import { UPDATE_QUANTITY_USERS, IN_MESSAGE } from '../actionTypes/constant';
import initState from '../initialState';

export default (state = initState, { type, payload }) => {
  const reducers = {};

  reducers[UPDATE_QUANTITY_USERS] = (state, payload) => Object.assign({}, state, { quantity: payload });
  reducers[IN_MESSAGE] = (state, payload) => Object.assign({}, state, { messagesHistory: payload });

  const reducer = reducers[type];
  return (reducer)? reducer(state, payload) : state;
};

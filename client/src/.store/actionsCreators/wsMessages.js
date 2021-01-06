import { UPDATE_QUANTITY_USERS, SEND_MESSAGE } from '../actionTypes/constant'

export const updateQuantity = ({ target, value }) => {
  return {
    type: target,
    payload: value,
  };
}

export const sendMessage = (value) => {
  return {
    type: SEND_MESSAGE,
    payload: value,
  }
}

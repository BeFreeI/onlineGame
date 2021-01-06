import {store} from '../store';
import { sendMessage } from '../actionsCreators/wsMessages';

export const SendMessage = (value) => {
  store.dispatch(sendMessage(value));
}

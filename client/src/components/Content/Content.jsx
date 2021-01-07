import Reacr from 'react';
import InputArea from '../Quontity/InputArea';
import Chat from '../Game/Chat'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { SendMessage } from '../../.store/dispatches/msgSender'

export default () => {

  const chat = useSelector(({ messagesHistory }) => messagesHistory);
  const [value, setValue] = useState('');

  const onButtonClick = () => {
    SendMessage(value);
    setValue('');
  }

  return (
    <div>
      <InputArea value={ value } onChange={event => setValue(event.target.value)} />
      <button onClick={ onButtonClick }> Send! </button>
      <Chat history={ chat } />
    </div>
  )
}

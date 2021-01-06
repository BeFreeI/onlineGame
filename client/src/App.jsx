import Quontity from './components/Quontity/Quontity';
import InputArea from './components/Quontity/InputArea';
import Chat from './components/Game/Chat';
import { useSelector } from 'react-redux';
import { useState } from 'react'
import { SendMessage } from './.store/dispatches/msgSender'

function App() {

  const quantity = useSelector(({ quantity }) => quantity);
  const chat = useSelector(({ messagesHistory }) => messagesHistory);

  const [value, setValue] = useState('');

  const onButtonClick = () => {
    SendMessage(value);
    setValue('');
  }

  return (
    <div>
      <h1>APP component</h1>
      <Quontity quantity={ quantity } />
      <InputArea value={ value } onChange={event => setValue(event.target.value)} />
      <button onClick={ onButtonClick }> Send! </button>
      <Chat history={ chat } />
    </div>
  );
}

export default App;

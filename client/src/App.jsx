import { useEffect, useState } from 'react';
import Quontity  from './components/Quontity/Quontity';
import { useSelector } from 'react-redux';



function App() {

  const result = useSelector(({quantity}) => quantity);

  return (
    <div>
      <h1>APP component</h1>
      <Quontity quantity={ result } />
    </div>
  );
}

export default App;

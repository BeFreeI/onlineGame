import React from 'react';
import { useSelector } from 'react-redux';

function Quontity() {

  const quantity = useSelector(({ quantity }) => quantity);

  return <h2>Quontity: { quantity }</h2>;
}

export default Quontity;

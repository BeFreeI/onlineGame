import React from 'react';

function InputArea({ value, onChange }) {
  return <input type="text" value={ value } onChange={ onChange } />
}

export default InputArea;

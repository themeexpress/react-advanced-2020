import React, { useState } from 'react';

const UseStateBasics = () => {
  console.log(useState);
  const [text,setText] = useState('Random Title');
  const changeTitleHandler = () => {
    if(text === 'Random Title'){
      setText('Hello People I am Changed');
    }else{
      setText('Random Title');
    }
  }
  return(
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={changeTitleHandler}>Change Title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;

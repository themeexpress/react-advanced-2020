import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increaseComplex = () => {
    setTimeout(() => {
      //setValue(value + 1) This wil not start from the previous value automatically
      //automatic get the previous value
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000);
  }
  return <>
  <section style={{margin:'4rem 0'}}>
    <h2>Regular Counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>{ setValue(value-1)}}>Decrease</button>
    <button className='btn' onClick={()=>{ setValue(0)}}>Reset</button>
    <button className='btn' onClick={()=>{ setValue(value+1)}}>Increase</button>
  </section>

  <section style={{margin:'4rem 0'}}>
    <h2>Complex Counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={ increaseComplex }>IncreaseComplex</button>
  </section>
  </>;
};

export default UseStateCounter;

import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('Call the useEffect' + value);
    if(value >= 1){
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  //We can use useEffect many times and dependency (Array) will be invoke only. So other useEffect will not affected
  useEffect(() => {
    console.log('Call the useEffect' + value);
    if(value >= 1){
      document.title = `New Messages(${value})`;
    }
  }, []);
  console.log('Render the Component' + value);
  return (
  <>
    <h2>{ value }</h2>
    <button className='btn' onClick={() => setValue(value + 1)}>ClickMe</button>
  </>
  );
};

export default UseEffectBasics;

import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const[text, setText] = useState('');
  // const firstValue = text || 'hello world';
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || 'John Doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
      Toggle Error</button>
      {isError && <h1>Error...</h1>}
      {isError ? (<p> There is an Error</p>):(
        <div>
          <p>There is No Error</p>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;

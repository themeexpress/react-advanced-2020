import React from 'react';
let title = 'Simple Example Title';
const clickHandler = () =>{
  console.log(title);
}
const ErrorExample = () => {
  return <React.Fragment>
    <h1>{title}</h1>
    <button type="button" className="btn" onClick={clickHandler}>ClickMeTochange</button>
  </React.Fragment>
};

export default ErrorExample;

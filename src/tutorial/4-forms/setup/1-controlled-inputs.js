import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [people, setPeople] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email && address){
      const person = {id: new Date().getTime().toString(), firstName, email, address };
      setPeople((people)=>{
        return  [...people, person]
      });
      console.log(people);
      //setFirstName('');
      //setEmail('');
      //setAddress('');
    }
    else{

    }
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input type='text' id='firstName' name='firstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input type='text' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className='form-control'>
            <label htmlFor='address'>Address : </label>
            <input type='text' id='address' name='address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
          </div>
          <button type='submit'>Add Person</button>
        </form> 
        {
          people.map((person) => {
            const{ id, firstName, email, address} = person
            return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{address}</p>
            </div>
            );
          })}       
      </article>    
    </>
  );
};

export default ControlledInputs;

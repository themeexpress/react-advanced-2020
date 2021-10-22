import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) =>{
    const newPeople = people.filter((person)=>person.id !== id)
    setPeople(newPeople)
  } 
  return (
  <>
    {people.map((person) => {
      const { id, name } = person;
      return (
        <div key={id} className="item">
          <h4>{name}</h4>
          <button type="button" onClick={() => removeItem(id)}>Remove me</button>
        </div>
      );
    })}
    <button type="button" className="btn" onClick={()=> setPeople([])}>
      clear all
    </button>
  </>
  )
};

export default UseStateArray;

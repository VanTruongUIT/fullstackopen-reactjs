import React from 'react';

const Person = ({person, handleOnClickDelete}) => {
  console.log(`person: ${person}`);
  return (
    <li className='person'>
      {person.name} {person.number} 
      <button onClick={() => handleOnClickDelete(person.id)}>Delete</button>
    </li>
  )
}

export default Person;
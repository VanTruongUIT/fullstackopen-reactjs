import React from 'react';

const Person = ({person, handleOnClickDelete}) => {
  return (
    <div>
      {person.name} {person.number} 
      <button onClick={() => handleOnClickDelete(person.id)}>Delete</button>
    </div>
  )
}

export default Person;
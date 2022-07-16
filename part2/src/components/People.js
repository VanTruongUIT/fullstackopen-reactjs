import React from 'react';
import Person from './Person';

const People = ({people, handleOnClickDelete}) => {
  console.log(`people length: ${people.length}`);
  return (
    <div>
      {people.map((person, i) => 
        (<Person 
          key={i} 
          person={person}
          handleOnClickDelete={handleOnClickDelete}
        />)
        )
      }

    </div>
  )
}

export default People;
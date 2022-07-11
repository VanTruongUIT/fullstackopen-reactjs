import React from 'react';
import Person from './Person';

const People = (props) => {
  return (
    <div>
      {props.people.map(person => 
        (<Person 
          key={person.name} 
          name={person.name} 
          number={person.number}
        />)
        )
      }

    </div>
  )
}

export default People;
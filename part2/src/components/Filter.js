import React from 'react';
import People from './People';

const Filter = (props) => {
  return (
    <div>
        Filter shown with
        <input 
          value={props.searchName}
          onChange={props.handleOnChangeSearchName}
        />
        <div>
          <People people={props.searchResult}/>
        </div>      
    </div>
  )
}

export default Filter
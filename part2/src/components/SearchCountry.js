import React from 'react';

const SearchCountry = (props) => {
  return (
    <div>
      Find countries 
      <input onChange={props.handleOnChange}/>
    </div>
  )
}

export default SearchCountry;
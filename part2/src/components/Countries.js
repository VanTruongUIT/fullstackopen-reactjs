import React from 'react';
import Country from './Country';

const Countries = (props) => {

  if (props.searchResults.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else {
    return (
      <div>
        {props.searchResults.map(country => {
            return (
              <Country 
                key={country.name} 
                name={country.name}
              />
            )
          })
        }
      </div>
    );
  }

}

export default Countries;
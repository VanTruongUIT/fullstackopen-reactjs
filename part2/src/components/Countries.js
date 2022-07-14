import React from 'react';
import Country from './Country';
import CountryDetail from './CountryDetail';

const Countries = (props) => {

  if (props.searchResults.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (props.searchResults.length > 1) {
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
  } else if (props.searchResults.length === 1) {
    console.log("search result: ");
    return <CountryDetail country={props.searchResults[0]}/>;
  } else {
    return <></>;
  }

}

export default Countries;
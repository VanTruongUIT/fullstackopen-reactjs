import React from 'react'

const CountryDetail = ({country}) => {
  console.log(`language ${country.languages}`);
  console.log(`flag ${country.flags.png}`);
  return (
    <div>
      <h3>{country.name}</h3>
      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>
      <h3>Language</h3>
      <div>
        {
          
          country.languages.map(language => {
            return <li key={language.name}>{language.name}</li>
          })
        }
      </div>
      <br />
      <div>
        <img src={country.flags.png} alt={`${country.name}'s flag`}></img>
      </div>
    </div>
  )
}

export default CountryDetail;
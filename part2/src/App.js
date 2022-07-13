import axios from 'axios';
import { useState, useEffect } from 'react'
import Countries from './components/Countries';
import Filter from './components/Filter';
import People from "./components/People";
import PersonForm from './components/PersonForm';
import SearchCountry from './components/SearchCountry';


function App() {

  const [countries, setCountries] = useState([]);
  const [searchCountries, setSearchCountries] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const countriesUrl = "https://restcountries.com/v2/";

  
  const handleOnChange = (event) => {
    let countryName = event.target.value;
    if (countryName.length > 0) {
      let url = countriesUrl + `name/${countryName}`
      axios
        .get(url)
        .then(response => {
          setSearchResults(response.data);
          console.log(response.data);
        })
        .catch(error => console.log(error.message))
    }
  };

  return (
    <div>
      <SearchCountry handleOnChange={handleOnChange}/>
      <Countries searchResults={searchResults}/>
    </div>
  );
}

export default App;

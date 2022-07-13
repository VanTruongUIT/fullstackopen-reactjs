import axios from 'axios';
import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import People from "./components/People";
import PersonForm from './components/PersonForm';


function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setsearchName] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const personsUrl = "http://localhost:3001/persons";

  useEffect(() => {
    console.log(`call useEffect`);
    axios
      .get(personsUrl)
      .then((response) => {
        console.log(`promise fulfilled`);
        setPersons(response.data);
      })
  }, []);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {name: newName, number: newNumber};

    if (isPersonExists(data) === true) {
      alert(`${data.name} is already added to phonebook`)
    } else {
      setPersons(persons.concat(data));
    }
    setNewName('');
    setNewNumber('');
  };

  const handleOnChangeName = (event) => {
    // get the value of input tag and setNewName() with this value.
    setNewName(event.target.value);
  };
  const handleOnChangeNumber = (event) => {
    // get the value of input tag and setNewName() with this value.
    setNewNumber(event.target.value);
  };

  const isPersonExists = (person) => {

    for (const item of persons) {
      if (item.name === person.name) {
        return true;
      }
    }
    return false;
  };

  const handleOnChangeSearchName = (event) => {
    const query = event.target.value;
    setsearchName(query);
    const queryResult = persons.filter(person => 
      person.name.toUpperCase() === query.toUpperCase());
    setSearchResult(queryResult);
  };

  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter 
        searchName={searchName}
        handleOnChangeSearchName={handleOnChangeSearchName}
        searchResult={searchResult}
      />

      <h2>Add a new one</h2>
      <PersonForm 
        handleSubmit={handleSubmit}
        handleOnChangeName={handleOnChangeName}
        newName={newName}
        handleOnChangeNumber={handleOnChangeNumber}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>
      <div>
        <People people={persons}/>
      </div>

    </div>
  );
}

export default App;

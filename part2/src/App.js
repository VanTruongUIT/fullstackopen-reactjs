import { useState } from 'react'
import People from "./components/People";


function App() {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: "012-465-789"
    }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setsearchName] = useState('');
  const [searchResult, setSearchResult] = useState([]);

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
      <div>
        Filter shown with
        <input 
          value={searchName}
          onChange={handleOnChangeSearchName}
        />
        <div>
          <People people={searchResult}/>
        </div>
      </div>

      <h2>Add a new one</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: 
          <input 
            onChange={handleOnChangeName} 
            value={newName} 
          />
        </div>
        <div>
          Number: 
          <input 
            onChange={handleOnChangeNumber} 
            value={newNumber} 
          />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <People people={persons}/>
      </div>

    </div>
  );
}

export default App;

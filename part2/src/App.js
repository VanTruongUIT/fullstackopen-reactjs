import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import People from "./components/People";
import PersonForm from './components/PersonForm';
import services from "./services/phone.services";


function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setsearchName] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    console.log(`start useEffect`);
    services.getAll().then(initialData => setPersons(initialData));

    console.log(`end of useEffect`);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const filterd_persons = persons.filter(person => person.name === newName);
    const data = filterd_persons[0];
    const updatedPerson = {...data, number: newNumber};

    if (filterd_persons.length !== 0) {
      if (window.confirm(`${data.name} is already added to the phonebook, replace the old number with a new one ?`)) {
        services.updatePhone(updatedPerson.id, updatedPerson)
          .then(returnedPerson => {
            console.log(`${returnedPerson} updated phonenumber successfully`);
            setPersons(persons.map(person => person.id !== data.id ? person : returnedPerson))
          })
      }
    } else {
      services
        .create(data)
        .then(returnedData => {
          setPersons(persons.concat(data))
        });
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


  const handleOnChangeSearchName = (event) => {
    const query = event.target.value;
    setsearchName(query);
    const queryResult = persons.filter(person => 
      person.name.toUpperCase() === query.toUpperCase());
    setSearchResult(queryResult);
  };

  const handleOnClickDelete = (id) => {
    // get the person who will be deleted
    const filteredPerson = persons.filter(person => person.id === id);

    const personName = filteredPerson[0].name;
    const personId = filteredPerson[0].id;

    // handle delete person in backend services
    if (window.confirm(`Delete ${personName}?`)) {
      services.deletePhoneObjById(personId);
      console.log(`${personName} was deleted successfully!`);

      setPersons(persons.filter(person => person.id !== personId));
    }

  }
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
        <People 
          people={persons} 
          handleOnClickDelete={handleOnClickDelete}
        />
      </div>

    </div>
  );
}

export default App;

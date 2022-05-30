import { useState, useEffect } from 'react'
import personService from './services/persons'
import axios from 'axios'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handlePersonSubmit = (event) => {
    console.log(event.target.value)
    event.preventDefault()

    const nameObject = {
      name: newName,
      number: newNumber
    }
    if (personAlreadyExists)  {
      alert(`${newName} is already added to phonebook`)
      return
    }
    personService
      .create(nameObject)
      .then(returnedName => {
        setPersons(persons.concat(returnedName))
        setNewName('')
        setNewNumber('')
      })
  }

  const personAlreadyExists =  persons.some(person => 
    person.name.toLowerCase() === newName.toLowerCase())

  const handlePersonChange = (event) => {
    return (
    setNewName(event.target.value))
  }

  const handleNumberChange = (event) => {
    return (
    setNewNumber(event.target.value))
  }

  const removePerson = (person) => {
    console.log(person)
    const confirmed = window.confirm(`Delete ${person.name} ?`)
      if(confirmed) {
        axios
        .delete(`http://localhost:3001/persons/${person.id}`)
      } 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlePersonSubmit}>
        <div>
          name: <input value= {newName}
          onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input value= {newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div> {persons.map(person =>
         <p className="person" key={person.name}>{person.name} {person.number} 
         <button onClick={() => removePerson(person)}>delete</button>
         </p>)}
        </div>
      </div>
  )

}

export default App
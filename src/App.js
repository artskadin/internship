import { useState } from 'react';
import './App.css';
import dictionary from './dictionary.json'

function App() {
  const [termin, setTermin] = useState('Здесь будет термин')
  const [value, setValue] = useState('')

  const getTermin = (event) => {
    event.preventDefault()

    try {
      const description = dictionary[value]
      console.log(description)

      if (typeof description !== 'undefined') {
        setTermin(description)
      } else {
        setTermin('Такого термина нет')
      }
    } catch(e) {
      console.log(e)
    }

    setValue('')
  }

  const valueHandler = (event) => setValue(event.target.value)

  return (
    <div className="App">
      <h1>Мой словарь</h1>
      <form onSubmit={getTermin}>
        <label id="terminLable">Тремин:</label>
        <input type="text" name="name" value={value} onChange={valueHandler} />
        <input className="getButton" type="submit" value="Получить " />
      </form>
      <h3>{termin}</h3>
    </div>
  );
}

export default App;

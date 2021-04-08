import { useState } from 'react';
import './App.css';
import dictionary from './dictionary.json'

function App() {
  const [termin, setTermin] = useState('Здесь будет отображаться термин')
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
      <h1 id="my-header">Напишите термин</h1>
      <form onSubmit={getTermin}>
        <label id="terminLable">Тремин:</label>
        <input type="text" name="name" value={value} onChange={valueHandler} />
        <br/>
        <br/>
        <input className="getButton" type="submit" value="Получить " />
      </form>
      <h3>Определение</h3>
      <p>{termin}</p>
    </div>
  );
}

export default App;

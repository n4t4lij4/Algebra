import Komponenta1 from './components/Komponenta';
import { Provider } from './context/Kontekst';
import './App.css';
import { useState } from 'react';

function App() {

const [number, setNumber] =  useState(0);

function textChangeHandler(event){
  setNumber (event.target.value);
}

  return (
    <div className="App">
      <Provider value={{text: "Komponenta 4 je najbolja", number: number}}>
        <h1>App komponenta</h1>
        <label>
          Postavi u kontekst:
          <input type="number" value={number} onChange={textChangeHandler}/>
        </label>
        <Komponenta1/>
      </Provider>

    </div>
  );
}

export default App;

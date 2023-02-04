import './App.css';

import DoubleDamageFrom from './components/DoubleDamageFrom';
import { DoubleDamageFromArray } from './interface/interface';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [doubleDamageFrom, setDoubleDamageFrom] = useState<DoubleDamageFromArray>([]);

  return (
    <div className="App">
      <p>CI/CD testing</p>
      <Input setDoubleDamageFrom={setDoubleDamageFrom}/>
      <DoubleDamageFrom doubleDamageTo={doubleDamageFrom}></DoubleDamageFrom>
    </div>
  );
}

export default App;

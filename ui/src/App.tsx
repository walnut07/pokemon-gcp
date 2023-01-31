import './App.css';

import DoubleDamageTo from './components/DoubleDamageTo';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [doubleDamageTo, setDoubleDamageTo] = useState<Array<Object>>([]);

  return (
    <div className="App">
      <Input setDoubleDamageTo={setDoubleDamageTo}/>
      <DoubleDamageTo doubleDamageTo={doubleDamageTo}></DoubleDamageTo>
    </div>
  );
}

export default App;

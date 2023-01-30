import './App.css';

import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [doubleDamageTo, setDoubleDamageTo] = useState<Array<String>>([]);

  return (
    <div className="App">
      <Input setDoubleDamageTo={setDoubleDamageTo}/>
    </div>
  );
}

export default App;

import './App.css';

import CommentForm from './components/CommentForm';
import DoubleDamageFrom from './components/DoubleDamageFrom';
import { DoubleDamageFromArray } from './interface/interface';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [doubleDamageFrom, setDoubleDamageFrom] = useState<DoubleDamageFromArray>([]);
  const [pokeId, setPokemonId] = useState<number | null>(null);

  return (
    <div className="App">
      <Input setDoubleDamageFrom={setDoubleDamageFrom} setPokeId={setPokemonId}/>
      <DoubleDamageFrom doubleDamageTo={doubleDamageFrom}></DoubleDamageFrom>
      <CommentForm pokeId={pokeId} />
    </div>
  );
}

export default App;

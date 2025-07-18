import logo from './logo.svg';
import './App.css';
import Componente from './componentes/Componente';
import { useState, useEffect } from 'react';
import pokebola from './pokebola.png';

function App() {

  const [pokes, setPokes] = useState(null);

  useEffect(() => {
    async function buscarpokes() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100');
      const data = await response.json();
  
      setPokes(data);
    }
  
    buscarpokes();
  })

  if (!pokes) {
    return <p>erro</p>
  }
  else {

    return (
      <div className="App">

        <div className='sem-pokemons'>
          <header>
            <img src={pokebola} alt="pokeball" className='pokeball' />
          </header>

          <nav className='navigation'>
            <h2>pesquisar pokemons</h2>
          </nav>

          <h1 className='tit le'>Pokédex</h1>
        </div>
        <div className='pokemons'>
          {pokes.results.map(pokemon => 
            <Componente url={pokemon.url}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;

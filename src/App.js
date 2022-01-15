import { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon, searchPokemon } from './services/pokemon';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import Pokedex from './components/Pokedex/Pokedex';
import Pagination from './components/Pagination/Pagination';
import Info from './components/Info/Info'

import pikachu from './img/pikachu.png'

function App() {

  // pokemonData es un array de 20 pokemon
  const [pokemonData, setPokemonData] = useState([]);

  // Páginas
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [page, setPage] = useState('');
  const [total, setTotal] = useState('');


  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon?limit=4&offset=0';

  // Pokemon seleccionado
  const [pokemonSelected,setPokemonSelected] = useState(null);

  
  useEffect( () => {
    fetchData();
  }, []);

  async function fetchData(){
    let response = await getAllPokemon(initialUrl);
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    setPage(1);
    setTotal(Math.ceil(response.count / 20))
    await loadingPokemon(response.results);
    setLoading(false);
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map( async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))

    setPokemonData(_pokemonData);
  }

  const next = async () => {
    if(!nextUrl || page == total) return;
    setLoading(true);
    let response = await getAllPokemon(nextUrl);
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    setPage(page+1);
    await loadingPokemon(response.results);
    setLoading(false);
  }

  const prev = async () => {
    if(!prevUrl || page == 1) return;
    setLoading(true);
    let response = await getAllPokemon(prevUrl);
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    setPage(page-1);
    await loadingPokemon(response.results);
    setLoading(false);
  }

  const onSearch = async (pokemon) => {
    if(pokemon){
      const data = await searchPokemon(pokemon);
      if(data){
        setPage(1);
        setTotal(1);
        setPokemonData([data]);
        return;
      }
    }
    return fetchData();
  }

  return (
    <div className='content'>  
      <div className='info-container-border'>
        <div className='info-container'>
            <Info pokemon={pokemonSelected}/>
        </div>
        <img src={pikachu} className='pikachu'/>
      </div>    
      <div className='sidebar'>
          <SearchBox onSearch={onSearch}/>
          <Pagination onLeftClick={prev}  onRightClick={next} page={page} totalPages={total}/>
          <Pokedex pokemonData={pokemonData} loading={loading} pokemonSelected={pokemonSelected} setPokemonSelected={setPokemonSelected}/>
      </div>
    </div>
  );
}

export default App;

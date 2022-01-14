import { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './services/pokemon';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import Pokedex from './components/Pokedex/Pokedex';
import Pagination from './components/Pagination/Pagination';

function App() {

  // pokemonData es un array de 20 pokemon
  const [pokemonData, setPokemonData] = useState([]);

  // Páginas
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [page, setPage] = useState('');
  const [total, setTotal] = useState('');

  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';


  useEffect( () => {
    async function fetchData(){
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      setPage(1);
      setTotal(Math.ceil(response.count / 20))
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map( async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))

    setPokemonData(_pokemonData);
  }

  const next = async () => {
    if(!nextUrl) return;
    setLoading(true);
    let response = await getAllPokemon(nextUrl);
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    setPage(page+1);
    await loadingPokemon(response.results);
    setLoading(false);
  }

  const prev = async () => {
    if(!prevUrl) return;
    setLoading(true);
    let response = await getAllPokemon(prevUrl);
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    setPage(page-1);
    await loadingPokemon(response.results);
    setLoading(false);
  }

  return (
    <div>
        <>          
          <SearchBox/>
          <Pagination 
            onLeftClick={prev}
            onRightClick={next}
            page={page}
            totalPages={total}
          />
          <Pokedex pokemonData={pokemonData} loading={loading}/>
        </>
    </div>
  );
}

export default App;

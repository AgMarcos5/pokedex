import React from "react";
import Avatar from "../Avatar/Avatar";
import { useState } from "react";
import './style.css'

function Pokedex ({pokemonData,loading,pokemonSelected,setPokemonSelected}){
    const [selected, setSelected] = useState(null);

    const changeSelectedPokemon = (pokemon) => {
        console.log(pokemon.name);
        setSelected(pokemon);
    }

    return (
        <>
            {loading ? <h1>Cargando...</h1> : (
                <div className='container'>
                    {pokemonData.map((pokemon,i) =>{
                    return <Avatar key={i} image="pokedex" pokemon={pokemon} selected={pokemonSelected} setSelected={setPokemonSelected}/>
                    })}
                </div>
            )}        

        </>
    )
}

export default Pokedex;
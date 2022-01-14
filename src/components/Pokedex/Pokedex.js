import React from "react";
import Avatar from "../Avatar/Avatar";

function Pokedex ({pokemonData,loading}){
    return (
        <div>
            <h1>Pokedex</h1>

            {loading ? <h1>Cargando...</h1> : (
                <div className='container'>
                    {pokemonData.map((pokemon,i) =>{
                    return <Avatar key={i} pokemon={pokemon}/>
                    })}
                </div>
            )}        

        </div>
    )
}

export default Pokedex;
import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import './style.css'

function Info({pokemon}){


    return (
        <div>
                {
                    !pokemon ? <div>Selecciona un pokemon</div> : (
                        <div>

                            <div>
                                <span>#{pokemon.id}</span>
                                <h1>{pokemon.name}</h1>
                                <span>
                                    {pokemon.types.map(function(d, idx){
                                        return (<span key={idx}>{d.type.name} </span>)
                                    })}
                                </span>
                            </div>
                        
                            <div className="pokemon-photo"><img src={pokemon.sprites.other.home.front_default} /></div>

                            <div>
                                <div>Peso: {pokemon.weight}</div>
                                <div>Altura: {pokemon.height}</div>
                                
                                <div>Stats</div>
                                <ul>
                                {pokemon.stats.map(function(d, idx){
                                    return (<li key={idx}>{d.stat.name} {d.base_stat}</li>)
                                })}
                                </ul>
                            </div>

                        </div>   
                    )
                }
        </div>
    );
}

export default Info;
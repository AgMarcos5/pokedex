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
                                <span>#1</span>
                                <h1>{pokemon.name}</h1>
                                <span>Tipo</span>
                            </div>
                        
                            <div className="pokemon-photo"><img src={pokemon.sprites.other.home.front_default} /></div>

                            <div>
                                <div>Peso</div>
                                <div>Altura</div>
                                
                                <div>Stats</div>
                                <div>
                                
                                </div>
                            </div>

                        </div>   
                    )
                }
        </div>
    );
}

export default Info;
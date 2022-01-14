import React from "react";
import './style.css'

function Avatar({pokemon, image, selected, setSelected}){

    const className = (selected === pokemon) ? "avatar selected" : "avatar";
    
    const src = () => {
        if(image === "pokedex"){
            return pokemon.sprites.front_default;
        } else if(image === "info"){
            return pokemon.sprites.other.home.front_default;
        }
    }

    return (
        <div className={className} onClick={() => setSelected(pokemon)}>
                <img src={src()}  alt="avatar"/>
                <span>{pokemon.name}</span>
        </div>
    )
}

export default Avatar;
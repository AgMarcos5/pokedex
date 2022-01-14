import React from "react";
import './style.css'

function Avatar({pokemon}){
    return (
        <div className="avatar">
                <img src={pokemon.sprites.front_default} alt="avatar"/>
        </div>
    )
}

export default Avatar;
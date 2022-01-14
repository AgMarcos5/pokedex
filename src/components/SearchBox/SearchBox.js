import React from "react";
import './style.css'
import { useState } from "react";
import {searchPokemon} from '../../services/pokemon'

 function SearchBox (){

    const [search, setSearch] = useState("");

    const onChange = (evt) => {
        setSearch(evt.target.value);
    }

    const onClick = async (evt) => {
        const data = await searchPokemon(search);
        console.log(data);
    }

    return (
        <div className="searchBox">
            <div>
                <input 
                    placeholder="Buscar pokemon..."
                    onChange={onChange}
                />
            </div>
            <div>
                <button onClick={onClick}>Buscar</button>
            </div>
        </div>
    );
}

export default SearchBox;
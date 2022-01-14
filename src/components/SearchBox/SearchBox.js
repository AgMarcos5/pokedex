import React from "react";
import './style.css'
import { useState } from "react";
import {searchPokemon} from '../../services/pokemon'

 function SearchBox ({onSearch}){

    const [search, setSearch] = useState("");

    const onChange = (evt) => {
        setSearch(evt.target.value);
        if(evt.target.value.length === 0){
            onSearch(null);
        }
    }

    const onClick = async (evt) => {
        onSearch(search);
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
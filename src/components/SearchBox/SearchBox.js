import React from "react";
import './style.scss'
import { useState } from "react";
import {searchPokemon} from '../../services/pokemon'

import searchImage from './pokeball_search.png'

 function SearchBox ({onSearch}){

    const [search, setSearch] = useState("");

    const onChange = (evt) => {
        setSearch(evt.target.value.replace(/ /g,'').toLowerCase());
        if(evt.target.value.length === 0){
            onSearch(null);
        }
    }

    const onClick = async (evt) => {
        onSearch(search);
    }

    return (
        <div className="searchBox">
                <input 
                    type="search" 
                    placeholder="Buscar pokemon..."
                    onChange={onChange}
                />
                <button className="searchButton" onClick={onClick}>
                <img src={searchImage}/>
                </button>
        </div>
    );
}

export default SearchBox;
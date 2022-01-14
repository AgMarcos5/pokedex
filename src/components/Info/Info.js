import { useState } from "react";
import Avatar from "../Avatar/Avatar";

function Info({pokemon}){


    return (
        <div className="info">
            {
                !pokemon ? <div>Selecciona un pokemon</div> : (
                    <div>
                        <Avatar image="info" pokemon={pokemon}/>
                        <div>{pokemon.name}</div>
                        <div>Tipo</div>
                    </div>   
                )
            }
        </div>
    );
}

export default Info;
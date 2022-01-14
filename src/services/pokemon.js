export async function getAllPokemon(url) {
    return new Promise( (resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
    })
}

export async function getPokemon(url) {
    return new Promise( (resolve,reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data);
        })
    })
}

export async function searchPokemon(pokemon){
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch(err){

    }
}

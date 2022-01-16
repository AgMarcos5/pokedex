import './style_intro.css'


function Intro (){
    return (
        <div className='intro'>
            <h1> <span className='magikarp'></span> Hola! Bienvenido/a a mi  Pokedex</h1>
            <h3>Por favor selecciona un pokémon de la lista para mostrar su información, o bien utiliza la barra de búsqueda para encontrar un pokémon en específico.</h3>

           
            <div className='link-container'>
            <p>Este sitio fue desarrollado por <a href="https://agmarcos5.github.io" target="_blank">Marcos Agüero. (Ver otros trabajos)</a><br/><br/></p>
            <a className="linkBG" href="https://github.com/AgMarcos5/pokedex" target="_blank">Ver proyecto en Github</a></div>
        </div>
    )
}

export default Intro;
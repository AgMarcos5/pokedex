import './style.css'
import typeColors from './typeColors'
import cornerPhoto from './corners_photo.png'

function Info({pokemon}){


    return (
        <div>
                {
                    !pokemon ? <div>Selecciona un pokemon</div> : (
                        <div>

                            <div className='title'>
                                <span>N° {pokemon.id}</span>
                                <span className='title_name'>{pokemon.name}</span>
                                <span>
                                    {pokemon.types.map(function(d, idx){
                                        return (<span key={idx} className="type" style={{backgroundColor: typeColors[d.type.name]}}>{d.type.name} </span>)
                                    })}
                                </span>
                            </div>
                        
                            <div className='info-grid'>
                                <div className="pokemon-photo">
                                    <img className="cornerPhoto top" src={cornerPhoto} />
                                    <img className="photo" src={pokemon.sprites.other.home.front_default} />
                                    <img className="cornerPhoto bottom" src={cornerPhoto} />
                                </div>

                                <div className='stats'>
                                    <div className='subtitle'>Habilidades
                                        
                                    </div>
                                    <div>
                                        {pokemon.abilities.map(function(d, idx){
                                            return (<span key={idx}>{d.ability.name} </span>)
                                        })}
                                    </div>
                                    
                                    <div className='subtitle'>Estadísticas</div>
                                    <ul>
                                    {pokemon.stats.map(function(d, idx){
                                        return (<li key={idx}>{d.stat.name} {d.base_stat}</li>)
                                    })}
                                    </ul>
                                </div>
                            </div>

                        </div>   
                    )
                }
        </div>
    );
}

export default Info;
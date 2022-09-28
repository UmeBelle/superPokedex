import "./card-pokemon.css"
import React from "react"
import POKE_ARRAY from "../../../data";
import Porcentajes from "../AboutsComponent/abouts-component"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Card = () => {
    
        let {nombre} = useParams()
        let navigate =  useNavigate()
        function getPokemon(nombre) {
        return POKE_ARRAY.find((pokemon) => pokemon.nombre === nombre);
        }

    let pokemon = getPokemon(nombre);
    
    

    function moverIzquierda ()  {
        let index = POKE_ARRAY.findIndex((pokemon) => pokemon.nombre === nombre)

        if(index === 0){
            let pokemonAnterior = POKE_ARRAY[POKE_ARRAY.length - 1]
            navigate("/" + pokemonAnterior.nombre)
            return
        }
        
        let pokemonAnterior = POKE_ARRAY[index - 1]
        navigate("/" + pokemonAnterior.nombre)

       
    }

    function moverDerecha () {
        let index = POKE_ARRAY.findIndex((pokemon) => pokemon.nombre === nombre)

        if (index === POKE_ARRAY.length - 1){
            let pokemonSiguiente = POKE_ARRAY[0]
            navigate("/" + pokemonSiguiente.nombre)
            return
        }

        let pokemonSiguiente = POKE_ARRAY[index + 1]
        navigate("/" + pokemonSiguiente.nombre)
        
    }

    return (
        <div className="Contenedor-principal">
            <div className={`Contenedor-card ${pokemon.tipo[0]}`}>
            <div className="Para-el-background">
                <div className="Fondo-pokeball">
                    <img className="Imagen-pokeball" src="./Img/pokeball-blanca.png" alt="pokeball"/>
                </div>
                <div className="botones-derecha-izquierda">
                   <div onClick={moverIzquierda} className="mover-izquierda"> &lt; </div>
                    <div onClick={moverDerecha} className="mover-derecha"> &gt; </div> 
                </div>
                
                <div className="Contenedor-name-id-pk">
                    <div className="Contenedor-nombre-pokemon">
                        <Link to="/"><img className="Boton-atras-flecha" src="./Img/flecha-izquierda-blanca.png" alt="Boton para regresar" /></Link>
                        <h2 className="Nombre-pokemon">{pokemon.nombre}</h2>
                    </div>
                    <div className="ID-pokemon">
                        <p>{pokemon.id}</p>
                    </div>
                </div>
            </div>  
            <img className="Imagen-pokemon" src={pokemon.img} alt={pokemon.nombre} />
            <div className="Contenedor-stats-pk">
                <div className="Tipo-pokemon">
                    <ul className="Tipo-pokemon-lista" style={{color: "white"}}>
                        <span className={`parrafo-tipo ${pokemon.tipo[0]}`}>{pokemon.tipo[0]}</span>
                        {pokemon.tipo[1] ? (<span className={`parrafo-tipo ${pokemon.tipo[1]}`}>{pokemon.tipo[1]}</span>): null}
                    </ul>
                </div>
                <div className="Peso-altura-movimientos">
                    <h2 className={`About ${pokemon.tipo}`} style={{background  : "whitesmoke"}}>About</h2>
                    <div className="atributos-pokemon">
                        <div className="div-weight">
                            <div className="imagenYPeso">
                            <img className="imagen-weight" src="./Img/Weight.png" alt="Peso"/>
                            <p style={{color: "#212121"}}>{pokemon.about.weight}</p>
                            </div>
                            <p className="texto-weight">weight</p>
                        </div>
                        <div className="div-height">
                            <div className="imagenYAltura">
                            <img className="imagen-height" src="./Img/Height.png" alt="Altura"/>
                            <p style={{color: "#212121"}}>{pokemon.about.height}</p>
                            </div>
                            <p className="texto-height">height</p>
                        </div>
                            <div className="div-moves">
                            <p style={{color: "#212121"}} className={`parrafo-moves ${pokemon.about.moves[0]}`}>{pokemon.about.moves[0]}</p>
                            <p style={{color: "#212121"}} className={`parrafo-moves ${pokemon.about.moves[1]}`}>{pokemon.about.moves[1]}</p>
                            <p className="texto-moves">moves</p>
                        </div>
                    </div>
                </div>
                <div className="descripcion-pokemon" style={{color: "#212121"}}>
                    <p>{pokemon.about.details}</p>
                </div>
                <div className="base-stats">
                    <h2 className={`texto-base-stats ${pokemon.tipo}`} style={{background: "whitesmoke"}} >Base Stats</h2>
                </div>
                <Porcentajes pokemon={pokemon}/>
            </div>
            </div>

        
        </div>
    )
}

export default Card;
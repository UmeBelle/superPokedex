import "./card-pokemon.css"
import React from "react"
import POKE_ARRAY from "../../data";
import Porcentajes from "./abouts-component"
import { useParams } from "react-router-dom";



const Card = () => {
    
        function getPokemon(nombre) {
        return POKE_ARRAY.find((pokemon) => pokemon.nombre === nombre);
        }

    let {nombre} = useParams()
    let pokemon = getPokemon(nombre);
    
    console.log(nombre)

    return (
        <div className="Contenedor-principal">
            <div className={`Contenedor-card ${pokemon.tipo[0]}`}>
            <div className="Para-el-background">
                <div className="Fondo-pokeball">
                    <img className="Imagen-pokeball" src="./Img/pokeball-blanca.png" alt="pokeball"/>
                </div>
                <div className="Contenedor-name-id-pk">
                    <div className="Contenedor-nombre-pokemon">
                        <img className="Boton-atras-flecha" src="./Img/flecha-izquierda-blanca.png" alt="Boton para regresar" />
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
                    <h2 className={`About ${pokemon.tipo}`} style={{background: "white"}}>About</h2>
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
                    <h2 className={`texto-base-stats ${pokemon.tipo}`} style={{background: "white"}} >Base Stats</h2>
                </div>
                <Porcentajes pokemon={pokemon}/>
            </div>
            </div>

        
        </div>
    )
}

export default Card;
import "./card-pokemon.css"
import React from "react"
import POKE_ARRAY from "../../../data"
import Porcentajes from "./abouts-component"


const Card = () => {
    const item = POKE_ARRAY
    return (
        <div className="Contenedor-principal">
            <div className={`Contenedor-card ${item[0].tipo[0]}`}>
            <div className="Para-el-background">
                <div className="Fondo-pokeball">
                    <img className="Imagen-pokeball" src="./Img/pokeball-blanca.png" alt="pokeball"/>
                </div>
                <div className="Contenedor-name-id-pk">
                    <div className="Contenedor-nombre-pokemon">
                        <img className="Boton-atras-flecha" src="./Img/flecha-izquierda-blanca.png" alt="Boton para regresar" />
                        <h2 className="Nombre-pokemon">{item[0].nombre}</h2>
                    </div>
                    <div className="ID-pokemon">
                        <p>{item[0].id}</p>
                    </div>
                </div>
            </div>  
            <img className="Imagen-pokemon" src={item[0].img} alt={item[0].nombre} />
            <div className="Contenedor-stats-pk">
                <div className="Tipo-pokemon">
                    <ul className="Tipo-pokemon-lista" style={{color: "white"}}>
                        <span className={`parrafo-tipo ${item[0].tipo[0]}`}>{item[0].tipo[0]}</span>
                        {item[0].tipo[1] ? (<span className={`parrafo-tipo ${item[0].tipo[1]}`}>{item[0].tipo[1]}</span>): null}
                    </ul>
                </div>
                <div className="Peso-altura-movimientos">
                    <h2 className="About">About</h2>
                    <div className="atributos-pokemon">
                        <div className="div-weight">
                            <div className="imagenYPeso">
                            <img className="imagen-weight" src="./Img/Weight.png" alt="Peso"/>
                            <p style={{color: "#212121"}}>{item[0].about.weight}</p>
                            </div>
                            <p className="texto-weight">weight</p>
                        </div>
                        <div className="div-height">
                            <div className="imagenYAltura">
                            <img className="imagen-height" src="./Img/Height.png" alt="Altura"/>
                            <p style={{color: "#212121"}}>{item[0].about.height}</p>
                            </div>
                            <p className="texto-height">height</p>
                        </div>
                            <div className="div-moves">
                            <p style={{color: "#212121"}} className={`parrafo-moves ${item[0].about.moves[0]}`}>{item[0].about.moves[0]}</p>
                            <p style={{color: "#212121"}} className={`parrafo-moves ${item[0].about.moves[1]}`}>{item[0].about.moves[1]}</p>
                            <p className="texto-moves">moves</p>
                        </div>
                    </div>
                </div>
                <div className="descripcion-pokemon" style={{color: "#212121"}}>
                    <p>{item[0].about.details}</p>
                </div>
                <div className="base-stats">
                    <h2 className="texto-base-stats">Base Stats</h2>
                </div>
                <Porcentajes POKE_ARRAY={POKE_ARRAY[0]}/>
            </div>
            </div>

        
        </div>
    )
}

export default Card;
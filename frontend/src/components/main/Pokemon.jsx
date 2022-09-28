import { useState } from "react";
import React from "react";
import "./pokemon.css";
import { Link, Outlet } from "react-router-dom";
import Card from "../Section/CardComponent/card-pokemon";



const Pokedex = ({POKE_ARRAY}) => {

    const [filterList, setFilterList] = useState(POKE_ARRAY);
    const [estadoButton, setEstadoButton] = useState(0);
    const [mostrarIcono, setMostrarIcono] = useState(false)
    
    const handleInputChange = (e) => {
        if (e.target.value === "") {
      setFilterList(POKE_ARRAY);
      setMostrarIcono(false)
      return;
    }
    const filteredList = POKE_ARRAY.filter(
      (item) => item.nombre.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    
    setFilterList(filteredList);
    setMostrarIcono(true)
    };
    

   

    const ordenarPokemon = () => {

        if(estadoButton === 0) {
            let arrayOrdenado = [...POKE_ARRAY].sort((a, b) => a.nombre !== b.nombre ? a.nombre < b.nombre ? -1 : 1 : 0);
            setFilterList(arrayOrdenado)
            setEstadoButton(1)
            console.log(arrayOrdenado)
        }

        else if ( estadoButton === 1){
            let arrayOrdenado = [...POKE_ARRAY].sort((a, b) => a.nombre === b.id ? a.nombre > b.id ? -1 : 1 : 0);
            setFilterList(arrayOrdenado)
            setEstadoButton(0)
            console.log(arrayOrdenado)
        }
        
    }
    return (
        <>

            <header>

                <div className="container-nav">
                    <div className="img-container">
                        <img src="./img/Pokeball.png" alt="pokeball" className="pokeball-nav"/>
                        <h1>Pokedex</h1>
                    </div>
                    <div className="container-Order">
                        {estadoButton ? <div className="aZOrder">
                            <p onClick={ordenarPokemon}><b>A</b></p>
                            <p onClick={ordenarPokemon}><b>Z</b></p>
                        </div> : <p className="hash" onClick={ordenarPokemon}>#</p> }
                        
                            <i class="fa-solid fa-arrow-down" onClick={ordenarPokemon}></i>
                    </div>
                </div>
                <> <i class="fa-solid fa-magnifying-glass"></i></> 
                <div className="Input-search">
                   
                 
                    <input className="input-login" type="text" onChange={handleInputChange} placeholder="Buscar🔍" />
                    
                </div>
            </header>

            <div className="container-pokemon">
                 {filterList.map((item, i) => { return (
                    <>
                     <Link key={item.nombre} className={`card-pokemon ${item.tipo[0]}`} 
                     to={`/${item.nombre}`}
                   
                     >
                        
                        <div className="foto-card-pokemon">
                            <p className="id-pokemon">{item.id}</p>
                            <img src={item.img} alt="" />
                        </div>
                        <p className="nombre-pokemon">{item.nombre}</p>
                    </Link>
                </>
                    );
                })}
            </div>
            <Outlet/>
        </>
    
)}

export default Pokedex
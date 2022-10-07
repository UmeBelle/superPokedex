import { useState } from "react";
import React from "react";
import "./pokemon.css";
import { Link, Outlet } from "react-router-dom";
import Card from "../../Section/CardComponent/card-pokemon";
import { useEffect } from "react";
import pokemons from "../../api/ApiPokemones";
import PopupFormPokemon from "../../Section/FormPokemon/FormPokemon";

const Pokedex = () => {
  const [filterList, setFilterList] = useState([]);
  const [estadoButton, setEstadoButton] = useState(0);
  const [mostrarIcono, setMostrarIcono] = useState(false);
  const [pokemonColor, setPokemonColor] = useState("white");
  const [showPokemons, setShowPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const delay = () => {
    const timeout = setTimeout(() => {
      setLoading(false); //Se corre  luego del tiempo establecido en la siguiente linea (milisegundos)
    }, 500);
    return timeout;
  };

  async function getPokemons() {
    setLoading(true);
    const data = await pokemons.getPokemones();
    console.log(data);
    setShowPokemons(data);
    delay();
  }

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    if (showPokemons) {
      setFilterList(showPokemons);
    }
  }, [showPokemons]);

  const handleInputChange = (e) => {
    setLoading(true);
    if (e.target.value === "") {
      setFilterList(showPokemons);
      setMostrarIcono(false);
    }

    delay();

    const filteredList = showPokemons.filter(
      (item) =>
        item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredList);
    setMostrarIcono(true);
  };

  const ordenarPokemon = () => {
    let arrayOrdenado = [];

    if (estadoButton === 0) {
      arrayOrdenado = [...showPokemons].sort((a, b) =>
        a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      );

      setFilterList(arrayOrdenado);
      setEstadoButton(1);
    } else if (estadoButton === 1) {
      arrayOrdenado = [...showPokemons].sort((a, b) =>
        a.name === b.id ? (a.name > b.id ? -1 : 1) : 0
      );
      setFilterList(arrayOrdenado);
      setEstadoButton(0);
    }
    console.log(arrayOrdenado);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div>
        {isOpen ? (
          <PopupFormPokemon
            closePopup={() => {
              setIsOpen(false);
            }}
          />
        ) : null}
      </div>
      <body id="bodyUI">
        <header>
          <div className="container-nav">
            <div className="img-container">
              <img
                src="./img/Pokeball.png"
                alt="pokeball"
                className="pokeball-nav"
              />
              <h1 className="">Pokedex</h1>
            </div>
            <div className="container-Order">
              {estadoButton ? (
                <div className="aZOrder">
                  <p onClick={ordenarPokemon}>
                    <b>A</b>
                  </p>
                  <p onClick={ordenarPokemon}>
                    <b>Z</b>
                  </p>
                </div>
                
              )
               : (
                <p className="hash" onClick={ordenarPokemon}>
                  #
                </p>
              )}

              <i class="fa-solid fa-arrow-down" onClick={ordenarPokemon}></i>
              
            </div>
            {loading && (
              <>
                <div className="loadermain">
                <div  class="spinner-grow" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                </div>
              </>
            )}
          </div>
          
          
          <div className="Input-search">
          <div className="loadermain">
          {" "}
           

          </div>
            
            <input
              className="input-login"
              type="text"
              onChange={handleInputChange}
              placeholder="Buscar"
            />
            
          </div>
          
          
          <div>
          </div>
        </header>
        

        <div className="container-pokemon">
          <div
            style={{ cursor: `url('./img/cursor-add.png'), pointer` }}
            onClick={openPopup}
          >
            <div className="foto-card-pokemon">
              <p className="id-pokemon">???</p>
              <img
                className="addpokemonimg"
                src="./img/addpokemon.png"
                alt="Add pokemon"
              />
              <p className="nombre-pokemon" style={{ color: "black" }}>
                New Pokemon
              </p>
            </div>
          </div>

          {filterList.map((item) => {
            return (
              <>
                <Link
                  key={item.name}
                  className={`card-pokemon ${item.type1}`}
                  to={`/${item.name}`}
                  id={item.type1}
                >
                  <div className="foto-card-pokemon">
                    <p className="id-pokemon">{item.id}</p>
                    <img className="pokemonimg" src={item.img} alt="" />
                  </div>
                  <p className="nombre-pokemon">{item.name}</p>
                </Link>
              </>
            );
          })}
        </div>
        <Outlet />
      </body>
    </>
  );
};

export default Pokedex;

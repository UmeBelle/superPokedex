import "./card-pokemon.css";
import React from "react";
import item from "../../api/ApiPokemones";
import Porcentajes from "../AboutsComponent/abouts-component";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Card = () => {
  let { name } = useParams();
  let navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState({});
  // async function getPokemon(name) {
  //   const data = await item.getPokemones();
  //   setPokemons(data);
  //   return data.find((pokemon) => pokemon.name === name);
  // }
  useEffect(() => {
    async function fetchApi() {
      const data = await item.getPokemones();
      console.log(data);
      setPokemons(data);
      const pokemon = data.find((pokemon) => pokemon.name === name);
      console.log(name);

      setPokemon(pokemon);
    }
    fetchApi();
  }, []);

  function moverIzquierda() {
    let index = pokemons.findIndex((pokemon) => pokemon.name === name);

    if (index === 0) {
      let pokemonAnterior = pokemons[pokemons.length - 1];
      navigate("/" + pokemonAnterior.name);
      return;
    }

    let pokemonAnterior = pokemons[index - 1];
    navigate("/" + pokemonAnterior.name);
    window.location.reload();
  }

  function moverDerecha() {
    let index = pokemons.findIndex((pokemon) => pokemon.name === name);

    if (index === pokemons.length - 1) {
      let pokemonSiguiente = pokemons[0];
      navigate("/" + pokemonSiguiente.name);
      return;
    }

    let pokemonSiguiente = pokemons[index + 1];
    navigate("/" + pokemonSiguiente.name);
    window.location.reload();
  }

  return (
    <body id="bodycard">
      <div  className="Contenedor-principal">
        <div id={pokemon.type1} className={`Contenedor-card ${pokemon.type1}`}>
          <div className="Para-el-background" >
            <div className="Fondo-pokeball">
              <img
                className="Imagen-pokeball"
                src="./Img/pokeball-blanca.png"
                alt="pokeball"
              />
            </div>
            <div className="botones-derecha-izquierda">
              <div onClick={moverIzquierda} className="mover-izquierda">
                {" "}
                &lt;{" "}
              </div>
              <div onClick={moverDerecha} className="mover-derecha">
                {" "}
                &gt;{" "}
              </div>
            </div>

            <div className="Contenedor-name-id-pk">
              <div className="Contenedor-name-pokemon">
                <Link to="/pokedex">
                  <img
                    className="Boton-atras-flecha"
                    src="./Img/flecha-izquierda-blanca.png"
                    alt="Boton para regresar"
                  />
                </Link>
                <h2 className="name-pokemon">{pokemon.name}</h2>
              </div>
              <div className="ID-pokemon">
                <p>{pokemon.id}</p>
              </div>
            </div>
          </div>
          <img
            className="Imagen-pokemon"
            src={pokemon.img}
            alt={pokemon.name}
          />
          <div className="Contenedor-stats-pk">
            <div className="Tipo-pokemon">
              <ul className="Tipo-pokemon-lista">
                <span className={`parrafo-type1-${pokemon.type1} ${pokemon.type1}`}>
                  {pokemon.type1}
                </span>
                {pokemon.type2 ? (
                  <span className={`parrafo-type2-${pokemon.type2} ${pokemon.type2}`}>
                    {pokemon.type2}
                  </span>
                ) : null}
              </ul>
            </div>
            <div className="Peso-altura-movimientos">
              <h2
                className={`About ${pokemon.type1}`}
                style={{ background: "whitesmoke" }}
              >
                About
              </h2>
              <div className="atributos-pokemon">
                <div className="div-weight">
                  <div className="imagenYPeso">
                    <img
                      className="imagen-weight"
                      src="./Img/Weight.png"
                      alt="Peso"
                    />
                    <p style={{ color: "#212121" }}>{pokemon.weight}</p>
                  </div>
                  <p className="texto-weight">weight</p>
                </div>
                <div className="div-height">
                  <div className="imagenYAltura">
                    <img
                      className="imagen-height"
                      src="./Img/Height.png"
                      alt="Altura"
                    />
                    <p style={{ color: "#212121" }}>{pokemon.height}</p>
                  </div>
                  <p className="texto-height">height</p>
                </div>
                <div className="div-moves">
                  <p
                    style={{ color: "#212121" }}
                    className={`parrafo-moves ${pokemon.move1}`}
                  >
                    {pokemon.move1}
                  </p>
                  <p
                    style={{ color: "#212121" }}
                    className={`parrafo-moves ${pokemon.move2}`}
                  >
                    {pokemon.move2}
                  </p>
                  <p className="texto-moves">moves</p>
                </div>
              </div>
            </div>
            <div className="descripcion-pokemon" style={{ color: "#212121" }}>
              <p>{pokemon.details}</p>
            </div>
            <div className="base-stats">
              <h2
                className={`texto-base-stats ${pokemon.type1}`}
                style={{ background: "whitesmoke" }}
              >
                Base Stats
              </h2>
            </div>
            <Porcentajes pokemon={pokemon} />
          </div>
        </div>
      </div>
    </body>
  );
};

export default Card;

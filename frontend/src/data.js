import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const POKE_ARRAY = [

]



export default POKE_ARRAY

export function getPokemon(nombre) {
  return POKE_ARRAY.find((pokemon) => pokemon.nombre === nombre);
}

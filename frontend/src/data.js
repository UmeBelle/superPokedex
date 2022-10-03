import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const POKE_ARRAY = [
  {
    id: "#001",
    nombre: "Bulbasaur",
    img: "./Img/bulbasaur.png",
    tipo: ["Grass", "Poison"],
    about: {
      weight: "6,9 Kg",
      height: "0,7 m",
      moves: ["Chlorophyll", "Overgrow"],
      details: "There is a plant seed on its back right from the day this Pókemon is born. The seed slowly grows larger"
    },
    stats: {
      hp: "045",
      atk: "049",
      def: "049",
      satk: "065",
      sdef: "065",
      spd: "045"
    }
  }
]



export default POKE_ARRAY

export function getPokemon(nombre) {
  return POKE_ARRAY.find((pokemon) => pokemon.nombre === nombre);
}

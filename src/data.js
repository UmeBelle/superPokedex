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
      tipo:  ["Grass","Poison"],
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
    },
    
    {
      id: "#004",
      nombre: "Charmander",
      img: "./Img/charmander.png",
      tipo:  ["Fire"],
      about: {
        weight: "8,5 Kg",
        height: "0,6 m",
        moves: ["Mega-Punch", "Fire-Punch"],
        details: "It has a preference for hot things. When it rains, stream is said to spout from the tip of its tail"
      },
      stats: {
        hp: "039",
        atk: "052",
        def: "043",
        satk: "060",
        sdef: "050",
        spd: "065"
      }
    },
    
    {
      id: "#007",
      nombre: "Squirtle",
      img: "./Img/squirtle.png",
      tipo:  ["Water"],
      about: {
        weight: "9,0 Kg",
        height: "0,5 m",
        moves: ["Rain-Dish"],
        details: "When it retrcats its long neck into its shell, it squirts out water with vigorous force"
      },
      stats: {
        hp: "044",
        atk: "048",
        def: "065",
        satk: "050",
        sdef: "064",
        spd: "043"
      }
    },

    {
      id: "#012",
      nombre: "Butterfree",
      img: "./Img/butterfree.png",
      tipo:  ["Bug","Flying"],
      about: {
        weight: "32,0 Kg",
        height: "1,1 m",
        moves: ["Compound-Eyes", "Tinted-Lens"],
        details: "In battle, it flaps its wings at great speed to release highly toxic dust into the air"
      },
      stats: {
        hp: "060",
        atk: "045",
        def: "050",
        stak: "090",
        sdef: "080",
        spd: "070"
      }
    },

    {
      id: "#025",
      nombre: "Pikachu",
      img: "./Img/pikachu.png",
      tipo:  ["Electric"],
      about: {
        weight: "6,0 Kg",
        height: "0.4 m",
        moves: ["Mega-Punch", "Pay-Day"],
        details: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy"
      },
      stats: {
        hp: "035",
        atk: "055",
        def: "040",
        satk: "050",
        sdef: "050",
        spd: "090"
      }
    },

    {
      id: "#092",
      nombre: "Gastly",
      img: "./Img/gastly.png",
      tipo:  ["Ghost","Type"],
      about: {
        weight: "0,1 Kg",
        height: "1,3 m",
        moves: ["Levitate"],
        details: "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison"
      },
      stats: {
        hp: "030",
        atk: "035",
        def: "030",
        satk: "100",
        sdef: "035",
        spd: "080"
      }
    },

    {
      id: "#132",
      nombre: "Ditto",
      img: "./Img/ditto.png",
      tipo:  ["Normal"],
      about: {
        weight: "4,0 Kg",
        height: "0.3 m",
        moves: ["Limber", "Imposter"],
        details: "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes"
      },
      stats: {
        hp: "048",
        atk: "048",
        def: "048",
        satk: "048",
        sdef: "048",
        spd: "048"
      }
    },

    {
      id: "#152",
      nombre: "Mew",
      img: "./Img/mew.png",
      tipo:  ["Psychic"],
      about: {
        weight: "4,0 Kg",
        height: "0.4 m",
        moves: ["Synchronize"],
        details: "When viewed through a microscope, this Pokémons short, fine, delicate hair can be seen"
      },
      stats: {
        hp:   "100",
        atk:  "100",
        def:  "100",
        satk: "100",
        sdef: "100",
        spd:  "100"
      }
    },

    {
      id: "#304",
      nombre: "Aron",
      img: "./Img/aron.png",
      tipo:  ["Steel","Rock"],
      about: {
        weight: "60,0 Kg",
        height: "0.4 m",
        moves: ["Sturdy", "Rock-Head"],
        details: "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body"
      },
      stats: {
        hp: "050",
        atk: "070",
        def: "100",
        satk: "040",
        sdef: "040",
        spd: "030"
      }
    }
    
  ]

  

  export default POKE_ARRAY

  export function getPokemon(nombre) {
    return POKE_ARRAY.find((pokemon) => pokemon.nombre === nombre);
  }
  
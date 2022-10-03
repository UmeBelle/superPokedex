import RegisterComponent from "./components/Section/RegisterComponent/RegisterComponent"
import LoginComponent from "./components/Section/LoginComponent/LoginComponent"
import Pokedex from "./components/main/PokedexUI/Pokemon";
import Card from "./components/Section/CardComponent/card-pokemon";
import "./App.css";
import POKE_ARRAY from "./data";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import auth from "./components/api/ApiAuth";
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import pokemons from "./components/api/ApiPokemones";



function App() {
  
  const [showPokemons, setShowPokemons] = useState([]);

  async function getPokemons() {

    const data = await pokemons.getPokemones();
    console.log(data)
    setShowPokemons(data);
  }
  

  useEffect(() => {
    getPokemons();
  },[])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterComponent />}></Route>
        <Route path="/pokedex" element={<Pokedex POKE_ARRAY={showPokemons} />}></Route>
        <Route path=":nombre" element={<Card />}></Route>
        <Route path="/login" element={<LoginComponent />}></Route>
        <Route path="*" element={<Navigate to='/register' replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;


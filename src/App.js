import Pokedex from "./components/main/Pokemon";
import Card from "./components/Section/card-pokemon";
import "./App.css";
import POKE_ARRAY from "./data";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {



  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Pokedex POKE_ARRAY={POKE_ARRAY}/>}></Route>
      <Route path=":nombre" element={<Card/>}></Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;


import LoginComponent from "./components/Section/LoginComponent/LoginComponent"
import Pokedex from "./components/main/PokedexUI/Pokemon";
import Card from "./components/Section/CardComponent/card-pokemon";
import "./App.css";
import POKE_ARRAY from "./data";
import React from "react";
import ReactDOM from "react-dom/client";
import auth from "./components/api/ApiAuth";
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokedex" element={<Pokedex POKE_ARRAY={POKE_ARRAY} />}></Route>
        <Route path=":nombre" element={<Card />}></Route>
        <Route path="/login" element={<LoginComponent />}></Route>
        <Route path="*" element={<Navigate to='/login' replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;


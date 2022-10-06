import RegisterComponent from "./components/Section/RegisterComponent/RegisterComponent";
import LoginComponent from "./components/Section/LoginComponent/LoginComponent";
import Pokedex from "./components/main/PokedexUI/Pokemon";
import Card from "./components/Section/CardComponent/card-pokemon";
import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterComponent />}></Route>
        <Route path="/pokedex" element={<Pokedex />}></Route>
        <Route path=":name" element={<Card />}></Route>
        <Route path="/login" element={<LoginComponent />}></Route>
        <Route path="*" element={<Navigate to="/register" replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

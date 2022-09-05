import logo from "./logo.svg";
import "./App.css";

function App() {
  const pokemons = [
    "Pikachua",
    "Bulbasaur",
    "Mew",
    "Aron",
    "Abra",
    "Snorlax",
    "Psyduck",
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Searcher pokemons={pokemons} />
      </header>
    </div>
  );
}

export default App;

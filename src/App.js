import React from "react";
import "./App.css";

import pokemon_logo from "./pokemon-logo.png";

import Pokedex from "./components/Pokedex/pokedex.component";

function App() {
  return (
    <div className="App">
      <img className="pokemon-logo" src={pokemon_logo} alt="Pokemon logo" />
      <Pokedex />
    </div>
  );
}

export default App;

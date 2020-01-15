import React from "react";
import "./App.css";

import pokemon_logo from "./pokemon-logo.png";
import Pokegame from "./components/Pokegame/pokegame.component";

function App() {
  return (
    <div className="App">
      <img className="pokemon-logo" src={pokemon_logo} alt="Pokemon logo" />

      <Pokegame />
    </div>
  );
}

export default App;

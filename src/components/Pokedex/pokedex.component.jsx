import React from "react";
import pokeData from "./dev-data";

import Pokecard from "../Pokecard/pokecard.components";
import "./pokedex.styles.scss";

class Pokedex extends React.Component {
  render() {
    const pokeCards = pokeData.map(el => <Pokecard character={el} />);
    return <div className="Pokedex">{pokeCards}</div>;
  }
}

export default Pokedex;

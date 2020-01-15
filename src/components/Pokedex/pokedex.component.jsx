import React from "react";
import Pokecard from "../Pokecard/pokecard.components";
import "./pokedex.styles.scss";

class Pokedex extends React.Component {
  render() {
    const pokeCards = this.props.pokeCards.map(el => (
      <Pokecard character={el} key={el.id} />
    ));
    return <div className="Pokedex">{pokeCards}</div>;
  }
}

export default Pokedex;

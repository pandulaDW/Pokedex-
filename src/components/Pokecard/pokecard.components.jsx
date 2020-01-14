import React from "react";

import "./pokecard.styles.scss";

const paddElement = (el, padding) => {
  const len = el.toString().length;
  return len !== 0 ? "0".repeat(padding - len) + el : el;
};

class Pokecard extends React.Component {
  render() {
    const { id, name, type, base_experience } = { ...this.props.character };
    return (
      <div className="Pokecard">
        <div className="Pokecard-img-content">
          <img
            src={`http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddElement(
              id,
              3
            )}.png`}
            alt={name}
          />
        </div>
        <div className="Pokecard-text-content">
          <h2>{name}</h2>
          <p>Type: {type}</p>
          <p>EXP: {base_experience}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;

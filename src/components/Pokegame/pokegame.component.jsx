import React from "react";
import pokeData from "./dev-data";

import Pokedex from "../Pokedex/pokedex.component";
import "./pokegame.styles.scss";

const shuffle_array = array => {
  let m = array.length;

  while (m) {
    let i = Math.floor(Math.random() * m--);
    let t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

class Pokegame extends React.Component {
  render() {
    const shuffledArray = shuffle_array(pokeData);

    const sum1 = shuffledArray
      .slice(0, 4)
      .map(el => el.base_experience)
      .reduce((el1, el2) => el1 + el2);

    const sum2 = shuffledArray
      .slice(4)
      .map(el => el.base_experience)
      .reduce((el1, el2) => el1 + el2);

    const max = Math.max(sum1, sum2);
    const min = Math.min(sum1, sum2);

    return (
      <div className="Pokegame">
        <div className="Pokegame-loser">
          <h2>Loser with : {min}xp</h2>
          {min === sum1 ? (
            <Pokedex pokeCards={shuffledArray.slice(0, 4)} />
          ) : (
            <Pokedex pokeCards={shuffledArray.slice(4)} />
          )}
        </div>
        <div className="Pokegame-winner">
          <h2>Winner with : {max}xp</h2>
          {max === sum1 ? (
            <Pokedex pokeCards={shuffledArray.slice(0, 4)} />
          ) : (
            <Pokedex pokeCards={shuffledArray.slice(4)} />
          )}
        </div>
      </div>
    );
  }
}

export default Pokegame;

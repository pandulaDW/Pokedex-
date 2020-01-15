import React from "react";
import pokeData from "./dev-data";

import Pokedex from "../Pokedex/pokedex.component";
import "./pokegame.styles.scss";
import shuffle_array from "../../utilities";

class Pokegame extends React.Component {
  render() {
    const shuffledArray = shuffle_array(pokeData);
    const arr1 = shuffledArray.slice(0, 4);
    const arr2 = shuffledArray.slice(4);

    const sum1 = arr1.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );

    const sum2 = arr2.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );

    const max = Math.max(sum1, sum2);
    const min = Math.min(sum1, sum2);

    return (
      <div className="Pokegame">
        <div className="Pokegame-loser">
          <h2>Loser with : {min}xp</h2>
          {min === sum1 ? (
            <Pokedex pokeCards={arr1} />
          ) : (
            <Pokedex pokeCards={arr2} />
          )}
        </div>
        <div className="Pokegame-winner">
          <h2>Winner with : {max}xp</h2>
          {max === sum1 ? (
            <Pokedex pokeCards={arr1} />
          ) : (
            <Pokedex pokeCards={arr2} />
          )}
        </div>
      </div>
    );
  }
}

export default Pokegame;

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

    const winnerString1 = sum1 > sum2 ? "Winner" : "Loser";
    const winnerString2 = sum1 < sum2 ? "Winner" : "Loser";

    return (
      <div className="Pokegame">
        <div className="hand1">
          <h2 className={`Pokegame-title-${winnerString1}`}>
            {winnerString1} with {sum1}xp
          </h2>
          <Pokedex pokeCards={arr1} />
        </div>
        <div className="hand2">
          <h2 className={`Pokegame-title-${winnerString2}`}>
            {winnerString2} with {sum2}xp
          </h2>
          <Pokedex pokeCards={arr2} />
        </div>
      </div>
    );
  }
}

export default Pokegame;

import React, { useState } from "react";
import CharSheet from "./styles";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

export default function App() {
  const [hero, setHeroData] = useState({
    str: 8,
    int: 8,
    dex: 8,
    wis: 8,
    cons: 8,
    char: 8
  });
  const [totalPoints, setTotalPoints] = useState(27);

  function handleIncreaseAttribute() {
    hero.str = hero.str + 1;
    setHeroData(hero);
    setTotalPoints(totalPoints - 1);
  }

  function handleDecreaseAttribute() {
    hero.str = hero.str - 1;
    setHeroData(hero);
    setTotalPoints(totalPoints + 1);
  }

  return (
    <CharSheet>
      totalPoints ({totalPoints})
      <br />
      str({hero.str}) int({hero.int}) dex({hero.dex}) wis({hero.wis}) cons(
      {hero.cons}) char({hero.char})
      <button type="button" onClick={() => handleIncreaseAttribute(1)}>
        <MdAddCircle size={16} />
      </button>
      <button type="button" onClick={() => handleDecreaseAttribute(1)}>
        <MdRemoveCircle size={16} />
      </button>
    </CharSheet>
  );
}

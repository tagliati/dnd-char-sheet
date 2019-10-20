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

  function handleAttribute(attribute, value) {
    hero[attribute] = hero[attribute] + value;
    setHeroData(hero);
    setTotalPoints(totalPoints - value);
  }

  return (
    <CharSheet>
      totalPoints ({totalPoints})
      <br />
      str({hero.str})
      <button type="button" onClick={() => handleAttribute("str", 1)}>
        <MdAddCircle size={16} />
      </button>
      <button type="button" onClick={() => handleAttribute("str", -1)}>
        <MdRemoveCircle size={16} />
      </button>
      int({hero.int}) dex(
      {hero.dex}) wis({hero.wis}) cons(
      {hero.cons}) char({hero.char})
    </CharSheet>
  );
}

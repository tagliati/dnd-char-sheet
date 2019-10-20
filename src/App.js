import React, { useState } from "react";
import CharSheet from "./styles";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { Provider } from "react-redux";

import store from "./store";

export default function App() {
  const [hero, setHeroData] = useState(8);
  const [totalPoints, setTotalPoints] = useState(27);

  function handleIncreaseAttribute() {
    setHeroData(hero + 1);
    setTotalPoints(totalPoints - 1);
  }

  function handleDecreaseAttribute() {
    setHeroData(hero - 1);
    setTotalPoints(totalPoints + 1);
  }

  return (
    <Provider store={store}>
      <CharSheet>
        totalPoints ({totalPoints})
        <br />
        str({hero})|int|dex|wis|cons|char
        <button type="button" onClick={() => handleIncreaseAttribute(1)}>
          <MdAddCircle size={16} />
        </button>
        <button type="button" onClick={() => handleDecreaseAttribute(1)}>
          <MdRemoveCircle size={16} />
        </button>
      </CharSheet>
    </Provider>
  );
}

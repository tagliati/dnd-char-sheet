import React, { useState, useEfect } from "react";
import CharSheet from "./styles";
import { connect } from "react-redux";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  const [hero, setHeroData] = useState([]);

  return (
    <Provider store={store}>
      <CharSheet>
        str|int|dex|wis|cons|char
        <button type="button" onClick={() => this.handleIncreaseAttribute(1)}>
          <MdAddCircle size={16} />
        </button>
        <button type="button" onClick={() => this.handleDecreaseAttribute(1)}>
          <MdRemoveCircle size={16} />
        </button>
      </CharSheet>
    </Provider>
  );
}

export default connect()(App);

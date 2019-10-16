import React from "react";
import charSheet from "./styles";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <charSheet>
        str|int|dex|wis|cons|char
        <button>
          <MdAddCircle size={16} />
        </button>
        <button>
          <MdRemoveCircle size={16} />
        </button>
      </charSheet>
    </Provider>
  );
}

export default App;

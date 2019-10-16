import React from "react";
import charSheet from "./styles";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

function App() {
  return (
    <charSheet>
      str|int|dex|wis|cons|char
      <button>
        <MdAddCircle size={16} />
      </button>
      <button>
        <MdRemoveCircle size={16} />
      </button>
    </charSheet>
  );
}

export default App;

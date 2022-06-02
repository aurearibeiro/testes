import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export const replaceCameWithSpaces = () => {};

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="button-checkbox">Disable button</label>
    </div>
  );
}

export default App;

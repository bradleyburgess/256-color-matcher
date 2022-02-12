import Color from "color";
import * as elems from "./domElements";
import { shiftFocusToInput } from "./shiftFocusToInput";

const otherMode = { hex: "rgb", rgb: "hex" };
const getModeArea = (mode) => elems[mode + "InputArea"];
const getOtherModeArea = (mode) => elems[otherMode[mode] + "InputArea"];

export function changeMode(mode) {
  // toggle hiding the modes
  getOtherModeArea(mode).classList.add("hidden");
  getModeArea(mode).classList.remove("hidden");

  // make sure the mode is checked; mostly for initialization
  const shouldBeChecked = document.querySelector(
    `input[type='radio'][data-mode='${mode}']`
  );
  if (shouldBeChecked.checked === false) shouldBeChecked.checked = true;

  // update mode in swatch text
  const { inputSwatchColor, matchSwatchColor } = elems;
  const inputColor = Color(inputSwatchColor.innerText);
  const matchColor = Color(matchSwatchColor.innerText);
  const inputSwatchColorText =
    mode === "hex" ? inputColor.hex().toLowerCase() : inputColor.string();
  const matchSwatchColorText =
    mode === "hex" ? matchColor.hex().toLowerCase() : matchColor.string();
  inputSwatchColor.innerText = inputSwatchColorText;
  matchSwatchColor.innerText = matchSwatchColorText;

  // shift the focus to the input
  shiftFocusToInput(mode);

  // save state in local storage
  window.localStorage.setItem("lastMode", mode);
  window.localStorage.setItem("lastColor", inputSwatchColorText);
}

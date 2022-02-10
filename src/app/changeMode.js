import Color from "color";
import * as elems from "./domElements";
import { shiftFocusToInput } from "./shiftFocusToInput";

export function changeMode(mode) {
  elems.hexInputArea.style.display = mode === "hex" ? "flex" : "none";
  elems.rgbInputArea.style.display = mode === "rgb" ? "flex" : "none";

  // make sure the mode is checked; mostly for initialization
  const shouldBeChecked = document.querySelector(
    `input[type='radio'][data-mode='${mode}']`
  );
  if (shouldBeChecked.checked === false) shouldBeChecked.checked = true;

  shiftFocusToInput(mode);

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

  // save state in local storage

  window.localStorage.setItem("lastMode", mode);
  window.localStorage.setItem("lastColor", inputSwatchColorText);
}

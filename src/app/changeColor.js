import Color from "color";
import * as elems from "./domElements";
import { isValidHex } from "../lib/isValidHex";
import { isValidRgb } from "../lib/isValidRgb";
import { padNumber } from "../lib/padNumber";
import {
  getMatchColor,
  getMatchColorCode,
  getContrastingTextColor,
} from "../lib/getMatchColor";

export function changeColor(inputColor) {
  if (!isValidHex(inputColor) && !isValidRgb(inputColor)) return false;
  const matchColor = getMatchColor(inputColor);
  const matchColorCode = getMatchColorCode(matchColor);
  const inputSwatchTextColor = getContrastingTextColor(inputColor);
  const matchSwatchTextColor = getContrastingTextColor(matchColor);

  elems.inputSwatch.style.backgroundColor = inputColor;
  elems.inputSwatch.style.color = inputSwatchTextColor;
  elems.inputSwatchColor.innerText = inputColor;
  elems.matchSwatch.style.backgroundColor = matchColor;
  elems.matchSwatch.style.color = matchSwatchTextColor;
  elems.matchSwatchColor.innerText = matchColor;
  elems.matchSwatchColorCode.innerText = padNumber(matchColorCode, 3);

  updateColorInputs(inputColor);

  window.localStorage.setItem("lastColor", inputColor);
}

function updateColorInputs(_color) {
  const mode = isValidHex(_color) ? "hex" : "rgb";
  const { hexInput, rInput, gInput, bInput } = elems;
  const color = Color(_color);
  const rValue = color.red(),
    gValue = color.green(),
    bValue = color.blue(),
    hexValue = color.hex().toLowerCase();

  if (mode === "hex") {
    // Only update hex color if it's different; check for short hex as well
    const hexInputColorValue = Color(hexInput.value).hex().toLowerCase();
    if (hexInputColorValue !== hexValue) hexInput.value = hexValue;
    rInput.value = rValue;
    gInput.value = gValue;
    bInput.value = bValue;
  }

  if (mode === "rgb") {
    if (
      rInput.value !== rValue ||
      gInput.value !== gValue ||
      bInput.value !== bValue
    ) {
      rInput.value = rValue;
      gInput.value = gValue;
      bInput.value = bValue;
    }
    hexInput.value = hexValue;
  }
}

import * as elems from "./domElements";

export function shiftFocusToInput(mode) {
  mode === "hex" && elems.hexInput.focus();
  mode === "rgb" && elems.rInput.focus();
}

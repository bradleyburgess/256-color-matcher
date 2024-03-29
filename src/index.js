import * as elems from "./app/domElements";
import { changeColor } from "./app/changeColor";
import { changeMode } from "./app/changeMode";
import { isValidHex } from "./lib/isValidHex";
import { loadInitialState } from "./app/loadInitialState";
import { sanitizeHex } from "./lib/sanitizeHex";
import { sanitizeRgb } from "./lib/sanitizeRgb";
import { shiftFocusToInput } from "./app/shiftFocusToInput";
import { handleResize } from "./app/handlers";

(() => {
  // load saved state, if any
  const { mode, color } = loadInitialState();
  const initialDimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // set dimensions; for debounced resizing handler
  elems.html.style.height = initialDimensions.height + "px";
  elems.body.style.height = initialDimensions.height + "px";
  window.addEventListener("resize", (e) => handleResize(e));

  // make initial swatch color paint be more gradual
  elems.swatches.forEach((swatch) =>
    swatch.addEventListener(
      "transitionend",
      () => {
        swatch.style.transitionDuration = "100ms";
        swatch.style.transitionDelay = "0s";
      },
      { once: true }
    )
  );

  // set initial color and mode, from saved state if any
  changeMode(mode);
  changeColor(color);
  shiftFocusToInput(mode);

  // enabled inputs; disabled in initial HTML for loading
  elems.disabledInputs.forEach((input) => (input.disabled = false));

  // prevent submitting of forms
  elems.forms.forEach((form) =>
    form.addEventListener("submit", (e) => e.preventDefault())
  );

  // add listener for hex input
  elems.hexInput.addEventListener("input", (e) => {
    const { value } = e.target;
    const sanitizedValue = sanitizeHex(value);
    e.target.value = sanitizedValue;
    if (isValidHex(sanitizedValue)) {
      changeColor(sanitizedValue);
    }
  });

  // add listener for rgb inputs
  [elems.rInput, elems.gInput, elems.bInput].forEach((input) =>
    input.addEventListener("input", (e) => {
      const { value } = e.target;
      const sanitizedValue = sanitizeRgb(value);
      e.target.value = sanitizedValue;
      const { rInput, gInput, bInput } = elems;
      const colorString = `rgb(${rInput.value}, ${gInput.value}, ${bInput.value})`;
      changeColor(colorString);
    })
  );

  // add liseners for mode change
  elems.radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const { mode } = e.target.dataset;
      changeMode(mode);
    });
  });
})();

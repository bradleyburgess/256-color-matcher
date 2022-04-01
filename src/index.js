import * as elems from "./app/domElements";
// import { changeColor } from "./app/changeColor";
// import { changeMode } from "./app/changeMode";
import { isValidHex } from "./lib/isValidHex";
import { loadInitialState } from "./app/loadInitialState";
import { sanitizeHex } from "./lib/sanitizeHex";
import { sanitizeRgb } from "./lib/sanitizeRgb";
import { shiftFocusToInput } from "./app/shiftFocusToInput";
import { handleResize } from "./app/handlers";

(() => {
  let changeMode, changeColor;

  // load saved state, if any
  const { mode, color } = loadInitialState();
  const initialDimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  window.addEventListener(
    "load",
    () => {
      elems.html.style.height = initialDimensions.height + "px";
      elems.body.style.height = initialDimensions.height + "px";
    },
    { once: true }
  );
  window.addEventListener("resize", (e) => handleResize(e));

  if (!(mode === "hex" && color === "#ffffff")) {
    (async () => {
      const modeModule = await import("./app/changeMode");
      const colorModule = await import("./app/changeColor");
      changeMode = modeModule.changeMode;
      changeColor = colorModule.changeColor;
      // modeModule.changeMode(mode);
      // colorModule.changeColor(color);
      changeMode(mode);
      changeColor(color);
    })();
  }

  // shift focus to input
  shiftFocusToInput(mode);

  // make initial swatch color paint be more gradual
  elems.swatches.forEach((swatch) =>
    swatch.addEventListener(
      "transitionend",
      () => {
        swatch.style.transitionDuration = "100ms";
        swatch.style.transitionDealy = "0s";
      },
      { once: true }
    )
  );

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

  window.onload = async () => {
    const colorModule = await import("./app/changeColor");
    const modeModule = await import("./app/changeMode");
    changeColor = colorModule.changeColor;
    changeMode = modeModule.changeMode;
    elems.disabledInputs.forEach((input) => (input.disabled = false));
  };
})();

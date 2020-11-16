/*  TODO
 *  x check if hex or rgb
 *  x create index of how far off each value is (r, g, b)
 *  x sort the list by this index
 *  x return first 3 in sorted list
 *
 */

const data = require("./data");

/*  @params
 *  inputType: string: "hex" / "rgb"
 *  inputValue: object:
 *    { R: number, G: number, B: number } ||
 *    hex: string
 *
 *  @return
 *  array: [
 *     { colorId, hexString, rgb, diff, rDiff, gDiff, bDiff }
 *  ]
 */

function convertTo8bit(inputType, inputValue) {
  if (validateInput(inputType, inputValue) === false) return undefined;

  let inputR, inputG, inputB;
  if (inputType === "rgb") {
    const { R, G, B } = inputValue;
    [inputR, inputG, inputB] = [R, G, B];
  } else if (inputType === "hex") {
    const { R, G, B } = hexToRgb(inputValue);
    [inputR, inputG, inputB] = [R, G, B];
  }
  const index = [];

  data.forEach((color) => {
    const { colorId, rgb, name, hexString } = color;
    const rDiff = Math.abs(color.rgb.R - inputR);
    const gDiff = Math.abs(color.rgb.G - inputG);
    const bDiff = Math.abs(color.rgb.B - inputB);
    const diff = Math.pow(rDiff, 3) + Math.pow(gDiff, 3) + Math.pow(bDiff, 3);
    index.push({ colorId, name, hexString, rgb, diff, rDiff, gDiff, bDiff });
  });

  const sortedIndex = [...index].sort((a, b) => a.diff - b.diff);
  return sortedIndex.slice(0, 3);
}

function validateInput(type, value) {
  switch (type) {
    case "rgb": {
      const { R, G, B } = value;
      // check for object
      if (!(value instanceof Object)) return false;
      // check for rgb keys
      if (!["R", "G", "B"].every((key) => Object.keys(value).includes(key)))
        return false;
      // check for numbers
      if (
        typeof R !== "number" ||
        typeof G !== "number" ||
        typeof B !== "number"
      )
        return false;
      // range
      if (R < 0 || R > 255) return false;
      if (G < 0 || G > 255) return false;
      if (B < 0 || B > 255) return false;

      // return true if all passes
      return true;
    }
    case "hex": {
      return hexToRgb(value) === null ? false : true;
    }
    default: {
      return false;
    }
  }
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        R: parseInt(result[1], 16),
        G: parseInt(result[2], 16),
        B: parseInt(result[3], 16),
      }
    : null;
}

function rgbToHex({ R, G, B }) {
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  return "#" + componentToHex(R) + componentToHex(G) + componentToHex(B);
}

module.exports = {
  convertTo8bit,
  validateInput,
  hexToRgb,
  rgbToHex,
};

/*  TODO
 *  x check if hex or rgb
 *  - parse rgb string into r, g, b
 *  x create index of how far off each value is (r, g, b)
 *  x sort the list by this index
 *  x return first 3 in sorted list
 *
 */

const data = require("./data");

/*  @params
 *  inputType: string: "hex" / "rgb"
 *  inputValue: object:
 *    { r: number, g: number, b: number } ||
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
    const { colorId, rgb, hexString } = color;
    const rDiff = Math.abs(color.rgb.R - inputR);
    const gDiff = Math.abs(color.rgb.G - inputG);
    const bDiff = Math.abs(color.rgb.B - inputB);
    const diff = Math.pow(rDiff, 3) + Math.pow(gDiff, 3) + Math.pow(bDiff, 3);
    index.push({ colorId, hexString, rgb, diff, rDiff, gDiff, bDiff });
  });

  const sortedIndex = [...index].sort((a, b) => a.diff - b.diff);
  return sortedIndex.slice(0, 3);
}

function validateInput(type, value) {
  switch (type) {
    case "rgb": {
      const { r, g, b } = value;
      // check for object
      if (!(value instanceof Object)) return false;
      // check for rgb keys
      if (!["r", "g", "b"].every((key) => Object.keys(value).includes(key)))
        return false;
      // check for numbers
      if (
        typeof r !== "number" ||
        typeof g !== "number" ||
        typeof b !== "number"
      )
        return false;
      // range
      if (r < 0 || r > 255) return false;
      if (g < 0 || g > 255) return false;
      if (b < 0 || b > 255) return false;

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
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        R: parseInt(result[1], 16),
        G: parseInt(result[2], 16),
        B: parseInt(result[3], 16),
      }
    : null;
}

module.exports = {
  convertTo8bit,
  validateInput,
  hexToRgb,
};

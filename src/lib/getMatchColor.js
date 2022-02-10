import Color from "color";
import diff from "color-diff";
import paletteFile from "../palette.json";
import { isValidHex } from "./isValidHex";
import { isValidRgb } from "./isValidRgb";

const palette = paletteFile.palette;

// @params:
//   input: color string (hex or rgb)
//
// @return:
//   result in same mode

export function getMatchColor(input) {
  if (!isValidHex(input) && !isValidRgb(input))
    throw new TypeError("Input is not a valid color string");
  const mode = isValidHex(input) ? "hex" : "rgb";
  const color = Color(input);
  const _closestColor = diff.closest(
    color.rgb().object(),
    palette.map((color) => color.rgb)
  );
  const closestColor = Color(_closestColor);
  return mode === "hex"
    ? closestColor.hex().toLowerCase()
    : closestColor.rgb().string();
}

// @params:
//   input: color string (hex or rgb)
// @return:
//   color code (number)

export function getMatchColorCode(input) {
  if (!isValidHex(input) && !isValidRgb(input))
    throw new TypeError("Input is not a valid color string");
  const color = Color(input);
  return (
    palette.find(
      (elem) => elem.hexString.toLowerCase() === color.hex().toLowerCase()
    )?.colorId || null
  );
}

export function getContrastingTextColor(input) {
  // get palette from CSS variables
  const colorVariables = ["--gray1", "--gray9", "--gray5"];
  const palette = !process.env.NODE_ENV
    ? colorVariables.map((v) => {
        const colorString = getComputedStyle(
          document.documentElement
        ).getPropertyValue(v);
        const color = Color(colorString.trim());
        return {
          r: color.red(),
          g: color.green(),
          b: color.blue(),
        };
      })
    : [
        { r: 33, g: 37, b: 41 },
        { r: 248, g: 249, b: 250 },
      ];
  // calculate ideal text color based on input and palette
  const color = Color(input);
  const idealColorObj = diff.furthest(
    { r: color.red(), g: color.green(), b: color.blue() },
    palette
  );
  return Color(idealColorObj).hex();
}

import { isValidHex } from "./isValidHex";
import { isValidRgb } from "./isValidRgb";
import {
  getMatchColor,
  getMatchColorCode,
  getContrastingTextColor,
} from "./getMatchColor";

describe("getMatchColor", () => {
  it("returns the correct type", () => {
    let result = getMatchColor("rgb(0,0,0)");
    expect(isValidRgb(result)).toBe(true);
    result = getMatchColor("#ffffff");
    expect(isValidHex(result)).toBe(true);
  });
  it("returns an error for wrong input", () => {
    const fail = () => getMatchColor({ r: 0, g: 0, b: 0 });
    expect(fail).toThrowError(TypeError, "Invalid is not a valid color string");
  });
  it("returns white for white", () => {
    const result = getMatchColor("#ffffff");
    expect(result).toBe("#ffffff");
  });
  it("returns DodgerBlue", () => {
    const result = getMatchColor("rgb(0,96,216)");
    expect(result).toBe("rgb(0, 95, 215)");
  });
});

describe("getMatchColorCode", () => {
  it("returns a number", () => {
    const result = getMatchColorCode("#ffffff");
    expect(typeof result).toBe("number");
  });
  it("returns '26' for DogerBlue", () => {
    const result = getMatchColorCode("#005fd7");
    expect(result).toBe(26);
  });
  it("returns undefined for non-existent colot", () => {
    const result = getMatchColorCode("#005fd8");
    expect(result).toBe(null);
  });
});

describe("getContrastingTextColor", () => {
  it("returns a color", () => {
    const result = getContrastingTextColor("#ffffff");
    expect(result).not.toBeFalsy();
    expect(isValidHex(result)).toBe(true);
  });
  it("returns the correct color", () => {
    const result = getContrastingTextColor("#ffffff");
    expect(result).toBe("#212529");
  });
});

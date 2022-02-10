import { isValidRgb } from "./isValidRgb";

describe("isValidRgb", () => {
  it("returns false for invalid", () => {
    expect(isValidRgb("asflkajsdf")).toBe(false);
  });

  it("returns true with no spaces", () => {
    expect(isValidRgb("rgb(0,255,255)")).toBe(true);
  });

  it("returns true with spaces", () => {
    expect(isValidRgb("rgb(0, 255, 255)")).toBe(true);
  });

  it("returns false if number is out of range", () => {
    expect(isValidRgb("rgb(-1, 0, 0)")).toBe(false);
    expect(isValidRgb("rgb(0, 256, 255)")).toBe(false);
  });
});

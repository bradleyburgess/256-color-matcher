import { isValidHex } from "./isValidHex";

describe("isValidHex", () => {
  it("returns true with 3 digits", () => {
    expect(isValidHex("#fff")).toBe(true);
  });

  it("returns true with 6 digits", () => {
    expect(isValidHex("#ffffff")).toBe(true);
  });

  it("returns false with other digits", () => {
    expect(isValidHex("#f")).toBe(false);
    expect(isValidHex("#ff")).toBe(false);
    expect(isValidHex("#ffff")).toBe(false);
  });

  it("returns false with invalid characters", () => {
    expect(isValidHex("#fg1234")).toBe(false);
  });
});

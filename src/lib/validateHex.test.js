import { expect, it } from "@jest/globals";
import { validateHex } from "./validateHex";

describe("validateHex", () => {
  it("returns a boolean", () => {
    expect(typeof validateHex("#ffffff")).toBe("boolean");
  });

  it("works with 6 chars", () => {
    expect(validateHex("#ffffff")).toBe(true);
  });

  it("works with 3 chars", () => {
    expect(validateHex("#fff")).toBe(true);
  });

  it("fails with invalid chars", () => {
    expect(validateHex("#gggggg")).toBe(false);
  });
});

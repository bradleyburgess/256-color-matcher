import { expect, it } from "@jest/globals";
import { sanitizeHex } from "./sanitizeHex";

describe("sanitizeHex", () => {
  it("returns a string starting with #", () => {
    const result = sanitizeHex("ffffff");
    expect(typeof result).toBe("string");
    expect(result[0]).toBe("#");
    expect;
  });

  it("only contains [0-9a-Z]", () => {
    const result = sanitizeHex("gggggg");
    expect(result).not.toContain("g");
    expect(result).toBe("#");
  });

  it("returns max 6 characters (plus #)", () => {
    const result = sanitizeHex("ffffff333333");
    expect(result.replace(/#/, "").length).toBe(6);
  });
});

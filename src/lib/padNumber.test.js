import { expect, it } from "@jest/globals";
import { padNumber } from "./padNumber";

describe("padNumber", () => {
  it("returns a string", () => {
    expect(typeof padNumber(3)).toBe("string");
  });

  it("returns the input when not a number", () => {
    expect(padNumber("abcd")).toBe("abcd");
  });

  it("returns the correct number of digits", () => {
    [2, 3, 4, 5].forEach((n) => {
      expect(padNumber(0, n).length).toBe(n);
      expect(padNumber(n, n)).toBe("0".repeat(n - 1) + n);
    });
  });

  it("returns a correct manual case", () => {
    expect(padNumber(3, 3)).toBe("003");
  });
});

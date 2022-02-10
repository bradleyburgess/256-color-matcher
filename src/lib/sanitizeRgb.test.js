import { sanitizeRgb } from "./sanitizeRgb";

describe("sanitizeRgb", () => {
  it("returns only numbers", () => {
    const result = sanitizeRgb("232fff");
    expect(typeof result).toBe("number");
  });

  it("returns a number in range", () => {
    let result = sanitizeRgb(323);
    expect(result).toBe(32);
    result = sanitizeRgb(-1);
    expect(result).toBe(1);
  });
});

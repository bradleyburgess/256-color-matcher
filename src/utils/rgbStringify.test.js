import rgbStringify from "./rgbStringify";

describe("rgbStringify", () => {
  it("gives back a CSS-valid rgb string", () => {
    const result = rgbStringify({ R: 0, G: 0, B: 0 });
    expect(result).toBe("rgb(0,0,0)");
  });
});

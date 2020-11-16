const { validateInput, convertTo8bit, rgbToHex } = require("./converter");

describe("converter validator", () => {
  it("must be a valid type", () => {
    const result = validateInput("wrong type");
    expect(result).toBe(false);
  });

  it("must have an object for rgb input value", () => {
    const resultText = validateInput("rgb", "wrongInput");
    expect(resultText).toBe(false);
  });

  // keys
  it("must have rgb keys", () => {
    const resultWrongKeys = validateInput("rgb", { a: 0, b: 0, c: 0 });
    expect(resultWrongKeys).toBe(false);
  });

  // numbers
  it("must have numbers as rgb keys", () => {
    const result = validateInput("rgb", { r: "text", g: "text", b: "text" });
    expect(result).toBe(false);
  });

  // range
  it("must have rgb numbers in range", () => {
    const resultTooLarge = validateInput("rgb", { r: 270, g: 270, b: 270 });
    const resultTooSmall = validateInput("rgb", { r: -1, g: -1, b: -1 });
    expect(resultTooLarge).toBe(false);
    expect(resultTooSmall).toBe(false);
  });

  it("accepts valid rgb input", () => {
    const result = validateInput("rgb", { R: 15, G: 15, B: 15 });
    expect(result).toBe(true);
  });

  it("must have valid hex input", () => {
    const result = validateInput("hex", "wrongInput");
    expect(result).toBe(false);
  });
});

describe("converter", () => {
  it("returns an array", () => {
    const result = convertTo8bit("rgb", { R: 0, G: 0, B: 0 });
    expect(result instanceof Array).toBe(true);
  });

  it("returns an rgb result including a colorId and diff value", () => {
    const { colorId, diff } = convertTo8bit("rgb", { R: 0, G: 0, B: 0 })[0];
    expect(typeof colorId).toBe("number");
    expect(typeof diff).toBe("number");
  });

  it("returns different rgb results", () => {
    const results = convertTo8bit("rgb", { R: 0, G: 0, B: 0 });
    const differentResults = results.every((result, idx) => {
      const _results = results.map((_result, _idx) => idx !== _idx);
      return _results.every((_result) => _result.colorId !== result.colorId);
    });
    expect(differentResults).toBe(true);
  });

  it("returns different hex results", () => {
    const results = convertTo8bit("hex", "#346528");
    const differentResults = results.every((result, idx) => {
      const _results = results.map((_result, _idx) => idx !== _idx);
      return _results.every((_result) => _result.colorId !== result.colorId);
    });
    expect(differentResults).toBe(true);
  });

  it("returns a hex result including a colorId and diff value", () => {
    const { colorId, diff } = convertTo8bit("hex", "#000000")[0];
    expect(typeof colorId).toBe("number");
    expect(typeof diff).toBe("number");
  });
});

describe("rgbToHex", () => {
  it("converts 0, 0, 0 to #000000", () => {
    const result = rgbToHex({ R: 0, G: 0, B: 0 });
    expect(result).toBe("#000000");
  });

  it("converts 255, 0, 0 to #ff000000", () => {
    const result = rgbToHex({ R: 255, G: 0, B: 0 });
    expect(result).toBe("#ff0000");
  });
});

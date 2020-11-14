import idealTextColor from "./idealTextColor";

describe("idealTextColor", () => {
  it("returns a hex color", () => {
    const color = idealTextColor({ R: 0, B: 0, G: 0 });
    expect(color[0]).toBe("#");
    expect(color.length).toBe(7);
  });

  it("returns a color even with invalid input", () => {
    const color = idealTextColor("wrongType");
    expect(color.length).toBe(7);
    expect(color[0]).toBe("#");
  });

  it("returns black for a light color", () => {
    const color = idealTextColor({ R: 255, G: 255, B: 255 });
    expect(color).toBe("#000000");
  });

  it("returns white for a dark color", () => {
    const color = idealTextColor({ R: 0, G: 0, B: 0 });
    expect(color).toBe("#ffffff");
  });
});

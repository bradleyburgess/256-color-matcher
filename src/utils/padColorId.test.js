import padColorId from "./padColorId";

describe("padColorId", () => {
  it("pads single-digit values", () => {
    const result = padColorId(9);
    expect(result).toBe("009");
  });

  it("pads double-digit values", () => {
    const result = padColorId(19);
    expect(result).toBe("019");
  });

  it("leaves alone three-digit values", () => {
    const result = padColorId(119);
    expect(result).toBe("119");
  });
});

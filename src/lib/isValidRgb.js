export function isValidRgb(input) {
  //   const input = _input.replaceAll(" ", "");
  //   const input = _input;
  const re = /^rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)$/;
  const matchesRegex = re.test(input);
  if (!matchesRegex) return false;
  const rgbArray = input.replaceAll(/[^\d,]/g, "").split(",");
  return rgbArray.every((num) => num >= 0 && num <= 255);
}

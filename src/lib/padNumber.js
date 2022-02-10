export function padNumber(input, digits) {
  if (typeof Number(input) !== "number" || String(input.length) > digits)
    return input;
  return String(input).length < digits
    ? padNumber("0" + input, digits)
    : String(input);
}

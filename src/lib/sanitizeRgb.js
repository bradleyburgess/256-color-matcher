export function sanitizeRgb(_input) {
  const input = parseInt(String(_input).replaceAll(/[^\d]/g, ""));
  const inputString = String(input);
  return input <= 255
    ? input
    : parseInt(inputString.slice(0, inputString.length - 1));
}

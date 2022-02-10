export function isValidHex(input) {
  const re = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
  return re.test(input);
}

const re = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

export function validateHex(input) {
  return re.test(input);
}

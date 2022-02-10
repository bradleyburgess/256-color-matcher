export function sanitizeHex(input) {
  return (
    "#" +
    input
      .trim()
      .replace(/[^0-9a-fA-F]/gi, "")
      .toLowerCase()
      .slice(0, 6)
  );
}

export default function padColorId(colorId) {
  return colorId.toString().length === 1
    ? `00${colorId}`
    : colorId.toString().length === 2
    ? `0${colorId}`
    : colorId.toString();
}

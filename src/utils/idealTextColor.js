// from https://stackoverflow.com/questions/4726344/how-do-i-change-text-color-determined-by-the-background-color/4726403#4726403

/*  @params
 *  bgColor:
 *    {
 *      R: number: 0-255,
 *      G: number: 0-255,
 *      B: number: 0-255,
 *    }
 *
 *  @return
 *  hex color: string
 */

export default function idealTextColor(bgColor) {
  const nThreshold = 105;
  const bgDelta =
    bgColor.R * 0.299 + bgColor.G * 0.587 + bgColor.B * 0.114;

  return 255 - bgDelta < nThreshold ? "#000000" : "#ffffff";
}

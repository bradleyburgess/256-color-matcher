export function loadInitialState() {
  const mode = window.localStorage.getItem("lastMode") || "hex";
  const color = window.localStorage.getItem("lastColor") || "#ffffff";
  return {
    mode,
    color,
  };
}

import * as elems from "./domElements";
import { debounce } from "../lib/debounce";

function _handleResize(e) {
  const { innerHeight } = e.target;
  console.log("resize");
  elems.html.style.height = innerHeight + "px";
  elems.body.style.height = innerHeight + "px";
}

export const handleResize = debounce(_handleResize, 100);

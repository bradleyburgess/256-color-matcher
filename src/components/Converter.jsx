/*  @TODO:
 *  trim leading zero from RGB input
 *  make rgb > 255 return the previous value before the keystroke
 */

import React, { useState } from "react";
import { hexToRgb, rgbToHex, convertTo8bit } from "../utils/converter.js";
import InputArea from "./InputArea.jsx";
import ResultArea from "./ResultArea";

const Converter = () => {
  // initialization
  const initialMode = (() => {
    try {
      const { mode } = JSON.parse(localStorage.getItem("mode"));
      return mode;
    } catch (error) {
      return "hex";
    }
  })();
  const initialColor = (() => {
    try {
      const lastColor = localStorage.getItem("lastColor");
      return JSON.parse(lastColor) || { R: 255, G: 255, B: 255 };
    } catch (error) {
      console.log(error);
      return { R: 255, G: 255, B: 255 };
    }
  })();
  const initialMatchColor = convertTo8bit("rgb", initialColor)[0];
  // ---

  const [mode, setMode] = useState(initialMode);
  const [inputColor, setInputColor] = useState(initialColor);
  const [hexInput, setHexInput] = useState(rgbToHex(initialColor));
  const [rgbInput, setRgbInput] = useState(initialColor);
  const [matchColor, setMatchColor] = useState({
    rgb: initialMatchColor.rgb,
    colorId: initialMatchColor.colorId,
    name: initialMatchColor.name,
  });

  const handleNewMatchColor = (mode, newColor) => {
    newColor = mode === "hex" ? hexToRgb(newColor) : newColor;
    setInputColor(newColor);
    const { rgb, colorId, name } = convertTo8bit("rgb", newColor)[0];
    setMatchColor({ rgb, colorId, name });
    try {
      const lastColor = JSON.stringify(newColor);
      localStorage.setItem("lastColor", lastColor);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModeChange = (mode) => {
    setMode(mode);
    const serializedState = JSON.stringify({ mode });
    try {
      localStorage.setItem("mode", serializedState);
    } catch (error) {
      console.log(error);
    }
  };

  const handleHexChange = (e) => {
    const { value } = e.target;
    let newValue;
    // if (value.length < 7 && value[0] !== "#") newValue = "#" + value;
    if (value[0] !== "#") {
      if (value.length < 7) newValue = "#" + value;
      else newValue = "#" + value.slice(0, 6);
    } else newValue = value;

    setHexInput(newValue);
    if (hexToRgb(newValue)) {
      const rgbValue = hexToRgb(newValue);
      setRgbInput(rgbValue);
      handleNewMatchColor("hex", newValue);
    }
  };

  const handleRgbChange = (e) => {
    const { value, id } = e.target;
    let newValue;
    let _value = parseInt(value);
    // validate input
    if (typeof _value !== "number") newValue = 0;
    else if (_value < 0) newValue = 0;
    else if (_value > 255) newValue = 255;
    else newValue = _value;
    // ---
    const newRgbState = { ...rgbInput, [id]: parseInt(newValue) || 0 };
    setRgbInput(newRgbState);
    setHexInput(rgbToHex(newRgbState));
    handleNewMatchColor("rgb", newRgbState);
  };

  return (
    <div>
      <InputArea
        mode={mode}
        setMode={handleModeChange}
        hexInput={hexInput}
        rgbInput={rgbInput}
        onHexChange={handleHexChange}
        onRgbChange={handleRgbChange}
      />
      <ResultArea mode={mode} inputColor={inputColor} matchColor={matchColor} />
    </div>
  );
};

export default Converter;

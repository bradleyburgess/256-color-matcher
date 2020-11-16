import React from "react";
import clsx from "clsx";
import idealTextColor from "../utils/idealTextColor.js";
import { hexToRgb, rgbToHex } from "../utils/converter.js";
import rgbStringify from "../utils/rgbStringify.js";
import padColorId from "../utils/padColorId.js";

const styles = {
  container: "mt-5",
  text: "text-center",
  bigColorId: "text-4xl text-center my-5",
  swatchArea: "flex flex-row flex-wrap justify-center mt-2",
  swatch: [
    "duration-200",
    "flex",
    "flex-col",
    "font-mono",
    "h-40",
    "items-center",
    "justify-center",
    "mb-3",
    "mx-2",
    "rounded-md",
    "shadow",
    "text-sm",
    "transition-colors",
    "w-40",
  ],
};

const ResultArea = ({ mode, inputColor, matchColor }) => {
  const inputColorText =
    mode === "hex" ? rgbToHex(inputColor) : rgbStringify(inputColor);
  const matchColorText =
    mode === "hex" ? rgbToHex(matchColor.rgb) : rgbStringify(matchColor);

  debugger;
  return (
    <div className={clsx(styles.container)}>
      <p className={clsx(styles.text)}>
        The closest match to <br />
        <code>{inputColorText}</code> is:
      </p>
      <p className={clsx(styles.bigColorId)}>
        <code>{padColorId(matchColor.colorId)}</code>
      </p>
      <div className={clsx(styles.swatchArea)}>
        <Swatch
          mode={mode}
          inputColorText={inputColorText}
          inputColor={inputColor}
        />
        <Swatch
          mode={mode}
          inputColorText={matchColorText}
          inputColor={matchColor.rgb}
          colorId={matchColor.colorId}
          colorName={matchColor.name}
        />
      </div>
    </div>
  );
};

const Swatch = ({ mode, inputColorText, colorName, inputColor, colorId }) => {
  const textColor = idealTextColor(inputColor);
  return (
    <div
      className={clsx(styles.swatch)}
      style={{ backgroundColor: rgbStringify(inputColor), color: textColor }}
    >
      {!colorId && <span className="font-bold">Input Color</span>}
      {colorId && (
        <span className="font-bold">Match: {padColorId(colorId)}</span>
      )}
      {mode === "hex" ? (
        <span>{inputColorText}</span>
      ) : (
        <span>{rgbStringify(inputColor)}</span>
      )}
    </div>
  );
};

export default ResultArea;

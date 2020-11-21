import React from "react";
import clsx from "clsx";
import idealTextColor from "../utils/idealTextColor.js";
import { rgbToHex } from "../utils/converter.js";
import rgbStringify from "../utils/rgbStringify.js";
import padColorId from "../utils/padColorId.js";

const styles = {
  container: "mt-5",
  text: "text-center",
  bigColorId:
    "border-b-8 border-gray-300 py-2 text-4xl text-center w-full flex-shrink-0 flex-grow",
  swatchArea: "flex flex-row flex-wrap justify-center sm:mt-6",
  swatchContainer: [
    "flex",
    "flex-wrap",
    "flex-row",
    "justify-center",
    "rounded-xl",
    "border",
    "shadow",
    "box-border",
    "border-gray-300",
    "overflow-hidden",
  ],
  swatch: [
    "box-border",
    "duration-200",
    "flex",
    "flex-shrink-0",
    "flex-col",
    "font-mono",
    "h-40",
    "items-center",
    "justify-center",
    "text-sm",
    "transition-colors",
    "w-1/2",
  ],
};

const ResultArea = ({ mode, inputColor, matchColor }) => {
  const inputColorText =
    mode === "hex" ? rgbToHex(inputColor) : rgbStringify(inputColor);
  const matchColorText =
    mode === "hex" ? rgbToHex(matchColor.rgb) : rgbStringify(matchColor);

  return (
    <div className={clsx(styles.container)}>
      <p className={clsx(styles.text)}>
        The closest match to <br />
        <code>{inputColorText}</code> is:
      </p>
      <div className={clsx(styles.swatchArea)}>
        <div
          className={clsx(styles.swatchContainer)}
          style={{ width: "300px" }}
        >
          <p className={clsx(styles.bigColorId)}>
            <code>{padColorId(matchColor.colorId)}</code>
          </p>
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
    </div>
  );
};

const Swatch = ({ mode, inputColorText, inputColor, colorId }) => {
  const textColor = idealTextColor(inputColor);
  return (
    <div
      className={clsx(styles.swatch)}
      style={{ backgroundColor: rgbStringify(inputColor), color: textColor }}
    >
      {!colorId && <span className="font-bold">Input:</span>}
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

import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { convertTo8bit, hexToRgb } from "../../utils/converter.js";
import padColorId from "../../utils/padColorId.js";
import idealTextColor from "../../utils/idealTextColor.js";
import InputType from "./InputType";

const styles = {
  container: ["flex", "flex-row", "justify-center", "w-auto", "sm:mt-3"],
  input: ["bg-gray-100", "border-2", "border-blue-200", "rounded-sm"],
  hex: ["w-24", "py-1", "text-center"],
  rgb: ["w-16", "py-1", "pl-3", "ml-2"],
  rgbLabel: ["mr-4", "last:mr-px"],
  result: ["text-center", "sm:h-24", "my-4", "px-4"],
  swatch: [
    "w-32",
    "h-32",
    "border",
    "rounded shadow",
    "flex",
    "items-center",
    "justify-center",
    "text-center",
  ],
};

const Converter = () => {
  const [selectedInputType, setSelectedInputType] = useState("hex");
  const [hexInput, setHexInput] = useState("#000000");
  const [rgbInput, setRgbInput] = useState({ R: 0, G: 0, B: 0 });
  const [closest256, setClosest256] = useState();

  const rgbStringify = ({ R, G, B }) => `rgb(${R},${G},${B})`;

  const handleTypeChange = (e) => {
    setSelectedInputType(e.target.value);
  };

  const handleHexChange = (e) => {
    if (e.target.value[0] !== "#") setHexInput("#" + e.target.value);
    else setHexInput(e.target.value);
    const output = convertTo8bit("hex", e.target.value);
    if (output !== undefined) {
      setClosest256(output[0]);
    } else setClosest256(null);
  };

  const handleRgbChange = (e) => {
    setRgbInput((c) => {
      return { ...c, [e.target.id]: e.target.value };
    });
  };

  return (
    <div className="sm:mb-10">
      <div className={clsx(styles.container)}>
        <InputType
          label="Hex input"
          name="hex"
          onChange={handleTypeChange}
          selected={selectedInputType === "hex"}
        />
        <InputType
          label="RGB input"
          name="rgb"
          onChange={handleTypeChange}
          selected={selectedInputType === "rgb"}
          disabled
        />
      </div>
      <div className={clsx(styles.container, "mt-3")}>
        {selectedInputType === "hex" ? (
          <input
            type="text"
            name="inputHex"
            id="inputHex"
            maxLength="7"
            className={clsx(styles.input, styles.hex)}
            onChange={handleHexChange}
            value={hexInput}
          />
        ) : (
          <>
            {["R", "G", "B"].map((c) => (
              <label
                htmlFor={"input" + c}
                key={c}
                className={clsx(styles.rgbLabel)}
              >
                {c}:
                <input
                  type="number"
                  name="inputRgb"
                  id={c}
                  max="255"
                  min="0"
                  value={rgbInput[c]}
                  onChange={handleRgbChange}
                  className={clsx(styles.input, styles.rgb)}
                />
              </label>
            ))}
          </>
        )}
      </div>
      <div className={clsx(styles.result)}>
        {closest256 && (
          <p className="">
            The closest standard 256 color to{" "}
            <code className="leading-tight">
              {selectedInputType === "hex"
                ? hexInput.toLowerCase()
                : rgbStringify(rgbInput)}
            </code>{" "}
            is:
            <code className="block text-5xl">
              {padColorId(closest256.colorId)}
            </code>
          </p>
        )}
      </div>
      <div className={clsx(styles.container)}>
        <div
          className={clsx(styles.swatch)}
          style={{
            backgroundColor: closest256
              ? selectedInputType === "hex"
                ? hexInput
                : rgbStringify({ R: rgbInput.R, B: rgbInput.B, G: rgbInput.G })
              : null,
          }}
        >
          <code
            style={{
              color:
                closest256 && selectedInputType === "hex"
                  ? idealTextColor(hexToRgb(hexInput))
                  : idealTextColor(rgbInput),
            }}
          >
            {closest256
              ? selectedInputType === "hex"
                ? hexInput.toLowerCase()
                : rgbStringify(rgbInput)
              : null}
          </code>
        </div>
        <div
          className={clsx(styles.swatch, "ml-2")}
          style={
            closest256
              ? { backgroundColor: rgbStringify(closest256.rgb) }
              : null
          }
        >
          <code
            style={{
              color:
                closest256 && selectedInputType === "hex"
                  ? idealTextColor(hexToRgb(hexInput))
                  : idealTextColor(rgbInput),
            }}
          >
            {closest256 ? padColorId(closest256.colorId) : null}
            <br />
            {closest256
              ? selectedInputType === "hex"
                ? closest256.hexString.toLowerCase()
                : rgbStringify(closest256.rgb)
              : null}
          </code>
        </div>
      </div>
    </div>
  );
};

export default Converter;

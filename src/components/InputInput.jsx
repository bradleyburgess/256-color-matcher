import React from "react";
import clsx from "clsx";

const styles = {
  container: "flex flex-grow flex-wrap flex-row justify-around",
  input: "border-gray-400 border rounded-xl h-8",
  label: "flex flex-row items-center",
  hexInput: "ml-2 w-24 text-center",
  rgbLabel: "sm:w-1/3 flex pl-3",
  rgbInput: "text-center pl-2 w-16 ml-2 box-border",
};

const InputInput = ({ mode, rgbInput, onHexChange, onRgbChange, hexInput }) => {
  return mode === "hex" ? (
    <HexInput input={hexInput} onChange={onHexChange} />
  ) : (
    <RgbInput input={rgbInput} onChange={onRgbChange} />
  );
};

const HexInput = ({ input, onChange }) => (
  <div className={clsx(styles.container)}>
    <label htmlFor="hexInput" className={clsx(styles.label, styles.hexLabel)}>
      Hex:{" "}
      <input
        type="text"
        name="hexInput"
        id="hexInput"
        className={clsx(styles.input, styles.hexInput)}
        value={input}
        onChange={onChange}
        maxLength="7"
      />
    </label>
  </div>
);

const RgbInput = ({ input, onChange }) => (
  <div className={clsx(styles.container)}>
    {["R", "G", "B"].map((c) => (
      <label
        className={clsx(styles.label, styles.rgbLabel)}
        htmlFor={c}
        key={c}
      >
        {c}:{" "}
        <input
          className={clsx(styles.input, styles.rgbInput)}
          id={c}
          max="255"
          min="0"
          name={"input" + c}
          onChange={onChange}
          type="number"
          value={input[c]}
        />
      </label>
    ))}
  </div>
);

export default InputInput;

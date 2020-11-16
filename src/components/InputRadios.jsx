import React from "react";
import clsx from "clsx";

const styles = {
  container: [
    "flex",
    "flex-row",
    "flex-shrink-0",
    "justify-center",
    "mb-3",
    "pr-4",
    "sm:flex-col",
    "sm:justify-start",
    "sm:mb-0",
  ],
  input: "mr-1", //sr-only
  label: "px-2 cursor-pointer",
  labelText: "transition-all duration-100",
  // for UI overhaul:
  // radioMark:
  //   "inline-block transition-all duration-100 box-border w-4 relative",
  // active: "font-bold text-blue-800",
  // inactive: "text-blue-500",
};

const InputRadios = ({ mode, onChange }) => {
  return (
    <div className={clsx(styles.container)}>
      <Radio
        radioId="hex"
        radioLabel="Hex Mode"
        selected={mode}
        onChange={onChange}
      />
      <Radio
        radioId="rgb"
        radioLabel="RGB Mode"
        selected={mode}
        onChange={onChange}
      />
    </div>
  );
};

const Radio = ({ selected, onChange, radioId, radioLabel }) => (
  <label className={clsx(styles.label)} htmlFor={radioId}>
    {/* Custom Radio Mark: */}
    {/* <span */}
    {/*   className={clsx( */}
    {/*     styles.radioMark, */}
    {/*     selected === radioId ? styles.active : styles.inactive */}
    {/*   )} */}
    {/*   style={{ bottom: "1px" }} */}
    {/* > */}
    {/*   &raquo; */}
    {/* </span> */}
    <input
      className={clsx(styles.input)}
      type="radio"
      name="inputType"
      id={radioId}
      value={radioId}
      checked={selected === radioId}
      onChange={onChange}
    />
    <span
      className={clsx(
        styles.labelText,
        selected === radioId ? styles.active : styles.inactive
      )}
    >
      {radioLabel}
    </span>
  </label>
);

export default InputRadios;

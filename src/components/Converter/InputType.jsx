import React from "react";
import clsx from "clsx";

const styles = {
  label: [
    "box-border",
    "px-8",
    "py-3",
    "cursor-pointer",
    "duration-200",
    "border-b-2",
    "border-transparent",
  ],
  enabled: ["hover:bg-blue-200"],
  disabled: ["hover:bg-gray-200", "text-gray-500"],
  selected: ["border-blue-400", "bg-blue-100"],
};

const InputType = ({ disabled, label, name, selected, onChange }) => {
  return (
    <label
      htmlFor={"radio" + name}
      className={clsx(
        styles.label,
        disabled ? styles.disabled : styles.enabled,
        selected ? styles.selected : null
      )}
    >
      <input
        type="radio"
        name="inputType"
        id={"radio" + name}
        value={name}
        onChange={onChange}
        checked={selected}
        className="sr-only"
        disabled={disabled}
      />
      {label}
    </label>
  );
};

export default InputType;

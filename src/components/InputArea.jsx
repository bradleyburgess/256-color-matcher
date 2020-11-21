import React from "react";
import clsx from "clsx";
import InputRadios from "./InputRadios.jsx";
import InputInput from "./InputInput";

const styles = {
  container: "flex flex-col sm:flex-row sm:justify-between mt-8",
};

const InputArea = ({
  hexInput,
  mode,
  onHexChange,
  onRgbChange,
  rgbInput,
  setMode,
}) => {
  const changeMode = (e) => setMode(e.target.value);

  return (
    <div className={clsx(styles.container)}>
      <InputRadios mode={mode} onChange={changeMode} />
      <InputInput
        mode={mode}
        hexInput={hexInput}
        rgbInput={rgbInput}
        onHexChange={onHexChange}
        onRgbChange={onRgbChange}
      />
    </div>
  );
};

export default InputArea;

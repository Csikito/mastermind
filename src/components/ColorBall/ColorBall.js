import React from "react";

const ColorBall = ({ color, handleClickColor, isActiveColor }) => {
  let selected = color === isActiveColor ? " selected" : "";

  return (
    <div
      className={`color-ball  ${selected}`}
      style={{ backgroundColor: color }}
      onClick={() => handleClickColor(color)}
    ></div>
  );
};

export default ColorBall;

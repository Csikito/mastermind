import React from "react";
import ColorBall from "../ColorBall/ColorBall";
import "./PickColorBall.css";

const PickColorBall = ({ colors, isActiveColor, setIsActiveColor }) => {
  const handleClickColor = (selectedColor) => {
    setIsActiveColor(selectedColor);
  };

  const colorBall = colors.map((color, index) => (
    <ColorBall
      key={index}
      color={color}
      isActiveColor={isActiveColor}
      handleClickColor={handleClickColor}
    />
  ));

  return (
    <>
      <div className="color-balls">{colorBall}</div>
    </>
  );
};

export default PickColorBall;

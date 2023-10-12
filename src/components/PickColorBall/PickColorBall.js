import React from "react";
import ColorBall from "../ColorBall/ColorBall";
import "./PickColorBall.css";

const PickColorBall = ({
  newGame,
  colors,
  isActiveColor,
  setIsActiveColor,
}) => {
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
      <button className="btn" onClick={newGame}>
        New Game
      </button>

      <div className="color-balls">{colorBall}</div>
    </>
  );
};

export default PickColorBall;

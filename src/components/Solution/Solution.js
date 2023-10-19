import React from "react";
import SecretBall from "../SecretBalls/SecretBall";
import "./Solution.css";

const Solution = ({ secret, solution, newGame }) => {
  const colorBalls = secret.map((color, index) => (
    <SecretBall key={index} color={color} solution={solution} />
  ));

  return (
    <div className="secret-balls">
      <div className="solution">{colorBalls}</div>
      <button className="btn" onClick={newGame}>
        New Game
      </button>
    </div>
  );
};

export default Solution;

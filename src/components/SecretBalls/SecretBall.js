import React from "react";
import "./SecretBalls.css";

const SecretBall = ({ color, solution }) => {
  return (
    <>
      {solution ? (
        <div className="correct-ball" style={{ backgroundColor: color }}></div>
      ) : (
        <div className="secret-ball">?</div>
      )}
    </>
  );
};

export default SecretBall;

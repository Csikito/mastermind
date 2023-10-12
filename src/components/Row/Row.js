import React from "react";
import "./Row.css";

const Row = ({
  updateBoard,
  currentValue,
  isActiveRow,
  evaluateCallback,
  blackCount,
  whiteCount,
}) => {
  let classRow = isActiveRow ? "active" : "";

  const handleClick = (index) => {
    if (isActiveRow) updateBoard(index);
  };

  let currentValues = currentValue ?? [];
  let showBtn = 0;
  let ballCells = [];
  for (let i = 0; i < 4; i++) {
    let objectClass = currentValues[i];

    ballCells.push(
      <div
        className="input-cell"
        key={i}
        style={{ backgroundColor: objectClass }}
        onClick={() => handleClick(i)}
      ></div>
    );

    if (currentValues[i]) {
      showBtn += 1;
    }
  }

  let valuationCells = [];
  let black = blackCount;
  let white = whiteCount;

  for (let i = 0; i < 4; i++) {
    let classList = "";

    if (black > 0) {
      black -= 1;
      classList = "black";
    } else if (white > 0) {
      white -= 1;
      classList = "white";
    }

    valuationCells.push(
      <div className={`evaluation-cell  ${classList}`} key={i}></div>
    );
  }

  const getEvaluationBtn =
    showBtn === 4 && isActiveRow ? (
      <button className="btn" onClick={evaluateCallback}>
        evaluation
      </button>
    ) : (
      ""
    );

  return (
    <div className={`row ${classRow}`}>
      <div className="input-container">{ballCells}</div>
      <div className="evaluation-btn">{getEvaluationBtn}</div>
      <div className="evaluation-container">{valuationCells}</div>
    </div>
  );
};

export default Row;

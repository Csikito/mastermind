import React, { useState } from "react";
import PickColorBall from "../PickColorBall/PickColorBall";
import Row from "../Row/Row";
import "./MastermindBoard.css";

const COLOR = [
  "red",
  "yellow",
  "green",
  "blue",
  "purple",
  "orange",
  "darkred",
  "lightblue",
  "lightgreen",
  "pink",
];

const MAX_ROWS = 10;

const MastermindBoard = () => {
  const initialSecret = [
    COLOR[Math.floor(Math.random() * COLOR.length)],
    COLOR[Math.floor(Math.random() * COLOR.length)],
    COLOR[Math.floor(Math.random() * COLOR.length)],
    COLOR[Math.floor(Math.random() * COLOR.length)],
  ];

  const initialList = [
    {
      colors: [null, null, null, null],
      blackCount: 0,
      whiteCount: 0,
    },
  ];

  const [isActiveColor, setIsActiveColor] = useState(null);
  const [secret, setSecret] = useState(initialSecret);
  const [guessList, setGuessList] = useState(initialList);

  /***************************************** */
  const getActiveRowIndex = () => {
    return guessList.length - 1;
  };

  const updateBoard = (columIndex) => {
    let rowIndex = getActiveRowIndex();
    let color = guessList[rowIndex].colors;
    color[columIndex] = isActiveColor;
    const newGuessList = guessList.map((row, index) =>
      index === rowIndex
        ? {
            colors: color,
            blackCount: guessList[rowIndex].blackCount,
            whiteCount: guessList[rowIndex].whiteCount,
          }
        : row
    );
    console.log(secret);
    return setGuessList(newGuessList);
  };

  const evaluateCallback = () => {
    let rowIndex = getActiveRowIndex();
    const updatedGuessList = [...guessList];
    let blackBall = getBlackCount();
    guessList[rowIndex].blackCount = blackBall;
    guessList[rowIndex].whiteCount = getWhiteCount(blackBall);

    updatedGuessList.push({
      colors: [null, null, null, null],
      blackCount: 0,
      whiteCount: 0,
    });

    setGuessList(updatedGuessList);
  };

  const rows = new Array(MAX_ROWS)
    .fill(null)
    .map((_, index) => (
      <Row
        key={index}
        updateBoard={updateBoard}
        evaluateCallback={evaluateCallback}
        currentValue={guessList[index]?.colors}
        isActiveRow={index === getActiveRowIndex()}
        blackCount={guessList[index]?.blackCount}
        whiteCount={guessList[index]?.whiteCount}
      />
    ));

  const newGame = () => {
    setGuessList(initialList);
    setSecret(initialSecret);
  };

  const getBlackCount = () => {
    let blackBall = 0;
    let rowIndex = getActiveRowIndex();
    let color = guessList[rowIndex].colors;

    for (let i in color) {
      if (color[i] === secret[i]) {
        blackBall += 1;
      }
    }
    return blackBall;
  };

  const getWhiteCount = (blackBall) => {
    const toConvert = (color) => {
      let convert = {};
      for (let i = 0; i < color.length; i++) {
        convert[color[i]] = (convert[color[i]] ?? 0) + 1;
      }
      return convert;
    };
    const rowIndex = getActiveRowIndex();
    let guessConvert = toConvert(guessList[rowIndex].colors);
    let secretConvert = toConvert(secret);
    let blackOrWhite = 0;

    for (let key in guessConvert) {
      blackOrWhite += Math.min(guessConvert[key], secretConvert[key] ?? 0);
    }

    return blackOrWhite - blackBall;
  };

  const getGameOverMessage = () => {
    const rowIndex = getActiveRowIndex();
    if (guessList[rowIndex].blackCount < 4 && rowIndex === MAX_ROWS) {
      return (
        <div className="lost">
          <h2>Game Over</h2>
        </div>
      );
    }
  };

  const getWinningMessage = () => {
    const rowIndex = getActiveRowIndex();
    if (guessList[rowIndex >= 1 ? rowIndex - 1 : 0].blackCount === 4) {
      return (
        <div className="won">
          <h2>Congratulations! You have won the game!</h2>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <PickColorBall
        newGame={newGame}
        colors={COLOR}
        isActiveColor={isActiveColor}
        setIsActiveColor={setIsActiveColor}
      />

      <div className="board">
        {rows}
        {getWinningMessage()}
        {getGameOverMessage()}
      </div>
    </>
  );
};

export default MastermindBoard;

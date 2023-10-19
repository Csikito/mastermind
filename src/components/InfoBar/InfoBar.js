import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./InfoBar.css";

const InfoBar = () => {
  const [activeSection, setActiveSection] = useState(false);

  return (
    <div className="info-container">
      <div
        className="question"
        onClick={() => setActiveSection(!activeSection)}
      >
        <h3>How do you play the game Mastermind?</h3>
        <i
          className={`ri-arrow-down-line ${activeSection ? "active" : ""}`}
        ></i>
      </div>
      <div className={`answer ${activeSection ? "active" : ""}`}>
        <p>
          - To start filling a line, you must first select a color at the top of
          the table by clicking on it. After selecting a color you can just put
          it in the current guess line above by clicking on the desired
          position.
        </p>

        <p>
          - After filling a whole line, you can still change your selection
          before asking the computer to respond to your guess. When you're
          satisfied with your guess, just click on the 'evaluation' button and
          get the computer response.
        </p>
        <p>
          <b>!!-Good Luck-!!</b>
        </p>
        <p>
          <b>
            If you want to know more information about game:{" "}
            <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">
              Click here
            </a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default InfoBar;

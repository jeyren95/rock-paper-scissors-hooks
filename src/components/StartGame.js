import React, {useEffect} from "react";
import {Link} from "react-router-dom";

import "./StartGame.css";

const StartGame = ({playerChoice, houseChoice, results, renderHouseChoice, renderResults}) => {

//the first argument should be a function
//there are 3 scenarios in which useEffect will be called (and depends on what the 2nd argument is)
  // 1. No array at all = Run at initial render, and then run after every re-render
  // 2. Empty array = Run at initial render
  // 3. Array with 1 more elements in it = Run at initial render, and then run after every re-render if data has changed since the last render
  useEffect(() => {
    const renderOverallGameResults= async () => {
      await renderHouseChoice();
      renderResults();
    }

    renderOverallGameResults();
  }, [playerChoice, houseChoice]);


  return (
    <div className="start-game">
      <div className="row">
        <div className="col player-choice">
          <h1>YOU PICKED</h1>
          <div className={`selected-choice selected-${playerChoice}`}>
            <img src={`../images/icon-${playerChoice}.svg`} alt="" />
          </div>
        </div>

        <div className="col house-choice">
          <h1>THE HOUSE PICKED</h1>
          <div className={`selected-choice selected-${houseChoice}`}>
            <img src={`../images/icon-${houseChoice}.svg`} alt="" />
          </div>
        </div>
      </div>

      <div className="results">
        <h1>{results}</h1>
        <div className="play-again">
          <Link to="/">
            <button className="ui inverted button">PLAY AGAIN</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StartGame

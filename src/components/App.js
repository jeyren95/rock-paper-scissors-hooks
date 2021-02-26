import React, {useState} from "react";
import {Route, Router} from "react-router-dom";

import history from "../history";
import Header from "./header/Header";
import Rules from "./rules/Rules";
import Home from "./Home";
import StartGame from "./StartGame";

const App = () => {
  const [playerChoice, setPlayerChoice] = useState("")
  const [houseChoice, setHouseChoice] = useState("")
  const [results, setResults] = useState("")
  const [score, setScore] = useState(0)

  const handleClick = (choice) => {
    setPlayerChoice(choice)
  }

  const renderHouseChoice = () => {
    const houseChoice = Math.ceil(Math.random()*3)
    if (houseChoice === 1) {
      setHouseChoice("rock")
    } else if (houseChoice === 2) {
      setHouseChoice("scissors")
    } else if (houseChoice === 3) {
      setHouseChoice("paper")
    }
  }

  const renderResults = () => {
    if (playerChoice === houseChoice) {
      setResults("DRAW")
      setScore(score)
    } else if (playerChoice === "scissors" && houseChoice === "paper") {
      setResults("YOU WIN")
      setScore(score+1)
    } else if (playerChoice === "paper" && houseChoice === "rock") {
      setResults("YOU WIN")
      setScore(score+1)
    } else if (playerChoice === "rock" && houseChoice === "scissors") {
      setResults("YOU WIN")
      setScore(score+1)
    } else {
      setResults("YOU LOSE")
      setScore(score-1)
    }
  }

  return(
    <Router history={history}>
      <Header
      score={score}
      />
      <Route path="/" exact>
        <Home handleClick={handleClick}/>
      </Route>
      <Route path="/start-game" exact>
        <StartGame
        playerChoice={playerChoice}
        houseChoice={houseChoice}
        results={results}
        renderHouseChoice={renderHouseChoice}
        renderResults={renderResults}
        />
      </Route>
      <Rules />
    </Router>
  )
}

export default App;

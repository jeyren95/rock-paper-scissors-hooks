import React from "react";
import {Link} from "react-router-dom";

import "./Home.css";

const Home = ({handleClick}) => {
//for react hooks, need to pass in the props instead of using this.props
  const choices = ["scissors", "paper", "rock"]

//for helper functions, need to define them as const
  const renderChoices = () => {
    return choices.map((choice) => {
      return (
        <div className={`choice ${choice}`}>
          <Link to="/start-game">
            <img onClick={() => handleClick(choice)} src={`../images/icon-${choice}.svg`} alt="" />
          </Link>
        </div>
      )
    })
  }

  return (
    <div className="home">
      <div className="background-triangle">
        <img src="../images/bg-triangle.svg" alt="" />
      </div>
      {renderChoices()}
    </div>


  )
}

export default Home

import React from "react";

import "./Header.css"

const Header = ({score}) => {

  return (
    <div className="header">
      <img className="header-image" src="../images/logo.svg" alt=""/>
      <div className="score">
        <div className="score-text">SCORE</div>
        <div className="score-number">{score}</div>
      </div>
    </div>
  )
}

export default Header

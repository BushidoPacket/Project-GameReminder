import React from 'react';
import "../App.css";
import { changeTheme } from "../theme_handler";

export const LogoText = () => {

  return (
    <div>
      <div className="navBar">
        <div className="navBarFirst"></div>

        <button id="homeButton"></button>
        <button id="aboutMeButton"></button>
        <button id="themeButton" onClick={changeTheme}></button>

        <div className="navBarLast"></div>
      </div>

      <div className="mainDiv">
        <h1 className="textMain">
          <span className="textGR">G</span>ame &nbsp;<span className="textGR">R</span>eminder
        </h1>
      </div>

      <div className="mainDivSecond">
        <h2 className="textMainSecond">
          Recall the gameplay and the storyline of the game
        </h2>
      </div>
    </div>
  );
};

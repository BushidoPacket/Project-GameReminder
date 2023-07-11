import "../App.css";
import { changeTheme } from "../theme_handler";

export const LogoText = () => {
  return (
    <div>
      <div className="navBar">
        <div className="navBarFirst"></div>

        <button id="themeButton" onClick={changeTheme}></button>

        <div className="navBarLast"></div>
      </div>

      <div className="mainDiv">
        <h1 className="textGR">G</h1>
        <h1 className="textMain">ame &nbsp;</h1>
        <h1 className="textGR">R</h1>
        <h1 className="textMain">eminder</h1>
      </div>

      <div className="mainDivSecond">
        <h2 className="textMainSecond">
          Recall the gameplay and the storyline of the game
        </h2>
      </div>
    </div>
  );
};

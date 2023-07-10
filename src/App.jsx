import React, { useState } from "react";
import "./App.css";
import { GameList } from "./components/GameList";

function App() {
  const [searchValue, setSearchValue] = useState("");

  function inputHandler(e) {
    setSearchValue(e.target.value.toLowerCase());
  }

  return (
    <>
      <div className="centeredPage">
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

        <input
          id="searchBar"
          className="searchBar"
          type="text"
          spellCheck="false"
          placeholder="Search for your game..."
          onChange={inputHandler}
          value={searchValue}
        />

        <GameList search={searchValue} />
      </div>
    </>
  );
}

export default App;

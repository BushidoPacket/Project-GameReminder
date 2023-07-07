import React, { useState } from "react";
import "./App.css";
import { GameList } from "./components/GameList";
import { AddGame } from "./components/AddGameForm/AddGame";

function App() {
  const [searchValue, setSearchValue] = useState("");

  function inputHandler(e) {
    setSearchValue(e.target.value);
  }

  return (
    <>
      <h1>Game Reminder</h1>
      <input
        placeholder="Search for your game..."
        onChange={inputHandler}
        value={searchValue}
      />
      <GameList search={searchValue} />
      <AddGame/>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import classes from "./GameList.module.css";
import games from "../database.json";
import { Link } from "react-router-dom";

export const GameList = () => {
  const [gameData, setGameData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  function inputHandler(e) {
    setSearchValue(e.target.value.toLowerCase());
  }

  useEffect(() => {
    setGameData(games.game);
  }, []);

  const filteredGames = gameData.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.platform.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.release.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.company.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <>
      <input
        id="searchBar"
        className="searchBar"
        type="text"
        spellCheck="false"
        placeholder="Search for your game..."
        autoComplete="off"
        onChange={inputHandler}
        value={searchValue}
      />

      <div className={classes.gameList}>
        {filteredGames.map((game) => (
          <div key={game.id} className={classes.gameItem}>
            <Link to={`/${game.name}`} className={classes.reactLink}>
              <img src={game.cover} alt={game.name} />
              <h2>{game.name}</h2>
              <p>Platform: {game.platform}</p>
              <p>Release Date: {game.release}</p>
              <p>Company: {game.company}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

import React, { useEffect, useState } from "react";
import classes from "./GameList.module.css";
import games from "./games.json";


export const GameList = ({ search }) => {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    setGameData(games.game);
  }, []);

  const filteredGames = gameData.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.platform.toLowerCase().includes(search.toLowerCase()) ||
      item.release.toLowerCase().includes(search.toLowerCase()) ||
      item.company.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <div className={classes.gamelist}>
        {filteredGames.map((game) => (
          <div key={game.id} className={classes.gameitem}>
            <img src={game.cover}></img>
            <h2>{game.name}</h2>
            <p>Platform: {game.platform}</p>
            <p>Release Date: {game.release}</p>
            <p>Company: {game.company}</p>
          </div>
        ))}
      </div>
    </>
  );
};

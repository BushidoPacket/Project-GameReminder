import React, { useEffect, useState } from "react";
import classes from "./GameList.module.css";
import games from "../database.json";
import { Link } from "react-router-dom";

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
      <div className={classes.gameList}>
        {filteredGames.map((game) => (
          <div key={game.id} className={classes.gameItem}>
            <Link
              to={`/${game.name}`}
              className={classes.reactLink}
            >
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

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import games from "../database.json";
import classes from "./SelectedGame.module.css";

export const SelectedGame = () => {
  const [gameData, setGameData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    setGameData(games.game);
  }, []);

  const game = gameData.filter((game) => game.name === name);

  return (
    <div>
      <hr className={classes.delimiter} />
      {game.map((item) => (
        <div key={item.id} className={classes.header}>
          <div className={classes.main}> 
            <h3 className={classes.gameItem}>{item.name}</h3>
            <img src={item.cover} alt={item.name} className={classes.gamePic} />
          </div>
          <div className={classes.properties}>
            <p>Platform: {item.platform}</p>
            <p>Release Date: {item.release}</p>
            <p>Company: {item.company}</p>
            <hr/>
            <h4>Topics: </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

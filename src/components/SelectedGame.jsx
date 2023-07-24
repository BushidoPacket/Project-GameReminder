import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import games from "../database.json";
import classes from "./SelectedGame.module.css";
import info from "../info.json";
import { Category } from "./Category";

export const SelectedGame = () => {
  const [gameData, setGameData] = useState([]);
  const [gameInfo, setGameInfo] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("PC");
  const [gameId, setGameId] = useState("");
  const { name } = useParams();

  useEffect(() => {
    setGameData(games.game);
    setGameInfo(info.game);
  }, []);

  const game = gameData.filter((game) => game.name === name);

  useEffect(() => {
    if (game.length > 0) {
      setGameId(game[0].id);
    }
  }, [game]);

  return (
    <div>
      <hr className={classes.delimiter} />
      {game.map((item) => (
        <div key={item.id} className={classes.header}>
          <div className={classes.main}>
            <img src={item.cover} alt={item.name} className={classes.gamePic} />
            <h3 className={classes.gameItem}>{item.name}</h3>
          </div>
          <div className={classes.properties}>
            <p>Platform: {item.platform}</p>
            <p>Release Date: {item.release}</p>
            <p>Company: {item.company}</p>
            <hr />
            <h4>Topics: </h4>
          </div>
        </div>
      ))}
      <div>
        {gameInfo.map((game) => {
          const id = Object.keys(game)[0];

          if (id !== gameId) {
            return null;
          }

          const categories = game[id].category;

          return (
            <div key={id}>
              <h2>ID: {id}</h2>

              {Object.keys(categories).map((categoryKey) => {
                return (
                  <h1 style={{ display: 'flex' }} key={categoryKey} onClick={() => setSelectedCategory(categoryKey)}>
                    {categoryKey}
                  </h1>
                );
              })}
              <Category categories={categories} game={selectedCategory} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

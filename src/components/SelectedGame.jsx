import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import games from "../database.json";

export const SelectedGame = () => {
  const [gameData, setGameData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    setGameData(games.game);
  }, []);

  const game = gameData.filter((game) => game.name === name);

  return (
    <div>
      {game.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Platform: {item.platform}</p>
          <p>Release Date: {item.release}</p>
          <p>Company: {item.company}</p>
          <img src={item.cover} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

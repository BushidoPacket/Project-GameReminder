import React, { useState } from "react";
import "./App.css";
import classes from "./components/gameList.module.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const dbData = {
    game: [
      {
        id: "01",
        name: "League of Legends",
        platform: "PC",
        release: "27th October 2009",
        company: "Riot Games",
        cover: "https://thumbnails.pcgamingwiki.com/4/40/League_of_Legends_-_cover.jpg/450px-League_of_Legends_-_cover.jpg",
      },
      {
        id: "02",
        name: "Fortnite",
        platform: "PC",
        release: "21st July 2017",
        company: "Epic Games",
        cover: "https://m.media-amazon.com/images/M/MV5BOGY3ZjM3NWUtMWNiMi00OTcwLWIxN2UtMjNhMDhmZWRlNzRkXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg",
      },
    ],
  };

  function inputHandler(e) {
    setSearchValue(e.target.value.toLowerCase());
  }
  const filteredGames = dbData.game.filter((item) => {

    return (
      item.name.toLowerCase().includes(searchValue) ||
      item.platform.toLowerCase().includes(searchValue) ||
      item.release.toLowerCase().includes(searchValue) ||
      item.company.toLowerCase().includes(searchValue)
    );
  });

  return (
    <>
      <div className="centeredPage">

        <div className="mainDiv">
          <h1 className="textGR">G</h1>
          <h1 className="textMain">ame &nbsp;</h1>
          <h1 className="textGR">R</h1>
          <h1 className="textMain">eminder</h1>
        </div>

        <div class="mainDivSecond">
            <h2 class="textMainSecond">Recall the gameplay and the storyline of the game</h2>
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

        <div className={classes.gameList}>
          {filteredGames.map((game) => (
            <div key={game.id} className={classes.gameItem}>
            <img src={game.cover}></img>
              <h2>{game.name}</h2>
              <p>Platform: {game.platform}</p>
              <p>Release Date: {game.release}</p>
              <p>Company: {game.company}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default App;

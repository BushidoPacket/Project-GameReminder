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
     
      {
         "id":"03",
         "name":"Minecraft",
         "platform": "PC",
         "release": "18th November 2011",
         "company": "Mojang Studios",
         "cover": "https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png"
      },
    
      {
         "id":"04",
         "name":"Call of Duty",
         "platform": "PC",
         "release": "29th October 2003",
         "company": "Activision",
         "cover": "https://upload.wikimedia.org/wikipedia/en/f/f3/Call_of_Duty_%282003%29_cover.jpg"
      },
      
      {
        "id":"05",
        "name":"The Legend of Zelda",
        "platform": "Nintendo Switch/Nintendo 64",
        "release": "21st February 1986",
        "company": "Nintendo",
        "cover": "https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png"
     },
   
     {
        "id":"06",
        "name":"Overwatch 2",
        "platform": "PC",
        "release": "4th October 2022",
        "company": "Blizzard Entertainment",
        "cover": "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/51094ef70021e0872f4f503c9e89e94d.jpg"
     }
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

        <div className="mainDivSecond">
            <h2 className="textMainSecond">Recall the gameplay and the storyline of the game</h2>
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

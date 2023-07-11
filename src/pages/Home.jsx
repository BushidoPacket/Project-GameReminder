import "../App.css";
import { GameList } from "../components/GameList";
import { LogoText } from "../components/LogoText";
import { changeTheme } from "../theme_handler";

export const Home = () => {
  return (
    <>
      <div className="centeredPage">
        <LogoText />
        <GameList />
      </div>
    </>
  );
};

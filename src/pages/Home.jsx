import "../App.css";
import { GameList } from "../components/GameList";
import { LogoText } from "../components/LogoText";

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

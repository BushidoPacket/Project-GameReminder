import { SelectedGame } from "../components/SelectedGame";
import { LogoText } from "../components/LogoText";

export const Game = () => {
  return (
    <div className="centeredPage">
      <LogoText />
      <SelectedGame />;
    </div>
  );
};

export default Game;

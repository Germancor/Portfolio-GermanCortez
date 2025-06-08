import reactLogo from "../assets/react.svg";
import robot from "/icons/robot.svg";
import game from "/icons/game.svg"
import "../css/mainhome.css";

const MainHome = () => {
  return (
    <div>
      <h2>"The future is in the hands of those who program it. And today, you are one of those creators."</h2>
      <div className="triangle-container">
        <img src={reactLogo} alt="React logo" className="logo main" />
        <img src={robot} alt="Robot" className="logo secondary shadow" />
        <img src={game} alt="Game" className="logo secondary glow" />
      </div>
    </div>
  );
};

export default MainHome;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StartGame from "./components/StartGame";
import GamesPlay from "./components/GamesPlay";
import { GameContextProvider } from "./context";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const rolldice = () => {
    const random = Math.floor(Math.random() * 6 + 1);
    setCurrentDice(random);
    if (!selectedValue) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    if (selectedValue === random) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedValue(null);
  };

  const resetScore = () => {
    setScore(0);
  };
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <GameContextProvider
      value={{
        score,
        selectedValue,
        setSelectedValue,
        currentDice,
        error,
        setError,
        showRules,
        setShowRules,
        rolldice,
        resetScore,
      }}
    >
      {isGameStarted ? <GamesPlay /> : <StartGame toggle={toggleGamePlay} />}
    </GameContextProvider>
  );
}

export default App;

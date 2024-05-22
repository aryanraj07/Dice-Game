import React, { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Button from "./Button";
import Rules from "./Rules";
import { useGame } from "../context";

const GamesPlay = () => {
  const { score, resetScore, showRules, setShowRules } = useGame();
  return (
    <div>
      <div className="mt-14 mx-14 flex justify-between">
        <div className="left flex flex-col items-center">
          <h1 className="text-6xl font-semibold">{score}</h1>
          <h3 className="font-semibold">Total Score</h3>
        </div>
        <div className="right flex flex-col items-end gap-4 ">
          <NumberSelector />
          <h3 className="font-bold">Select Number</h3>
        </div>
      </div>
      <RollDice />
      <div className="flex  flex-col items-center gap-4 mt-3">
        <Button btntext="Reset Score" click={resetScore} />
        <Button
          btntext={`${showRules ? "Hide" : "Show"} Rules`}
          click={() => setShowRules((prev) => !prev)}
        />
        {showRules && <Rules />}
      </div>
    </div>
  );
};

export default GamesPlay;

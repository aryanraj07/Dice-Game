import React, { useState } from "react";
import Button from "./Button";
import { useGame } from "../context";

const RollDice = () => {
  const { currentDice, rolldice } = useGame();

  console.log(currentDice);
  return (
    <div>
      <div className="flex flex-col gap-5 items-center ">
        <img
          src={`./images/dice_${currentDice}.png `}
          onClick={rolldice}
          alt={`dice ${currentDice}`}
        />
        <h3>Click on dice to Roll</h3>
      </div>
    </div>
  );
};

export default RollDice;

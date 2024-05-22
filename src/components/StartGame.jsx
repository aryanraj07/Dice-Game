import React from "react";
import Button from "./Button";

const StartGame = ({ toggle }) => {
  return (
    <>
      <div className="flex h-[582px] w-[1122px] mt-[180px] mx-[129px] mb-[154px] ">
        <div className="left">
          <img
            className="w-[649px] h-[422px]"
            src="./images/dices.png"
            alt="Dices Image"
          />
        </div>
        <div className="right flex flex-col my-[167px] gap-10 items-end">
          <h1 className="font-bold text-7xl text-nowrap">DICE GAME</h1>
          <Button btntext="Play Now" click={toggle} />
        </div>
      </div>
    </>
  );
};

export default StartGame;

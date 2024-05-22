import React from "react";

const Rules = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 bg-[#FBF1F1] w-[794px] h-[208px]">
        <h2 className="text-2xl font-semibold">How to play dice game</h2>
        <div className="flex flex-col gap-2">
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
          </p>
          <p>If you get wrong guess 2 point will be deducted</p>
        </div>
      </div>
    </div>
  );
};

export default Rules;

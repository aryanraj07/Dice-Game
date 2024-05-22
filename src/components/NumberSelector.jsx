import React, { useState } from "react";
import { useGame } from "../context";

const NumberSelector = () => {
  const { error, setError, selectedValue, setSelectedValue } = useGame();
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const selection = (value) => {
    setSelectedValue(value);
    setError("");
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-red-700 font-semibold text-3xl">{error}</p>
      <div className="flex gap-6">
        {arrNumber.map((value, i) => (
          <div
            className={`w-[72px] h-[72px] flex items-center justify-center font-bold border border-black${
              selectedValue === value
                ? " text-white bg-black  "
                : " bg-white text-black  "
            }`}
            key={i}
            onClick={() => selection(value)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberSelector;

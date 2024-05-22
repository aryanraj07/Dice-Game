import React from "react";

const Button = ({ click, btntext }) => {
  return (
    <div>
      <button
        className="font-semibold bg-black text-white px-14 py-2 hover:bg-white hover:text-black duration-100 ease-in hover:border border-black"
        onClick={click}
      >
        {btntext}
      </button>
    </div>
  );
};

export default Button;

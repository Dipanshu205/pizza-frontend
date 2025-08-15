import React from "react";

const Button = ({ title,icon }) => {
  return (
    <button className=" text-black bg-yellow-400 font-semibold px-5 py-2 rounded-md hover:bg-yellow-300 transition duration-200 ease-linear">
      {icon}
      {title}
    </button>
  );
};

export default Button;

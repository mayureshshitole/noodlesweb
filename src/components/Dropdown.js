import React from "react";
import { Link } from "react-router-dom";
const Dropdown = ({ isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center  bg-yellow-400 transition duration-1000 ease-out"
          : "hidden"
      }
    >
      <Link className="p-4 uppercase font-semibold " to="/">
        home
      </Link>

      <Link className="p-4 uppercase font-semibold" to="/about">
        About
      </Link>
      <Link className="p-4 uppercase font-semibold" to="/dishes">
        dishes
      </Link>
      <Link className="p-4 uppercase font-semibold" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;

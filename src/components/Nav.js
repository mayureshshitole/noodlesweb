import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex flex-row justify-between items-center h-12  w-screen relative"
      style={{
        background: " #aaacc0",
      }}
    >
      <Link
        to="/"
        className="pl-5 text-xl font-bold transform hover:scale-110 transition ease-in-out duration-500 "
      >
        Mayu's Kitchen
      </Link>
      <div
        className="px-8 cursor-pointer md:hidden font-nunito"
        onClick={toggle}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4 uppercase font-semibold" to="/">
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
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";

import { Fragment } from "react";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import Dropdown from "./components/Dropdown";
import Menucard1 from "./components/Menucard";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <Fragment>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Menucard1 />
    </Fragment>
  );
}

export default App;

import Aos from "aos";
import React, { Fragment, useEffect } from "react";
import "aos/dist/aos.css";
import VegMenu from "./VegMenu";
import NonvegMenu from "./NonvegMenu";

const Menucard1 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, anchorPlacement: "top-top" });
  }, []);
  return (
    <>
      <VegMenu />
      <NonvegMenu />
     </>
   
  );
};

export default Menucard1;

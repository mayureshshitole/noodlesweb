import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
const NonvegMenu = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, anchorPlacement: "top-top" });
  }, []);
  return (
    <div
      className="min-h-screen w-screen flex justify-center items-center flex-col text-center   md:justify-around"
      style={{
        background: "#F0F4FD",
      }}
    >
      <h1 className="font-extrabold uppercase animate-bounce text-5xl mt-20 md:mt-0 font-nunito">
        non-veg menu
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center font-nunito text-center">
        <div data-aos="fade-right">
          <div className="flex flex-col justify-center items-center  mb-10 mx-10 px-10 py-5  bg-indigo-400 shadow-xl rounded-2xl h-4/5 w-80 md:w-96 transform hover:scale-110 transition ease-in-out duration-500">
            <img
              src={process.env.PUBLIC_URL + "/assets/n1.jpg"}
              alt="veg"
              className=" w-64 h-64 rounded-3xl"
            />
            <h3 className="font-bold uppercase text-lg md:text-xl md:flex-col">
              mendarianic noodles
            </h3>

            <p className="text-base  ">We cook most tasty Noodles in Mumbai</p>
            <p className="text-base">
              We care for you! We maintain{" "}
              <span className="md:text-lg md:font-semibold"> Hygein</span> and{" "}
              <span className="md:text-lg md:font-semibold"> Contactless</span>{" "}
              delivery!
            </p>
            <button className="inline-block bg-white px-10 py-5 rounded-full mt-10 shadow-lg border-2 text-lg font-bold text-black uppercase tracking-wide duration-1000 ">
              Order Now!
            </button>
          </div>
        </div>

        <div data-aos="fade-up">
          <div className="flex flex-col justify-center items-center  mb-10 mx-10 px-10 py-5  bg-indigo-400 shadow-xl rounded-2xl h-4/5 w-80 md:w-96 transform hover:scale-110 transition ease-in-out duration-500">
            <img
              src={process.env.PUBLIC_URL + "/assets/n2.jpg"}
              alt="veg"
              className=" w-64 h-64 rounded-3xl"
            />
            <h3 className="font-bold uppercase text-lg md:text-xl md:flex-col">
              mendarianic noodles
            </h3>

            <p className="text-base  ">We cook most tasty Noodles in Mumbai</p>
            <p className="text-base">
              We care for you! We maintain{" "}
              <span className="md:text-lg md:font-semibold"> Hygein</span> and{" "}
              <span className="md:text-lg md:font-semibold"> Contactless</span>{" "}
              delivery!
            </p>
            <button className="inline-block bg-white px-10 py-5 rounded-full mt-10 shadow-lg border-2 text-lg font-bold text-black uppercase tracking-wide duration-1000 ">
              Order Now!
            </button>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="flex flex-col justify-center items-center  mb-10 mx-10 px-10 py-5  bg-indigo-400 shadow-xl rounded-2xl h-4/5 w-80 md:w-96 transform hover:scale-110 transition ease-in-out duration-500">
            <img
              src={process.env.PUBLIC_URL + "/assets/n3.jpg"}
              alt="veg"
              className=" w-64 h-64 rounded-3xl"
            />
            <h3 className="font-bold uppercase text-lg md:text-xl md:flex-col">
              mendarianic noodles
            </h3>

            <p className="text-base  ">We cook most tasty Noodles in Mumbai</p>
            <p className="text-base">
              We care for you! We maintain{" "}
              <span className="md:text-lg md:font-semibold"> Hygein</span> and{" "}
              <span className="md:text-lg md:font-semibold"> Contactless</span>{" "}
              delivery!
            </p>
            <button className="inline-block bg-white px-10 py-5 rounded-full mt-10 shadow-lg border-2 text-lg font-bold text-black uppercase tracking-wide duration-1000 ">
              Order Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonvegMenu;

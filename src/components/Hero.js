import React, { useEffect, useState } from "react";

const Hero = () => {
  const [animated, setanimated] = useState(false);

  useEffect(() => {
    setanimated(true);
  }, []);
  return (
    <div
      className="min-h-screen w-screen flex justify-center items-center flex-col-reverse md:flex-row md:justify-around "
      style={{
        background: "linear-gradient(to bottom,  #aaacc0, #F0F4FD)",
      }}
    >
      <div
        className={`${
          animated ? "scale-y-100" : "scale-y-0"
        } mt-4 text-center font-nunito transform transition duration-1000 ease-in-out`}
      >
        <h1 className="font-bold text-3xl md:text-6xl md:flex-col">
          Fresh Delicious
          <span className="font-extrabold text-3xl md:text-6xl"> Noodles</span>
        </h1>

        <p className="text-base mt-5 ">We cook most tasty Noodles in Mumbai</p>
        <p className="text-base">
          We care for you! We maintain{" "}
          <span className="md:text-lg md:font-semibold"> Hygein</span> and{" "}
          <span className="md:text-lg md:font-semibold"> Contactless</span>{" "}
          delivery!
        </p>
        <button className="inline-block bg-yellow-400 px-10 py-5 rounded-full mt-10 shadow-lg border-2 text-lg font-semibold text-black uppercase tracking-wide duration-1000 animate-bounce">
          Order Now!
        </button>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/assets/bowl.svg"}
        alt="BOWL"
        className={`${
          animated ? "scale-90" : "translate-x-full translate-y-full"
        } mx-5 my-5 w-auto h-auto md:max-w-xl transform transition duration-1000 ease-in-out `}
      />
    </div>
  );
};

export default Hero;

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0D0C07]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-300 text-2xl">Hello, my name is </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#A3C9A8] py-2">
          MARIYA AKHTAR.
        </h1>

        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover: bg-[#2b9348] hover: border-gray-300">
            <Link to="about" smooth={true} duration={500}>
              About me
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

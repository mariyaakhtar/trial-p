import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Java from "../assets/java.png";
import MySQL from "../assets/mysql.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full md:h-screen bg-[#0D0C07] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#2b9348] ">
            Skills
          </p>
          <p className="py-4 text-xl">
            {" "}
            These are the technologies I have worked with:{" "}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#344457] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="HTML icon" />
            <p className="my-4">JAVA</p>
          </div>

          <div className="shadow-md shadow-[#344457] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>

          <div className="shadow-md shadow-[#344457] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#344457] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#344457] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#344457] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>

          <div className="shadow-md shadow-[#344457] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySQL} alt="HTML icon" />
            <p className="my-4">MySQL</p>
          </div>

          <div className="shadow-md shadow-[#344457] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

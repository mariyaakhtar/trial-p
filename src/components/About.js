import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0D0C07] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm: text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#2b9348]">
              About me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm: text-right text-4xl font-bold">
            <p>"With great power comes great responsibility."</p>
          </div>
          <div>
            <p>
              {" "}
              I graduated with a Bachelor of Computer Science Engineering in the
              2019 with a focus in OOP with Java, DSA and software engineering
              principles. My projects in various platforms have helped me in
              diversifying my skillset and I am eager to apply the knowledge and
              skills I’ve learned in an environment that would challenge me.{" "}
            </p>
            <p>
              I am extremely organized which makes me exceptionally particular
              about my projects. Apart from coding, my interests also lies in
              plants, sipping caffiene, travelling and the rain. A place with
              all the above is where you will find me!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

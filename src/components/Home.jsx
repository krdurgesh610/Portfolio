import React from "react";
import Heroimg from "../assets/Heroimg.png";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-white">Hey</h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am Durgesh Kumar Thakur.
          </h2>
          <h3 className="text-2xl sm:text-4xl font-bold text-white">
            I'm a Java Full Stack Developer.
          </h3>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Download Resume
            </button>
          </div>
        </div>
        <div>
          <img
            src={Heroimg}
            alt="my profile"
            className="rounded-2xl object-fill mx-auto mt-16 h-100 w-8/12"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

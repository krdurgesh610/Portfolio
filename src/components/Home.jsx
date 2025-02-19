import React, { useEffect, useState } from "react";
import durgesh from "../assets/durgesh.png";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Java Full Stack Developer",
];

function Home() {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const role = roles[roleIndex];
    
    const interval = setInterval(() => {
      if (charIndex < role.length) {
        setCurrentRole((prev) => prev + role[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setCurrentRole("");
          setCharIndex(0);
        }, 1000);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [charIndex, roleIndex]);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-white">Hey</h1>
          <h3 className="text-4xl sm:text-7xl font-bold text-white">
          I'm Durgesh Kr. Thakur
          </h3>
          <h3 className="text-2xl sm:text-4xl font-bold text-white">
            I'm a {currentRole}
          </h3>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-4">
        <a
          href="/Durgesh_Kr_Thakur.pdf"
          download="Durgesh_Kr_Thakur.pdf"
          className="text-white px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
        >
          Download Resume
        </a>
        <a
          href="/Durgesh_Kr_Thakur.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white px-6 py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
        >
          Show Resume
        </a>
      </div>


          {/* <div className="flex space-x-4">
            <a
              href="/Durgesh_Kr_Thakur.pdf"
              download="Durgesh_Kr_Thakur.pdf"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              Download Resume
            </a>
            <a
              href="/Durgesh_Kr_Thakur.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              Show Resume
            </a>
          </div> */}
        </div>
        <div className="flex justify-end w-full mt-8 md:mt-0 md:w-auto md:ml-10">
          <img
            src={durgesh}
            alt="my profile"
            className="rounded-2xl object-cover mx-auto md:ml-auto md:mr-0 h-60 w-60 md:h-80 md:w-80"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
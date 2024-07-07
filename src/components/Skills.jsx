import React from "react";
import css from "../assets/css.png";
import Hibernate from "../assets/Hibernate.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import spring from "../assets/spring.png";
import tailwind from "../assets/tailwind.png";
import sql from "../assets/sql.png";
import github from "../assets/github.png";

function Skills() {
  const skills = [
    {
      id: 1,
      src: java,
      title: "JAVA",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: Hibernate,
      title: "Hibernate",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: spring,
      title: "Spring",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: sql,
      title: "SQL",
      style: "shadow-blue-400",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the Technologies. I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

/*
 <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Skills
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8 px-12 sm:px-0">
        {skills.map(({ id, src }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
*/

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
import mongoDB from "../assets/mongoDB.png";
import expressJS from "../assets/expressJS.png";

function Skills() {
  const skills = [
    { id: 1, src: java, title: "JAVA", style: "shadow-orange-500" },
    { id: 2, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 3, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 4, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: react, title: "React", style: "shadow-blue-600" },
    { id: 7, src: github, title: "GitHub", style: "shadow-gray-500" },
    { id: 8, src: Hibernate, title: "Hibernate", style: "shadow-gray-500" },
    { id: 9, src: spring, title: "Spring", style: "shadow-green-500" },
    { id: 10, src: sql, title: "SQL", style: "shadow-blue-400" },
    { id: 11, src: mongoDB, title: "MongoDB", style: "shadow-green-400" },
    { id: 12, src: expressJS, title: "ExpressJs", style: "shadow-gray-400" },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen scroll-mt-24"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-24">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the Technologies I've worked with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;



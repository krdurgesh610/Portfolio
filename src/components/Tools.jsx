import React from "react";
import git from "../assets/git.png";
import eclipse from "../assets/eclipse.png";
import sts from "../assets/sts.png";
import postman from "../assets/postman.png";
import mysql from "../assets/mysql.png";
import sql from "../assets/sql.png";
import vscode from "../assets/vscode.png";

function Tools() {
  const tools = [
    {
      id: 1,
      src: eclipse,
      title: "Eclipse",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: sts,
      title: "STS",
      style: "shadow-green-500",
    },
    {
      id: 3,
      src: postman,
      title: "Postman",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: mysql,
      title: "MySql",
      style: "shadow-orange-700",
    },
    {
      id: 5,
      src: git,
      title: "Git",
      style: "shadow-red-400",
    },
    {
      id: 6,
      src: sql,
      title: "SQL",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: vscode,
      title: "VsCode",
      style: "shadow-blue-500",
    },
  ];
  return (
    <div
      name="tools"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tools
          </p>
          <p className="py-6">These are the Tools. I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tools.map(({ id, src, title, style }) => (
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

export default Tools;

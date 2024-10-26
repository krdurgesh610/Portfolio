import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-6">
          Hi there! I'm Durgesh Kumar Thakur, a Java Full Stack Developer transitioning from a background in Electrical and Electronics Engineering. My passion for technology and its potential to shape the future has drawn me into the vibrant world of IT.
        </p>
        <p className="text-xl mt-6">
          I specialize in building robust web applications using Java, Spring Boot, and Hibernate for the backend, combined with React.js and Tailwind CSS for creating engaging user interfaces. My engineering education has honed my problem-solving skills and analytical thinking, allowing me to tackle challenges effectively and deliver innovative solutions.
        </p>
        <p className="text-xl mt-6">
          I am enthusiastic about learning and growing within the tech industry, and I’m particularly interested in how technology can enhance our daily lives. I thrive in collaborative settings and enjoy working with diverse teams to bring creative ideas to life.
        </p>
        <p className="text-xl mt-6">
          I’m excited to connect with like-minded professionals and explore opportunities where I can contribute my skills to impactful projects. Let’s create something extraordinary together!
        </p>
      </div>
    </div>
  );
}

export default About;

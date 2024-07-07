import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          ducimus consequuntur provident necessitatibus quae cupiditate, beatae
          totam temporibus assumenda nobis corrupti corporis dolore commodi
          delectus unde molestiae voluptatibus? Quam, incidunt.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          exercitationem praesentium doloribus molestias repellendus explicabo
          nihil similique iure? Officia quod, tempora eum ipsum, maiores
          officiis iusto aperiam dolores unde harum omnis repudiandae dicta
          atque illum laborum quae ea recusandae doloremque aut corrupti? Fugiat
          saepe suscipit illum officia? Ratione, error! Fugiat!
        </p>
      </div>
    </div>
  );
}

export default About;

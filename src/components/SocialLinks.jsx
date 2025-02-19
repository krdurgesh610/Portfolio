import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      label: "Linkedin",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/durgesh99dk/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      label: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com/krdurgesh610",
    },
    {
      id: 3,
      label: "Mail",
      icon: <IoMail size={30} />,
      href: "mailto:durgeshkr610@gmail.com",
    },
    {
      id: 4,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={30} />,
      href: "Durgesh_Kr_Thakur.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <>
      {/* Desktop View (Fixed Side Panel) */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, label, icon, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile View (Bottom Nav) */}
      <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-xl shadow-lg p-2 flex justify-around w-[90%]">
        {links.map(({ id, icon, href, download }) => (
          <a
            key={id}
            href={href}
            className="text-white text-2xl p-2 hover:text-gray-300 transition-all duration-300"
            download={download}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        ))}
      </div>
    </>
  );
}

export default SocialLinks;

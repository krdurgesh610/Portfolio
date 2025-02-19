import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const sectionRefs = useRef({});

  const toggleResumeOptions = () => {
    setShowResumeOptions((prev) => !prev);
  };

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "projects" },
    { id: 5, link: "contact" },
    { id: 6, link: "resume" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    links.forEach(({ link }) => {
      const section = document.getElementById(link);
      if (section) {
        sectionRefs.current[link] = section;
        observer.observe(section);
      }
    });

    return () => {
      links.forEach(({ link }) => {
        const section = sectionRefs.current[link];
        if (section) observer.unobserve(section);
      });
    };
  }, [links]);

  return (
    <>
      <div className="flex justify-between items-center w-full bg-gray-500 h-20 px-5 text-white fixed">
        <Link to="home" smooth duration={500} className="cursor-pointer">
          <h1
            className="font-signature text-5xl ml-2 cursor-pointer"
            onClick={() => {
              setActiveLink("home");
              setNav(false); // Close menu on click
            }}
          >
            Durgesh
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li key={id} className="relative px-4 cursor-pointer capitalize font-medium">
              {link === "resume" ? (
                <div onClick={toggleResumeOptions} className="relative">
                  <span
                    className={`relative cursor-pointer ${activeLink === link ? "text-gray-300" : "text-white"}`}
                    onClick={() => setActiveLink(link)}
                  >
                    Resume
                    <span
                      className={`absolute left-1/2 transform -translate-x-1/2 h-[2px] bg-gray-300 transition-all duration-300 ${
                        activeLink === link ? "w-full" : "w-0"
                      } bottom-0`}
                    />
                  </span>
                  {showResumeOptions && (
                    <ul className="absolute bg-gray-700 text-white p-2 rounded shadow-lg mt-2 space-y-2">
                      <li>
                        <a
                          href="/Durgesh_Kr_Thakur.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Show
                        </a>
                      </li>
                      <li>
                        <a href="/Durgesh_Kr_Thakur.pdf" download className="hover:underline">
                          Download
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={link}
                  smooth
                  duration={500}
                  className="relative cursor-pointer"
                  onClick={() => setActiveLink(link)}
                >
                  {link}
                  <span
                    className={`absolute left-1/2 transform -translate-x-1/2 h-[2px] bg-gray-300 transition-all duration-300 ${
                      activeLink === link ? "w-full" : "w-0"
                    } bottom-0`}
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
            {links.map(({ id, link }) => (
              <li key={id} className="relative px-4 cursor-pointer capitalize py-6 text-4xl">
                {link === "resume" ? (
                  <div onClick={toggleResumeOptions}>
                    <span
                      className={`relative cursor-pointer ${activeLink === link ? "text-gray-300" : "text-white"}`}
                      onClick={() => setActiveLink(link)}
                    >
                      Resume
                      <span
                        className={`absolute left-1/2 transform -translate-x-1/2 h-[2px] bg-gray-300 transition-all duration-300 ${
                          activeLink === link ? "w-full" : "w-0"
                        } bottom-0`}
                      />
                    </span>
                    {showResumeOptions && (
                      <ul className="space-y-4 mt-4 text-lg">
                        <li>
                          <a
                            href="/Durgesh_Kr_Thakur.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a href="/Durgesh_Kr_Thakur.pdf" download className="hover:underline">
                            Download
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    className="relative cursor-pointer"
                    onClick={() => {
                      setActiveLink(link);
                      setNav(false); // Close menu on click
                    }}
                  >
                    {link}
                    <span
                      className={`absolute left-1/2 transform -translate-x-1/2 h-[2px] bg-gray-300 transition-all duration-300 ${
                        activeLink === link ? "w-full" : "w-0"
                      } bottom-0`}
                    />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;

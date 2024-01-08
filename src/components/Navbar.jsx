import React from "react";
import { useState, useEffect } from "react";
import logo from "../images/Yaqeen_logo.png";
import { FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const links = ["الرئيسية", "من نحن", "خدماتنا"];
  const [isLGScreen, setIsLGScreen] = useState(window.innerWidth >= 1024);

  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState("الرئيسية");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLGScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="flex text-3xl border-b text-primary font-medium items-center justify-between px-8 py-16 lg:p-16 h-20 w-full">
      <div>
        <img
          className="w-[140px] lg:w-[230px] cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>
      <div className=" lg:hidden block hover:text-secondary duration-300 cursor-pointer">
        {isMenuOpen ? (
          <FaTimes onClick={handleMenuToggle} />
        ) : (
          <FaBars onClick={handleMenuToggle} />
        )}
      </div>
      <div
        className={`absolute lg:static lg:opacity-100 lg:shadow-none lg:h-fit shadow-lg lg:min-h-full top-[15%]  lg:w-fit duration-300 bg-white  right-0 ${
          isMenuOpen ? "h-[30vh] opacity-100" : "h-0 opacity-0"
        }   w-full flex items-center px-5 `}
      >
        <ul
          className={`flex flex-col lg:flex-row lg:items-center duration-300 gap-10 ${
            isMenuOpen ? "" : ""
          } `}
        >
          {links.map((link, i) => (
            <li
              key={i}
              onClick={() => handleLinkClick(link)}
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`cursor-pointer relative hover:text-secondary ${
                activeLink === link ? "text-secondary" : "text-primary"
              }`}
              style={{
                position: "relative",
              }}
            >
              {link}
              <span
                className="after"
                style={{
                  display: "block",
                  content: "''",
                  position: "absolute",
                  left: 0,
                  bottom: hoveredLink === link ? "-0.1em" : "-0.4em",
                  margin: "0 auto -2px",
                  height: "2px",
                  width: "100%",
                  background: hoveredLink === link ? "#666" : "transparent",
                  opacity: hoveredLink === link ? 1 : 0,
                  transition: "all 0.3s",
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:block">
        <p
          onMouseEnter={() => setHoveredLink("English")}
          onMouseLeave={() => setHoveredLink(null)}
          style={{
            position: "relative",
            cursor: "pointer",
          }}
          className="hover:text-secondary"
        >
          English
          <span
            className="after"
            style={{
              display: "block",
              content: "''",
              position: "absolute",
              left: 0,
              bottom: hoveredLink ? "-0.1em" : "-0.4em",
              margin: "0 auto -2px",
              height: "2px",
              width: "100%",
              background: hoveredLink === "English" ? "#666" : "transparent",
              opacity: hoveredLink === "English" ? 1 : 0,
              transition: "all 0.3s",
            }}
          />
        </p>
      </div>
      <div>
        <button
          className={`px-2 lg:px-6 flex items-center gap-3 py-3 lg:py-5 text-xl duration-300 rounded-lg outline-none bg-primary hover:bg-secondary text-white ${
            isLGScreen ? "lg-style" : "md-sm-style"
          }`}
        >
          {isLGScreen ? "إبدأ مشروعك الآن" : "إبدأ الآن"}
          {isLGScreen && <FaCalendarAlt />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;

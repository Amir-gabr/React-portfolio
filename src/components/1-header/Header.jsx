//
//

import { useEffect, useState } from "react";
import "./header.css";
export default function Header() {
  const [model, setModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("mode") || "dark");
//
  useEffect(() => {
    if (theme == "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <>
      <header className="header py-4 flex justify-between items-center">
        {/* ============ mobile menu ============== */}
        <div className="mobile-menu ">
          <button
            className="toggle-icon flex justify-center items-center rounded-full"
            id="menu-btn"
            onClick={() => setModel(true)}
          >
            <i className="text-2xl bx bx-menu"></i>
          </button>
          {model && (
            <div id="bg-model" className="py-20">
              <ul className="relative rounded-3xl flex flex-col justify-center py-10 px-10">
                <button
                  className="absolute top-2 right-5 w-5 h-5 group"
                  id="close-btn"
                  onClick={() => setModel(false)}
                >
                  <i className="text-3xl group-hover:text-red-400 group-hover:rotate-90 transition duration-300 bx bx-x"></i>
                </button>
                <li className="text-lg py-3">
                  <a className="py-3" href="#hero">
                    About
                  </a>
                </li>
                <li className="text-lg py-3">
                  <a className="py-3" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="text-lg py-3">
                  <a className="py-3" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="text-lg py-3">
                  <a className="py-3" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* ============ desktop navbar ============== */}
        <div className="empty"></div>
        <nav className=" justify-center items-center w-full">
          <ul className="flex justify-center items-center gap-6 py-3 px-10 rounded-full">
            <li className=" text-lg px-4 rounded-full">
              <a href="#about">About</a>
            </li>
            <li className=" text-lg px-4 rounded-full">
              <a href="#skills">Skills</a>
            </li>
            <li className=" text-lg px-4 rounded-full">
              <a href="#projects">Projects</a>
            </li>
            <li className=" text-lg px-4 rounded-full">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            localStorage.setItem("mode", theme == "dark" ? "light" : "dark");
            setTheme(localStorage.getItem("mode"));
          }}
          className="toggle-icon rounded-full flex justify-center items-center "
          id="theme-btn"
        >
          {/* <i className="text-2xl bx bx-sun bx-tada-hover"></i> */}
          <i
            className={`text-2xl bx ${
              theme == "dark" ? "bx-moon" : "bx-sun"
            } bx-tada-hover`}
            id="theme-icon"
          ></i>
        </button>
      </header>
    </>
  );
}

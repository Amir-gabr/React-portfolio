//
//

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./main.css";
import { myProjects } from "../projectsData/Projects";

export default function Main() {
  //
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
//
  function handleClick(categoryBtn) {
    setActive(categoryBtn);
    const newArr = myProjects.filter((item) => {
      return item.category.includes(categoryBtn);
    });
    console.log(newArr);
    setArr(newArr);
  }
  return (
    <>
      <section
        className="divider main-container section flex flex-col sm:flex-row gap-10"
        id="projects"
      >
        <article className="left-sec flex flex-wrap items-center justify-center sm:justify-start sm:items-start sm:flex-col gap-3 px-14 sm:px-0">
          <button
            onClick={() => {
              setActive("all");
              setArr(myProjects);
            }}
            className={`${
              active === "all" ? "active-btn" : null
            } flex items-center justify-center font-bold min-h-[36px] w-[160px] text-base md:text-xl`}
          >
            All Projects
          </button>
          <button
            onClick={() => {
              handleClick("html");
            }}
            className={`${
              active === "html" ? "active-btn" : null
            } flex items-center justify-center gap-3 min-h-[36px] w-[160px]`}
          >
            <img
              className="max-w-[25px]"
              src="./icons/html.png"
              alt="my image"
            />
            <i className="bx bx-plus-medical"></i>
            <img
              className="max-w-[25px]"
              src="./icons/css.png"
              alt="my image"
            />
          </button>
          <button
            onClick={() => {
              handleClick("bootstrap");
            }}
            className={`${
              active === "bootstrap" ? "active-btn" : null
            } flex items-center justify-center gap-3 min-h-[36px] w-[160px]`}
          >
            <img
              className="max-w-[30px]"
              src="./icons/bootstrap.png"
              alt="my image"
            />
            <i className="bx bx-plus-medical"></i>
            <img className="max-w-[25px]" src="./icons/js.png" alt="my image" />
          </button>
          <button
            onClick={() => {
              handleClick("react");
            }}
            className={`${
              active === "react" ? "active-btn" : null
            } flex items-center justify-center gap-3 min-h-[36px] w-[160px]`}
          >
            <img
              className="max-w-[30px]"
              src="./icons/tailwind.png"
              alt="my image"
            />
            <i className="bx bx-plus-medical"></i>
            <img
              className="max-w-[25px]"
              src="./icons/reactjs.png"
              alt="my image"
            />
          </button>
          <button
            onClick={() => {
              handleClick("next");
            }}
            className={`${
              active === "next" ? "active-btn" : null
            } flex items-center justify-center gap-3 min-h-[36px] w-[160px]`}
          >
            <img
              className="max-w-[30px]"
              src="./icons/tailwind.png"
              alt="my image"
            />
            <i className="bx bx-plus-medical"></i>
            <img
              className="max-w-[30px]"
              src="./icons/next.png"
              alt="my image"
            />
          </button>
        </article>
        <motion.article
          layout
          className="right-sec grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-6 flex-grow-1 px-14 sm:px-10 md:px-0"
        >
          <AnimatePresence>
            {arr.map((item, id) => {
              return (
                <motion.div
                  layout
                  initial={{ transform: "scale(0)", opacity: 0 }}
                  animate={{ transform: "scale(1)", opacity: 1 }}
                  transition={{ type: "spring", damping: 8, stiffness: 50 }}
                  className="project-card flex flex-col justify-between"
                  key={id}
                >
                  <div className="image-container p-3 w-full overflow-hidden rounded-md min-h-56 md:min-h-48">
                    <img
                      className="w-full h-full object-cover rounded-t-md"
                      src={item.image}
                      alt="images..."
                    />
                  </div>
                  <div className="info-container flex flex-col justify-between h-full p-3">
                    <div className="info">
                      <h3 className="text-2xl font-bold self-start capitalize">
                        {item.name}
                      </h3>
                      <p className="text-sm capitalize">{item.description}</p>
                    </div>
                    <div className="icons-container flex items-center gap-3">
                      <a className="text-2xl pt-1" href={item.hostLink}>
                        <i className=" bx bx-link"></i>
                      </a>
                      <a className="text-2xl pt-1" href={item.gitLink}>
                        <i className="bx bxl-github"></i>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.article>
      </section>
    </>
  );
}

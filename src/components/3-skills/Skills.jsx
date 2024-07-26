//
//
//

import "./skills.css";
import ScrollReveal from "scrollreveal";
import { skills } from "../data/Data";
import { technology } from "../data/Data";
//

///
ScrollReveal().reveal(".skillCard", {
  interval: 200,
  duration: 1500,
  reset: true,
});
const Skills = () => {
  return (
    <section
      className="main-container divider py-10 mx-auto p-4 mt-8"
      id="skills"
    >
      <h2 className=":text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center">
        Skills & TEC
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 py-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skillCard flex flex-col items-center p-2 border rounded-lg shadow-md"
          >
            <div className=" mb-4">{skill.icon}</div>
            <h3 className="skillName text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
      <div className="divider mx-auto w-1/2 mb-2"></div>
      <div className="divider mx-auto w-1/3 mb-2"></div>
      <div className="divider mx-auto w-1/2"></div>
      <div className=" grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-6 py-10">
        {technology.map((skill, index) => (
          <div
            key={index}
            className="skillCard flex items-center justify-center p-2 gap-2 border rounded-lg shadow-md"
          >
            <div className="">{skill.icon}</div>
            <h3 className="skillName text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

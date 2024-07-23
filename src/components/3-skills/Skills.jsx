//
//
//
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiJquery, SiNextdotjs } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import "./skills.css";
import ScrollReveal from "scrollreveal";

//
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-6xl" /> },
  {
    name: "Tailwind.css",
    icon: <RiTailwindCssFill className="text-teal-600 text-6xl" />,
  },
  {
    name: "Material UI ",
    icon: <img src="./images/m.ui.png" alt="img" className="w-[60px]" />,
  },
  {
    name: "Bootstrap.css",
    icon: <FaBootstrap className="text-indigo-600 text-6xl" />,
  },
  { name: "Jquery ", icon: <SiJquery className="text-cyan-800 text-6xl" /> },
  {
    name: "Typescript",
    icon: <SiTypescript className="text-blue-700 text-6xl" />,
  },
  { name: "React.js", icon: <FaReact className="text-blue-400 text-6xl" /> },
  {
    name: "Next.js ",
    icon: <SiNextdotjs className="text-gray-950 text-6xl" />,
  },
  {
    name: "Figma ",
    icon: <img src="./images/figma.webp" alt="img" className="w-[60px]" />,
  },
  {
    name: "Redux ",
    icon: <TbBrandRedux className="text-purple-400 text-6xl" />,
  },
];

///
ScrollReveal().reveal(".skillCard", { interval: 200, duration: 1500, reset: true });
const Skills = () => {
  return (
    <section
      className="main-container divider py-10 mx-auto p-4 mt-8"
      id="skills"
    >
      <h2 className=":text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center">
        Skills
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
    </section>
  );
};

export default Skills;

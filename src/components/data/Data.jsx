//
//
//
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiJquery, SiNextdotjs } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";
//


export const myProjects = [
  {
    name: "Jewelry Store",
    category: ["html"],
    description: (
      <div className="flex flex-wrap gap-1">
        <p className="skill py-1 px-2 rounded-md">Html</p>
        <p className="skill py-1 px-2 rounded-md">Css</p>
        <p className="skill py-1 px-2 rounded-md">Bootstrap</p>
      </div>
    ),

    image: "./images/jewelry.png",
    moreLink: "",
    hostLink:
      "https://66117b2500c5bf09540919ce--gentle-dango-5090f7.netlify.app/",
    gitLink: "https://github.com/Amir-gabr/Jewelry-Store",
  },
  {
    name: "Cor-Amir",
    category: ["html"],
    description: (
      <div className="flex flex-wrap gap-1">
        <p className="skill py-1 px-2 rounded-md">Html</p>
        <p className="skill py-1 px-2 rounded-md">Css</p>
      </div>
    ),
    image: "./images/cor-amir.png",
    moreLink: "",
    hostLink:
      "https://66128957bdfc6fab27ba0147--spontaneous-meerkat-bf2de5.netlify.app/",
    gitLink: "https://github.com/Amir-gabr/Portfolio",
  },
  {
    name: "Bookmark",
    category: ["bootstrap"],
    description: (
      <div className="flex flex-wrap gap-1">
        <p className="skill py-1 px-2 rounded-md">Html</p>
        <p className="skill py-1 px-2 rounded-md">Css</p>
        <p className="skill py-1 px-2 rounded-md">Bootstrap</p>
        <p className="skill py-1 px-2 rounded-md">JavaScript</p>
      </div>
    ),
    image: "./images/bookmark.png",
    moreLink: "",
    hostLink:
      "https://661183080b59610b6a2ea308--grand-beignet-7c7ff2.netlify.app/",
    gitLink: "https://github.com/Amir-gabr/Bookmark-App",
  },
  {
    name: "Devfolio",
    category: ["html"],
    description: (
      <div className="flex flex-wrap gap-1">
        <p className="skill py-1 px-2 rounded-md">Html</p>
        <p className="skill py-1 px-2 rounded-md">Css</p>
        <p className="skill py-1 px-2 rounded-md">Bootstrap</p>
      </div>
    ),
    image: "./images/devfolio.png",
    moreLink: "",
    hostLink:
      "https://661188e5daf78d0f64a23d7c--papaya-kulfi-ba331b.netlify.app/",
    gitLink: "https://github.com/Amir-gabr/Devfolio",
  },
  {
    name: "Al-muslim",
    category: ["bootstrap"],
    description: (
      <div className="flex flex-wrap gap-1">
        <p className="skill py-1 px-2 rounded-md">Html</p>
        <p className="skill py-1 px-2 rounded-md">Css</p>
        <p className="skill py-1 px-2 rounded-md">Bootstrap</p>
        <p className="skill py-1 px-2 rounded-md">JavaScript</p>
      </div>
    ),
    image: "./images/muslim.png",
    moreLink: "https://github.com/Amir-gabr/Muslim-App/blob/main/README.md",
    hostLink:
      "https://66130dd2daf78d06c0a23e2b--illustrious-daifuku-092f1b.netlify.app/",
    gitLink: "https://github.com/Amir-gabr/Muslim-App",
  },
  {
    name: "Yummy Meals",
    category: ["bootstrap"],
    description: (
      <div className="flex flex-wrap gap-1">
        <p className="skill py-1 px-2 rounded-md">Html</p>
        <p className="skill py-1 px-2 rounded-md">Css</p>
        <p className="skill py-1 px-2 rounded-md">Bootstrap</p>
        <p className="skill py-1 px-2 rounded-md">JavaScript</p>
      </div>
    ),
    image: "./images/yummy.png",
    moreLink: "",
    hostLink:
      "https://6633b56c8c951b084702325f--stellular-semifreddo-d78747.netlify.app/",
    gitLink: "https://github.com/Amir-gabr/Yummy-Meals",
  },
  {
    name: "Weather App",
    category: ["bootstrap"],
    description: (
      <div className="flex flex-wrap gap-1">
        <p className="skill py-1 px-2 rounded-md">Html</p>
        <p className="skill py-1 px-2 rounded-md">Css</p>
        <p className="skill py-1 px-2 rounded-md">Bootstrap</p>
        <p className="skill py-1 px-2 rounded-md">JavaScript</p>
      </div>
    ),
    image: "./images/weather.png",
    moreLink: "",
    hostLink:
      "https://66ac517a0175d3be4d5366ae--preeminent-fox-920e24.netlify.app/",
    gitLink: "https://github.com/Amir-gabr/Weather-App",
  },
  {
    name: "MegaStore",
    category: ["next"],
    description: (
      <div className="flex flex-wrap gap-1">
        <p className="skill py-1 px-2 rounded-md">Next.js</p>
        <p className="skill py-1 px-2 rounded-md">TypeScript</p>
        <p className="skill py-1 px-2 rounded-md">Tailwind</p>
        <p className="skill py-1 px-2 rounded-md">Strip</p>
      </div>
    ),
    image: "./images/mega.png",
    moreLink:
      "https://github.com/Amir-gabr/Mega-Store?tab=readme-ov-file#nextjs-project",
    hostLink: "https://mega-store-mu.vercel.app/",
    gitLink: "https://github.com/Amir-gabr/MegaStore",
  },
  {
    name: "TopStore",
    category: ["react"],
    description: (
      <div className="flex flex-wrap gap-1">
        <p className="skill py-1 px-2 rounded-md">React.js</p>
        <p className="skill py-1 px-2 rounded-md">Tailwind</p>
        <p className="skill py-1 px-2 rounded-md">Formak</p>
        <p className="skill py-1 px-2 rounded-md">Swiper</p>
        <p className="skill py-1 px-2 rounded-md">Yup</p>
        <p className="skill py-1 px-2 rounded-md">Strip</p>
      </div>
    ),
    image: "./images/topStore.png",
    moreLink:
      "https://github.com/Amir-gabr/Top-Store?tab=readme-ov-file#react--vite",
    hostLink: "https://fresh-cart-eta-two.vercel.app/",
    gitLink: "https://github.com/Amir-gabr/Fresh-cart",
  },
  {
    name: "HealthyCare Center",
    category: ["react"],
    description: (
      <div className="flex flex-wrap gap-1">
        <p className="skill py-1 px-2 rounded-md">React.js</p>
        <p className="skill py-1 px-2 rounded-md">Tailwind</p>
        <p className="skill py-1 px-2 rounded-md">Formak</p>
        <p className="skill py-1 px-2 rounded-md">Yup</p>
        <p className="skill py-1 px-2 rounded-md">Swiper</p>
      </div>
    ),
    image: "./images/clinic.png",
    moreLink:
      "https://github.com/Amir-gabr/Healthycare-Center?tab=readme-ov-file#react--vite",
    hostLink: "https://clinic-one-lilac.vercel.app/",
    gitLink: "https://github.com/Amir-gabr/clinic",
  },
  {
    name: "Foodie Cart",
    category: ["next"],
    description: (
      <div className="flex flex-wrap gap-1">
        <p className="skill py-1 px-2 rounded-md">Next.js</p>
        <p className="skill py-1 px-2 rounded-md">Tailwind</p>
        <p className="skill py-1 px-2 rounded-md">Clerk</p>
        <p className="skill py-1 px-2 rounded-md">hyGraph CMS</p>
        <p className="skill py-1 px-2 rounded-md">Swiper</p>
      </div>
    ),
    image: "./images/foodieCart.png",
    moreLink: "https://github.com/Amir-gabr/Foodie-cart",
    hostLink: "https://foodie-cart-chi.vercel.app/",
    gitLink: "https://github.com/Amir-gabr/Foodie-cart",
  },
];

export const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-6xl" /> },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill className="text-teal-600 text-6xl" />,
  },
  {
    name: "Material UI ",
    icon: <img src="./images/m.ui.png" alt="img" className="w-[60px]" />,
  },
  {
    name: "Bootstrap",
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
    name: "Vite.js ",
    icon: <img src="./images/vite.svg" alt="img" className="w-[60px]" />,
  },
  {
    name: "Figma ",
    icon: <img src="./images/figma.webp" alt="img" className="w-[60px]" />,
  },
  {
    name: "Redux ",
    icon: <TbBrandRedux className="text-purple-400 text-6xl" />,
  },
  {
    name: "Sass ",
    icon: <FaSass className="text-pink-500 text-6xl" />,
  },
];

export const technology = [
  {
    name: "Yup",
    icon: <GiCheckMark className="text-xl" />,
  },
  { name: "Formak", icon: <GiCheckMark className=" text-xl" /> },
  {
    name: "Formspree",
    icon: <GiCheckMark className=" text-xl" />,
  },
  {
    name: "Axios",
    icon: <GiCheckMark className=" text-xl" />,
  },
  {
    name: "GraphQL",
    icon: <GiCheckMark className=" text-xl" />,
  },
  {
    name: "Git & GitHub",
    icon: <GiCheckMark className=" text-xl" />,
  },
  {
    name: "React Helmet",
    icon: <GiCheckMark className=" text-xl" />,
  },
  {
    name: "React Query",
    icon: <GiCheckMark className=" text-xl" />,
  },
];


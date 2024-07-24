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





export const myProjects = [
  {
    name: "Jewelry-Store",
    category: ["html"],
    // tools:["./html.png","./css.png"],
    description: "jewelry Store using Html,Css & Bootstrap",
    image: "./images/jewelry.png",
    hostLink:
      "https://66117b2500c5bf09540919ce--gentle-dango-5090f7.netlify.app/",
    gitLink: "https://github.com/Amir-gabr/Jewelry-Store",
  },
  {
    name: "Cor-Amir",
    category: ["html"],
    // tools:["./html.png","./css.png","./js.png"],
    description: "Portfolio website using Html & Css",
    image: "./images/cor-amir.png",
    hostLink:
      "https://66128957bdfc6fab27ba0147--spontaneous-meerkat-bf2de5.netlify.app/",
    gitLink: "https://github.com/Amir-gabr/Portfolio",
  },
  {
    name: "Bookmark",
    category: ["bootstrap"],
    // tools:["./js.png",'./bootstrap.png'],
    description: "Bookmark App using Html , Css ,Js & Bootstrap",
    image: "./images/bookmark.png",
    hostLink:
      "https://661183080b59610b6a2ea308--grand-beignet-7c7ff2.netlify.app/",
    gitLink: "https://github.com/Amir-gabr/Bookmark-App",
  },
  {
    name: "Devfolio",
    category: ["html"],
    // tools:["./html.png","./css.png","./js.png"],
    description: "static Portfolio website using Html , Css ,Js & Bootstrap",
    image: "./images/devfolio.png",
    hostLink:
      "https://661188e5daf78d0f64a23d7c--papaya-kulfi-ba331b.netlify.app/",
    gitLink: "https://github.com/Amir-gabr/Devfolio",
  },
  {
    name: "المسلم",
    category: ["bootstrap"],
    // tools:["./js.png",'./bootstrap.png'],
    description: "  المسلم هو موقع لمواقيت الصلاة والقرآن الكريم وأذكار المسلم",
    image: "./images/muslim.png",
    hostLink:
      "https://66130dd2daf78d06c0a23e2b--illustrious-daifuku-092f1b.netlify.app/",
    gitLink: "https://github.com/Amir-gabr/Muslim-App",
  },
  {
    name: "Yummy Meals",
    category: ["bootstrap"],
    // tools:["./js.png",'./bootstrap.png'],
    description: "Responsive Meals website using Html,Css & Bootstrap",
    image: "./images/yummy.png",
    hostLink:
      "https://6633b56c8c951b084702325f--stellular-semifreddo-d78747.netlify.app/",
    gitLink: "https://github.com/Amir-gabr/Yummy-Meals",
  },
  {
    name: "MegaStore",
    category: ["next"],
    // tools:["./js.png",'./bootstrap.png'],
    description:
      "Responsive E-commerce website using Next.js,Tailwind.css & Typescript",
    image: "./images/mega.png",
    hostLink: "https://mega-store-mu.vercel.app/",
    gitLink: "https://github.com/Amir-gabr/MegaStore",
  },
  {
    name: "Mg.Store",
    category: ["react"],
    // tools:["./js.png",'./bootstrap.png'],
    description:
      "Responsive E-commerce website using React.js,Tailwind.css,Formak & Yup",
    image: "./images/mgStore.png",
    hostLink: "https://fresh-cart-eta-two.vercel.app/",
    gitLink: "https://github.com/Amir-gabr/Fresh-cart",
  },
];

export const skills = [
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
];


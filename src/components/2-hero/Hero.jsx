//
//

import Lottie from "lottie-react";
import heroAnimation from "../../animations/hero.json";
import "./hero.css";

export default function Hero() {
  
  return (
    <>
      <section
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-20 lg:pt-8"
        id="hero"
      >
        <div className="left-sec text-center lg:text-left p-4 flex flex-col justify-center gap-1 lg:gap-5 ">
          <div className="flex justify-center lg:justify-start gap-5 ">
            <div className="hero-img">
              <img
                className="max-w-28 border border-orange-500"
                src="./icons/amir.jpg"
                alt="my image"
              />
            </div>
            <i className="self-end text-2xl text-teal-600 bx bxs-badge-check"></i>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Hi, I am Amir Ahmed!
          </h1>
          <p className="text-sm md:text-lg">
            I am a front-end React.js & Next.js developer passionate about
            creating creative and cool user interfaces. With a keen eye for
            design and a knack for coding, I am always aiming to improve user
            experiences and build responsive design . Let's create something
            amazing together!
          </p>
          <div
            className="flex justify-center lg:justify-start items-center gap-6"
            id="social-icons"
          >
            <a href="https://github.com/Amir-gabr?tab=repositories">
              <i className="text-2xl cursor-pointer bx bxl-github"></i>
            </a>
            <i className="text-2xl cursor-pointer bx bxl-linkedin-square"></i>
          </div>
          <div
            className="flex justify-center lg:justify-start items-center gap-6"
            id="social-icons"
          >
            <a
              href="src/assets/usa1.pdf"
              className="heroBtn"
              download="usa1.pdf"
            >
              Download CV.
            </a>
            <a href="#contact" className="heroBtn">
              Hair me.
            </a>
          </div>
        </div>
        <div className="right-sec self-center hidden md:block" id="">
          <div className="w-[400px] md:w-[500px] lg:w-full ms-auto me-auto">
            <Lottie className="max-w-full" animationData={heroAnimation} />
          </div>
        </div>
      </section>
    </>
  );
}

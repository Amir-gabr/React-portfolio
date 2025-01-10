//
//
//
import Lottie from "lottie-react";
import heroAnimation from "../../assets/animations/hero.json";
// import cv from "../../../public/CvFront-End.pdf";

import "./hero.css";

export default function Hero() {
  return (
    <>
      <section
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-20 lg:pt-8"
        id="hero"
      >
        <div className="left-sec text-center lg:text-left p-4 flex flex-col justify-center gap-4 lg:gap-5 ">
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
            I am 26 years old, I am a front-end React.js & Next.js developer
            passionate about creating creative and cool user interfaces. With a
            keen eye for design and a knack for coding, I am always aiming to
            improve user experiences and build responsive design . Let&apos;s
            create something amazing together!
          </p>
          <div
            className="flex justify-center lg:justify-start items-center gap-6"
            id="social-icons"
          >
            <a href="https://github.com/Amir-gabr?tab=repositories">
              <i
                className="text-2xl md:text-3xl cursor-pointer bx bxl-github"
                id="github"
              ></i>
            </a>
            <a href="https://wa.me/+966551189526">
              <i
                className="text-2xl md:text-3xl cursor-pointer bx bxl-whatsapp"
                id="whatsapp"
              ></i>
            </a>

            <a href="https://www.linkedin.com/in/amir-gabr-74a7b5203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <i
                className="text-2xl md:text-3xl cursor-pointer bx bxl-linkedin-square"
                id="linkedin"
              ></i>
            </a>
          </div>
          <div
            className="flex justify-center lg:justify-start items-center gap-6"
            id="social-icons"
          >
            <a
              href={`https://drive.google.com/uc?export=download&id=1ZPmv7jO9KnVN4B01GaMaTTHPWoxfPlB1`}
              className="heroBtn py-1 px-2 md:py-2 md:px-4 rounded-md"
              download
              target="_blank"
            >
              Download CV.
            </a>
            <a
              href="#contact"
              className="heroBtn py-1 px-2 md:py-2 md:px-4 rounded-md"
            >
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

//
//

import { ValidationError, useForm } from "@formspree/react";
import "./contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../assets/animations/done.json";
import contactAnimation from "../../assets/animations/contact.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("mdoqwwjl");

  return (
    <>
      <section
        className="divider main-container section relative grid grid-cols-1 md:grid-cols-2 gap-5"
        id="contact"
      >
        <div className="left-sec">
          <h2 className="text-4xl flex items-center gap-4 font-bold mb-2 px-4">
            <i className="bx bxs-envelope"></i>
            Contact me
          </h2>
          <p className="mb-8">
            I am always open to discussing new projects, creative ideas or new
            opportunities to be part of your visions.
          </p>
          <form onSubmit={handleSubmit} className="text-xl flex flex-col gap-3">
            <ValidationError prefix="text" field="name" errors={state.errors} />
            <input
              className="input rounded-lg py-2 px-4"
              type="text"
              name="name"
              autoComplete="off"
              required
              placeholder="Name"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              className="input rounded-lg py-2 px-4"
              type="email"
              name="email"
              autoComplete="off"
              required
              placeholder="Email"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <textarea
              className="input rounded-lg py-2 px-4 resize-none"
              name="message"
              required
              placeholder="Message"
              cols={30}
              rows={10}
            ></textarea>
            <button
              type="submit"
              disabled={state.submitting}
              className="submit w-1/4 text-center mt-5 rounded-md py-1 px-3"
            >
              Submit
            </button>
            {state.succeeded && (
              <div className="absolute z-50 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-full">
                <p className="success-form text-center text-lg md:text-2xl rounded-md py-3 px-6 border w-fit ml-auto mr-auto max-w-[40%]">
                  <Lottie
                    loop={false}
                    className="w-full"
                    animationData={doneAnimation}
                  />
                  Thank you for getting in touch!
                </p>
              </div>
            )}
          </form>
        </div>
        <div className="right-sec self-center" id="">
          <div className="">
            <Lottie className="max-w-full" animationData={contactAnimation} />
          </div>
        </div>
      </section>
    </>
  );
}

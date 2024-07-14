//
import { useEffect } from "react";
import { useState } from "react";

export default function Scroll2Top() {
      const [btn2Top, setBtn2Top] = useState(false);
      useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 350) {
            setBtn2Top(true);
          } else {
            setBtn2Top(false);
          }
        });
      }, []);
  return (
    <>
      <a href="#" className="scroll2Top" style={{ opacity: btn2Top ? 1 : 0,transition:"0.5s" }}>
        <button className="fixed bottom-7 right-7 flex justify-center items-center bg-teal-700 rounded-full w-10 h-10  md:w-12 md:h-12 ">
          <i className="bx bxs-up-arrow"></i>
        </button>
      </a>
    </>
  );
}

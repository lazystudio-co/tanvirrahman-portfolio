import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { FaArrowUp } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const ScrollToHash = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Use ScrollTrigger to toggle visibility based on scroll position
    const st = ScrollTrigger.create({
      start: 600,
      onUpdate: (self) => {
        setShow(self.scroll() > 600);
      },
    });

    return () => st.kill();
  }, []);

  const scrollToTop = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={` fixed bottom-6 right-6 z-50 2xl:p-4 xl:p-4 lg:p-4 md:p-4 p-2 rounded-full bg-white text-redd transition-all duration-300 cursor-pointer select-none ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <FaArrowUp className=" 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-md " />
    </button>
  );
};

export default ScrollToHash;

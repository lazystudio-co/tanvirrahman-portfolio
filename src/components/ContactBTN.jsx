import React from "react";
import { useNavigate } from "react-router-dom";
import { ScrollSmoother } from "gsap/all";

const ContactBTN = ({ children, className }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const smoother = ScrollSmoother.get();
      const el = document.getElementById("contact");
      if (smoother && el) smoother.scrollTo(el, true, "top top");
    }, 100);
  };

  return (
    <a
      href="/"
      onClick={handleClick}
      className={`  text-black font-patung 2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:text-[20px] text-[18px] 
        px-6 2xl:py-1 xl:py-1 lg:py-1 md:py-1 py-0.5 block
      bg-white border border-white rounded-full select-none cursor-pointer
        hover:bg-transparent hover:text-white ${className} `}
    >
      {children}
    </a>
  );
};

export default ContactBTN;

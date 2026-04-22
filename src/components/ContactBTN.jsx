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
      className={`  text-black font-patung text-[28px] px-6 py-1 bg-white border border-white rounded-full select-none cursor-pointer
     hover:bg-transparent hover:text-white ${className} `}
    >
      {children}
    </a>
  );
};

export default ContactBTN;

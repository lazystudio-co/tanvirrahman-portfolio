import React, { useEffect, useState } from "react";
import Container from "./Container";
import List from "./List";
import ListItems from "./ListItems";
import ContactBTN from "./ContactBTN";
import { useNavigate } from "react-router-dom";
import { TbUserEdit } from "react-icons/tb";
import { ScrollSmoother } from "gsap/all";
import { motion } from "framer-motion";

const NavBar = () => {
  const linkPath = [
    { name: "About", path: "/about#about", bg: "/images/aboutVec.png" },
    { name: "Blog", path: "/blog#blog", bg: "/images/blogVec.png" },
    {
      name: "Projects",
      path: "/project#project",
      bg: "/images/projectVec.png",
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);

    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  const handleLogoClick = async (e) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      navigate("/");
      await new Promise((r) => setTimeout(r, 80));
    }

    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav id="#" className={` z-50! py-6 `}>
      <Container className=" flex justify-between items-center  ">
        {scrolled ? (
          <motion.a
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              stiffness: 70,
              type: "spring",
            }}
            viewport={{ amount: 0.3 }}
            href="/"
            onClick={handleLogoClick}
            className=" flex justify-center items-center gap-1 cursor-pointer "
          >
            <img
              src="images/logoSec.png"
              alt="logo"
              className=" w-40 rounded-md select-none "
            />
          </motion.a>
        ) : (
          <a
            href="/"
            onClick={handleLogoClick}
            className=" flex justify-center items-center gap-1 cursor-pointer "
          >
            <img
              src="images/logo.png"
              alt="logo"
              className=" w-40 rounded-md select-none "
            />
          </a>
        )}

        <div className=" flex justify-center items-center gap-8 ">
          <List>
            {linkPath.map((link) => (
              <ListItems
                className={scrolled ? "text-black!" : "text-white"}
                key={link.path}
                PagePath={link.path}
                activeBg={link.bg}
              >
                {link.name}
              </ListItems>
            ))}
          </List>
          <ContactBTN className={scrolled ? " text-white bg-black! z-50 " : ""}>
            Contact
          </ContactBTN>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;

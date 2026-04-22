import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ScrollSmoother } from "gsap/all";

const ListItems = ({ children, className = "", PagePath, activeBg }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const hasHash = PagePath && PagePath.includes("#");

  if (hasHash) {
    const [pathPartRaw, hashPart] = PagePath.split("#");
    const pathPart = pathPartRaw === "" ? "/" : pathPartRaw;
    const to = `${pathPart}${hashPart ? `#${hashPart}` : ""}`;

    const isActive = location.pathname === pathPart;

    const handleClick = (e) => {
      e.preventDefault();
      navigate(pathPart);

      const smoother = ScrollSmoother.get();
      setTimeout(() => {
        if (hashPart) {
          const el = document.getElementById(hashPart);
          if (smoother && el) {
            smoother.scrollTo(el, true, "top top");
          }
        }
      }, 80);
    };

    return (
      <a
        href={pathPart}
        onClick={handleClick}
        className={`relative nav-link ${isActive ? "active" : ""}`}
        data-text={children}
        style={
          isActive && activeBg
            ? {
                backgroundImage: `url(${activeBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        <li
          className={` text-[18px] text-white font-satoshi select-none cursor-pointer ${className}  `}
        >
          {children}
        </li>
      </a>
    );
  }

  return (
    <NavLink
      to={PagePath}
      className={({ isActive }) =>
        `relative nav-link ${isActive ? "active" : ""}`
      }
      data-text={children}
      style={({ isActive }) =>
        isActive && activeBg
          ? {
              backgroundImage: `url(${activeBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <li
        className={` text-[18px] text-white font-satoshi select-none cursor-pointer ${className}  `}
      >
        {children}
      </li>
    </NavLink>
  );
};

export default ListItems;

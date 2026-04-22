import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-400 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`w-full max-w-400 mx-auto 2xl:px-0 xl:px-8 lg:px-12 md:px-12 px-6 ${className}`}>{children}</div>
  );
};

export default Container;

import React from "react";

const List = ({ children, className }) => {
  return (
    <ul className={` flex justify-center items-center gap-6 ${className} `}>
      {children}
    </ul>
  );
};

export default List;

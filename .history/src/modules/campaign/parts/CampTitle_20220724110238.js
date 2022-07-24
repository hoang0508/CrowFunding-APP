import React from "react";
import classNames from "utils/className";

const CampTitle = ({ children, className }) => {
  return (
    <h3 className={classNames("mb-1 font-semibold text-text1", className)}>
      {children}
    </h3>
  );
};

export default CampTitle;

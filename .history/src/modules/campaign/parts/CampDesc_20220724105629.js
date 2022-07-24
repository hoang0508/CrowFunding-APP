import React from "react";
import classNames from "utils/className";

const CampDesc = ({ children, className = "text-sm mb-4" }) => {
  return (
    <p className={classNames("font-normal text-text3", className)}>
      {children}
    </p>
  );
};

export default CampDesc;

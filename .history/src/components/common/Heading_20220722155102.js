import React from "react";
import classNames from "utils/className";

const Heading = ({ children, className = "" }) => {
  return (
    <div className={classNames("text-lg font-semibold text-text1", className)}>
      {children}
    </div>
  );
};

export default Heading;

import React from "react";
import classNames from "utils/className";

const Heading = ({ children, className = "", number = "" }) => {
  return (
    <div
      className={classNames("text-lg font-semibold text-text1 mb-5", className)}
    >
      {children}
      {number && <span className="text-secondary">({`${number}`})</span>}
    </div>
  );
};

export default Heading;

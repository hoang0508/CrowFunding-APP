import React from "react";

const CampDesc = ({ children, className = "text-sm mb-4" }) => {
  return <p className={className}>{children}</p>;
};

export default CampDesc;

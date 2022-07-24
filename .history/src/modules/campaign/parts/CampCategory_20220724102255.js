import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";

const CampCategory = () => {
  return (
    <Link
      to="/"
      className="flex items-baseline gap-x-3 mb-4 text-xs font-medium text-text3"
    >
      <IconFolder></IconFolder>
      <span>Education</span>
    </Link>
  );
};

export default CampCategory;

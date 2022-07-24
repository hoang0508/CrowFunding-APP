import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";
import classNames from "utils/className";

const CampCategory = ({ text = "", className = "text-xs" }) => {
  return (
    <Link
      to="/"
      className={classNames(
        "flex items-baseline gap-x-3 mb-4 font-medium text-text3",
        className
      )}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;

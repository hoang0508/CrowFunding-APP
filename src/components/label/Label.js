import React from "react";
import PropTypes from "prop-types";

const Label = (props) => {
  const { children, htmlFor = "", className = "" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium text-text2 inline-block cursor-pointer mb-3 ${className}`}
    >
      {children}
    </label>
  );
};

// Propstype
Label.propTypes = {
  children: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

export default Label;

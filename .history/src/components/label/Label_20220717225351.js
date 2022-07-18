import React from "react";
import PropTypes from "prop-types";

const Label = (props) => {
  const { children, htmlFor = "", className = "" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium text-text2 dark:text-text3 inline-block cursor-pointer ${className}`}
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

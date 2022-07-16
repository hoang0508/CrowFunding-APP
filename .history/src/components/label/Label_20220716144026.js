import React from "react";
import PropTypes from "prop-types";

const Label = (props) => {
  const { children, htmlFor = "" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium text-text2 inline-block cursor-pointer"
    >
      {children}
    </label>
  );
};

// Propstype
Label.propTypes = {
  children: PropTypes.string,
  htmlFor: PropTypes.string,
};

export default Label;

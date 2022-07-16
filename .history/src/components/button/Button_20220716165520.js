import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, children, className = "" }) => {
  return (
    <button
      className={`w-full font-semibold py-4 rounded-xl flex justify-center items-center"
      type={type} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;

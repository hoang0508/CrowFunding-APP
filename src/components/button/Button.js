import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, children, className = "" }) => {
  return (
    <button
      type={type}
      className={`font-semibold py-4 rounded-xl flex justify-center items-center"
     ${className} text-white`}
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

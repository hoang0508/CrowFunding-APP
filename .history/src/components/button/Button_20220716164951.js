import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, children }) => {
  return (
    <button
      className="font-semibold py-4 rounded-xl flex justify-center items-center"
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Button;

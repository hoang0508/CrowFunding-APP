import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, children }) => {
  return (
    <button className="font-semibold py-4 rounded-xl" type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Button;

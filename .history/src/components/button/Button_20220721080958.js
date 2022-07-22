import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/className";

const Button = ({
  type,
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white border-t-transparent border-b-transparent rounded-full animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      type={type}
      className={classNames(
        "font-semibold py-4 rounded-xl flex justify-center items-center min-h-[56px] w-full text-white",
        !!isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
      // className={`font-semibold py-4 rounded-xl flex justify-center items-center min-h-[56px]
      // ${className} text-white ${
      //   !!isLoading ? "opacity-50 pointer-events-none" : ""
      // }`}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};

export default Button;

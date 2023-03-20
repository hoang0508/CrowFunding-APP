import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/className";
import { Link } from "react-router-dom";

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
  let defaultClassName = `font-semibold p-4 rounded-xl flex justify-center items-center min-h-[56px]  text-white`;

  switch (rest.kind) {
    case "primary":
      defaultClassName = defaultClassName + " bg-primary text-white";
      break;

    case "secondary":
      defaultClassName = defaultClassName + "bg-secondary text-white";
      break;

    case "ghost":
      defaultClassName =
        defaultClassName + " bg-secondary bg-opacity-20 text-secondary";
      break;
    default:
      break;
  }

  if (rest.href)
    return (
      <Link to={rest.href} className={classNames(defaultClassName, className)}>
        {child}
      </Link>
    );

  return (
    <button
      type={type}
      className={classNames(
        defaultClassName,
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
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;

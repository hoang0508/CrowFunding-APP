import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    placeholder = "",
    error = "",
    children = "",
    ...rest
  } = props;
  // hook form control
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  console.log(placeholder);
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full py-4 px-6 border rounded-xl text-sm font-medium text-text1 placeholder:text-text4 ${
          error.length > 0 ? "border-error" : "border-strock"
        }`}
        placeholder={error.length < 0 ? placeholder : ""}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="text-error font-medium text-sm absolute top-2/4 -translate-y-2/4 left-6 pointer-events-none error-input">
          {error}
        </span>
      )}
      <div className="absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer">
        {children}
      </div>
    </div>
  );
};

// Proptypes
Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
};

export default Input;

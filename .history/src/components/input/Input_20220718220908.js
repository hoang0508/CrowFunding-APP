import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

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
        className={`w-full py-4 px-6 border rounded-xl text-sm font-medium text-text1 placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent ${
          error.length > 0
            ? "border-error"
            : "border-strock dark:border-darkStroke"
        } ${children ? "pr-16" : ""}`}
        placeholder={error.length <= 0 ? placeholder : ""}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="text-error font-medium text-sm absolute top-2/4 -translate-y-2/4 left-6 pointer-events-none error-input">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer">
          {children}
        </span>
      )}
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

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});

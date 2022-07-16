import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = (props) => {
  const { control, name, type } = props;
  // hook form control
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        type={type}
        className="w-full py-4 px-6 border border-strock rounded-xl text-sm font-medium text-text1 placeholder:text-text4"
        {...field}
      />
    </div>
  );
};

// Proptypes
Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Input;

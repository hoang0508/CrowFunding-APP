import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const { control, name, placeholder = "", children, ...rest } = props;
  // hook form control
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      className="w-full py-4 px-6 border rounded-xl text-sm font-medium text-text1 placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent resize-none min-h-[140px] outline-none"
      placeholder={placeholder}
      {...field}
      {...rest}
    ></textarea>
  );
};

export default Textarea;

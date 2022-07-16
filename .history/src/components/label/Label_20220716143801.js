import React from "react";

const Label = (props) => {
  const { children } = props;
  return (
    <label className="text-sm font-medium text-text2 inline-block cursor-pointer">
      {children}
    </label>
  );
};

export default Label;

import React from "react";

const FormGroup = ({ children }) => {
  return (
    <div className="flex flex-col gap-x-2 lg:gap-y-3 lg:mb-5 mb-4">
      {children}
    </div>
  );
};

export default FormGroup;

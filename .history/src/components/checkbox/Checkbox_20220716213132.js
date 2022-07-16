import React from "react";

const Checkbox = ({ checked }) => {
  return (
    <label
      className={`inline-block w-5 h-5 rounded border  cursor-pointer ${
        checked ? "border-primary bg-primary" : "border-strock"
      }`}
    >
      <input type="checkbox" className="hidden" />
    </label>
  );
};

export default Checkbox;

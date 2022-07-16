import React from "react";
import PropTypes from "prop-types";

const Label = (props) => {
  const { children } = props;
  return (
    <label className="text-sm font-medium text-text2 inline-block cursor-pointer">
      {children}
    </label>
  );
};

// Propstype
Label.propTypes = {
  children: PropTypes.string,
};

export default Label;

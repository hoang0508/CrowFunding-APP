import React from "react";
import PropTypes from "prop-types";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
  return (
    <>
      <button
        className="flex items-center justify-center gap-x-2 w-full py-4 mb-5 border border-strock dark:border-darkStroke rounded-xl"
        onClick={onClick}
      >
        <img src="./icon-google.png" alt="google" />
        <span className="text-text2 dark:text-white font-semibold text-base">
          {text}
        </span>
      </button>
    </>
  );
};

// PropType
ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonGoogle;

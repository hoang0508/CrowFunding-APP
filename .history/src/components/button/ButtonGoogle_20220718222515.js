import React from "react";

const ButtonGoogle = () => {
  return (
    <>
      <button className="flex items-center justify-center gap-x-2 w-full py-4 mb-5 border border-strock dark:border-darkStroke rounded-xl">
        <img src="./icon-google.png" alt="google" />
        <span className="text-text2 dark:text-white font-semibold text-base">
          Sign up with google
        </span>
      </button>
    </>
  );
};

export default ButtonGoogle;

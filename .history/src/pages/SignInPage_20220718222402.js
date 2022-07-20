import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";

const SignInPage = () => {
  return (
    <LayoutAuthentication heading="SignIn">
      <p className="text-center lg:text-sm  text-xs font-normal text-text3 lg:mb-8 mb-6">
        Dont have an account?
        <Link to="/sign-up" className="text-primary font-medium underline">
          Sign up
        </Link>
      </p>
      <button className="flex items-center justify-center gap-x-2 w-full py-4 mb-5 border border-strock dark:border-darkStroke rounded-xl">
        <img src="./icon-google.png" alt="google" />
        <span className="text-text2 dark:text-white font-semibold text-base">
          Sign in with google
        </span>
      </button>
    </LayoutAuthentication>
  );
};

export default SignInPage;

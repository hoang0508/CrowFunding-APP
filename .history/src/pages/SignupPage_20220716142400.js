import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
const SignupPage = () => {
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="text-center lg:text-sm  text-xs font-normal text-text3 lg:mb-8 mb-6">
        Already have an account?
        <Link to="/sign-in" className="text-primary font-medium underline">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center gap-x-2 w-full py-4 mb-5 file:border border-strock rounded-xl">
        <img src="./icon-google.png" alt="google" />
        <span className="text-text2 font-semibold text-base">
          Sign up with google
        </span>
      </button>
    </LayoutAuthentication>
  );
};

export default SignupPage;

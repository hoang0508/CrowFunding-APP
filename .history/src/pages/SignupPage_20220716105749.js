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
      <button className="flex items-center gap-x-2">
        <img src="./icon-google.png" alt="google" />
        <span>Sign up with google</span>
      </button>
    </LayoutAuthentication>
  );
};

export default SignupPage;

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
    </LayoutAuthentication>
  );
};

export default SignInPage;

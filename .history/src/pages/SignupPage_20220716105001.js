import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
const SignupPage = () => {
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="text-center lg:text-sm  text-xs font-normal">
        Already have an account?
        <Link to="/sign-in" className="text-primary font-medium">
          Sign in
        </Link>
      </p>
    </LayoutAuthentication>
  );
};

export default SignupPage;

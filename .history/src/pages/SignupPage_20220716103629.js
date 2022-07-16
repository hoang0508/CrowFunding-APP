import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
const SignupPage = () => {
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="text-center text-sm font-medium">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-primary">
          Sign in
        </Link>
      </p>
    </LayoutAuthentication>
  );
};

export default SignupPage;

import React from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "components/label";
import { Input } from "components/input";
import FormGroup from "components/common/FormGroup";
const SignupPage = () => {
  // react hook form
  const { handleSubmit, control } = useForm({});
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="text-center lg:text-sm  text-xs font-normal text-text3 lg:mb-8 mb-6">
        Already have an account?
        <Link to="/sign-in" className="text-primary font-medium underline">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center gap-x-2 w-full py-4 mb-5 border border-strock rounded-xl">
        <img src="./icon-google.png" alt="google" />
        <span className="text-text2 font-semibold text-base">
          Sign up with google
        </span>
      </button>
      <p className="text-center font-normal lg:text-sm text-xs text-text2 lg:mb-8 mb-4">
        Or sign up with email
      </p>
      <form>
        <FormGroup>
          <Label>Full Name *</Label>
          <Input control={control} name="name" placeholder="Jhon Doe"></Input>
        </FormGroup>
      </form>
    </LayoutAuthentication>
  );
};

export default SignupPage;

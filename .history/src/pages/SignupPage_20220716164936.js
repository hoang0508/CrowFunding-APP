import React from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "components/label";
import { Input } from "components/input";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
const SignupPage = () => {
  // react hook form
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm({});
  // onSubmit
  const handleSignUp = (values) => {};
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
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input control={control} name="name" placeholder="Jhon Doe"></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Create a password"
          ></Input>
        </FormGroup>
        <div className="flex flex-start gap-x-5 mb-5">
          <span className="w-5 h-5 border rounded inline-block border-text4"></span>
          <p className="text-sm text-text2 flex-1">
            I agree to the{" "}
            <span className="text-secondary underline">Terms of Use</span> and
            have read and understand the{" "}
            <span className="text-secondary underline">Privacy policy.</span>
          </p>
        </div>
        <Button>Create my account</Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignupPage;

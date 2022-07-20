import ButtonGoogle from "components/button/ButtonGoogle";
import FormGroup from "components/common/FormGroup";
import { Label } from "components/label";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import useToggleValue from "hooks/useToggleValue";

const SignInPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
  });
  const handleSignIn = (values) => {};

  const { value: password, handleToggleValue: handleTogglePassword } =
    useToggleValue(false);
  return (
    <LayoutAuthentication heading="SignIn">
      <p className="text-center lg:text-sm  text-xs font-normal text-text3 lg:mb-8 mb-6">
        Dont have an account?
        <Link to="/sign-up" className="text-primary font-medium underline">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google" />
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="name">Email *</Label>
          <Input
            control={control}
            name="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${password ? "password" : "text"}`}
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;

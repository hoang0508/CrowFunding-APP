import ButtonGoogle from "components/button/ButtonGoogle";
import FormGroup from "components/common/FormGroup";
import { Label } from "components/label";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import useToggleValue from "hooks/useToggleValue";
import { IconEyeToggle } from "components/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// Validation Form vs Yup

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min("Password must be 8 character "),
});

const SignInPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const handleSignIn = (values) => {};

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
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
          <Label htmlFor="email">Email *</Label>
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
            type={`${showPassword ? "password" : "text"}`}
            placeholder="Enter Password"
            error={errors.email?.message}
          >
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword} />
          </Input>
        </FormGroup>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;

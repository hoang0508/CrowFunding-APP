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
import { Button } from "components/button";
import { useDispatch } from "react-redux";
import { authLogin } from "store/auth/auth-slice";
// Validation Form vs Yup

const schema = yup.object({
  email: yup.string().email().required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
});

const SignInPage = () => {
  // dispatch
  const dispatch = useDispatch();

  // hook form
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  // handle login
  const handleSignIn = (values) => {
    dispatch(authLogin(values));
  };

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue(false);

  return (
    <LayoutAuthentication heading="SignIn">
      <p className="text-center lg:text-sm  text-xs font-normal text-text3 lg:mb-8 mb-6">
        Dont have an account?
        <Link to="/register" className="text-primary font-medium underline">
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
        <FormGroup>
          <div className="text-right">
            <span className="text-sm font-medium text-primary inline-block">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button type="submit" className="bg-primary w-full">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;

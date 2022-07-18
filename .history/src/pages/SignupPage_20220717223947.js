import useToggleValue from "hooks/useToggleValue";
import React from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icons";
import { Checkbox } from "components/checkbox";
import { Button } from "components/button";

// Validation Form vs Yup

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min("Password must be 8 character "),
});

const SignupPage = () => {
  // react hook form
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  // onSubmit
  const handleSignUp = (values) => {};
  // useState Term checkbox
  // const [acceptTerm, setAcceptTerm] = useState(false);
  // Show password
  // const [showPassword, setShowPassword] = useState(false);
  // // Handle Click Toggle Term
  // const handleToggleTerm = () => {
  //   setAcceptTerm(!acceptTerm);
  // };
  // Handle Toggle Password
  // const handleTogglePassword = () => {
  //   setShowPassword(!showPassword);
  // };
  // custom hook toggle value
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue(false);
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue(false);
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
        <span className="text-text2 dark:text-white font-semibold text-base">
          Sign up with google
        </span>
      </button>
      <p className="text-center font-normal lg:text-sm text-xs text-text2 dark:text-white lg:mb-8 mb-4">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Jhon Doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword} />
          </Input>
        </FormGroup>
        <div className="flex flex-start gap-x-5 mb-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="lg:text-sm text-xs text-text2 flex-1">
              I agree to the{" "}
              <span className="text-secondary underline">Terms of Use</span> and
              have read and understand the{" "}
              <span className="text-secondary underline">Privacy policy.</span>
            </p>
          </Checkbox>
        </div>
        <Button type="submit" className="bg-primary w-full">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignupPage;

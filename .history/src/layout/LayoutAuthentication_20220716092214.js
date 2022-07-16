import React from "react";

const LayoutAuthentication = (props) => {
  const { children } = props;
  console.log(
    "🚀 ~ file: LayoutAuthentication.js ~ line 5 ~ LayoutAuthentication ~ children",
    children
  );
  return <div>{children}</div>;
};

export default LayoutAuthentication;

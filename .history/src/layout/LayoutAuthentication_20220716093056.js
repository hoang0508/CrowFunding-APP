import React from "react";
import { Link } from "react-router-dom";
const LayoutAuthentication = (props) => {
  const { children } = props;
  return (
    <div className="w-full min-h-screen bg-lite p-10">
      <Link to="/">
        <img src="logo.png" alt="crowfounding-app" />
      </Link>
    </div>
  );
};

export default LayoutAuthentication;

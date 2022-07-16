import React from "react";
import { Link } from "react-router-dom";
const LayoutAuthentication = (props) => {
  const { children } = props;
  return (
    <div className="w-full min-h-screen bg-lite p-10">
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img src="logo.png" alt="crowfounding-app" />
      </Link>
      <div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-12 lg:py-16 mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
        consequatur tenetur. Necessitatibus repellendus cumque praesentium
        officiis. Quia numquam repudiandae vitae animi saepe blanditiis
        reprehenderit corporis nihil fugit non! Corporis, commodi.
      </div>
    </div>
  );
};

export default LayoutAuthentication;

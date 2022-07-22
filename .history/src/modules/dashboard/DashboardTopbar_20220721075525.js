import React from "react";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center">
      <img src="/logo.png" alt="crowfunding-app" />
      <div className="ml-14 w-full max-w-[458px] ">
        <DashboardSearch></DashboardSearch>
      </div>
    </div>
  );
};

export default DashboardTopbar;

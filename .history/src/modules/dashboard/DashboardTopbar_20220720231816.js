import React from "react";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-x-14">
        <img src="/logo.png" alt="crowfunding-app" />
        <DashboardSearch></DashboardSearch>
      </div>
    </div>
  );
};

export default DashboardTopbar;

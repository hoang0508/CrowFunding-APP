import { Button } from "components/button";
import React from "react";
import DashboardFunc from "./DashboardFunc";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-x-10 flex-1">
        <img src="/logo.png" alt="crowfunding-app" />
        <div className="w-full max-w-[458px] ">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center gap-x-10 flex-1 justify-end">
        <DashboardFunc></DashboardFunc>
        <Button className="bg-secondary px-7">Start a campaign</Button>
        <img
          src="/logo.png"
          alt="crowfunding-app"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;

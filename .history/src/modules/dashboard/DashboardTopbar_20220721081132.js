import { Button } from "components/button";
import React from "react";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-14 flex-1">
        <img src="/logo.png" alt="crowfunding-app" />
        <div className="w-full max-w-[458px] ">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center gap-x-10 flex-1 ">
        <span>Fundrising for</span>
        <Button className="bg-secondary max-w-[191px]">Start a campaign</Button>
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

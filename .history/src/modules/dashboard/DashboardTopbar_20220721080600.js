import { Button } from "components/button";
import React from "react";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-14 w-full">
        <img src="/logo.png" alt="crowfunding-app" />
        <div className="w-full max-w-[458px] ">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center gap-x-10">
        <span>Fundrising for</span>
        <Button className="bg-secondary"></Button>
      </div>
    </div>
  );
};

export default DashboardTopbar;

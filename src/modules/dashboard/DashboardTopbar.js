import { Button } from "components/button";
import React from "react";
import { Link } from "react-router-dom";
import DashboardFunc from "./DashboardFunc";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-x-10 flex-1">
        <Link to={"/"} className="inline-block">
          <img src="/logo.png" alt="crowfunding-app" />
        </Link>
        <div className="w-full max-w-[458px] ">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center gap-x-10 flex-1 justify-end">
        <DashboardFunc></DashboardFunc>
        <Button
          type="button"
          className="bg-secondary px-7"
          href="/start-campaign"
          kind={"secondary"}
        >
          Start a campaign
        </Button>
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

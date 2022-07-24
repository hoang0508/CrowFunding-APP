import Heading from "components/common/Heading";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignItem from "modules/campaign/CampaignItem";
import React from "react";
import { v4 } from "uuid";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Heading number="4">Your Campaign</Heading>
      <Heading>Popular Campaign</Heading>
      {Array(4)
        .fill(0)
        .map((item) => (
          <CampaignItem key={v4()}></CampaignItem>
        ))}
    </LayoutDashboard>
  );
};

export default DashboardPage;

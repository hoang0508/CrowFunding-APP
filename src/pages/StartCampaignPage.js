import LayoutDashboard from "layout/LayoutDashboard";
import CampaignAddNews from "modules/campaign/parts/CampaignAddNews";
import React from "react";

const StartCampaignPage = () => {
  return (
    <LayoutDashboard>
      <CampaignAddNews></CampaignAddNews>
    </LayoutDashboard>
  );
};

export default StartCampaignPage;

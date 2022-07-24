import React from "react";
import CampCategory from "./parts/CampCategory";
import CampImage from "./parts/CampImage";
import CampTitle from "./parts/CampTitle";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-8 max-w-[1048px]">
      <CampImage className="h-[266px] flex-1"></CampImage>
      <div className="flex-1 max-w-[435px]">
        <CampCategory text="Architecture" className="text-sm"></CampCategory>
        <CampTitle className="font-bold text-xl mb-4">
          Remake - We Make architecture exhibition
        </CampTitle>
      </div>
    </div>
  );
};

export default CampaignFeature;

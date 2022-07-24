import React from "react";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
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
        <CampDesc className="text-sm mb-6">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDesc>
        <div className="w-full h-[5px] bg-[#EFEFEF] rounded-full">
          <div className="bg-primary w-2/4 h-full rounded-full"></div>
        </div>
        <div className="flex item-center">
          <CampMeta></CampMeta>
          <CampMeta></CampMeta>
          <CampMeta></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;

import React from "react";
import CampImage from "./parts/CampImage";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-8 max-w-[1048px]">
      <CampImage className="h-[266px] flex-1"></CampImage>
      <div className="flex-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat optio
        vitae praesentium odit! Tenetur quidem voluptatibus esse sed. Aliquid
        quibusdam, dolor quasi amet quaerat praesentium quas dicta culpa!
        Perferendis, necessitatibus.
      </div>
    </div>
  );
};

export default CampaignFeature;

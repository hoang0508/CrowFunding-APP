import { Button } from "components/button";
import { defaultImage } from "constants/global";
import React from "react";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import CampaignPerk from "./CampaignPerk";
import CampaignSupport from "./CampaignSupport";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";
import CampViewAuth from "./parts/CampViewAuth";

const CampaignView = () => {
  return (
    <>
      <div className="h-[140px] bg-cover bg-no-repeat bg-center rounded-3xl gradient-banner bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10 gradient-banner">
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 max-w-[1066px]">
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8"></CampImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src={defaultImage}
                  className="w-[89px] h-[70px] object-cover rounded-md"
                  alt=""
                  key={index}
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampCategory text="Architecture" className="text-sm"></CampCategory>
          <CampTitle className="font-bold text-xl mb-4">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="text-sm mb-6">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuth></CampViewAuth>
          <div className="w-full h-[5px] bg-[#EFEFEF] rounded-full mb-6">
            <div className="bg-primary w-2/4 h-full rounded-full"></div>
          </div>
          <div className="flex item-center justify-between gap-x-5 mb-4">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button className="w-full bg-primary text-white">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between bg-white  mt-[94px] p-5 border-b border-b-slate-100 mb-6">
        <div className="flex items-center gap-x-[60px] font-medium text-text3">
          <span className="text-secondary cursor-pointer">Campgain</span>
        </div>
        <Button className="bg-primary text-white">Back this project</Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2 className="mb-5 uppercase font-semibold text-lg">STORY</h2>
          <div className="w-full bg-white"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl text-text1 font-semibold">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </>
  );
};

export default CampaignView;

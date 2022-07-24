import React from "react";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";

const CampaignItem = () => {
  return (
    <div>
      <div className="h-[158px]">
        <img
          src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="px-5 py-4">
        <CampCategory text="Education"></CampCategory>
        <h3 className="mb-1 font-semibold text-text1">
          Powered Kits Learning Boxes
        </h3>
        <CampDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampDesc>
        <div className="flex item-start justify-between gap-x-5 mb-5">
          <CampMeta />
          <CampMeta />
        </div>
        <div className="flex items-center gap-x-3">
          <img
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-8 h-8 object-cover rounded-full"
          />
          <p className="text-xs font-normal text-text3">
            By <span className="text-text2 font-semibold">Mahfuzul Nabil</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;

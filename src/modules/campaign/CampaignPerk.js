import { Button } from "components/button";
import { defaultImage } from "constants/global";
import React from "react";
import CampTitle from "./parts/CampTitle";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <>
      <div className="bg-white shadow-1 rounded-xl">
        <img
          src={defaultImage}
          alt=""
          className="w-full h-[232px] object-cover rounded-xl"
        />
        <div className="p-5">
          <span className="inline-block bg-secondary py-1 px-3 text-white text-xs font-medium mb-5 rounded-sm">
            Featured
          </span>
          <CampTitle className="font-semibold text-xl mb-1">
            Special One Camera
          </CampTitle>
          <div className="mb-4 flex items-center gap-x-3">
            <span className="text-text1 text-xl font-bold">$2,724 USD</span>
            <span className="text-error line-through text-sm font-medium">
              $1,504 USD
            </span>
            <span className="text-error text-sm font-medium">(12% OFF)</span>
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <strong>Estimated Shipping</strong>
            <span className="font-normal text-sm text-text2">October 2022</span>
          </div>
          <p className="mb-4">
            <strong>05</strong>{" "}
            <span className="text-sm text-text2 font-normal">claimed</span>
          </p>
          <p className="text-sm text-text2 font-normal">Ships worldwide</p>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button className="w-full text-white bg-secondary">
            Get this perk
          </Button>
        </div>
      )}
    </>
  );
};

export default CampaignPerk;

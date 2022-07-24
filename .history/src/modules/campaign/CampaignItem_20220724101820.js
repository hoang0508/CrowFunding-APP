import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";

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
        <Link
          to="/"
          className="flex items-baseline gap-x-3 mb-4 text-xs font-medium text-text3"
        >
          <IconFolder></IconFolder>
          <span>Education</span>
        </Link>
        <h3 className="mb-1 font-semibold text-text1">
          Powered Kits Learning Boxes
        </h3>
        <p className="text-xs font-normal text-text3 mb-4">
          Fun, durable and reusable boxes with eco-friendly options.
        </p>
        <div className="flex item-start justify-between gap-x-5 mb-5">
          <div className="flex flex-col gap-y-1">
            <h4 className="text-text2 text-sm font-semibold ">$2,000</h4>
            <span className="font-normal text-xs text-text4">
              Raised of $1,900
            </span>
          </div>
          <div className="flex flex-col gap-y-1">
            <h4 className="text-text2 text-sm font-semibold ">173</h4>
            <span className="font-normal text-xs text-text4">
              Total backers
            </span>
          </div>
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

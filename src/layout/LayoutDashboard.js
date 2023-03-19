import { Button } from "components/button";
import Overlay from "components/common/Overlay";
import CampaignPerk from "modules/campaign/CampaignPerk";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite min-h-screen">
      <ReactModal
        isOpen={false}
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
        className="modal-content w-full max-w-[521px] bg-white outline-none rounded-[20px] p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
      >
        <button className="w-11 h-11 absolute z-10 right-10 top-[10px] text-text1 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="font-bold text-[25px] mb-10 text-center">
          Back this project
        </h2>
        <p className="mb-3 text-sm">Enter the contribute amount</p>
        <input
          type="text"
          name="amount"
          placeholder="$10"
          className="px-5 py-3 rounded font-medium text-lg w-full border border-strock mb-5"
        ></input>
        <p className="font-normal text-sm mb-5">
          Contribution are not associatied with perks
        </p>
        <Button className="text-white bg-primary">Continue</Button>
        <div className="mt-[60px]"></div>
        <CampaignPerk showButton></CampaignPerk>
      </ReactModal>
      <Overlay />
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;

import React from "react";

const DashboardSearch = () => {
  return (
    <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)] p-2 w-full max-w-[458px] flex items-center">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Do fundrise now"
          className=" w-full text-sm font-normal placeholder:text-text4 text-text1"
        />
      </div>
      <button className="w-[72px] h-full rounded-full bg-primary text-white flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default DashboardSearch;

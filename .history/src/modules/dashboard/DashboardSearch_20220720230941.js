import React from "react";

const DashboardSearch = () => {
  return (
    <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)] p-2 w-full max-w-[458px]">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Do fundrise now"
          className=" w-full text-sm font-normal placeholder:text-text4 text-text1"
        />
      </div>
    </div>
  );
};

export default DashboardSearch;

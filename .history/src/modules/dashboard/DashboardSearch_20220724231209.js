import React from "react";

const DashboardSearch = () => {
  return (
    <div className="relative">
      <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 flex items-center">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Do fundrise now"
            className=" w-full text-sm font-normal placeholder:text-text4 px-5 text-text1"
          />
        </div>
        <button className="w-[72px] h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
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
      <div className="absolute top-full left-0 translate-x-5 search-result w-[843px] bg-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis
        porro sit quisquam, perspiciatis necessitatibus itaque iusto
        voluptatibus cumque natus suscipit incidunt obcaecati eligendi fugit
        exercitationem reiciendis! Sapiente, consequatur ut.
      </div>
    </div>
  );
};

export default DashboardSearch;

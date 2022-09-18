import React from "react";

const DashboardSearch = () => {
  return (
    <div className="relative z-50">
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
      <div className="absolute top-full left-0 translate-x-5 search-result w-[843px] bg-white z-50 translate-y-5 pb-6 rounded-3xl">
        <div className="flex item-center justify-between p-3 bg-graySoft">
          <span className="text-sm font-medium">
            See all 10,124 fundraisier
          </span>
          <button className="flex items-center justify-center w-[72px] h-[50px] rounded-lg bg-error text-error bg-opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSearch;

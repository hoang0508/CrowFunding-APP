import React from "react";

const CampAuthor = () => {
  return (
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
  );
};

export default CampAuthor;

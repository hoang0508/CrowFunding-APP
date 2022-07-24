import { defaultImage } from "constants/global";
import React from "react";

const CampAuthor = ({ image = defaultImage, author = "Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img src={image} alt="" className="w-8 h-8 object-cover rounded-full" />
      <p className="text-xs font-normal text-text3">
        By <span className="text-text2 font-semibold">{author}</span>
      </p>
    </div>
  );
};

export default CampAuthor;

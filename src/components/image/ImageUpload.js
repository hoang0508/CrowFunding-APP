import axios from "axios";
import React from "react";

const ImageUpload = ({ onChange = () => {}, name = "" }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files;
    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);
    const reponse = await axios({
      method: "POST",
      url: "https://api.imgbb.com/1/upload?key=3bbc75e201e1e8be18b8aa12249b605d",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imageData = reponse?.data?.data;
    if (!imageData) return;
    const imageObj = {
      medium: imageData?.medium?.url,
      thumb: imageData?.thumb?.url,
      url: imageData?.url,
    };
    onChange(name, imageObj);
  };
  return (
    <label className="flex items-center justify-center w-full border border-dashed border-gray-200 h-[200px] cursor-pointer">
      <input
        type="file"
        className="hidden"
        onChange={(e) => handleUploadImage(e)}
      />
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
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
      </svg>
    </label>
  );
};

export default ImageUpload;

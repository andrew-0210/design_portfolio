import React from "react";

const ImageSlider = () => {
  return (
    <div className="mx-auto px-[1.25rem] md:max-w-[1440px]">
      <div className="no-scrollbar flex-start flex w-full gap-[0.75rem] overflow-x-auto">
        <div className="h-[350px] w-[500px] bg-red-100" />
        <div className="h-[350px] w-[500px] bg-blue-100" />
        <div className="h-[350px] w-[500px] bg-green-100" />
        <div className="h-[350px] w-[500px] bg-yellow-100" />
        <div className="h-[350px] w-[500px] bg-orange-100" />
        <div className="h-[350px] w-[500px] bg-amber-100" />
        <div className="h-[350px] w-[500px] bg-red-100" />
        <div className="h-[350px] w-[500px] bg-red-100" />
        <div className="h-[350px] w-[500px] bg-red-100" />
        <div className="h-[350px] w-[500px] bg-red-100" />
        <div className="h-[350px] w-[500px] bg-red-100" />
        <div className="h-[350px] w-[500px] bg-red-100" />
        <div className="h-[350px] w-[500px] bg-red-100" />
      </div>
    </div>
  );
};

export default ImageSlider;

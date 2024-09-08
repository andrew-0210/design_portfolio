"use client";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Description = () => {
  const descriptionContainer = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      gsap.fromTo(
        descriptionContainer.current,
        { y: 100 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".description",
            start: "top+=900 bottom-=400",
          },
        },
      );
    },
    { scope: descriptionContainer },
  );
  return (
    <div className="description mx-auto px-[1.25rem] py-[7.5rem] md:max-w-[1440px] md:px-[4.5rem]">
      <div
        className="h-[7rem] overflow-y-hidden opacity-0 sm:h-[7.25rem]"
        ref={descriptionContainer}
      >
        <h2 className="description-text">
          Creating Beautiful, thoughtful designs for{" "}
          {new Date().getFullYear() - 2021} years, <br />I combine creativity
          and high-performance code to fuel business success.
        </h2>
      </div>
    </div>
  );
};

export default Description;

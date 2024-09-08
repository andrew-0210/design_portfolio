"use client";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".first_line",
        { y: 100 },
        { y: 0, duration: 1, opacity: 1, ease: "power2.inOut" },
      );
      tl.fromTo(
        ".name_text",
        { y: 190 },
        { y: 0, duration: 1, opacity: 1, ease: "power2.inOut" },
      );
      tl.fromTo(
        ".product_text",
        { y: 240 },
        { y: 0, duration: 1, opacity: 1, ease: " power2.inOut" },
      );
    },
    { scope: container },
  );

  return (
    <main
      className="mx-auto px-[1.25rem] py-[8rem] md:max-w-[1440px] md:px-[4.5rem]"
      ref={container}
    >
      <h1 className="uppercase">
        <div className="relative mb-[0.5rem] h-[1.5rem] overflow-y-hidden text-[1.125rem] md:text-[1.5rem]">
          <span className="first_line absolute leading-[0.85] tracking-tighter opacity-0">
            Hey, I&apos;m
          </span>
        </div>
        <div className="relative mb-[0.5rem] flex h-[4.125rem] flex-col overflow-y-hidden text-[2.5rem] md:h-[12.125rem] md:text-[7.5rem]">
          <div className="name_text absolute">
            <span className="block leading-[0.85] tracking-tighter">
              Andrew
            </span>
            <span className="block leading-[0.85] tracking-tighter">
              Monthero
            </span>
          </div>
        </div>
        <div className="relative flex md:pl-[12rem]">
          <div className="mb-[0.5rem] h-[7.75rem] overflow-y-hidden pl-[6rem] text-[3rem] md:h-[15.5rem] md:text-[9.625rem]">
            <div className="text-gradient product_text flex flex-col md:flex-row">
              <span className="leading-[0.85] tracking-tighter">
                Product <br /> Designer
              </span>
              <span className="mt-[0.75rem] text-end text-[1.125rem] leading-[0.85] tracking-tighter text-[#a6a6a6] md:text-start md:text-[1.5rem]">
                Based in <br /> Mumbai
              </span>
            </div>
          </div>
        </div>
      </h1>
    </main>
  );
}

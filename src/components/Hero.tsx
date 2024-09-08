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
        { y: 190 },
        { y: 0, duration: 1, opacity: 1, ease: "power2.inOut" },
      );
      tl.fromTo(
        ".name_text",
        { y: 190 },
        { y: 0, duration: 1, opacity: 1, ease: "power2.inOut" },
      );
      tl.fromTo(
        ".product_text",
        { y: 250 },
        { y: 0, duration: 1, opacity: 1, ease: " power2.inOut" },
      );
    },
    { scope: container },
  );

  return (
    <main
      className="mx-auto h-[70vh] px-[1.25rem] py-[8rem] sm:h-[80vh] md:max-w-[1440px] md:px-[4.5rem]"
      ref={container}
    >
      <h1 className="uppercase">
        <div className="greeting-text mb-[0.5rem] overflow-y-hidden">
          <span className="first_line block leading-[0.85] tracking-tighter opacity-0">
            Hey, I&apos;m
          </span>
        </div>
        <div className="name-text mb-[0.5rem] flex flex-col overflow-y-hidden">
          <div className="name_text">
            <span className="block leading-[0.85] tracking-tighter">
              Andrew
            </span>
            <span className="block leading-[0.85] tracking-tighter">
              Monthero
            </span>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="designation-text mb-[0.5rem] overflow-y-hidden">
            <div className="text-gradient product_text flex flex-col sm:flex-row">
              <span className="leading-[0.85] tracking-tighter">
                Product <br /> Designer
              </span>
              <span className="location-text mt-[0.75rem]">
                Based in <br /> Mumbai
              </span>
            </div>
          </div>
        </div>
      </h1>
    </main>
  );
}

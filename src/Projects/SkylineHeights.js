import Image from "next/image";

const SkylineHeights = () => {
  return (
    <section className="flex h-full flex-col items-center gap-8 py-[4rem]">
      <div className="w-full border-b border-[#d4d4d4]">
        <div className="flex justify-center rounded-t-2xl border-t border-r border-l border-[#d4d4d4] px-[1rem]">
          <div className="relative h-[4rem] w-[8rem] md:h-[8rem] md:w-[10rem]">
            <Image src="/images/Base.svg" alt="Base_logo" fill={true} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-[1.5rem] md:max-w-[40rem] md:text-center">
        <h2 className="text-[1.25rem] leading-[1.4] font-bold tracking-tighter md:text-[1.75rem]">
          Developed a{" "}
          <span className="bg-[#ffdf48] px-[0.25rem]">
            Marketing Landing Page
          </span>
          for Skyline Heights, connecting future homeowners with a new community
          vision.
        </h2>
        <p>
          Reimagining how future homeowners connect with new spaces — a modern
          landing page built for discovery and inspiration.
        </p>
        {/* <a
        className="inline-block min-w-[12rem] cursor-pointer rounded-4xl border border-[#d4d4d4] bg-[#fafafa] px-[1.5rem] py-[0.75rem] text-center text-[0.938rem] font-semibold transition-all transition-discrete duration-300 hover:bg-[#0c2320] hover:text-[#fafafa]"
        href="https://base-habitation.vercel.app"
      >
        Explore
      </a> */}
      </div>
    </section>
  );
};

export default SkylineHeights;

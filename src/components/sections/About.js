import Image from "next/image";

const About = () => {
  return (
    <section
      className="flex h-full flex-col items-center overflow-hidden py-[1.25rem] sm:overflow-visible md:pb-[4rem]"
      id="about"
    >
      <div className="flex flex-col items-center gap-10 px-[1.5rem] text-center md:max-w-[40rem]">
        <div className="flex max-w-dvw sm:gap-2 lg:max-w-[70rem]">
          <div className="relative -z-10 block h-[15rem] w-[300px] -rotate-12 overflow-auto rounded-4xl sm:h-[25rem] sm:w-[15rem]">
            <Image
              src="/images/Implant_Dentist.png"
              alt="implant_dentist_website"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative z-20 block h-[15rem] w-[300px] overflow-auto rounded-4xl sm:h-[25rem] sm:w-[15rem]">
            <Image
              src="/images/OSDM.png"
              alt="osdm_website"
              fill
              className="block object-contain"
            />
          </div>
          <div className="relative -z-10 block h-[15rem] w-[300px] rotate-12 overflow-auto rounded-4xl sm:h-[25rem] sm:w-[15rem]">
            <Image
              src="/images/Hilux.png"
              alt="hilux_website"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <p className="px-[1.5rem] md:max-w-[35rem]">
          Currently building modern web experiences for Dentists, Modular Crane
          Solutions, Duct Cleaning and Pest Control Services at Onestop Dental
          Marketing — reshaping traditional industries with better design and
          stronger digital presence.
        </p>
      </div>
    </section>
  );
};

export default About;

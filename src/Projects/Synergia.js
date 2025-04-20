const Synergia = () => {
  return (
    <section className="flex h-full flex-col items-center border-t border-[#d4d4d4] py-[4rem]">
      <div className="flex flex-col items-center gap-4 px-[1.5rem] text-center md:max-w-[40rem]">
        <h2 className="text-[1.25rem] leading-[1.4] font-bold tracking-tighter md:text-[1.75rem]">
          While working with Terado Engineering, I designed a tailored{" "}
          <span className="bg-[#ffdf48] px-[0.5rem]">HRM Platform</span> named
          Synergia from scratch, automating complex HR workflows and simplifying
          day-to-day operations.
        </h2>
        <p>
          We reimagined HR operations through user research and workflow
          optimization — increasing task efficiency by 30%, reducing manual
          errors by 45%, and creating a mobile-first HRM system ready for future
          scaling.
        </p>
        <a
          className="inline-block min-w-[12rem] cursor-pointer rounded-4xl border border-[#d4d4d4] bg-[#fafafa] px-[1.5rem] py-[0.75rem] text-center text-[0.938rem] font-semibold transition-all transition-discrete duration-300 hover:bg-[#0c2320] hover:text-[#fafafa]"
          href="https://synergia-hrm.vercel.app/"
        >
          Explore
        </a>
      </div>
    </section>
  );
};

export default Synergia;

const Hero = () => {
  return (
    <section className="flex h-full flex-col items-center py-[2rem] md:py-[4rem]">
      <div className="flex flex-col items-center gap-4 px-[1.5rem] text-center md:max-w-[40rem]">
        <span className="font-handwritten text-[1.5rem] font-semibold">
          Hello, I&apos;m Andrew.
        </span>
        <h1 className="text-[1.75rem] leading-[1.2] font-semibold tracking-tighter md:text-[2.5rem]">
          I help companies gain an edge by crafting products that resonate with
          real needs.
        </h1>
        <p className="md:max-w-[35rem]">
          Building something people care about isn&apos;t easy — especially if
          it doesn&apos;t meet their real needs. But it&apos;s possible. The old
          formula still works: meaningful content, useful information, smart
          strategy, strong focus, and intuitive design. Piece them together, and
          suddenly, it clicks.
        </p>
      </div>
    </section>
  );
};

export default Hero;

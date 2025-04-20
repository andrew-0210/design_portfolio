const date = new Date().getFullYear();

const experience = [
  {
    duration: "March 2024 - Present",
    company: "Adaptify Pty. Ltd.",
    role: "UI/UX Designer",
  },
  {
    duration: "August 2022 - February 2024",
    company: "Terado Engineering Pvt. Ltd.",
    role: "UI/UX Designer",
  },
  {
    duration: "November 2021 - May 2022",
    company: "Thinkarz Technologies Pvt. Ltd.",
    role: "UI/UX Designer(Intern)",
  },
];

const Experience = () => {
  return (
    <section className="flex h-full flex-col items-center gap-4 px-[1.5rem] py-[4rem] bg-[#f4f4f4]">
      <div className="flex flex-col gap-4 md:max-w-[40rem]">
        <span className="font-handwritten text-start text-[1.25rem] font-semibold md:text-[1.5rem]">
          Helping ideas walk the steady line on the web
        </span>
        <h2 className="text-[1.25rem] leading-[1.4] font-bold tracking-tighter md:text-[1.75rem]">
          Building the kind of tools people rely on for years.
        </h2>
        <p>
          Over the past {date - 2022} years, I’ve worked with companies to
          uncover better ideas and rethink value in today’s systems. Research
          and prototyping are my tools for breaking tunnel vision and designing
          with real impact.
        </p>
        <div className="flex w-full flex-col items-start justify-start gap-6 text-start">
          {experience.map((exp, i) => (
            <div
              key={i}
              className={`${i !== experience.length - 1 ? "border-b border-[#d4d4d4]" : ""} w-full pb-[1.5rem]`}
            >
              <span className="text-[0.938rem] text-[#797979] md:text-[1rem]">
                {exp.duration}
              </span>
              <h3 className="text-[1.25rem] font-semibold md:text-[1.5rem]">
                {exp.company}
              </h3>
              <span className="font-semibold">{exp.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;

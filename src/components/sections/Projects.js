import Image from "next/image";
import Link from "next/link";

const data = [
  {
    project_name: "Creative Cooks",
    type: "Case Study",
    imageUrl: "/images/Creative_cooks_cover.png",
    href: "https://medium.com/@andrewmonthero/creative-cooks-ui-ux-case-study-5fb14d3332a1",
  },
  {
    project_name: "Skyline Heights",
    type: "Website",
    imageUrl: "/images/Skyline-Heights__Desktop.png",
    href: "",
  },
  {
    project_name: "Synergia",
    type: "Web App",
    imageUrl: "/images/Synergia_Showcase.png",
    href: "",
  },
];

const Projects = () => {
  return (
    <section className="mx-auto flex flex-col gap-[4rem] px-[1.5rem] py-[3rem] md:max-w-[82em]">
      <h2 className="text-[1.25rem] leading-[1.4] font-bold tracking-tighter md:text-[1.75rem]">
        Featured Work
      </h2>
      <section className="flex grid-cols-3 flex-col gap-8 md:grid">
        {data.map((project, i) => (
          <article className="flex flex-col gap-4" key={i}>
            <div className="relative block h-[20rem] w-auto rounded-2xl bg-[#7d0088]/30">
              <Image
                src={project.imageUrl}
                alt={project.project_name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[1.125rem] font-medium md:text-[1.25rem]">
                  {project.project_name}
                </h3>
                <p className="text-[0.938rem] md:text-[1.125rem]">
                  {project.type}
                </p>
              </div>
              <div>
                {project?.href && (
                  <Link
                    href={project.href}
                    className="inline-flex items-center justify-center rounded-full border bg-white px-[1.25rem] py-[0.25rem] text-[1.5rem] font-semibold shadow-[0_4px_0px_rgba(0,0,0,1)] transition-shadow duration-200 ease-in hover:shadow-none"
                  >
                    &rarr;
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Projects;

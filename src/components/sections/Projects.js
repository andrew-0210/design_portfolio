import Image from "next/image";
import Link from "next/link";
import { PROJECT_DATA } from "../../../constants/data";

const Projects = () => {
  return (
    <section className="mx-auto flex flex-col gap-[4rem] px-[1.5rem] py-[3rem] md:max-w-[82em]">
      <h2 className="text-[1.25rem] leading-[1.4] font-bold tracking-tighter md:text-[1.75rem]">
        Featured Work
      </h2>
      <section className="flex grid-cols-3 flex-col gap-[1.5rem] md:grid">
        {PROJECT_DATA.map((project, i) => (
          <article className="flex flex-col gap-4" key={i}>
            {/* <div className="relative block h-[20rem] w-auto overflow-clip rounded-2xl bg-[#7d0088]/30">
              <Image
                src={project.imageUrl}
                alt={project.project_name}
                fill
                className="object-cover"
              />
            </div> */}
            <div className="flex items-center justify-between rounded-[8px] border border-[#6d6d6d] p-[1.25rem]">
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
                  <a
                    href={project.href}
                    className="inline-flex items-center justify-center rounded-full border bg-white px-[1.25rem] py-[0.25rem] text-[1.5rem] font-semibold shadow-[0_4px_0px_rgba(0,0,0,1)] transition-shadow duration-200 ease-in hover:shadow-none"
                    target="_blank"
                  >
                    &rarr;
                  </a>
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

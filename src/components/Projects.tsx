"use client";

import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    image: "./Cover.png",
    title: "Creative Cooks",
    projectType: "Case Study",
    description: "A curated food recipe box delivery app.",
    href: "/projects/creative-cooks",
  },
  {
    id: 2,
    image: "",
    title: "HRM Software",
    projectType: "Product Showcase",
    description: "A curated food recipe box delivery app.",
    href: "/projects/hrm-software",
  },
  {
    id: 3,
    image: "",
    title: "Company Management - Internal Software",
    projectType: "Product Showcase",
    description: "A curated food recipe box delivery app.",
    href: `/Internal-Company-Management-Software`,
  },
  {
    id: 4,
    title: "Volta",
    image: "",
    projectType: "Website Design",
    description: "A curated food recipe box delivery app.",
    href: `/Volta`,
  },
];

const Projects = () => {
  return (
    <div className="rounded-t-[34px] bg-[#0D1529] text-[#fffffa]">
      <section className="m-auto flex flex-col gap-[2rem] rounded-[32px] px-[1rem] py-[7.5rem] md:max-w-[90em] md:rounded-none">
        <div className="flex flex-col gap-[1.25rem]">
          <h2 className="description-text">
            <span className="block text-start text-[#fffffa]">
              Exceptional Design
            </span>
            <span className="flex gap-[0.25rem]">
              <span className="lora-font text-[#fffffa]">Showcase</span>
              <div className="relative h-[1.25rem] w-[1.5rem]">
                <Image
                  src="./h2-badge.svg"
                  alt="badge"
                  fill={true}
                  className="object-fit"
                />
              </div>
            </span>
          </h2>
          <p className="text-start text-[#fffffa]">
            Stay updated with my latest case studies and designs, and explore my
            creative process.
          </p>
        </div>

        <div className="no-scrollbar flex-start flex w-full gap-[0.75rem] overflow-x-auto md:flex-col lg:grid lg:grid-cols-12 lg:gap-[0.75rem]">
          {projects.map((project) => (
            <div className="lg:col-span-6 lg:grid" key={project.id}>
              <Link href={project.href} key={project.id} className="text-white">
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  projectType={project.projectType}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

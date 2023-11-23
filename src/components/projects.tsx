import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

const Projects = () => {
  return (
    <section>
      <SectionHeading heading="My Projects" />
      {projectsData.map((project, index) => {
        return (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default Projects;

type ProjectProps = (typeof projectsData)[number];

// functional component
function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]">
      <div className=" py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]">
        <h3 className=" text-2xl font-semibold">{title}</h3>
        <p className=" mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <li
              className=" bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        className=" absolute top-8 -right-40 w-[28.25rem]"
      />
    </section>
  );
}

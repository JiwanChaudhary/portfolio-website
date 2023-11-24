import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

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

"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section ref={ref} className=" scroll-mt-28" id="projects">
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

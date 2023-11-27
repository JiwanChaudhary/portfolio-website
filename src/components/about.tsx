"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] mb-28 text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading heading="About Me" />

      <p>
        Currently being in the last semester of{" "}
        <span className=" font-bold">engineering</span>, I always had the
        interest in the software industry field and self learing software
        development. My favourite part of programming is the{" "}
        <span className=" font-bold">problem-solving aspect.</span> My core
        stack is{" "}
        <span className=" font-bold">React, Next.js, Node.js and MongoDB.</span>{" "}
        I am also familiar with{" "}
        <span className=" font-bold">
          TypeScript, PostGRES, Prisma and Express.js.
        </span>{" "}
        I am always looking to learn new technology. I am currently looking for
        a <span className=" font-bold">full-time positioin</span> as a software
        developer.
      </p>
    </motion.section>
  );
};

export default About;

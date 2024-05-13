import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ticTacToe from "../../public/jiwanTodo.jpeg";
import eventBooking from "../../public/event-booking.png";
import lipstick from "../../public/lipstick.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Event Booking System",
    description:
      "A platform to book different events in different venue as per their preferred date and time. User roles are defined. Admin can modify or see the details",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Moment",
      "Khalti",
      "NodeMailer",
    ],
    imageUrl: eventBooking,
  },
  {
    title: "Cosmetics E-Commerce",
    description:
      "A E-commerce platform where the cosmetics items are available specially for girls, where they can filter the products of their choice and add it to the cart.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: lipstick,
  },
  {
    title: "TODO",
    description:
      "This is the todo app built using ReactJS in the frontend and dotnet core in the backend. For the database MySQL workbench has been used.",
    tags: ["React", "Dotnet Core", "MySQL", "React Context"],
    imageUrl: ticTacToe,
  },
  //   {
  //     title: "Word Analytics",
  //     description:
  //       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //     imageUrl: wordanalyticsImg,
  //   },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Dotnet Core",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "MySQL",
  "Framer Motion",
] as const;

import React from "react";

type props = {
  heading: string;
};

const SectionHeading: React.FC<props> = ({ heading }) => {
  return <h2 className=" text-3xl font-medium mb-8 uppercase">{heading}</h2>;
};

export default SectionHeading;

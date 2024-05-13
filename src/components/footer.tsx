import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">
        &copy; {new Date().getFullYear()} Jiwan. All Rights Reserved.
      </small>
      <p className=" text-xs">
        <span className=" font-semibold">About this website:</span>{" "}
        built with React and Next.js(App Router and Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend.
      </p>
    </footer>
  );
};

export default Footer;

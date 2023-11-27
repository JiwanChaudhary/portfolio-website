"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading heading="Contact Me" />

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly{" "}
        <a
          className=" underline text-blue-500"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jeewanchaudhary6@gmail.com"
          target="_blank"
        >
          here
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col gap-2 dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 px-4 borderBlack rounded-lg dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
          required
          maxLength={100}
        />
        <textarea
          name="message"
          className="h-52 my-3 borderBlack rounded-lg p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          required
          maxLength={500}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import BurstBload from "./burst-bload";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex justify-center">
        <SectionHeading>👨‍💻 About Me</SectionHeading>
        <BurstBload />
      </div>
      <p>
        Hello, I'm Faliq! I am dedicated to continuously expanding my knowledge
        and skills in{" "}
        <span className="font-medium">
          data-driven development and analysis{" "}
        </span>{" "}
        while actively learning emerging technologies. I am proficient in
        processing datasets, designing scalable systems, and building machine
        learning models to deliver actionable insights and robust solutions. My
        focus spans from engineering high-performance applications to extracting
        strategic value from complex data.
      </p>
    </motion.section>
  );
}

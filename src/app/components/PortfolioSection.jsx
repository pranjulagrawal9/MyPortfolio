"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { projects } from "../ProjectsInfo";

function PortfolioSection() {
  return (
    <div id="portfolio" className="mt-40">
      <motion.h2
        className="text-center text-5xl font-extrabold mb-16 max-[425px]:text-3xl"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        My Portfolio
      </motion.h2>
      <div className="flex flex-wrap max-[850px]:flex-col max-[850px]:items-center">
        {projects.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default PortfolioSection;

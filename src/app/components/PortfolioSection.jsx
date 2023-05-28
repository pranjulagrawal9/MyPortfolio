"use client"

import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function PortfolioSection() {
  return (
    <div id="portfolio" className="mt-40">
      <motion.h2 className="text-center text-5xl font-extrabold mb-16" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: .4}}>
        My Portfolio
      </motion.h2>
      <div className="flex flex-wrap">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default PortfolioSection;

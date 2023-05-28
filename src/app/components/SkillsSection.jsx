"use client";

import { useState } from "react";
import FrontEndSkills from "./FrontEndSkills";
import BackendSkills from "./BackendSkills";
import { motion } from "framer-motion";

function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <motion.div id="skills" className="mt-28 min-h-screen" initial={{x: '-100%', opacity: 0}} whileInView={{x: '0', opacity: 1}} transition={{duration: .5}}>
      <h2 className="text-center text-5xl font-extrabold mb-16">Skills</h2>

      <div className="flex gap-1 text-xl font-semibold">
        <span
          onClick={() => handleTabClick("frontend")}
          className={`tab ${activeTab === "frontend" ? "tab-active" : ""}`}
        >
          Frontend
        </span>
        <span
          onClick={() => handleTabClick("backend")}
          className={`tab ${activeTab === "backend" ? "tab-active" : ""}`}
        >
          Backend
        </span>
        <span
          onClick={() => handleTabClick("other")}
          className={`tab ${activeTab === "other" ? "tab-active" : ""}`}
        >
          Other
        </span>
      </div>

      {activeTab === "frontend" && <FrontEndSkills />}
      {activeTab === "backend" && <BackendSkills />}
      {activeTab === "other" && <div>Other Content</div>}
    </motion.div>
  );
}

export default SkillsSection;

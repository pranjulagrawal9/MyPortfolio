import React from "react";
import ProjectCard from "./ProjectCard";

function PortfolioSection() {
  return (
    <div>
      <h2 className="text-center text-5xl font-extrabold mb-16">
        My Portfolio
      </h2>
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

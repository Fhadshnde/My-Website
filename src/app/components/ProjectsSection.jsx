"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Brainwave Project",
    description: "Front End Project",
    image: "/images/projects/Project-1.jpg",
    tag: ["All My Projects", "Web", "Front-End"],
    gitUrl: "https://github.com/Fhadshnde/Brainwave.git",
    previewUrl: "https://brainwaveeweb.netlify.app/",
  },
  {
    id: 2,
    title: "Bank Modren Website",
    description: "Front End Project",
    image: "/images/projects/Project-2.jpg",
    tag: ["All My Projects", "Web", "Front-End"],
    gitUrl: "https://github.com/Fhadshnde/Bank.git",
    previewUrl: "https://hoobankmodren.netlify.app/",
  },
  {
    id: 3,
    title: "Full-stack social media",
    description: "Full-stack social media",
    image: "/images/projects/Project-5.jpg",
    tag: ["All My Projects", "Web", "Full-Stack"],
    gitUrl: "https://github.com/Fhadshnde/Social-media.git",
    previewUrl: "https://social-front-henna.vercel.app",
  },
  {
    id: 4,
    title: "Full-stack Hotels",
    description: "Full-stack Hotels",
    image: "/images/projects/Project-6.jpg",
    tag: ["All My Projects", "Web", "Full-Stack"],
    gitUrl: "https://github.com/Fhadshnde/booking-mern.git",
    previewUrl: "https://teal-cannoli-399069.netlify.app/",
  },
  {
    id: 6,
    title: "Dagtal-Agency Project",
    description: "Dagtal-Agency Project Next.js",
    image: "/images/projects/Project-7.jpg",
    tag: ["All My Projects", "Web", "Next.js", "Full-Stack"],
    gitUrl: "https://github.com/Fhadshnde/Dagtal-Agency.git",
    previewUrl: "https://fastidious-hamster-b5e797.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All My Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All My Projects"
          isSelected={tag === "All My Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full-Stack"
          isSelected={tag === "Full-Stack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Front-End"
          isSelected={tag === "Front-End"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

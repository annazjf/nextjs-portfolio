"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Wine Infographic Design",
    description: "An educational infographic showcase grape wine varieties, taste profiles, and wine characteristics with visual storytelling. 2023.",
    image: "/images/projects/infographic-preview.jpg", 
    tag: ["All", "Design"],
    gitUrl: "/", 
    previewUrl: "/projects/infographic", 
    type: "pdf"
  },
  {
    id: 2,
    title: "Logo & App Interface Design",
    description: "Mobile app interface design for Koi no Kie featuring intuitive user experience, modern UI patterns, and engaging visual design. 2023.",
    image: "/images/projects/logo-design.jpg",
    tag: ["All", "Design"],
    gitUrl: "/",
    previewUrl: "/projects/koi-no-kie",
    type: "figma"
  },
  {
    id: 3,
    title: "Ireland Study Website",
    description: "Personal travel website using HTML, CSS, and JavaScript documenting my study abroad journey in Ireland with blogs, photos, and cultural experiences during my time in Ireland. 2024.",
    image: "/images/projects/Ireland.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/annazjf/Ireland-Study-Abroad-Website",
    previewUrl: "https://annazjf.github.io/dublin/",
  },
  {
    id: 4,
    title: "Heart Disease Analysis Project SI370",
    description: "A comprehensive analysis of heart disease datasets using Python and machine learning techniques to identify key factors and trends. 2024.",
    image: "/images/projects/SI370-Final-Project.jpg",
    tag: ["All", "Data"],
    gitUrl: "https://github.com/annazjf/Heart-Disease-Analysis-Project-SI370",
    previewUrl: "/projects/si370-heart-disease",
    type: "pdf"
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
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
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Design"
          isSelected={tag === "Design"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
              type={project.type}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

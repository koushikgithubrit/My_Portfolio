"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Encrypt Share",
    description: "Share your data Securely and secretly",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/koushikgithubrit/Encrypt_Share.git",
    previewUrl: "encrypt-share.onrender.com",
  },
  {
    id: 2,
    title: "Encrypt Share 2.0",
    description: "NFT Marketplace",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/koushikgithubrit/National-Finals-2024-Emosort.git",
    previewUrl: "https://hack-india-2024-emosort-8ubx.vercel.app/",
  },

  {
    id: 3,
    title: "Hate Speech Detection Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/koushikgithubrit/Hate-Speech-Detection-using-Machine-Learning.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Text to Image generator",
    description: "Prompt for your dream image to generate",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "Describes me",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
 
  {
    id: 6,
    title: "Ulti Chattri",
    description: "Rain water management app",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/koushikgithubrit/Inverted_Umbrella-School-Project.git",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Smart Gas Detector",
    description: "Detect the gas leak and alert accordingly",
    image: "/images/projects/2.png",
    tag: ["All", "Device"],
    gitUrl: "https://github.com/koushikgithubrit/Smoke-Detector.git",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Auto Gas Knob On/Off Device",
    description: "Gas Knob on/off device",
    image: "/images/projects/5.png",
    tag: ["All", "Device"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Inverted Umbrella",
    description: "Rain water waste managment system",
    image: "/images/projects/3.png",
    tag: ["All", "Device"],
    gitUrl: "https://github.com/koushikgithubrit/Inverted_Umbrella-School-Project.git",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Robotic Car",
    description: "Mobile control car",
    image: "/images/projects/1.png",
    tag: ["All", "Device"],
    gitUrl: "https://github.com/koushikgithubrit/Robotic_Car.git",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Web to App converter",
    description: "Convert websites to android app",
    image: "/images/projects/5.png",
    tag: ["All", "Device"],
    gitUrl: "https://github.com/koushikgithubrit/theHub-app.git",
    previewUrl: "/",
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
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="Device"
          isSelected={tag === "Device"}
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

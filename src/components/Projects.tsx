import React, { useState } from "react";
import { motion } from "framer-motion";
import projectText from "../i18n/projects";
import ScrollIndicator from "./ScrollIndicator";

interface ProjectsProps {
  lang: "es" | "en";
}

const projectsData = [
  {
    title: { es: "Proyecto 1", en: "Project 1" },
    description: {
      es: "Aplicación web desarrollada con React y Tailwind CSS.",
      en: "Web app developed with React and Tailwind CSS.",
    },
    category: "web",
    icon: "💻",
    image: "/projects/project1.jpg",
  },
  {
    title: { es: "Proyecto 2", en: "Project 2" },
    description: {
      es: "Rediseño de interfaz centrada en la experiencia de usuario.",
      en: "UI redesign focused on user experience.",
    },
    category: "uiux",
    icon: "🎨",
    image: "/projects/project2.jpg",
  },
  {
    title: { es: "Proyecto 3", en: "Project 3" },
    description: {
      es: "Aplicación backend creada con Node.js.",
      en: "Backend application built with Node.js.",
    },
    category: "backend",
    icon: "🛠️",
    image: "/projects/project3.jpg",
  },
];

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <motion.section
      className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
          {projectText[lang].title}
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {projectText[lang].filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setSelectedCategory(value)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === value
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-transparent border-gray-400 text-gray-600 dark:text-gray-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-lg bg-white/30 dark:bg-white/5 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-xl text-left hover:scale-[1.02] transition-transform duration-300"
              whileHover={{ y: -5 }}
            >
              <img
                src={project.image}
                alt={project.title[lang]}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="text-4xl mb-2">{project.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {project.title[lang]}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {project.description[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
       <ScrollIndicator href="/contact" />
    </motion.section>
  );
};

export default Projects;

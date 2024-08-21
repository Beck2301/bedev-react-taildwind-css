import React from "react";
import { motion } from "framer-motion";

interface ProjectsProps {
  id?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <motion.section
      id={id}
      className="flex items-center justify-center h-screen snap-start bg-cover bg-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="text-center max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800 dark:text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">Proyecto 1</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Descripción breve del proyecto 1.
            </p>
          </motion.div>
          <motion.div
            className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800 dark:text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">Proyecto 2</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Descripción breve del proyecto 2.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

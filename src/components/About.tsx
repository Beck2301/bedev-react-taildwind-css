import React from "react";
import { motion } from "framer-motion";

interface AboutProps {
  id?: string;
}
const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <motion.section
      id={id}
      className="flex items-center justify-center h-screen snap-start bg-cover bg-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="text-center max-w-3xl px-4">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-lg">
          Soy un desarrollador frontend con experiencia en la creación de
          aplicaciones web utilizando React y Tailwind CSS. Me apasiona crear
          interfaces de usuario atractivas y funcionales.
        </p>
      </div>
    </motion.section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

interface HeroProps {
  id?: string;
  lang: "es" | "en";
}

const heroText = {
  es: {
    name: "Bryan Escobar",
    role: "Desarrollador Web",
    aboutBtn: "Sobre mí",
  },
  en: {
    name: "Bryan Escobar",
    role: "Web Developer",
    aboutBtn: "About me",
  },
};

const Hero: React.FC<HeroProps> = ({ id, lang }) => {
  return (
    <motion.section
      id={id}
      className="relative flex items-center justify-center h-screen bg-white dark:bg-gray-900 snap-start overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-xl px-4 z-10">
        <div className="relative mb-6 inline-block">
          <img
            src="/Me.png"
            alt="Bryan Escobar"
            className="w-52 h-52 object-cover rounded-full mx-auto shadow-xl z-10 relative"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
          {heroText[lang].name}
        </h1>

        <p className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500 dark:from-orange-300 dark:to-pink-400 mb-6">
          {heroText[lang].role}
        </p>

        <motion.a
          href="/about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-2 text-white font-medium rounded-full bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg hover:shadow-xl transition-all"
        >
          {heroText[lang].aboutBtn}
        </motion.a>
      </div>

      {/* Línea decorativa inferior */}
      <img
        src="/linea.svg"
        alt="Line"
        className="absolute md:-right-72 right-0 md:bottom-0 -bottom-52 md:w-auto w-64 opacity-70"
      />

      <ScrollIndicator href="/about" />

    </motion.section>
  );
};

export default Hero;

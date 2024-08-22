import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <motion.section
      id={id}
      className="flex items-center justify-center h-screen snap-start bg-cover bg-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-2xl px-4">
        <div className="relative">
          <img
            src="/Me.png"
            alt="Me"
            className="w-52 mx-auto mb-5 relative z-10 rounded-full shadow-2xl"
          />
          <div className="absolute top-0 right-0 z-0">
            <svg
              width="66"
              height="104"
              viewBox="0 0 66 104"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black dark:text-white"
            >
              <rect x="30.2525" y="0.509644" width="3.05551" height="3.05551" />
              <rect x="15.2985" y="0.509644" width="3.05551" height="3.05551" />
              <rect y="0.509644" width="3.05551" height="3.05551" />
              <rect
                x="47.5671"
                y="0.000213623"
                width="3.05551"
                height="3.05551"
                transform="rotate(30 47.5671 0.000213623)"
              />
              <rect
                x="64.4723"
                y="0.000213623"
                width="3.05551"
                height="3.05551"
                transform="rotate(60 64.4723 0.000213623)"
              />
              <rect x="30.2525" y="14.6829" width="3.05551" height="3.05551" />
              <rect x="15.2985" y="14.6829" width="3.05551" height="3.05551" />
              <rect y="14.6829" width="3.05551" height="3.05551" />
              <rect
                x="47.5671"
                y="14.1739"
                width="3.05551"
                height="3.05551"
                transform="rotate(30 47.5671 14.1739)"
              />
              <rect
                x="64.4723"
                y="14.1739"
                width="3.05551"
                height="3.05551"
                transform="rotate(60 64.4723 14.1739)"
              />
              <rect x="30.2525" y="28.8569" width="3.05551" height="3.05551" />
              <rect x="15.2985" y="28.8569" width="3.05551" height="3.05551" />
              <rect y="28.8569" width="3.05551" height="3.05551" />
              <rect
                x="47.5174"
                y="28.3476"
                width="3.05551"
                height="3.05551"
                transform="rotate(30 47.5174 28.3476)"
              />
              <rect
                x="64.4723"
                y="28.3476"
                width="3.05551"
                height="3.05551"
                transform="rotate(60 64.4723 28.3476)"
              />
              <rect x="30.2525" y="43.0309" width="3.05551" height="3.05551" />
              <rect x="15.2985" y="43.0309" width="3.05551" height="3.05551" />
              <rect y="43.0309" width="3.05551" height="3.05551" />
              <rect
                x="47.5671"
                y="42.5215"
                width="3.05551"
                height="3.05551"
                transform="rotate(30 47.5671 42.5215)"
              />
              <rect
                x="64.4723"
                y="42.5215"
                width="3.05551"
                height="3.05551"
                transform="rotate(60 64.4723 42.5215)"
              />
              <rect x="30.2525" y="57.2048" width="3.05551" height="3.05551" />
              <rect x="15.2985" y="57.2048" width="3.05551" height="3.05551" />
              <rect y="57.2048" width="3.05551" height="3.05551" />
              <rect
                x="47.5671"
                y="56.6957"
                width="3.05551"
                height="3.05551"
                transform="rotate(30 47.5671 56.6957)"
              />
              <rect
                x="64.4723"
                y="56.6957"
                width="3.05551"
                height="3.05551"
                transform="rotate(60 64.4723 56.6957)"
              />
              <rect x="30.2525" y="71.3785" width="3.05551" height="3.05551" />
              <rect x="15.2985" y="71.3785" width="3.05551" height="3.05551" />
              <rect y="71.3785" width="3.05551" height="3.05551" />
              <rect
                x="47.5174"
                y="70.8694"
                width="3.05551"
                height="3.05551"
                transform="rotate(30 47.5174 70.8694)"
              />
              <rect
                x="64.4723"
                y="70.8694"
                width="3.05551"
                height="3.05551"
                transform="rotate(60 64.4723 70.8694)"
              />
              <rect x="30.2525" y="85.553" width="3.05551" height="3.05551" />
              <rect x="15.2985" y="85.553" width="3.05551" height="3.05551" />
              <rect y="85.553" width="3.05551" height="3.05551" />
              <rect
                x="47.5671"
                y="85.0436"
                width="3.05551"
                height="3.05551"
                transform="rotate(30 47.5671 85.0436)"
              />
              <rect
                x="64.4723"
                y="85.0436"
                width="3.05551"
                height="3.05551"
                transform="rotate(60 64.4723 85.0436)"
              />
              <rect x="30.2525" y="99.7264" width="3.05551" height="3.05551" />
              <rect x="15.2985" y="99.7264" width="3.05551" height="3.05551" />
              <rect y="99.7264" width="3.05551" height="3.05551" />
              <rect
                x="47.5671"
                y="99.2173"
                width="3.05551"
                height="3.05551"
                transform="rotate(30 47.5671 99.2173)"
              />
              <rect
                x="64.4723"
                y="99.2173"
                width="3.05551"
                height="3.05551"
                transform="rotate(60 64.4723 99.2173)"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-4">Bryan Escobar</h2>
        <p className="text-xl bg-clip-text text-transparent bg-orange-gradient">
          Desarrollador Frontend
        </p>
        <div className="absolute md:-right-72 right-0 md:bottom-0 -bottom-52 ">
          <img src="/linea.svg" alt="Line" className="md:w-full h-full" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

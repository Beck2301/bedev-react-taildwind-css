
import React from "react";
import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  href: string;
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ href, className = "" }) => {
  return (
    <motion.div
      className={`absolute bottom-10 ${className}`}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <a href={href} aria-label={`Scroll to ${href}`}>
        <svg
          className="w-6 h-6 text-gray-600 dark:text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </motion.div>
  );
};

export default ScrollIndicator;

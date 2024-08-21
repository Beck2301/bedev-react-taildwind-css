import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 flex items-center">
      <div className="pl-10">
        <ul className="flex flex-col gap-10 mt-20">
          <li className="transform -rotate-90 origin-top-left py-4 text-center">
            <Link to="hero" className="text-black dark:text-white  block">
              Home
            </Link>
          </li>
          <li className="transform -rotate-90 origin-top-left py-4 text-center">
            <Link to="about" className="text-black dark:text-white  block">
              About
            </Link>
          </li>
          <li className="transform -rotate-90 origin-top-left py-4 text-center">
            <Link to="projects" className="text-black dark:text-white  block">
              Projects
            </Link>
          </li>
          <li className="transform -rotate-90 origin-top-left py-4 text-center">
            <Link to="contact" className="text-black dark:text-white  block">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

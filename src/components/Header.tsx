import React, { useState, useEffect } from "react";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode") === "true";
    setDarkMode(savedMode);
    document.body.classList.toggle("dark", savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
    localStorage.setItem("dark-mode", (!darkMode).toString());
  };

  return (
    <header
      className={`fixed top-0 w-full px-10 py-5 flex justify-between items-center ${
        darkMode ? " text-white" : " text-black"
      }`}
    >
      <div className="text-xl font-bold flex items-center">
        <img
          src={darkMode ? "/logo_white.svg" : "/logo_black.svg"}
          alt="Logo"
          className="mr-2"
        />
      </div>

      <button onClick={toggleDarkMode} className="text-2xl">
        {darkMode ? <MdOutlineLightMode /> : <MdLightMode />}
      </button>
    </header>
  );
};

export default Header;

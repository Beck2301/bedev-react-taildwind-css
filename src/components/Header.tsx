import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full px-10 py-5 md:flex items-center justify-between ${
          darkMode ? "text-white" : "text-black"
        } z-50`}
      >
        {/* Logo y menú hamburguesa para móviles */}
        <div className="flex items-center justify-between md:hidden">
          <img
            src={darkMode ? "/logo_white.svg" : "/logo_black.svg"}
            alt="Logo"
            className="mr-4"
          />
          <button onClick={toggleSidebar} className="z-50">
            {isSidebarOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Logo para versión de escritorio */}
        <div className="hidden md:flex text-xl font-bold items-center">
          <img
            src={darkMode ? "/logo_white.svg" : "/logo_black.svg"}
            alt="Logo"
            className="mr-2"
          />
        </div>

        {/* Botón de modo oscuro para todos los dispositivos */}
        <button
          onClick={toggleDarkMode}
          className={`fixed z-50 ${
            isSidebarOpen ? "bottom-20" : "bottom-4"
          } right-4 text-2xl md:static md:bottom-4 md:right-4 md:top-auto`}
        >
          {darkMode ? <MdOutlineLightMode /> : <MdLightMode />}
        </button>
      </header>

      {/* Fondo oscuro con desenfoque cuando el Sidebar está abierto en móviles */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden backdrop-blur-sm"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar para móviles como ventana flotante */}
      <div
        className={`fixed top-1/2 left-1/2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 transition-transform transform z-50 ${
          isSidebarOpen
            ? "translate-x-[-50%] translate-y-[-50%] opacity-100"
            : "translate-x-[-150%] opacity-0"
        } md:hidden`}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div>
          <ul className="flex flex-col gap-4">
            <li className="py-2 text-center">
              <Link
                to="hero"
                className="text-black dark:text-white block"
                onClick={toggleSidebar}
              >
                Home
              </Link>
            </li>
            <li className="py-2 text-center">
              <Link
                to="about"
                className="text-black dark:text-white block"
                onClick={toggleSidebar}
              >
                About
              </Link>
            </li>
            <li className="py-2 text-center">
              <Link
                to="projects"
                className="text-black dark:text-white block"
                onClick={toggleSidebar}
              >
                Projects
              </Link>
            </li>
            <li className="py-2 text-center">
              <Link
                to="contact"
                className="text-black dark:text-white block"
                onClick={toggleSidebar}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar rotado para versión de escritorio */}
      <div className="hidden md:flex fixed top-0 left-0 h-screen w-64 items-center z-50">
        <div className="pl-10">
          <ul className="flex flex-col gap-10 mt-20">
            <li className="transform -rotate-90 origin-top-left py-4 text-center">
              <Link to="hero" className="text-black dark:text-white block">
                Home
              </Link>
            </li>
            <li className="transform -rotate-90 origin-top-left py-4 text-center">
              <Link to="about" className="text-black dark:text-white block">
                About
              </Link>
            </li>
            <li className="transform -rotate-90 origin-top-left py-4 text-center">
              <Link to="projects" className="text-black dark:text-white block">
                Projects
              </Link>
            </li>
            <li className="transform -rotate-90 origin-top-left py-4 text-center">
              <Link to="contact" className="text-black dark:text-white block">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

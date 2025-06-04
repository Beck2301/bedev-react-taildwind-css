import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";

const App: React.FC = () => {
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "es" || storedLang === "en") {
      setLang(storedLang);
    } else {
      const browserLang = navigator.language.startsWith("es") ? "es" : "en";
      setLang(browserLang);
      localStorage.setItem("lang", browserLang);
    }
  }, []);

  const handleLangChange = (newLang: "es" | "en") => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <Router>
      <div className="relative">
        <Header lang={lang} setLang={handleLangChange} />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/hero" replace />} />
            <Route path="/hero" element={<Hero lang={lang}/>} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/projects" element={<Projects lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

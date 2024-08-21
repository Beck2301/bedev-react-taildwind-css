import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Sidebar from "./components/Slidebar";

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative">
        <Header />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/hero" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

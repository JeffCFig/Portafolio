import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import AnimatedBackground from './components/Background'; // Fondo animado si tienes el componente
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import SystemControlRest from "./pages/SystemControlRest";
import SystemControlED from "./pages/SystemControlEd";
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import NotFoundPage from './pages/404'; // Tu página 404 personalizada
import { AnimatePresence } from 'framer-motion'; // Si usas animaciones de entrada
import WelcomeScreen from './pages/WelcomeScreen'; // Pantalla de bienvenida opcional

const LandingPage = ({ showWelcome, setShowWelcome }) => (
  <>
    <AnimatePresence mode="wait">
      {showWelcome && (
        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      )}
    </AnimatePresence>
    {!showWelcome && (
      <>
        <Navbar />
        <AnimatedBackground />
        <Home />
        <About />
        <Projects />
        <Certificates />
        <Skills />
        <Contact />
        <footer>
          <center>
            <span className="block text-sm pb-4 text-[#E0E0E0] text-center">
              © 2026{" "}
              <a href="https://flowbite.com/" className="text-[#3ABEF9] hover:underline">
                Jefferson Cagua
              </a>
              . All Rights Reserved.
            </span>
          </center>
        </footer>
      </>
    )}
  </>
);

const ProjectPageLayout = () => (
  <>
    <Projects />
    <footer>
      <center>
        
        <span className="block text-sm pb-4 text-[#E0E0E0] text-center">
          © 2026{" "}
          <a href="https://flowbite.com/" className="text-[#3ABEF9] hover:underline">
            Jefferson Cagua
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <LandingPage 
              showWelcome={showWelcome} 
              setShowWelcome={setShowWelcome} 
            />
          } 
        />
        <Route path="/projects" element={<ProjectPageLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/proyectos/system-control-rest" element={<><Navbar /><SystemControlRest /></>} />
        <Route path="/proyectos/system-control-ed" element={<><Navbar /><SystemControlED /></>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
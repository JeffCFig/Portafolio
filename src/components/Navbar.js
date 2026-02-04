import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "#home", label: "Inicio" },
  { to: "#About", label: "Sobre mí" },
  { to: "#projects", label: "Proyectos" },
  { to: "#Certificados", label: "Certificados" },
  { to: "#skills", label: "Habilidades" },
  { to: "#contact", label: "Contacto" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  // Cierra el menú al hacer clic fuera (en móviles)
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Cierra el menú cuando cambia de página
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        menuOpen ? "bg-[#262626]" : "bg-[#262626]/70 backdrop-blur-xl"
      }`}
      ref={menuRef}
    >
      <div className="mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="text-xl font-bold text-[#E8F1FF]"
            >
              JEFFERSON CAGUA
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => handleScrollTo(e, link.to)}
                  className="group relative px-1 py-2 text-sm font-medium"
                >
                  <span
                    className="relative z-10 transition-colors duration-300 text-[#E8F1FF] group-hover:text-white"
                  >
                    {link.label}
                  </span>
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFD94F] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                  />
                </a>
              ))}
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`relative p-2 text-[#E8F1FF] hover:text-white transition-transform duration-300 ease-in-out transform ${
                menuOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
              }`}
              aria-label="Abrir menú"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={link.to}
              href={link.to}
              onClick={(e) => handleScrollTo(e, link.to)}
              className="block px-4 py-3 text-lg font-medium transition-all duration-300 ease text-[#E8F1FF] hover:text-white"
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: menuOpen ? "translateX(0)" : "translateX(50px)",
                opacity: menuOpen ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
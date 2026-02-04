import React, { useState, useEffect, useCallback, memo } from "react";
import Perfil from "../Assets/perfil.png";
import { Github, Linkedin, Mail, ExternalLink} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Memoized CTA Button
const CTAButton = memo(function CTAButton({ href, text, icon: Icon, onClick }) {
  return (
    <a href={href} onClick={onClick}>
      <button className="group relative w-[160px] px-6 py-3 rounded-xl bg-[var(--color-warning)] text-[#262626] font-semibold shadow-[0_4px_18px_rgba(255,217,79,0.25)] hover:shadow-[0_8px_24px_rgba(58,190,249,0.35)] hover:scale-105 hover:bg-[var(--color-accent)] transition-all duration-300 flex items-center justify-center gap-2">
        <span className="relative z-10">{text}</span>
        <Icon className={`relative z-10 w-4 h-4 ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300`} />
      </button>
    </a>
  );
});

// Memoized Social Link with hover effect
const SocialLink = memo(function SocialLink({ icon: Icon, link }) {
  let hoverColor = "group-hover:text-[var(--color-warning)]"; // amarillo al pasar mouse
  if (link.includes("github.com")) hoverColor = "group-hover:text-[#333]";
  if (link.includes("linkedin.com")) hoverColor = "group-hover:text-[#0077B5]";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-full bg-black/50 p-3.5 hover:bg-[var(--color-warning)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,217,79,0.35)] backdrop-blur-sm border border-white/10 hover:border-[var(--color-warning)]/50"
    >
      <Icon className={`w-5 h-5 text-gray-300 ${hoverColor} transition-all duration-300 group-hover:scale-110`} />
    </a>
  );
});

const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = [
  "Estudiante de TI",
  "Creativo en soluciones TI"
];

const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/JeffCFig" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/jefferson-cagua-figueroa/" },
];

export default function Home() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const initAOS = () => {
      AOS.init({ once: true, offset: 10 });
    };
    initAOS();
    window.addEventListener('resize', initAOS);
    return () => {
      window.removeEventListener('resize', initAOS);
    };
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isTyping]);

  const handleScrollTo = useCallback((e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-[var(--color-bg)] px-4 md:px-10" id="home">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center w-full">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-center lg:items-start items-center">
          <div className="space-y-2 w-full" data-aos="fade-up" data-aos-delay="600">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              <span className="relative inline-block">
                <span className="absolute -inset-3 bg-[var(--color-accent)]/15 blur-3xl opacity-30 animate-pulse"></span>
                <span className="relative text-[var(--color-text)]">
                  FULL-STACK
                </span>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-3 bg-[var(--color-warning)]/20 blur-3xl opacity-30 animate-pulse"></span>
                <span className="relative text-[var(--color-warning)] font-bold">
                  Developer
                </span>
              </span>
            </h1>
          </div>

          <div className="text-3xl font-light text-gray-200 mb-6 flex items-center min-h-[50px]">
            <span className="text-gray-200">{text}</span>
            <span className="animate-blink ml-1 text-[var(--color-warning)] font-bold">|</span>
          </div>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
            Apasionado por la implementación de soluciones web modernas, combinando diseño atractivo y tecnología robusta. Comprometido con la innovación, la calidad y el aprendizaje continuo, te invito a conocer mi trabajo profesional.<br /><br />
            <span className="font-semibold text-[var(--color-warning)]">¿Listo para llevar tu web al siguiente nivel?</span>
          </p>
          {/* Buttons */}
          <div className="flex gap-4">
            <CTAButton
              href="#projects"
              text="Projects"
              icon={ExternalLink}
              onClick={(e) => handleScrollTo(e, "#projects")}
            />
            <CTAButton
              href="#contact"
              text="Contact"
              icon={Mail}
              onClick={(e) => handleScrollTo(e, "#contact")}
            />
          </div>
          {/* Social Links */}
          <div className="hidden sm:flex gap-4 mt-6 justify-start" data-aos="fade-up" data-aos-delay="1600">
            {SOCIAL_LINKS.map((social, index) => (
              <SocialLink key={index} {...social} />
            ))}
          </div>
        </div>
        {/* Right Column */}
        <div className="flex-1 flex items-center justify-center mt-12 lg:mt-0">
          <div className="relative group" data-aos="fade-left" data-aos-delay="800">
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-[var(--color-accent)]/20 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            {/* Border decoration */}
            <div className="absolute -inset-4 rounded-3xl border border-[var(--color-warning)]/30 opacity-30 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              src={Perfil}
              alt="Imagen de perfil"
              className="relative w-[330px] h-auto object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-[0_10px_40px_rgba(58,190,249,0.25)] group-hover:drop-shadow-[0_15px_50px_rgba(58,190,249,0.4)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
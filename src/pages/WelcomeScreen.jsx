import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, User } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Fondo sólido oscuro con efectos más visibles
const BackgroundEffect = () => (
  <div className="absolute inset-0 bg-[#262626] overflow-hidden">
    <div className="absolute inset-0 opacity-50">
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#3ABEF9]/20 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-[#A855F7]/20 blur-3xl animate-float" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-[#FFD94F]/15 blur-3xl animate-float-slower" />
    </div>
    <div className="absolute inset-0 opacity-15">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  </div>
);

// Iconos elegantes con círculo y halo animado más visible
const IconButton = ({ Icon }) => (
  <div className="flex items-center justify-center">
    <div className="relative flex items-center justify-center">
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#3ABEF9]/40 animate-ping" />
      <div className="flex items-center justify-center p-3 bg-black/60 rounded-full border-2 border-[#3ABEF9]/60 shadow-lg shadow-[#3ABEF9]/40">
        <Icon className="w-8 h-8 md:w-9 md:h-9 text-[#3ABEF9]" />
      </div>
    </div>
  </div>
);

// Animación de escritura tipo código, solo el mensaje principal
const TypingIntro = () => {
  const typingText = "a mi portafolio web";
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    let timeout;
    if (index < typingText.length) {
      timeout = setTimeout(() => {
        setDisplayed(typingText.slice(0, index + 1));
        setIndex(index + 1);
      }, 56);
    }
    return () => clearTimeout(timeout);
  }, [index, typingText]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 400);
    return () => clearInterval(blinkInterval);
  }, []);

  // Resalta "portafolio web" con gradiente de la paleta
  const highlightStart = typingText.indexOf("portafolio");
  const highlightEnd = typingText.length;

  return (
    <div className="w-full flex items-center justify-center h-24 mt-4">
      <pre className="font-mono text-2xl md:text-4xl bg-transparent p-2 rounded-lg font-semibold tracking-wide">
        <span className="text-[#FFD94F]">
          {displayed.slice(0, highlightStart)}
        </span>
        <span className="text-[#FFD94F] font-bold">
          {displayed.slice(highlightStart, highlightEnd)}
        </span>
        <span className={blink ? "opacity-100" : "opacity-0"}>|</span>
      </pre>
    </div>
  );
};

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: false });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 400);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#262626] z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <BackgroundEffect />

          <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-3xl mx-auto">
              {/* Título elegante, solo una vez */}
              <h1 className="text-center text-3xl md:text-5xl font-extrabold mb-4 text-[#FFD94F] tracking-tight drop-shadow-lg">
                ¡Bienvenida/o!
              </h1>

              {/* Animación de escritura solo con el mensaje principal */}
              <div className="w-full flex justify-center mb-2">
                <TypingIntro />
              </div>

              {/* Iconos principales con presentación limpia */}
              <div className="flex justify-center gap-8 mb-10">
                {[Code2, User, Github].map((Icon, index) => (
                  <IconButton key={index} Icon={Icon} />
                ))}
              </div>
              <div className="flex justify-center">
                <div className="px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-gray-300 border border-white/10 rounded-full bg-black/40 backdrop-blur-sm">
                  Construyendo experiencias digitales
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;

/* Animaciones personalizadas más dinámicas */
const styles = document?.createElement?.("style");
if (styles && !document.getElementById("welcome-screen-animations")) {
  styles.id = "welcome-screen-animations";
  styles.innerHTML = `
    @keyframes float { 0%,100%{ transform: translateY(0) translateX(0);} 25%{ transform: translateY(-20px) translateX(6px);} 50%{ transform: translateY(-30px) translateX(-4px);} 75%{ transform: translateY(-15px) translateX(5px);} }
    @keyframes float-slow { 0%,100%{ transform: translateY(0) translateX(0);} 25%{ transform: translateY(-14px) translateX(-5px);} 50%{ transform: translateY(-22px) translateX(4px);} 75%{ transform: translateY(-10px) translateX(-3px);} }
    @keyframes float-slower { 0%,100%{ transform: translateY(0) translateX(0);} 25%{ transform: translateY(-10px) translateX(3px);} 50%{ transform: translateY(-16px) translateX(-3px);} 75%{ transform: translateY(-7px) translateX(2px);} }
    .animate-float { animation: float 5s ease-in-out infinite; }
    .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
    .animate-float-slower { animation: float-slower 9s ease-in-out infinite; }
  `;
  document.head.appendChild(styles);
}
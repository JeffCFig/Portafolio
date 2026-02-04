import React, { useEffect } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import certificates from "../data/certificates";

const CertificateCard = ({ certificate, index }) => {
  return (
    <div
      className="group relative"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="600"
    >
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"
        style={{ backgroundColor: certificate.color }}
      ></div>
      
      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-white/40 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: `${certificate.color}15` }}
          >
            <Award
              className="w-6 h-6"
              style={{ color: certificate.color }}
            />
          </div>
          <span className="text-sm font-medium text-gray-500">
            {certificate.date}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#2647A4] mb-2">
          {certificate.title}
        </h3>

        <p className="text-sm font-medium mb-3" style={{ color: certificate.color }}>
          {certificate.issuer}
        </p>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {certificate.description}
        </p>

        <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-500">Obtenido en {certificate.date}</span>
        </div>
      </div>
    </div>
  );
};

const Certificates = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: 50 });
    const handleResize = () => AOS.refresh();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-20 px-[5%] md:px-[10%] bg-gradient-to-br from-[#262626] to-[#1a1a1a] relative overflow-hidden" id="Certificados">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-[#3ABEF9]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-[#A855F7]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="zoom-in-up" data-aos-duration="600">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-[#FFD94F]" />
            <span className="text-sm font-semibold text-[#FFD94F] uppercase tracking-wide">Certificaciones</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certificados
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Certificaciones que validan mis habilidades y competencias en desarrollo web, diseño y tecnologías modernas.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <CertificateCard key={cert.id} certificate={cert} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="600"
        >
          <p className="text-gray-400 mb-6">
            ¿Quieres ver más detalles de mis credenciales?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#2647A4] to-[#A855F7] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Ponte en contacto
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

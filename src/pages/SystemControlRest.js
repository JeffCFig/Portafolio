import React, { useState } from "react";
import "../Styles/ProjectShowcase.css";

// Importa aquí tus imágenes reales de los diferentes módulos
import mainImg from "../Assets/system_rest/main_screen.png";
import inventoryImg from "../Assets/system_rest/inventory.png";
import purchasesImg from "../Assets/system_rest/purchases.png";
import salesImg from "../Assets/system_rest/sales.png";
import cashImg from "../Assets/system_rest/cash.png";
import accountsImg from "../Assets/system_rest/accounts.png";
import reportsImg from "../Assets/system_rest/reports.png";
import usersImg from "../Assets/system_rest/users.png";
import settingsImg from "../Assets/system_rest/settings.png";

const modules = [
  {
    name: "Inventario",
    image: inventoryImg,
    description: "Administra productos y stock en tiempo real. Registra ingresos, salidas, alertas y reportes de inventario."
  },
  {
    name: "Compras",
    image: purchasesImg,
    description: "Gestiona compras a proveedores, registra facturas y actualiza inventario automáticamente."
  },
  {
    name: "Ventas",
    image: salesImg,
    description: "Realiza ventas rápidas, emite comprobantes y controla ventas diarias."
  },
  {
    name: "Caja",
    image: cashImg,
    description: "Controla ingresos y egresos de efectivo. Permite cierres de caja diarios."
  },
  {
    name: "Cuentas",
    image: accountsImg,
    description: "Administra cuentas por cobrar/pagar, realiza seguimiento de pagos pendientes y vencimientos."
  },
  {
    name: "Reportes",
    image: reportsImg,
    description: "Genera reportes PDF de ventas, compras, inventario y caja, listos para imprimir o analizar."
  },
  {
    name: "Usuarios",
    image: usersImg,
    description: "Gestiona usuarios, roles, permisos y accesos para proteger la información."
  },
  {
    name: "Configuración",
    image: settingsImg,
    description: "Personaliza parámetros generales, logotipo, imagen de fondo , datos del restaurante y preferencias."
  }
];

const SystemControlRest = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="min-h-screen bg-[#262626] pt-20 pb-10">
      <div className="scr-main">
      <div className="scr-hero">
        <img src={mainImg} alt="System Control Rest" className="scr-hero-img" />
        <div>
          <h1 className="scr-title">System Control Rest</h1>
          <p className="scr-description">
            Sistema de escritorio desarrollado en <b>Python</b> con <b>tkinter</b>, <b>sqlite3</b> y <b>ReportLab</b> para la gestión integral de restaurantes.<br />
            Incluye módulos completos para controlar inventario, compras, ventas, caja, cuentas, reportes, usuarios y configuración.
          </p>
        </div>
      </div>
      <div className="scr-modules-nav">
        {modules.map((mod, idx) => (
          <button
            key={mod.name}
            className={`scr-mod-btn${selected === idx ? " active" : ""}`}
            onClick={() => setSelected(idx)}
          >
            {mod.name}
          </button>
        ))}
      </div>
      <div className="scr-module-card">
        <img src={modules[selected].image} alt={modules[selected].name} className="scr-module-img" />
        <div>
          <h2>{modules[selected].name}</h2>
          <p>{modules[selected].description}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SystemControlRest;
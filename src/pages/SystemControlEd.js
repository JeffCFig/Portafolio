import React, { useState, useEffect } from "react";
import mainImg from "../Assets/system_ed/main_screen.png";
import studentsImg from "../Assets/system_ed/students.png";
import representativesImg from "../Assets/system_ed/representatives.png";
import enrollmentImg from "../Assets/system_ed/enrollment.png";
import advisorsImg from "../Assets/system_ed/advisors.png";
import coursesImg from "../Assets/system_ed/courses.png";
import parallelsImg from "../Assets/system_ed/parallels.png";
import schedulesImg from "../Assets/system_ed/schedules.png";
import invoiceImg from "../Assets/system_ed/invoice.png";
import verifyInvoiceImg from "../Assets/system_ed/verify_invoice.png";
import suppliersImg from "../Assets/system_ed/suppliers.png";
import productsImg from "../Assets/system_ed/products.png";
import cashCloseImg from "../Assets/system_ed/cash_close.png";
import cashVerifyImg from "../Assets/system_ed/cash_verify.png";
import accountsPayableImg from "../Assets/system_ed/accounts_payable.png";
import accountsReceivableImg from "../Assets/system_ed/accounts_receivable.png";
import reportsImg from "../Assets/system_ed/reports.png";
import usersAdminImg from "../Assets/system_ed/users_admin.png";
import configCompanyImg from "../Assets/system_ed/config_company.png";
import "../Styles/System_Control_Ed.css"; 

const modules = [
  // GESTIÓN
  {
    group: "Gestión",
    name: "Administrar Estudiantes",
    image: studentsImg,
    description: "Registra, actualiza y consulta la información académica y personal de los estudiantes."
  },
  {
    group: "Gestión",
    name: "Administrar Representantes",
    image: representativesImg,
    description: "Administra los datos de los representantes legales de cada estudiante."
  },
  {
    group: "Gestión",
    name: "Proceso de Matriculación",
    image: enrollmentImg,
    description: "Gestiona el proceso completo de matrícula de los estudiantes, asignando cursos y paralelos."
  },
  // ASESORÍA
  {
    group: "Asesoría",
    name: "Administrar Asesores",
    image: advisorsImg,
    description: "Registra y administra asesores educativos, su información y asignaciones."
  },
  // PLANIFICACIÓN
  {
    group: "Planificación",
    name: "Administrar Cursos",
    image: coursesImg,
    description: "Crea y organiza los cursos académicos de la institución."
  },
  {
    group: "Planificación",
    name: "Administrar Paralelos",
    image: parallelsImg,
    description: "Gestiona paralelos y distribuye estudiantes y docentes según necesidades."
  },
  {
    group: "Planificación",
    name: "Administrar Horarios",
    image: schedulesImg,
    description: "Configura y visualiza los horarios de clases, exámenes y actividades."
  },
  // FACTURACIÓN
  {
    group: "Facturación",
    name: "Factura",
    image: invoiceImg,
    description: "Emite facturas por servicios educativos y otros conceptos."
  },
  {
    group: "Facturación",
    name: "Verificar Factura",
    image: verifyInvoiceImg,
    description: "Consulta y valida facturas emitidas para control administrativo."
  },
  // OPERACIONES
  {
    group: "Operaciones",
    name: "Proveedor",
    image: suppliersImg,
    description: "Gestiona proveedores de bienes y servicios para la institución."
  },
  {
    group: "Operaciones",
    name: "Productos",
    image: productsImg,
    description: "Administra el inventario de productos y materiales escolares."
  },
  // CAJA
  {
    group: "Caja",
    name: "Generar Cierre de Caja",
    image: cashCloseImg,
    description: "Realiza el cierre de caja diario, generando reportes automáticos."
  },
  {
    group: "Caja",
    name: "Verificar Cierre de Caja",
    image: cashVerifyImg,
    description: "Consulta los cierres de caja realizados y verifica su correcto registro."
  },
  // CUENTAS
  {
    group: "Cuentas",
    name: "Por Pagar",
    image: accountsPayableImg,
    description: "Administra y controla las cuentas por pagar de la institución."
  },
  {
    group: "Cuentas",
    name: "Por Cobrar",
    image: accountsReceivableImg,
    description: "Gestiona las cuentas por cobrar, pagos pendientes, y vencimientos."
  },
  // REPORTES
  {
    group: "Reportes",
    name: "Reportes",
    image: reportsImg,
    description: "Reportes de usuarios, estudiantes, asesores, productos, compras, ventas, cuentas y caja."
  },
  // USUARIOS
  {
    group: "Usuarios",
    name: "Administrar Usuarios",
    image: usersAdminImg,
    description: "Gestiona la creación, edición y eliminación de usuarios del sistema."
  },
  // CONFIGURACIÓN
  {
    group: "Configuración",
    name: "Datos Generales (Empresa)",
    image: configCompanyImg,
    description: "Configura los datos principales de la empresa o institución educativa."
  }
];

const groupNames = Array.from(new Set(modules.map(m => m.group)));

const SystemControlEd = () => {
  const [selectedGroup, setSelectedGroup] = useState(groupNames[0]);
  const [selectedModule, setSelectedModule] = useState(
    modules.find(m => m.group === groupNames[0]).name
  );

  const groupModules = modules.filter(m => m.group === selectedGroup);

  useEffect(() => {
    const modulesOfGroup = modules.filter(m => m.group === selectedGroup);
    setSelectedModule(modulesOfGroup[0].name);
  }, [selectedGroup]);

  const currentModule = groupModules.find(m => m.name === selectedModule);

  return (
    <div className="min-h-screen bg-[#262626] pt-20 pb-10">
      <div className="edu-main">
      <div className="edu-hero">
        <img src={mainImg} alt="System Control Ed" className="edu-hero-img" />
        <div>
          <h1 className="edu-title">System Control Ed</h1>
          <p className="edu-description">
            Sistema de escritorio desarrollado en <b>Python</b> con <b>tkinter</b>, <b>sqlite3</b> y <b>ReportLab</b> para la gestión integral de instituciones educativas.<br />
            Incluye módulos para administración académica, financiera y operativa, con reportes avanzados y personalización total.
          </p>
        </div>
      </div>
      <div className="edu-module-groups">
        {groupNames.map((group) => (
          <button
            key={group}
            className={`edu-group-btn${selectedGroup === group ? " active" : ""}`}
            onClick={() => setSelectedGroup(group)}
          >
            {group}
          </button>
        ))}
      </div>
      <div className="edu-modules-nav">
        {groupModules.map((mod) => (
          <button
            key={mod.name}
            className={`edu-mod-btn${selectedModule === mod.name ? " active" : ""}`}
            onClick={() => setSelectedModule(mod.name)}
          >
            {mod.name}
          </button>
        ))}
      </div>
      {currentModule && (
        <div className="edu-module-card">
          <img src={currentModule.image} alt={currentModule.name} className="edu-module-img" />
          <div>
            <h2>{currentModule.name}</h2>
            <p>{currentModule.description}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default SystemControlEd;
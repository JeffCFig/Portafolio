import ID_0 from "../Assets/siscore.webp"; // Cambia el nombre y la ruta si es necesario
import ID_1 from "../Assets/trendy_shop.webp";
import ID_2 from "../Assets/system_rest/main_screen.png";
import ID_3 from "../Assets/system_ed/main_screen.png";

// Proyecto nuevo que se verá primero
const projects = [
    {
    "id": 0,
    "title": "Sistema Integral Siscore",
    "description": "Sistema Integral Siscore es una plataforma web para Siscore EC que optimiza la gestión de cortes y reconexiones del servicio de agua de EPMAPAPED, con dashboards, reportes y seguimiento en tiempo real, garantizando control eficiente, seguridad y escalabilidad.",
    "type": "web",
    "link": "https://system-siscore.vercel.app/",
    "image": ID_0
  },
  {
    id: 1,
    title: "Trendy Shop Ec",
    description: "Sistema e-commerce especializado en moda masculina, con carrito intuitivo, administración de usuarios, pagos seguros (transferencia, DeUna, PayPal), generación de órdenes en PDF y gestión administrativa, todo en un diseño responsive.",
    type: "web",
    link: "https://trendyshopec.shop/",
    image: ID_1
  },
  {
    id: 2,
    title: "System Control Rest",
    description: "Sistema integral para el control y la gestión de restaurantes. Ofrece módulos completos de inventario, compras, ventas, caja, cuentas, reportes, usuarios y configuración, lo que permite administrar de manera eficiente todas las operaciones del negocio.",
    type: "desktop",
    link: "/proyectos/system-control-rest",
    image: ID_2
  },
  {
    id: 3,
    title: "System Control ED",
    description: "Sistema integral para la gestión educativa: administración de estudiantes, representantes, matrículas, planificación académica, facturación, operaciones, caja, cuentas, reportes avanzados, usuarios y configuración.",
    type: "desktop",
    link: "/proyectos/system-control-ed",
    image: ID_3
  }
];

export default projects;
# 💼 Solvix – Sistema de Tickets para IT

> Sistema web integral para la **gestión del soporte técnico (IT)** dentro de una organización.  
> Permite **registrar, asignar, dar seguimiento y cerrar tickets de incidencias** de manera centralizada, mejorando la comunicación entre usuarios, técnicos y administradores.

---

## 📘 Descripción general

**Solvix** es una plataforma desarrollada bajo arquitectura **cliente-servidor**, que optimiza el proceso de atención de solicitudes técnicas en empresas o instituciones.  
El sistema permite controlar el flujo completo de un ticket —desde su creación hasta su resolución— garantizando trazabilidad, eficiencia y transparencia.

Desarrollado como proyecto formativo del **SENA – Tecnólogo en Análisis y Desarrollo de Software**, Solvix combina **buenas prácticas de ingeniería de software**, diseño UI/UX moderno y tecnologías web actuales.

---

## 🚀 Tecnologías principales

| Capa | Tecnología | Descripción |
|------|-------------|-------------|
| **Frontend** | ⚛️ React.js + TailwindCSS | Interfaz moderna, dinámica y responsive. |
| **Backend** | 🐍 FastAPI (Python) | API REST de alto rendimiento y escalabilidad. |
| **Base de datos** | 🗄️ MySQL | Sistema de gestión relacional para almacenamiento persistente. |
| **Autenticación** | 🔒 JWT + Bcrypt | Seguridad y control de roles. |
| **Gráficos** | 📊 Chart.js  | Visualización de métricas y reportes. |

---

## 🧩 Módulos principales

### 🔐 Autenticación y roles
- Inicio de sesión con credenciales cifradas.
- Asignación de roles (Administrador, Técnico, Usuario final).  
- Protección de rutas mediante JWT.

### 🧾 Gestión de tickets
- Creación, asignación, seguimiento y cierre de solicitudes.  
- Control de prioridad, categoría y estado.  
- Registro de tiempos de atención y resolución.

### 🧰 Panel del técnico
- Visualización de tickets asignados.  
- Actualización de estado y comentarios.  
- Adjuntos de evidencia de soporte.

### 🧑‍💼 Panel del administrador
- Gestión de usuarios, categorías y prioridades.  
- Reportes estadísticos de rendimiento.  
- Control global del sistema.

### 📊 Reportes y estadísticas
- Visualización de indicadores de desempeño.  
- Exportación de reportes a **CSV o PDF**.  
- Gráficos dinámicos por estado, categoría o técnico.

### 📨 Notificaciones
- Alertas automáticas sobre cambios de estado.  
- Recordatorios de tickets pendientes.

---

## ⚙️ Requisitos previos

Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) v18+
- [Python](https://www.python.org/) v3.10+  
- [MySQL](https://www.mysql.com/) v8+  
- [Git](https://git-scm.com/)  

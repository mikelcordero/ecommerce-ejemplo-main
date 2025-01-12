# Mi Proyecto Node - Ecommerce

Este es un proyecto **Fullstack** que combina un **frontend** (creado con **Next.js**) y un **backend** (desplegado en **Render**, con base de datos en **Supabase**). Proporciona funcionalidades de comercio electrónico (CRUD de productos, usuarios, etc.), autenticación y otras características.

## Despliegue

- **Frontend** (Next.js en Vercel):  
  [https://mi-proyecto-node-5pwnlp7bn-mikelcorderos-projects.vercel.app](https://mi-proyecto-node-5pwnlp7bn-mikelcorderos-projects.vercel.app)

- **Backend** (Node.js en Render):  
  [https://mi-proyecto-node.onrender.com](https://mi-proyecto-node.onrender.com)

## Descripción General

- **Frontend (Next.js)**: Permite a los usuarios navegar, ver productos, iniciar sesión, y manejar la lógica de carrito/checkout (dependiendo de lo que hayas implementado).  
  - El proyecto fue bootstrapped con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
  - Se conecta al backend para obtener y manipular datos (productos, usuarios, etc.).  
  - Está desplegado en **Vercel**.

- **Backend (Node.js + Express)**:
  - Provee endpoints REST para manejar productos, usuarios y autenticación (con JWT y contraseñas encriptadas con bcrypt).
  - Base de datos: **Supabase** (PostgreSQL en la nube).
  - Desplegado en **Render**.

## Tecnologías Principales

- **Next.js** para el frontend (React).
- **Node.js y Express** para el backend.
- **Supabase** (PostgreSQL) para la base de datos.
- **Vercel** para el despliegue del frontend.
- **Render** para el despliegue del backend.
- **bcrypt** para encriptar contraseñas.
- **jsonwebtoken (JWT)** para la autenticación.

---

## Instrucciones de Uso (Backend)

1. **Clonar el repositorio** (ejemplo):
   ```bash
   git clone https://github.com/tu-usuario/mi-proyecto-node.git

# 🎮 GameStore - Pre-Entrega de React (Refactorizado con Context)

Este proyecto es la Pre-Entrega N del curso de React de Talento Tech. Es una simulación de un E-commerce de videojuegos ("GameStore") donde los usuarios pueden ver un catálogo de productos, gestionar un carrito de compras y navegar por diferentes secciones de la tienda.

---

## 🚀 Demo en Vivo

Podés ver el proyecto desplegado y funcionando en GitHub Pages en el siguiente enlace:

**[https://thbernardo.github.io/talento-tech-react-pre-entrega/](https://thbernardo.github.io/talento-tech-react-pre-entrega/)**

---

## ✨ Características (Features)

El proyecto cumple con todos los requerimientos de la pre-entrega, incluyendo:

### 1. Ruteo y Navegación
* **Sitio Multi-página:** Navegación fluida entre "Inicio", "Juegos" y "Carrito" implementada con `react-router-dom`.
* **Rutas Dinámicas:** Página de detalle (`/juegos/:id`) que se genera dinámicamente para cada producto del catálogo, separando la lógica de carga (`ItemDetailContainer`) de la presentación (`ItemDetail`).
* **Rutas Protegidas:** La página de `/carrito` es privada. Si el usuario no está "logueado", es redirigido a una página de `/login`.
* **Navbar Interactiva:** La barra de navegación resalta la sección activa (`NavLink`) y muestra la cantidad de ítems en el carrito usando el `CartContext`.

### 2. Carga de Datos y Manejo de Estado Avanzado
* **React Context API (`useContext`):** El estado y las funciones del carrito (añadir, eliminar, comprar, notificaciones) se manejan globalmente a través de `CartContext`, eliminando la necesidad de *prop drilling*.
* **Hooks de React:** Uso de `useState` para estados locales (login, carga, error) y `useEffect` para la carga asíncrona de datos.
* **Datos desde JSON Local:** Los productos se cargan (`fetch`) desde un archivo `juegos.json` local (simulando una API) en los componentes contenedores (`ItemListContainer`, `ItemDetailContainer`).
* **Manejo de Carga y Error:** Se muestran mensajes de "Cargando..." o "Error" durante la obtención de datos.

### 3. Funcionalidad de E-commerce
* **Catálogo de Productos:** Componente `ItemListContainer` carga los datos y `ItemList` los mapea para mostrarlos en `Item` (tarjetas de producto) en un layout de grilla (5 columnas).
* **Carrito de Compras Funcional (vía Context):**
    * Añadir productos desde `Item`.
    * Eliminar productos individualmente desde `Cart`.
    * Ver la imagen y el precio de cada ítem en `Cart`.
    * Botón "Comprar" en `Cart` que se **deshabilita** si está vacío.
    * Al "Comprar", el carrito se vacía (`CartContext`) y se notifica al usuario.
* **Notificación "Toast" Avanzada (vía Context):**
    * Al añadir un ítem, aparece un pop-up controlado por `CartContext`.
    * Muestra imagen y nombre del juego.
    * Incluye barra de progreso y botón "X".

### 4. Diseño y UX
* **Tema Oscuro:** Diseño "dark mode" con variables CSS.
* **Carrusel en Inicio:** `HomePage` con carrusel de juegos destacados (`react-responsive-carousel`).
* **Favicon y Título:** Personalizados para "GameStore".
* **Layout Responsivo:** Adaptación a diferentes pantallas usando Flexbox y Grid.
* **Estructura de Componentes:** Organización siguiendo las pautas (carpetas `Nav`, `ItemListContainer`, `Item`, etc.).

---

## 🔧 Tecnologías Utilizadas

* **[React](https://reactjs.org/)** (v18+)
    * Hooks: `useState`, `useEffect`, **`useContext`**, `useRef`
    * Context API
* **[Vite](https://vitejs.dev/)** (Entorno de desarrollo y build tool)
* **[JavaScript (ES6+)](https://www.w3schools.com/js/js_es6.asp)**
* **[CSS3](https://www.w3schools.com/css/)**
    * Variables CSS
    * Flexbox
    * Grid
    * Animaciones (`@keyframes`)
* **[React Router DOM](https://reactrouter.com/en/main)** (Ruteo, `NavLink`)
* **[React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel)** (Carrusel)
* **[Git](https://git-scm.com/) / [GitHub](https://github.com/)** (Control de versiones)
* **[GitHub Pages](https://pages.github.com/)** (Despliegue)

## 📄 Contexto del Proyecto

* **Curso:** Talento Tech - React
* **Autor:** thbernardo (Thomas Bernardo)
* **Entrega:** Pre-Entrega React JS (Refactorizada con Context API)

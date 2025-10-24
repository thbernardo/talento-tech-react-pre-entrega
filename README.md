# 🎮 GameStore - Pre-Entrega de React

Este proyecto es la **Pre-Entrega** del curso de React de Talento Tech. Es una simulación de un E-commerce de videojuegos ("GameStore") donde los usuarios pueden ver un catálogo de productos, gestionar un carrito de compras y navegar por diferentes secciones de la tienda.

---

## 🚀 Demo en Vivo

Podés ver el proyecto desplegado y funcionando en GitHub Pages en el siguiente enlace:

**[https://thbernardo.github.io/talento-tech-react-pre-entrega/](https://thbernardo.github.io/talento-tech-react-pre-entrega/)**

---

## ✨ Características (Features)

El proyecto cumple con todos los requerimientos de la pre-entrega, incluyendo:

### 1. Ruteo y Navegación
* **Sitio Multi-página:** Navegación fluida entre "Inicio", "Juegos" y "Carrito" implementada con `react-router-dom`.
* **Rutas Dinámicas:** Página de detalle (`/juegos/:id`) que se genera dinámicamente para cada producto del catálogo.
* **Rutas Protegidas:** La página de `/carrito` es privada. Si el usuario no está "logueado", es redirigido a una página de `/login`.

### 2. Carga de Datos y Estado
* **Hooks de React:** Uso intensivo de `useState` para manejar el estado (carrito, login, notificaciones) y `useEffect` para la carga de datos.
* **Datos desde JSON Local:** Los productos se cargan asincrónicamente (`fetch`) desde un archivo `juegos.json` local (simulando una API).
* **Manejo de Carga y Error:** Se muestran mensajes de "Cargando..." o "Error" mientras se cargan los datos.

### 3. Funcionalidad de E-commerce
* **Catálogo de Productos:** Página "Juegos" con un layout en grilla (5 columnas) que muestra todos los productos disponibles.
* **Carrito de Compras Funcional:**
    * Añadir productos desde la lista.
    * Eliminar productos individualmente desde el carrito.
    * Ver la imagen y el precio de cada ítem en el carrito.
    * Botón "Comprar" que se **deshabilita** si el carrito está vacío.
    * Al "Comprar", el carrito se vacía y se notifica al usuario.
* **Notificación "Toast" Avanzada:**
    * Al añadir un ítem, aparece un pop-up en la esquina derecha.
    * Muestra la imagen y nombre del juego agregado.
    * Incluye una **barra de progreso** que indica el tiempo para el fade-out.
    * Tiene un botón "X" para cerrar la notificación manualmente.

### 4. Diseño y UX
* **Tema Oscuro:** Un diseño moderno y cohesivo estilo "dark mode" implementado con variables CSS.
* **Carrusel en Inicio:** La página principal (`HomePage`) muestra un carrusel de juegos destacados usando `react-responsive-carousel`.
* **Favicon y Título:** Título de pestaña "GameStore" e ícono de página personalizados.
* **Layout Responsivo:** El diseño de la tienda se adapta a diferentes tamaños de pantalla usando Flexbox y Grid.

---

## 🔧 Tecnologías Utilizadas

* **[React](https://reactjs.org/)** (v18+)
* **[Vite](https://vitejs.dev/)**
* **[JavaScript (ES6+)](https://www.w3schools.com/js/js_es6.asp)**
* **[CSS3](https://www.w3schools.com/css/)**
    * Variables CSS (para el tema oscuro)
    * Flexbox
    * Grid
    * Animaciones (`@keyframes`)
* **[React Router DOM](https://reactrouter.com/en/main)** (Para el ruteo de páginas)
* **[React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel)** (Para el carrusel de la Home)

---

## 📄 Contexto del Proyecto

* **Curso:** Talento Tech - React
* **Autor:** thbernardo (Thomas Bernardo)
* **Entrega:** Pre-Entrega

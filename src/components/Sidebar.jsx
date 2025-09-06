import { motion } from "framer-motion";
import { useState } from "react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("#about");

  const navLinks = [
    { name: "SOBRE MÍ", href: "#about" },
    { name: "EXPERIENCIA", href: "#experience" },
    { name: "PROYECTOS", href: "#projects" },
    { name: "CONTACTO", href: "#contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/gabriel-ccama/",
      icon: (
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z" />
      ),
    },
    {
      href: "https://github.com/gabriel10987",
      icon: (
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      ),
    },
    {
      href: "mailto:gabrielccama66@gmail.com",
      icon: (
        <path d="M12 13.065l-11.82-7.98c.056-.038.113-.078.17-.117.313-.225.635-.434.964-.624 1.133-.658 2.402-1.08 3.699-1.23.038-.004.075-.008.113-.012h13.648c1.634.156 3.186.717 4.57 1.664-.095.065-.19.132-.285.2L12 13.065zM24 8.027v11.158c-.221.511-.501.99-.832 1.43-1.221 1.63-3.236 2.385-5.223 2.216H6.055c-1.985.169-4.001-.586-5.222-2.216-.331-.44-.611-.919-.832-1.43V8.027l11.823 7.99 11.823-7.99z" />
      ),
    },
    {
      href: "https://wa.me/51928581959",
      icon: (
        <path d="M12.01 2.004c-5.514 0-9.99 4.477-9.99 9.99 0 1.762.462 3.479 1.341 4.998l-1.417 5.19 5.308-1.392c1.464.799 3.108 1.219 4.759 1.219 5.513 0 9.99-4.477 9.99-9.99s-4.477-9.99-9.99-9.99zm0 18.038c-1.445 0-2.851-.383-4.093-1.111l-.293-.17-3.143.823.84-3.075-.179-.317c-.79-1.4-1.208-2.988-1.208-4.612 0-4.407 3.584-7.99 7.99-7.99s7.99 3.583 7.99 7.99-3.584 7.99-7.99 7.99zm4.325-5.378c-.237-.118-1.403-.691-1.62-.768-.217-.079-.375-.118-.532.118-.158.237-.609.768-.747.926-.137.158-.275.178-.512.059-.237-.118-.997-.366-1.898-1.169-.7-.623-1.171-1.39-1.309-1.627-.137-.237-.014-.365.104-.483.106-.106.237-.275.355-.412.118-.138.158-.237.237-.395.079-.158.04-.296-.02-.414-.059-.118-.532-1.284-.728-1.76-.192-.459-.389-.397-.532-.404-.138-.006-.296-.006-.454-.006-.158 0-.414.059-.631.296-.217.237-.829.811-.829 1.977 0 1.165.849 2.292.968 2.45.118.158 1.671 2.556 4.051 3.582.566.245 1.007.391 1.35.5.566.18 1.08.155 1.485.094.453-.067 1.403-.57 1.6-1.121.197-.552.197-1.024.137-1.121-.06-.098-.217-.158-.454-.276z" />
      ),
    },
  ];

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-between h-full px-4 py-6 bg-[#0f172a]"
    >
      <div>
        {/* Nombre y Título */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-montserrat font-extrabold text-titulo"
        >
          Gabriel Ccama
        </motion.h1>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-md font-montserrat font-semibold text-[#38bdf8] mt-2"
        >
          Desarrollador FullStack
        </motion.h2>

        {/* Frase */}
        <p className="mt-4 font-montserrat font-normal text-parrafo text-sm">
          Busco el equilibrio entre funcionalidad y estética para tu negocio.
        </p>

        {/* Navegación */}
        <nav className="flex flex-col space-y-6 mt-12 font-montserrat text-xs">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`relative flex items-center gap-3 transition-colors duration-300 group ${activeLink === link.href
                  ? "text-white font-semibold"
                  : "text-parrafo font-normal hover:text-white"
                }`}
            >
              {/* Línea izquierda animada */}
              <motion.span
                initial={{ width: "24px" }}
                animate={{
                  width:
                    activeLink === link.href
                      ? "64px" // Más grande si está activo
                      : "24px", // Pequeña si no está activa
                  backgroundColor:
                    activeLink === link.href
                      ? "#ffffff"
                      : "#4b5563", // Gris por defecto
                }}
                transition={{ duration: 0.3 }}
                className="h-[2px] rounded-full"
              ></motion.span>
              {/* Texto */}
              {link.name}
            </motion.a>
          ))}
        </nav>
      </div>

      {/* Redes Sociales */}
      <div className="flex items-center space-x-5 mt-6">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-logo hover:text-[#38bdf8] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7"
            >
              {social.icon}
            </svg>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;

const projects = [
  {
    title: "Coinnova - Red Social para Innovación y Colaboración",
    role: "Backend Developer",
    date: "Abr 2025 — Jun 2025",
    description: [
      "Desarrollo de backend en .NET con arquitectura limpia y hexagonal.",
      "Implementación de principios SOLID para escalabilidad.",
      "Gestión de datos con Entity Framework y PostgreSQL.",
      "Trabajo colaborativo en equipo ágil."
    ],
    tech: [".NET", "Entity Framework", "PostgreSQL", "Arquitectura Limpia", "SOLID"]
  },
  {
    title: "Quedu - Generador de Cuestionarios con IA",
    role: "Backend Developer",
    date: "Ago 2024 — Dic 2024",
    description: [
      "Implementación backend con Node.js, Express y MongoDB.",
      "Despliegue en AWS con VPC personalizada, subredes y gateways.",
      "Desarrollo de variante iOS nativa con Swift y CoreML para generación inteligente de cuestionarios.",
      "Optimización de rendimiento y seguridad en servidores."
    ],
    tech: ["Node.js", "Express", "MongoDB", "AWS", "Swift", "CoreML"]
  },
  {
    title: "PulseCare - App Móvil para Pulsera IoT Médica",
    role: "Desarrollador de Software",
    date: "Mar 2024 — Jun 2024",
    description: [
      "Desarrollo de app Android en Kotlin integrada con pulsera IoT.",
      "Sincronización en tiempo real usando Firebase Realtime Database.",
      "Integración con Node-RED para comunicación con el dispositivo.",
      "Mejora en experiencia de usuario y monitoreo médico remoto."
    ],
    tech: ["Kotlin", "Firebase Realtime DB", "Node-RED", "IoT"]
  }
];

const Project = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="text-3xl font-montserrat font-bold mb-6 border-l-4 border-[#38bdf8] pl-3 text-titulo">Proyectos</h2>
      <div className="flex flex-col gap-8 space-y-2">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="group flex bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-[#38bdf8]/40"
          >
            {/* Fecha al lado izquierdo */}
            <div className="w-1/4 flex items-start justify-start">
              <span className="text-xs text-parrafo font-montserrat font-light">{proj.date}</span>
            </div>

            {/* Contenido principal */}
            <div className="w-3/4 flex flex-col">
              {/* Título y rol */}
              <div className="flex flex-col gap-1 mb-4">
                <h3 className="text-xl font-montserrat font-bold text-titulo transition-colors duration-300">
                  {proj.title}
                </h3>
                <p className="font-montserrat font-medium text-sm text-[#38bdf8]">
                  {proj.role}
                </p>
              </div>

              {/* Descripción y tecnologías */}
              <div className="flex flex-col space-y-4">
                <ul className="font-montserrat font-normal space-y-1 text-parrafo text-sm list-disc list-inside">
                  {proj.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#38bdf8] shadow-md shadow-[#38bdf8]/50 font-montserrat font-normal text-white px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

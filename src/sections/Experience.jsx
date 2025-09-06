const experiences = [
  {
    company: "Energía Innovadora SAC",
    location: "Arequipa, Perú",
    role: "Intern de Desarrollo de Software",
    date: "Julio 2024 — Agosto 2024",
    description:
      "Realicé la actualización y mantenimiento de su sitio web institucional informativo, corrigiendo errores y renovando contenido clave. Además, implementé una ruleta promocional integrada a su sitio de ventas en Odoo, como parte de una campaña empresarial en la Feria Internacional Arequipa (FIA).",
    tech: ["WordPress", "Odoo"],
    url: "https://www.energiainnovadora.com/"
  }
];

const Experience = () => {
  return (
    <section className="experience py-5">
      <h2 className="text-3xl font-montserrat font-bold mb-6 border-l-4 border-[#38bdf8] pl-3 text-titulo">Experiencia</h2>
      <div className="flex justify-center space-y-6">
        {experiences.map((exp, index) => (
          <a
            key={index}
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-xl"
          >
            <div className="flex flex-col">
              {/* Empresa y ubicación */}
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-montserrat font-bold text-titulo transition-colors duration-300">
                  {exp.company}
                </h3>
                <span className="text-sm font-montserrat font-light text-parrafo">{exp.location}</span>
              </div>

              {/* Cargo y fecha */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <span className="text-sm font-montserrat font-light text-[#38bdf8]">
                  {exp.role}
                </span>
                <span className="text-xs font-montserrat font-light text-parrafo mt-2 sm:mt-0">{exp.date}</span>
              </div>

              {/* Descripción */}
              <p className="font-montserrat font-normal text-sm text-parrafo leading-relaxed">{exp.description}</p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-[#38bdf8] font-montserrat font-normal shadow-md shadow-[#38bdf8]/50 text-white px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botón */}
              <div className="pt-4">
                <span className="inline-block font-montserrat font-light text-sm  text-[#38bdf8] group-hover:underline">
                  Visitar página →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experience;
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 }, 
    { name: "Kotlin", level: 70 },
    { name: "Swift", level: 65 },
  ];

  return (
    <section className="about bg-[#0f172a] text-white py-5">
      <div className="max-w-5xl mx-auto">
        {/* Título Principal */}
        <h2 className="text-3xl font-montserrat font-bold mb-6 border-l-4 border-[#38bdf8] pl-3 text-titulo">Mis Habilidades</h2>
        {/* Contenedor de columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Columna Izquierda - Skills */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6">
              Tecnologías
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-montserrat font-normal text-sm text-gray-400">{skill.name}</span>
                    <span className="text-[#38bdf8] font-montserrat font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-3 rounded-full bg-[#38bdf8] shadow-lg shadow-[#38bdf8]/50"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha - Nivel de Inglés */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6">
              Nivel de Inglés
            </h3>
            <div className="flex flex-col items-center md:items-start gap-6">
              {/* Card Circular */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-40 h-40 rounded-full bg-gray-800 shadow-lg shadow-[#38bdf8]/40 flex items-center justify-center"
              >
                <span className="text-4xl font-montserrat font-bold text-[#38bdf8]">B1</span>
                <svg className="absolute inset-0 w-full h-full">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#1e293b"
                    strokeWidth="10"
                    fill="none"
                  />
                  <motion.circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#38bdf8"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="440"
                    strokeDashoffset="440"
                    animate={{ strokeDashoffset: 440 - (440 * 55) / 100 }}
                    transition={{ duration: 1 }}
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              {/* Descripción */}
              <div className="text-center md:text-left max-w-xs">
                <p className="text-lg text-[#38bdf8] font-montserrat font-semibold mb-2">
                  Intermedio
                </p>
                <p className="text-gray-400 font-montserrat font-normal text-sm leading-relaxed">
                  Capaz de mantener conversaciones fluidas, entender textos técnicos
                  y comunicarme en un entorno profesional.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

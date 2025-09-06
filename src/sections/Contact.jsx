import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import useTypingEffect from "../hooks/useTypingEffect";

const Contact = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  const questions = useMemo(
    () => [
      "Hola 👋, ¿cómo te llamas?",
      "¡Genial! 😎 Ahora dime tu correo:",
      "Perfecto 🚀, ¿qué quieres contarme?",
    ],
    []
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    setTimeout(() => {
      setStatus(`¡Gracias ${form.name}! Te responderé pronto 🚀`);
      setForm({ name: "", email: "", message: "" });
      setStep(0);
    }, 1500);
  };

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const title = useTypingEffect(" Hablemos", 100, isVisible);
  const subtitle = useTypingEffect(" Un chatbot simple para ponerte en contacto conmigo.", 50, isVisible);

  return (
    <section ref={sectionRef} className="flex flex-col items-center justify-center py-12 font-montserrat">
      <h2 className="text-3xl font-extrabold mb-6 text-titulo">
        {title}
        <span className="animate-pulse">|</span>
      </h2>
      <p className="text-parrafo font-light mb-8 text-center max-w-xl">
        {subtitle}
        <span className="animate-pulse">|</span>
      </p>

      <form
        onSubmit={handleNext}
        className="w-full max-w-xl bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg flex flex-col gap-6 shadow-[#38bdf8]/40"
      >
        {/* Pregunta dinámica */}
        <AnimatePresence mode="wait">
          <motion.p
            key={step}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-md text-[#38bdf8] font-semibold"
          >
            {questions[step]}
          </motion.p>
        </AnimatePresence>

        {/* Input dinámico */}
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.input
              key="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Escribe tu nombre..."
              required
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-transparent border-b-2 border-titulo font-light text-titulo text-sm focus:outline-none py-3"
            />
          )}

          {step === 1 && (
            <motion.input
              key="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Escribe tu correo..."
              required
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-transparent border-b-2 border-titulo font-light text-titulo text-sm focus:outline-none py-3"
            />
          )}

          {step === 2 && (
            <motion.textarea
              key="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Cuéntame tu mensaje..."
              required
              rows={4}
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-transparent border-b-2 border-titulo font-light text-titulo text-sm focus:outline-none py-3 resize-none"
            />
          )}
        </AnimatePresence>

        {/* Botón dinámico */}
        <motion.button
          type="submit"
          className="flex items-center justify-center gap-2 bg-[#38bdf8] text-[#0f172a] font-bold py-3 rounded-lg shadow-lg hover:bg-[#0daff5] transition-colors text-md"
          whileTap={{ scale: 0.95 }}
        >
          {step < questions.length - 1 ? "Siguiente" : "Enviar"}{" "}
          {step === questions.length - 1 && <FaPaperPlane />}
        </motion.button>

        {/* Estado del envío */}
        {status && (
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center text-titulo font-light text-sm mt-2 animate-pulse"
          >
            {status}
          </motion.div>
        )}
      </form>
    </section>
  );
};

export default Contact;

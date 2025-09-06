import { useState, useEffect, useRef } from "react";

const useTypingEffect = (text, speed = 80, active = true) => {
  const [displayedText, setDisplayedText] = useState("");
  const charTimer = useRef(null);
  const loopTimer = useRef(null);

  useEffect(() => {
    // Limpieza previa
    clearTimeout(charTimer.current);
    clearTimeout(loopTimer.current);

    if (!active || !text) {
      setDisplayedText("");
      return () => {
        clearTimeout(charTimer.current);
        clearTimeout(loopTimer.current);
      };
    }

    let i = 0;
    setDisplayedText("");

    const tick = () => {
      if (i < text.length) {
        charTimer.current = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(i));
          i += 1;
          tick();
        }, speed);
      } else {
        // Cuando termina, esperar antes de reiniciar
        loopTimer.current = setTimeout(() => {
          i = 0;
          setDisplayedText("");
          tick();
        }, 10000);
      }
    };

    tick();

    return () => {
      clearTimeout(charTimer.current);
      clearTimeout(loopTimer.current);
    };
  }, [text, speed, active]);

  return displayedText;
};

export default useTypingEffect;

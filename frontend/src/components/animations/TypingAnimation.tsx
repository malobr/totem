import React, { useEffect, useState } from "react";
import {  motion } from "framer-motion";

interface TypingAnimationProps {
  text: string;
  duration: number; // Duração total da animação
  delay: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  duration,
  delay,
}) => {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    // Divide o texto em palavras (preservando os espaços)
    setWords(text.split(" "));
  }, [text]);

  return (
    <span className="">
      {words.map((word, index) => (
        <motion.span
          key={"letter-" + index}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: (index + 1) * delay, // Atraso de cada palavra
            duration: duration, // Duração da animação por palavra
            ease: "easeInOut",
          }}
        >
          {word + " "}
        </motion.span>
      ))}
    </span>
  );
};

export default TypingAnimation;

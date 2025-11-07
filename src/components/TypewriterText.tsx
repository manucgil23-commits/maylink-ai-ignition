import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText = ({ text, delay = 0, className = "" }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const hasStarted = useRef(false);
  const words = text.split(" ");

  useEffect(() => {
    // Reset when text changes completely
    const currentWords = displayedText.split(" ").filter(w => w);
    const newWords = text.split(" ");
    
    // Check if the text changed to a completely different text
    if (currentWords.length > 0 && newWords[0] !== currentWords[0]) {
      setCurrentWordIndex(0);
      setDisplayedText("");
      setIsComplete(false);
      hasStarted.current = false;
      return;
    }
  }, [text]);

  useEffect(() => {
    // Wait for initial delay before starting
    if (!hasStarted.current && currentWordIndex === 0) {
      const initialTimeout = setTimeout(() => {
        hasStarted.current = true;
        setCurrentWordIndex(0);
        setDisplayedText(words[0]);
        
        if (words.length === 1) {
          setIsComplete(true);
        }
      }, delay);
      return () => clearTimeout(initialTimeout);
    }

    // Typewriter effect - word by word
    if (hasStarted.current && currentWordIndex < words.length - 1) {
      const timeout = setTimeout(() => {
        const nextIndex = currentWordIndex + 1;
        const newText = words.slice(0, nextIndex + 1).join(" ");
        setDisplayedText(newText);
        setCurrentWordIndex(nextIndex);
        
        if (nextIndex === words.length - 1) {
          setIsComplete(true);
        }
      }, 400); // 400ms between words

      return () => clearTimeout(timeout);
    }
  }, [currentWordIndex, hasStarted.current, delay, words]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && hasStarted.current && (
        <motion.span
          className="inline-block w-0.5 bg-brand-purple ml-1 align-middle"
          style={{ height: "1em" }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </span>
  );
};

export default TypewriterText;

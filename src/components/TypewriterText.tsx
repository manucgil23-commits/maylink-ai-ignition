import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText = ({ text, delay = 0, className = "" }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const words = text.split(" ");
  const hasStarted = useRef(false);

  useEffect(() => {
    // Reset when text changes
    if (currentCharIndex > text.length) {
      setCurrentCharIndex(0);
      setDisplayedText("");
      setIsComplete(false);
      hasStarted.current = false;
      return;
    }

    // Wait for initial delay before starting
    if (!hasStarted.current) {
      const initialTimeout = setTimeout(() => {
        hasStarted.current = true;
        setCurrentCharIndex(1);
      }, delay);
      return () => clearTimeout(initialTimeout);
    }

    // Typewriter effect
    if (currentCharIndex <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, currentCharIndex));
        setCurrentCharIndex((prev) => prev + 1);
        
        if (currentCharIndex === text.length) {
          setIsComplete(true);
        }
      }, 50); // Fixed 50ms interval for consistent speed

      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, text, delay]);

  // Handle text change mid-animation
  useEffect(() => {
    // If text changes and we're mid-animation, continue from same position
    if (hasStarted.current && currentCharIndex > 0 && currentCharIndex <= text.length) {
      setDisplayedText(text.substring(0, currentCharIndex));
    }
  }, [text, currentCharIndex]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && hasStarted.current && (
        <motion.span
          className="inline-block w-0.5 h-6 bg-brand-purple ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </span>
  );
};

export default TypewriterText;

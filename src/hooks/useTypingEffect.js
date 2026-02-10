import { useEffect, useState } from "react";

/**
 * Types text character by character, cycling through an array of strings.
 * Creates a typewriter effect with configurable speed and pause duration.
 */
export default function useTypingEffect(texts, speed = 60, pause = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentText = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex((i) => i + 1);

          if (charIndex + 1 === currentText.length) {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, pause);
          }
        } else {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex((i) => i - 1);

          if (charIndex <= 1) {
            setIsDeleting(false);
            setTextIndex((i) => (i + 1) % texts.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isPaused, textIndex, texts, speed, pause]);

  return displayText;
}

import React, { useState, useEffect } from "react";

type propTypes = {
  text: string;
  author: string;
};

export function TypingEffectMission({ text, author }: propTypes) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[charIndex]);
        setCharIndex(charIndex + 1);
      }, 25); // Typing speed

      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [charIndex, text.length]);

  useEffect(() => {
    let fadeTimer: string | number | NodeJS.Timeout | undefined;
    if (isTypingComplete) {
      fadeTimer = setTimeout(() => setAuthorVisible(true), 500); // Delay for author's name appearance
    }
    return () => clearTimeout(fadeTimer);
  }, [isTypingComplete]);

  const [authorVisible, setAuthorVisible] = useState(false);

  return (
    <li className="mission-statement">
      <p className="animated-text">{displayedText}</p>
      {authorVisible && (
        <span className={`author ${authorVisible ? "author-visible" : ""}`}>
          {author}
        </span>
      )}
    </li>
  );
}

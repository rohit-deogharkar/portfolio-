"use client";

import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  {
    typingSpeed = 55,
    deletingSpeed = 30,
    pauseTime = 1800,
    loop = true,
    startDelay = 0,
  }: {
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
    loop?: boolean;
    startDelay?: number;
  } = {}
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(startDelay === 0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (startDelay === 0) return;
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || done) return;
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        typingSpeed
      );
    } else if (!deleting && text.length === current.length) {
      if (!loop && wordIndex === words.length - 1) {
        setDone(true);
        return;
      }
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        deletingSpeed
      );
    } else {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime, loop, started, done]);

  return { text, done };
}

export function Cursor({ className = "" }: { className?: string }) {
  return (
    <span
      className={`ml-0.5 inline-block w-[2px] animate-[blink_1s_step-end_infinite] bg-current align-middle ${className}`}
    />
  );
}

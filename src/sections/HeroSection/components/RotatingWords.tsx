import { useEffect, useRef, useState } from "react";
import { rotatingWords } from "@/data/site";

const INTERVAL = 2600;
const DURATION = 380;

export const RotatingWords = () => {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const doRoll = () => {
      setPrev(indexRef.current);
      window.setTimeout(() => {
        const next = (indexRef.current + 1) % rotatingWords.length;
        indexRef.current = next;
        setIndex(next);
        setPrev(null);
      }, DURATION);
    };

    const interval = window.setInterval(doRoll, INTERVAL);
    return () => window.clearInterval(interval);
  }, []);

  const transition = "transition-all duration-[380ms] ease-out";

  return (
    <div className="font-display mt-6 mb-10 w-full max-w-[720px] px-4 text-center">
      <div className="relative mx-auto flex min-h-[2.4em] items-center justify-center">
        <span
          className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-3xl font-semibold tracking-tight text-neutral-100 ${transition} md:text-5xl`}
          style={
            prev === null
              ? { opacity: 0, transform: "scale(0.92)" }
              : { opacity: 1, transform: "scale(1)" }
          }
        >
          {prev !== null ? rotatingWords[prev] : ""}
        </span>
        <span
          className={`absolute inset-0 z-0 flex items-center justify-center text-3xl font-semibold tracking-tight text-neutral-100 ${transition} md:text-5xl`}
          style={
            prev === null
              ? { opacity: 1, transform: "scale(1)" }
              : { opacity: 0, transform: "scale(1.08)" }
          }
        >
          {rotatingWords[index]}
        </span>
      </div>
    </div>
  );
};

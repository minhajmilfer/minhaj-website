import { useEffect, useState } from "react";

const TEXT = "Hi, I'm Minhaj";
const NAME_START = "Hi, I'm ".length;

export const HeroIntro = () => {
  const [typed, setTyped] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setTyped(TEXT.length);
      setDone(true);
      return;
    }

    let cancelled = false;
    let i = 0;
    const step = () => {
      if (cancelled) return;
      i += 1;
      setTyped(i);
      if (i >= TEXT.length) {
        setDone(true);
        return;
      }
      window.setTimeout(step, 60);
    };
    const id = window.setTimeout(step, 350);
    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
  }, []);

  const prefix = TEXT.slice(0, NAME_START); // "Hi, I'm "
  const name = TEXT.slice(NAME_START); // "Minhaj"
  const prefixTyped = Math.min(typed, NAME_START);
  const nameTyped = Math.max(0, typed - NAME_START);

  return (
    <div className="rise">
      <h1 className="font-display text-[64px] leading-[1.2] tracking-[-1.4px] text-neutral-200 md:text-[84px]">
        <span className="font-script">
          {prefix.slice(0, prefixTyped)}
        </span>
        <span className={`font-bold ${done ? "hero-name-shimmer" : ""}`}>
          {name.slice(0, nameTyped)}
        </span>
        {!done && <span className="hero-caret">|</span>}
      </h1>
    </div>
  );
};

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Container } from "@/components/ui";
import { profile } from "@/data/site";

const sigRotations = [1.5, -1, 2, -1.5, 0.8, -2, 1.2, -0.8, 1.8, -1.2, 0.6, -1.6, 1];

const paragraphs = [
  "I wondered how apps knew what you'd love — so I started building my own.",
  "Today I'm a CS undergrad at IIT, learning by shipping real projects: a zakath calculator for my community, an AI style concept, an Android app.",
  "Small builds, real users — and soon, my first internship.",
];

function useScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.92;
      const end = vh * 0.38;
      const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return { ref, progress };
}

export const ManifestoSection = () => {
  const { ref, progress } = useScrollProgress();
  const words = paragraphs.map((p) => p.split(" "));
  const total = words.reduce((n, w) => n + w.length, 0);
  let index = 0;

  return (
    <section className="relative w-full bg-black pt-28">
      <Container className="pb-28 text-center">
        <div ref={ref}>
          <p className="font-display mx-auto max-w-[760px] text-3xl leading-[1.5] tracking-[-0.5px] md:text-4xl md:leading-[54px]">
            {words.map((sentence, si) => (
              <span key={si}>
                {sentence.map((word) => {
                  const i = index++;
                  const local = Math.min(
                    1,
                    Math.max(0, progress * (total + 6) - i),
                  );
                  return (
                    <span
                      key={`${si}-${i}`}
                      className="transition-opacity duration-300"
                      style={{
                        opacity: 0.18 + local * 0.82,
                        color: local > 0.5 ? "#d4d4d4" : "#737373",
                      }}
                    >
                      {word}{" "}
                    </span>
                  );
                })}
                {si < words.length - 1 ? (
                  <>
                    <br />
                    <br />
                  </>
                ) : null}
              </span>
            ))}
          </p>
          <p
            aria-label={`Signature of ${profile.name}`}
            className="mt-14 select-none text-5xl"
            style={{
              fontFamily:
                "'Segoe Script', 'Brush Script MT', 'Snell Roundhand', 'Apple Chancery', cursive",
              fontWeight: 400,
            }}
          >
            {Array.from(profile.name).map((char, i) => (
              <span
                key={i}
                className="hello-char text-zinc-400"
                style={
                  {
                    animationDelay: `${i * 0.16}s`,
                    "--sig-rot": `${sigRotations[i % sigRotations.length]}deg`,
                  } as CSSProperties
                }
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
        </div>
      </Container>
    </section>
  );
};

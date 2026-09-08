import { useEffect, useRef, useState } from "react";
import {
  profile,
  journey,
  experience,
  education,
  courses,
  skills,
  projects,
} from "@/data/site";
import { useCvRequest } from "@/components/CvRequestModal";

type Line = { text: string; tone?: "cmd" | "ok" | "dim" | "accent" };

const BANNER: Line[] = [
  { text: "minhaj-os v2.0 — type `help` to get started", tone: "dim" },
];

const buildOutput = (openCvRequest: () => void, raw: string): Line[] => {
  const cmd = raw.trim().toLowerCase();
  switch (cmd) {
    case "":
      return [];
    case "help":
      return [
        { text: "Available commands:", tone: "ok" },
        { text: "  whoami        quick intro" },
        { text: "  about         the short version of my story" },
        { text: "  journey       timeline of milestones" },
        { text: "  experience    work history" },
        { text: "  education     schools & degrees" },
        { text: "  projects      things I've shipped" },
        { text: "  skills        what I work with" },
        { text: "  courses       current learning" },
        { text: "  contact       how to reach me" },
        { text: "  cv            request my CV (name, position, email)" },
        { text: "  sudo hire-me  you know you want to" },
        { text: "  clear         clear the terminal" },
        { text: "  exit          close the terminal" },
      ];
    case "whoami":
      return [
        { text: profile.name, tone: "ok" },
        { text: `${profile.role}` },
        { text: profile.tagline },
        { text: `Languages: ${profile.languages.join(" · ")}`, tone: "dim" },
      ];
    case "about":
      return [
        { text: "Tech hooked me early — I wanted to know how the apps I", },
        { text: "used every day actually worked. Since then I've been" },
        { text: "learning by shipping: a zakath calculator my community" },
        { text: "uses for real, an AI fashion concept in Figma, and an" },
        { text: "Android app built with a team." },
        { text: "Now: InfoSchol Scholar @ IIT, seeking my first SWE internship.", tone: "accent" },
      ];
    case "journey":
      return journey.map((j) => ({
        text: `[${j.period}] ${j.title} — ${j.place}${j.status === "now" ? "  ● NOW" : j.status === "next" ? "  ↑ NEXT" : ""}`,
        tone: j.status === "now" ? ("accent" as const) : undefined,
      }));
    case "experience":
      return experience.flatMap((e) => [
        { text: `${e.role} · ${e.org} (${e.period})${e.current ? "  ● current" : ""}`, tone: "ok" as const },
        ...e.points.map((p) => ({ text: `   - ${p}` })),
      ]);
    case "education":
      return education.flatMap((e) => [
        { text: `${e.title}`, tone: "ok" as const },
        { text: `   ${e.place} — ${e.detail}` },
      ]);
    case "projects":
      return Object.values(projects).flatMap((p) => [
        { text: `${p.title} — ${p.eyebrow}`, tone: "ok" as const },
        { text: `   ${p.description}` },
        { text: `   -> ${p.link.href}`, tone: "dim" as const },
      ]);
    case "skills":
      return [
        { text: "Working:", tone: "ok" },
        { text: "  " + skills.working.map((s) => s.name).join(" · ") },
        { text: "Learning:", tone: "ok" },
        { text: "  " + skills.learning.map((s) => s.name).join(" · ") },
      ];
    case "courses":
      return courses.map((c) => ({
        text: `${c.title} — ${c.provider} [${c.status}]`,
        tone: c.inProgress ? ("accent" as const) : undefined,
      }));
    case "contact":
      return [
        { text: `email:    ${profile.email}`, tone: "ok" },
        { text: `linkedin: ${profile.linkedin}` },
        { text: `github:   ${profile.github}` },
      ];
    case "cv":
      openCvRequest();
      return [{ text: "Résumé is shared on request — opening the access form...", tone: "ok" }];
    case "sudo hire-me":
    case "sudo hire_me":
    case "hire-me":
    case "hire me":
      return [
        { text: "[sudo] password for recruiter: ********", tone: "dim" },
        { text: "Access granted. Great choice.", tone: "ok" },
        { text: `Drafting offer letter to ${profile.email}...`, tone: "accent" },
        { text: "Just kidding — but seriously, let's talk.", tone: "accent" },
      ];
    case "clear":
      return "CLEAR" as unknown as Line[];
    case "exit":
      return "EXIT" as unknown as Line[];
    default:
      return [
        { text: `command not found: ${raw}`, tone: "dim" },
        { text: "type `help` to see available commands", tone: "dim" },
      ];
  }
};

const toneClass = (tone: Line["tone"]) =>
  tone === "cmd"
    ? "text-white"
    : tone === "ok"
      ? "text-emerald-200"
      : tone === "accent"
        ? "text-sky-200"
        : tone === "dim"
          ? "text-zinc-500"
          : "text-zinc-300";

export const Terminal = () => {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>(BANNER);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { openCvRequest } = useCvRequest();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing =
        t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable);
      if (e.key === "`" && !typing) {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setLines(BANNER);
      setInput("");
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  const submit = () => {
    const raw = input;
    setInput("");
    const echoed: Line[] = [
      { text: `minhaj@portfolio:~$ ${raw}`, tone: "cmd" },
    ];
    const out = buildOutput(openCvRequest, raw);
    if ((out as unknown as string) === "CLEAR") {
      setLines(BANNER);
      return;
    }
    if ((out as unknown as string) === "EXIT") {
      setOpen(false);
      return;
    }
    setLines((l) => [...l, ...echoed, ...(out as Line[])]);
    if (raw.trim()) {
      setHistory((h) => [raw, ...h].slice(0, 30));
      setHistIdx(-1);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-[720px] overflow-hidden rounded-2xl border border-white/15 bg-[#0b0d10] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="font-mono ml-3 text-xs text-zinc-400">
            minhaj@portfolio: ~
          </span>
          <button
            aria-label="Close terminal"
            className="font-mono ml-auto text-xs text-zinc-500 hover:text-zinc-200"
            onClick={() => setOpen(false)}
          >
            esc
          </button>
        </div>
        <div
          ref={bodyRef}
          className="font-mono h-[46vh] overflow-y-auto px-4 py-3 text-[13px] leading-[20px]"
        >
          {lines.map((line, i) => (
            <div key={i} className={toneClass(line.tone)}>
              {line.text || "\u00A0"}
            </div>
          ))}
          <div className="mt-1 flex items-center gap-2">
            <span className="shrink-0 text-emerald-300">minhaj@portfolio:~$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") submit();
                else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  const next = Math.min(histIdx + 1, history.length - 1);
                  if (next >= 0) {
                    setHistIdx(next);
                    setInput(history[next]);
                  }
                } else if (e.key === "ArrowDown") {
                  e.preventDefault();
                  const next = histIdx - 1;
                  setHistIdx(next);
                  setInput(next >= 0 ? history[next] : "");
                } else if (e.key === "Tab") {
                  e.preventDefault();
                  const cmds = ["help","whoami","about","journey","experience","education","projects","skills","courses","contact","cv","clear","exit","sudo hire-me"];
                  const match = cmds.find((c) => c.startsWith(input.toLowerCase()));
                  if (match) setInput(match);
                }
              }}
              className="w-full bg-transparent text-zinc-100 caret-emerald-300 outline-none"
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

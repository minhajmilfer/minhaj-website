import { profile } from "@/data/site";
import { Github } from "@/components/icons";
import { Linkedin, Mail } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Courses", href: "#courses" },
  { label: "Journey", href: "#journey" },
  { label: "About", href: "#about" },
];

export const Footer = () => {
  return (
    <footer className="relative w-full border-t border-white/10 bg-black">
      <div className="mx-auto flex w-full max-w-[980px] flex-col items-center gap-8 px-6 py-12">
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-tight text-white no-underline"
        >
          minhaj<span className="text-zinc-500">.</span>
        </a>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-zinc-400 no-underline transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
        <p className="font-mono text-center text-xs text-zinc-600">
          press{" "}
          <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 text-zinc-400">
            `
          </kbd>{" "}
          anywhere for a terminal — or just{" "}
          <a href={`mailto:${profile.email}`} className="text-zinc-400 underline underline-offset-2 hover:text-white">
            email me
          </a>
        </p>
        <p className="font-body text-xs text-zinc-600">
          © {new Date().getFullYear()} {profile.name} · Designed & built with React + Tailwind
        </p>
      </div>
    </footer>
  );
};

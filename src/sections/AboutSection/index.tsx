import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ProfileCard } from "@/sections/AboutSection/components/ProfileCard";
import { Copyright } from "@/sections/AboutSection/components/Copyright";
import { Mail, Linkedin, Github, X, Check } from "lucide-react";
import { profile, experience } from "@/data/site";

const education = [
  {
    title: "BSc (Hons) Computer Science",
    place: "University of Westminster, via Informatics Institute of Technology",
    detail: "Commencing January 2027",
  },
  {
    title: "GCE Ordinary Level",
    place: "Wisdom International School, Panadura",
    detail: "9 A's — English medium, June 2022",
  },
  {
    title: "GCE Advanced Level",
    place: "Zahira College, Colombo",
    detail: "Combined Maths · Physics · Chemistry",
  },
];

export const AboutSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = profile.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="about" className="relative w-full scroll-mt-24 bg-black">
      <div className="mx-auto w-full max-w-[980px] px-6 pt-[100px] pb-10">
        <Reveal>
          <p className="mx-auto max-w-[720px] text-center text-[21px] leading-[37.8px] text-neutral-400 mb-20">
            Every journey starts with curiosity — here&#39;s mine
          </p>
        </Reveal>

        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14">
          <ProfileCard />
          <div className="flex-1">
            <h2 className="text-5xl leading-[60px] tracking-[-1.2px] text-neutral-200 break-words">
              Minhaj Milfer
            </h2>
            <p className="mt-4 text-xl leading-[30px] text-zinc-300 break-words">
              CS undergraduate · Aspiring software engineer
            </p>
            <div className="mt-7 space-y-4 text-lg leading-[29px] text-zinc-400 break-words">
              <p>
                I&#39;m Minhaj — a Computer Science undergraduate at
                Informatics Institute of Technology and an InfoSchol Scholar.
                Tech hooked me early: I wanted to know how the apps I used
                every day actually worked.
              </p>
              <p>
                Since then I&#39;ve been learning by shipping — a zakath
                calculator my local community uses, an AI fashion concept
                designed in Figma, and an Android task app built with a team.
                Each project taught me how real products come together.
              </p>
              <p>
                Before all this, I spent a year doing content research and
                customer support for a YouTube channel with 1.5M+
                subscribers — where I learned how to understand people. Now
                I&#39;m looking for a software engineering internship to
                build things people love.
              </p>
            </div>
            <div id="contact" className="mt-8 flex flex-wrap gap-4 scroll-mt-32">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="cta-shine contact-blink font-body inline-flex h-[48px] cursor-pointer items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
                Email me
              </button>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="cta-shine contact-blink font-body inline-flex h-[48px] items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-medium text-white no-underline backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="cta-shine contact-blink font-body inline-flex h-[48px] items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-medium text-white no-underline backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <p className="w-full mt-24 mb-8 text-sm uppercase tracking-[2px] text-zinc-500">
          Education
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {education.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="lift h-full rounded-[20px] border border-white/10 bg-white/[0.03] p-7">
                <p className="text-lg leading-[27px] text-neutral-200">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-[21px] text-zinc-400">
                  {item.place}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[1.5px] text-zinc-500">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="w-full mt-16 mb-8 text-sm uppercase tracking-[2px] text-zinc-500">
          Experience
        </p>
        <div className="space-y-6">
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={i * 120}>
              <div className="lift rounded-[20px] border border-white/10 bg-white/[0.03] p-7 w-full">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <p className="text-lg leading-[27px] text-neutral-200">
                    {item.role} — {item.org}
                  </p>
                  <span className="shrink-0 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-neutral-300">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-2 text-base leading-[25.6px] text-zinc-400">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Copyright />
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Email me"
        >
          <div
            className="lift w-full max-w-sm rounded-3xl border border-white/10 bg-zinc-900/95 p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowModal(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">
              Let&apos;s connect
            </h3>
            <p className="mt-2 break-all text-base text-zinc-300">
              {profile.email}
            </p>
            <button
              type="button"
              onClick={copyEmail}
              className="cta-shine mt-6 inline-flex h-[48px] items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4" />
                  Copy email
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

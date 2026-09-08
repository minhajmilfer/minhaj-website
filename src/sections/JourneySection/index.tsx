import {
  Briefcase,
  GraduationCap,
  MonitorPlay,
  Rocket,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { Container, LogoImg, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { journey, journeyStats, type JourneyItem } from "@/data/site";

const itemIcons: Record<JourneyItem["icon"], LucideIcon> = {
  play: MonitorPlay,
  trophy: Trophy,
  graduation: GraduationCap,
  briefcase: Briefcase,
  sparkles: Sparkles,
  rocket: Rocket,
};

const statusBadge: Record<
  JourneyItem["status"],
  { label: string; className: string } | null
> = {
  past: null,
  now: {
    label: "Now",
    className:
      "border-emerald-300/30 bg-emerald-300/10 text-emerald-200 journey-badge-now",
  },
  next: {
    label: "Up next",
    className: "border-sky-200/25 bg-sky-200/10 text-sky-100/90",
  },
};

const JourneyCard = ({ item }: { item: JourneyItem }) => {
  const Icon = itemIcons[item.icon];
  const badge = statusBadge[item.status];
  return (
    <div className="lift h-full rounded-[20px] border border-white/10 bg-white/[0.03] p-6 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          {item.logos.length > 0 ? (
            item.logos.map((logo) => (
              <LogoImg key={logo} name={logo} className="logo-chip-sm" />
            ))
          ) : (
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
              <Icon className="h-5 w-5" />
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {badge ? (
            <span
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] ${badge.className}`}
            >
              {item.status === "now" ? (
                <span className="journey-pulse-dot" aria-hidden />
              ) : null}
              {badge.label}
            </span>
          ) : null}
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-neutral-300">
            {item.period}
          </span>
        </div>
      </div>
      <h3 className="font-display mt-5 text-xl leading-[30px] text-neutral-200">
        {item.title}
      </h3>
      <p className="font-body mt-1.5 text-sm uppercase tracking-[1.2px] text-zinc-500">
        {item.place}
      </p>
      <p className="font-body mt-4 text-base leading-[25.6px] text-zinc-400">
        {item.detail}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export const JourneySection = () => {
  return (
    <section id="journey" className="relative w-full overflow-x-clip bg-black pb-24 pt-12">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(120,140,255,0.08),transparent)] blur-2xl"
      />
      <Container className="relative">
        <SectionHeading
          title="The journey so far"
          subtitle="From a kid wondering how apps worked — to a scholarship, real projects with real users, and a CS degree on the horizon."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {journeyStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="lift rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-6 text-center">
                <p className="font-display text-3xl tracking-[-0.5px] text-neutral-100 md:text-4xl">
                  {stat.value}
                </p>
                <p className="font-body mt-2 text-xs leading-5 text-zinc-500 md:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="relative mt-20">
          <div
            aria-hidden
            className="journey-spine absolute bottom-2 left-[22px] top-2 w-px md:left-1/2"
          />
          <div className="space-y-10 md:space-y-14">
            {journey.map((item, i) => (
              <div
                key={item.title}
                className="relative md:grid md:grid-cols-[1fr_88px_1fr]"
              >
                <span
                  aria-hidden
                  className={`journey-node absolute left-[22px] top-10 z-10 -translate-x-1/2 md:left-1/2 ${
                    item.status === "now"
                      ? "journey-node-now"
                      : item.status === "next"
                        ? "journey-node-next"
                        : ""
                  }`}
                />
                <div
                  className={`pl-14 md:pl-0 ${
                    i % 2 === 0
                      ? "md:col-start-1 md:pr-2"
                      : "md:col-start-3 md:pl-2"
                  }`}
                >
                  <Reveal delay={(i % 2) * 90}>
                    <JourneyCard item={item} />
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

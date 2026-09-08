import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export { Reveal };

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[980px] px-6 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  title,
  subtitle,
  id,
}: {
  title: string;
  subtitle: string;
  id?: string;
}) {
  return (
    <Reveal>
      <div id={id} className="scroll-mt-28 text-center">
        <h2 className="font-display text-5xl leading-[60px] tracking-[-1.2px] text-neutral-200">
          {title}
        </h2>
        <p className="font-body mx-auto mt-5 mb-12 max-w-[620px] text-[21px] leading-[37.8px] text-neutral-400">
          {subtitle}
        </p>
      </div>
    </Reveal>
  );
}

export function CtaButton({
  href,
  children,
  variant = "solid",
  external = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`group inline-flex h-[56px] items-center justify-center gap-2.5 rounded-2xl px-8 text-sm text-white transition-all duration-300 ${
        variant === "solid"
          ? "lift bg-zinc-800 hover:bg-zinc-700"
          : "lift border border-white/15 bg-transparent hover:bg-white/5"
      } ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

import iitLogo from "@/assets/logos/iit.png";
import uomLogo from "@/assets/logos/uom.png";
import zahiraLogo from "@/assets/logos/zahira.png";
import westminsterLogo from "@/assets/logos/westminster.png";
import sliitLogo from "@/assets/logos/sliit.png";
import wisdomLogo from "@/assets/logos/wisdom.png";
import qpLogo from "@/assets/logos/qp.png";
import amispiceLogo from "@/assets/logos/amispice.png";
import almostLogo from "@/assets/logos/almost.png";

const logoSrc: Record<string, string> = {
  iit: iitLogo,
  uom: uomLogo,
  zahira: zahiraLogo,
  westminster: westminsterLogo,
  sliit: sliitLogo,
  wisdom: wisdomLogo,
  qp: qpLogo,
  amispice: amispiceLogo,
  almost: almostLogo,
};

export function LogoImg({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span
      className={`logo-chip shine-sweep ${className}`}
    >
      <img src={logoSrc[name]} alt={`${name} logo`} loading="lazy" />
    </span>
  );
}

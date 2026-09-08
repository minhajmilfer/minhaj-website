import { skills } from "@/data/site";
import { TechLogo } from "@/components/TechLogo";

export const HeroBrands = () => {
  const items = skills.marquee;
  return (
    <div className="flex flex-col items-center pb-2">
      <p className="font-body mb-6 text-center text-sm uppercase tracking-[2.5px] text-zinc-500">
        Currently working with
      </p>
      <div className="marquee w-full">
        <div className="marquee-track py-1">
          {[...items, ...items].map((skill, i) => (
            <span
              key={`${skill.name}-${i}`}
              className="font-body flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-neutral-200"
            >
              <TechLogo name={skill.logo} className="h-4 w-4" />
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

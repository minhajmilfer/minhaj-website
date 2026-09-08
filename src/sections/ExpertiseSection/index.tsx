import { Reveal, Container, SectionHeading } from "@/components/ui";
import { skills } from "@/data/site";
import { techIcons } from "@/components/icons";

export const ExpertiseSection = () => {
  return (
    <section className="relative w-full bg-black py-24">
      <Container>
        <SectionHeading
          id="skills"
          title="Skills & Learning"
          subtitle="Where I am today — and what I'm actively learning next"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal>
            <div className="lift h-full rounded-[24px] border border-white/10 bg-white/[0.03] p-9">
              <p className="font-body mb-7 text-sm uppercase tracking-[2px] text-zinc-500">
                Working knowledge
              </p>
              <ul className="flex flex-wrap gap-3">
                {skills.working.map((skill) => {
                  const Icon = techIcons[skill.icon] ?? techIcons.code;
                  return (
                    <li
                      key={skill.name}
                      className={`flex items-center gap-2.5 rounded-full border border-white/15 bg-gradient-to-br px-5 py-3 text-base text-neutral-200 ${skill.tint}`}
                    >
                      <Icon className="h-4 w-4" />
                      {skill.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="lift h-full rounded-[24px] border border-sky-100/10 bg-sky-100/[0.04] p-9">
              <p className="font-body mb-7 flex items-center gap-3 text-sm uppercase tracking-[2px] text-zinc-500">
                Currently learning
                <span className="rounded-full border border-sky-100/20 bg-sky-100/10 px-3 py-1 text-[11px] normal-case tracking-normal text-sky-100/80">
                  In progress
                </span>
              </p>
              <ul className="flex flex-wrap gap-3">
                {skills.learning.map((skill) => {
                  const Icon = techIcons[skill.icon] ?? techIcons.code;
                  return (
                    <li
                      key={skill.name}
                      className={`flex items-center gap-2.5 rounded-full border border-white/15 bg-gradient-to-br px-5 py-3 text-base text-neutral-200 ${skill.tint}`}
                    >
                      <Icon className="h-4 w-4" />
                      {skill.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

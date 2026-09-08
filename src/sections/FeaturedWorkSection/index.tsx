import { Container, SectionHeading, CtaButton } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { projects, profile } from "@/data/site";
import { Github } from "@/components/icons";
import { ArrowUpRight } from "lucide-react";
import stylecueImg from "@/assets/case-studies/stylecue-app.jpg";
import zakathImg from "@/assets/case-studies/zakath-home.png";
import todoImg from "@/assets/todo-app.jpg";

const cards = [
  {
    ...projects.stylecue,
    href: projects.stylecue.link.href,
    image: { src: stylecueImg, alt: "StyleCue welcome screen" },
  },
  {
    ...projects.zakath,
    href: projects.zakath.link.href,
    image: { src: zakathImg, alt: "Noor Hub home" },
  },
  {
    ...projects.todo,
    href: projects.todo.link.href,
    image: { src: todoImg, alt: "To-Do task manager app" },
  },
];

export const FeaturedWorkSection = () => {
  return (
    <section className="relative w-full bg-black pb-6 pt-10">
      <Container className="flex flex-col items-center">
        <SectionHeading
          id="work"
          title="Selected work"
          subtitle="Projects I've designed, built and shipped while learning"
        />
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 120} className="h-full">
              <a
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="lift group flex h-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] no-underline"
              >
                <div className="zoom-frame relative h-44 overflow-hidden border-b border-white/10">
                  <img
                    src={card.image.src}
                    alt={card.image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-body text-xs uppercase tracking-[1.8px] text-zinc-500">
                    {card.eyebrow}
                  </p>
                  <h3 className="font-display mt-2 text-xl text-neutral-200">
                    {card.title}
                  </h3>
                  <p className="font-body mt-3 flex-1 text-sm leading-[22px] text-zinc-400">
                    {card.description}
                  </p>
                  <span className="font-body mt-5 text-sm text-zinc-300 transition-colors group-hover:text-white">
                    {card.link.label}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <CtaButton href={profile.github} className="mt-10">
          <span className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            Explore my projects on GitHub
          </span>
        </CtaButton>
      </Container>
    </section>
  );
};

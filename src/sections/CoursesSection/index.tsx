import { Reveal, Container, SectionHeading, LogoImg } from "@/components/ui";
import { courses } from "@/data/site";

export const CoursesSection = () => {
  return (
    <section className="relative w-full bg-black py-24">
      <Container>
        <SectionHeading
          id="courses"
          title="Courses"
          subtitle="Programs and certifications I've completed or am working through"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.title} delay={i * 120} className="h-full">
              <div className="lift flex h-full flex-col rounded-[20px] border border-white/10 bg-white/[0.03] p-7">
                <div className="mb-6">
                  <LogoImg name={course.logo} className="scale-75 origin-left" />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="font-body text-sm uppercase tracking-[1.5px] text-zinc-500">
                    {course.provider}
                  </p>
                  <p className="font-display mt-3 flex-1 text-xl leading-[30px] text-neutral-200">
                    {course.title}
                  </p>
                </div>
                <span
                  className={`mt-6 self-start rounded-full px-3 py-1 text-[11px] ${
                    course.inProgress
                      ? "border border-sky-100/20 bg-sky-100/10 text-sky-100/90"
                      : "border border-white/15 bg-white/5 text-neutral-300"
                  }`}
                >
                  {course.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

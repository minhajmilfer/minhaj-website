import heroPortrait from "@/assets/_nobg.png";
import { HeroIntro } from "./components/HeroIntro";
import { HeroBrands } from "./components/HeroBrands";
import { RotatingWords } from "./components/RotatingWords";
import { Container } from "@/components/ui";
import { useCvRequest } from "@/components/CvRequestModal";

export const HeroSection = () => {
  const { openCvRequest } = useCvRequest();

  return (
    <section className="relative w-full overflow-visible bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(120,140,255,0.14),transparent)] blur-2xl"
      />
      <Container className="relative flex flex-col items-center pt-20 text-center">
        <HeroIntro />
        <RotatingWords />

        <div className="relative w-full">
          <div className="relative mx-auto w-[min(540px,92vw)]">
            <div className="hero-photo relative">
              <img
                src={heroPortrait}
                alt="Minhaj Milfer"
                className="relative z-[1] block w-full select-none"
                draggable={false}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-[35%] bg-[linear-gradient(to_top,#000_10%,transparent)]"
              />
            </div>
            <div className="relative z-[2] mt-7 flex items-center justify-center gap-3 px-5">
              <button
                type="button"
                onClick={openCvRequest}
                className="cta-shine font-body inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white no-underline backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Request CV
              </button>
              <a
                href="#contact"
                className="cta-shine font-body inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white no-underline backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        <div className="rise mt-16 w-full" style={{ animationDelay: "500ms" }}>
          <HeroBrands />
        </div>
      </Container>
    </section>
  );
};

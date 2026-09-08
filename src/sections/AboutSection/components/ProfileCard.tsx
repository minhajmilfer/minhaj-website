import aboutPortrait from "@/assets/about-portrait.jpg";

export const ProfileCard = () => {
  return (
    <div className="w-full max-w-[340px] shrink-0 overflow-hidden rounded-[24px] border border-white/10">
      <img
        src={aboutPortrait}
        alt="Minhaj Milfer"
        className="h-full w-full object-cover grayscale"
      />
    </div>
  );
};

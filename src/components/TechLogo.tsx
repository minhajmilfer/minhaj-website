import python from "@/assets/logos/tech/python.svg";
import react from "@/assets/logos/tech/react.svg";
import figma from "@/assets/logos/tech/figma.svg";
import android from "@/assets/logos/tech/android.svg";
import git from "@/assets/logos/tech/git.svg";
import html5 from "@/assets/logos/tech/html5.svg";
import tailwindcss from "@/assets/logos/tech/tailwindcss.svg";
import tensorflow from "@/assets/logos/tech/tensorflow.svg";
import javascript from "@/assets/logos/tech/javascript.svg";

const srcs: Record<string, string> = {
  python,
  react,
  figma,
  android,
  git,
  html5,
  tailwindcss,
  tensorflow,
  javascript,
};

export const TechLogo = ({
  name,
  className = "h-4 w-4",
}: {
  name: string;
  className?: string;
}) => {
  const src = srcs[name];
  if (!src) return null;
  return (
    <img
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      className={`shrink-0 object-contain ${className}`}
    />
  );
};

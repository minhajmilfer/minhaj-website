import { profile } from "@/data/site";

export const cvRequestHref = (name: string, position: string, email: string) => {
  const subject = encodeURIComponent(`CV Access Request — ${name}`);
  const body = encodeURIComponent(
    `Hi Minhaj,\n\nI'd like to request access to your CV.\n\nName: ${name}\nPosition: ${position}\nEmail: ${email}\n\nBest regards,\n${name}`
  );
  return `mailto:${profile.email}?subject=${subject}&body=${body}`;
};
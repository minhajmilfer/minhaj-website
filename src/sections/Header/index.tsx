const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Courses", href: "#courses" },
  { label: "Journey", href: "#journey" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-6 flex w-max max-w-[92vw] items-center gap-3 overflow-x-auto rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <a
          href="#"
          aria-label="Home"
          className="font-display text-base font-semibold tracking-tight text-white no-underline"
        >
          minhaj<span className="text-zinc-500">.</span>
        </a>
        <span aria-hidden className="h-5 w-px bg-white/15" />
        <nav aria-label="Site" className="flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-white/85 no-underline transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

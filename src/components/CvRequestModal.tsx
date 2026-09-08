import { X } from "lucide-react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { cvRequestHref } from "@/sections/Header/cv";

type CvRequestContextValue = {
  openCvRequest: () => void;
};

const CvRequestContext = createContext<CvRequestContextValue>({
  openCvRequest: () => {},
});

export const useCvRequest = () => useContext(CvRequestContext);

export const CvRequestProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const openCvRequest = () => {
    setName("");
    setPosition("");
    setEmail("");
    setError("");
    setSent(false);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const n = name.trim();
    const p = position.trim();
    const em = email.trim();
    if (!n || !p || !em) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      setError("Please enter a valid email address.");
      return;
    }
    window.location.href = cvRequestHref(n, p, em);
    setSent(true);
  };

  return (
    <CvRequestContext.Provider value={{ openCvRequest }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Request my CV"
        >
          <div
            className="w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/15 bg-[#0b0d10] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-5 py-4">
              <h2 className="font-display text-lg font-semibold tracking-tight text-white">
                Request my CV
              </h2>
              <button
                type="button"
                aria-label="Close"
                className="font-body ml-auto text-zinc-500 transition-colors hover:text-zinc-200"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {sent ? (
              <div className="px-6 py-8 text-center">
                <p className="font-body text-sm text-white">
                  Request sent — your CV will be emailed to you soon.
                </p>
                <p className="font-body mt-2 text-xs text-zinc-500">
                  An email draft opened in your mail app — hit send to deliver
                  your details.
                </p>
                <button
                  type="button"
                  className="font-body mt-6 rounded-full border border-white/25 bg-white/10 px-6 py-2.5 text-sm font-medium text-white no-underline transition-colors hover:bg-white/20"
                  onClick={() => setOpen(false)}
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4 px-6 py-6">
                <label className="font-body flex flex-col gap-1.5 text-sm text-zinc-300">
                  Name
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="font-body w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-white/30"
                  />
                </label>
                <label className="font-body flex flex-col gap-1.5 text-sm text-zinc-300">
                  Position
                  <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    placeholder="e.g. Recruiter, Hiring Manager"
                    className="font-body w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-white/30"
                  />
                </label>
                <label className="font-body flex flex-col gap-1.5 text-sm text-zinc-300">
                  Email
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="font-body w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-white/30"
                  />
                </label>
                {error && (
                  <p className="font-body text-xs text-rose-400">{error}</p>
                )}
                <button
                  type="submit"
                  className="cta-shine font-body mt-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white no-underline backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  Request CV
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </CvRequestContext.Provider>
  );
};
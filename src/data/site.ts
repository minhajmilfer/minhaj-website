export const profile = {
  name: "Minhaj Milfer",
  firstName: "Minhaj",
  role: "CS undergraduate · Aspiring software engineer",
  email: "minhajmilfer6@gmail.com",
  website: "https://minhajmilfer.github.io/minhaj-website/",
  linkedin: "https://www.linkedin.com/in/minhajmilfer",
  github: "https://github.com/minhajmilfer",
  tagline: "Building with Python, the web & Android",
  languages: ["English", "Sinhala", "Tamil"],
};

export const rotatingWords = [
  "Aspiring AI & Machine Learning Engineer",
  "Computer Science Undergraduate",
  "Proactive problem solver",
  "Team player & collaborator",
  "Robotics & computer science enthusiast",
];

export const skills = {
  working: [
    { name: "Python", icon: "python", tint: "from-yellow-400/20 to-blue-500/10 text-yellow-300" },
    { name: "Web & App Development", icon: "code", tint: "from-sky-400/20 to-cyan-500/10 text-sky-300" },
    { name: "UI/UX Design", icon: "palette", tint: "from-pink-400/20 to-rose-500/10 text-pink-300" },
    { name: "Git & GitHub", icon: "git", tint: "from-orange-400/20 to-red-500/10 text-orange-300" },
    { name: "Project Management", icon: "kanban", tint: "from-emerald-400/20 to-teal-500/10 text-emerald-300" },
    { name: "Teamwork & Communication", icon: "users", tint: "from-violet-400/20 to-purple-500/10 text-violet-300" },
  ],
  learning: [
    { name: "Machine Learning", icon: "brain", tint: "from-cyan-400/20 to-blue-500/10 text-cyan-300" },
    { name: "Android Studio", icon: "android", tint: "from-green-400/20 to-emerald-500/10 text-green-300" },
    { name: "React", icon: "atom", tint: "from-sky-400/20 to-blue-500/10 text-sky-300" },
    { name: "Game Development", icon: "gamepad", tint: "from-fuchsia-400/20 to-purple-500/10 text-fuchsia-300" },
  ],
  marquee: [
    { name: "Python", logo: "python" },
    { name: "Web Development", logo: "html5" },
    { name: "UI/UX Design", logo: "figma" },
    { name: "Git & GitHub", logo: "git" },
    { name: "Android Studio", logo: "android" },
    { name: "Machine Learning", logo: "tensorflow" },
    { name: "React", logo: "react" },
    { name: "Tailwind CSS", logo: "tailwindcss" },
  ],
};

export const experience = [
  {
    role: "Business Development Intern",
    org: "QP Employment",
    place: "Colombo",
    period: "May 2026 – Jul 2026",
    current: false,
    points: [
      "Drove business development and client outreach for Middle Eastern enterprise clients, including Pepsi, Smasco and Al Reza.",
      "Executed outbound networking, market analysis and cross-border stakeholder communication using LinkedIn and Google Workspace.",
    ],
  },
  {
    role: "Operations & Business Development Lead",
    org: "AM International",
    period: "2022 – Present",
    current: true,
    points: [
      "Coordinate international B2B client and partner relationships.",
      "Run digital marketing campaigns, social outreach and brand positioning to acquire cross-border clients.",
    ],
  },
  {
    role: "Content Researcher & Customer Support",
    org: "AlmostEverything",
    place: "Remote",
    period: "2021 – 2022",
    current: false,
    points: [
      "Executed topic research that helped scale the channel past 1.5M subscribers.",
      "Managed customer inquiries across mail and web — where I learned to understand audiences and build for them.",
    ],
  },
];

export const education = [
  {
    title: "BSc (Hons) Computer Science",
    place: "University of Westminster, UK — via Informatics Institute of Technology",
    detail: "Commencing January 2027",
    streams: ["Software Development", "Web Design & Development", "Machine Learning"],
    logos: ["westminster", "iit"],
  },
  {
    title: "IIT InfoSchol Induction Programme",
    place: "Informatics Institute of Technology",
    detail: "Jul 2026 – Sep 2026",
    streams: ["Python for Programming", "App Development", "Web Development", "Mathematics for Computing", "Game Development"],
    logos: ["iit"],
  },
  {
    title: "GCE Advanced Level — Physical Science",
    place: "Zahira College, Colombo",
    detail: "English A · Combined Maths S · Physics S · Chemistry S · GIT B",
    streams: [],
    logos: ["zahira"],
  },
  {
    title: "GCE Ordinary Level",
    place: "Wisdom International School, Panadura",
    detail: "9 A's — English medium, June 2022",
    streams: [],
    logos: ["wisdom"],
  },
];

export const achievements = [
  {
    title: "Deputy Head Prefect",
    org: "Wisdom International School",
    detail: "Selected to lead the student prefect body — responsibility, discipline and representing the school.",
  },
  {
    title: "Football Team Captain",
    org: "Wisdom International School",
    detail: "Led the school team on and off the pitch — teamwork, strategy and performing under pressure.",
  },
];

export const courses = [
  {
    title: "AI & Machine Learning",
    provider: "SLIIT",
    logo: "sliit",
    status: "In progress",
    inProgress: true,
  },
  {
    title: "Trainee Full-Stack Development Course",
    provider: "University of Moratuwa",
    logo: "uom",
    status: "In progress",
    inProgress: true,
  },
  {
    title: "InfoSchol Induction Programme",
    provider: "Informatics Institute of Technology",
    logo: "iit",
    status: "Completed 2026",
    inProgress: false,
  },
];

export const projects = {
  stylecue: {
    eyebrow: "AI · Fashion · UI/UX",
    title: "StyleCue",
    description:
      "My first end-to-end product design: an AI companion that builds outfits from the clothes you already own — taken from user flows to a clickable Figma prototype.",
    tags: ["Concept", "UI/UX Design", "Figma Prototype"],
    link: { href: "https://shorturl.at/t8mbK", label: "View on Figma" },
  },
  zakath: {
    eyebrow: "Web App · Community Tool",
    title: "Zakath Calculator",
    description:
      "Zakath is a yearly obligation many families find confusing — so I built a guided calculator with Lovable for the Panadura Muslim Society, and they use it for real.",
    tags: ["Individual Project", "Lovable", "Live Users"],
    link: { href: "https://zakath1.lovable.app/", label: "Try live demo" },
  },
  todo: {
    eyebrow: "Side projects",
    title: "To-Do Task Manager",
    description:
      "My first mobile app, built with Android Studio as a team project — tasks, reminders and a clean UI, plus a real lesson in activities, layouts and shipping an APK.",
    tags: ["Team Project", "Android Studio", "Git/GitHub"],
    link: { href: "https://github.com/Haseef88/Todo-App", label: "View on GitHub" },
  },
};

export const manifesto = [
  "I wondered how apps knew",
  "what you'd love — so I started",
  "building my own.",
];

export type JourneyItem = {
  period: string;
  title: string;
  place: string;
  detail: string;
  tags: string[];
  logos: string[];
  icon: "play" | "trophy" | "graduation" | "briefcase" | "sparkles" | "rocket";
  status: "past" | "now" | "next";
  category: "experience" | "education";
};

export const journey: JourneyItem[] = [
  {
    period: "2021 – 2022",
    title: "First taste of digital audiences",
    place: "Content Researcher & Customer Support · AlmostEverything (Remote)",
    detail:
      "Researched topics and handled audience questions for a YouTube channel that grew past 1.5M subscribers — where I learned how content people love actually gets made.",
    tags: ["Research", "Audience insight", "Support"],
    logos: ["almost"],
    icon: "play",
    status: "past",
    category: "experience",
  },
  {
    period: "June 2022",
    title: "9 A's at GCE Ordinary Level",
    place: "Wisdom International School, Panadura",
    detail:
      "Finished O/Ls in English medium with 9 A's — while serving as Deputy Head Prefect and captaining the school football team.",
    tags: ["9 A's", "Deputy Head Prefect", "Football Captain"],
    logos: ["wisdom"],
    icon: "trophy",
    status: "past",
    category: "education",
  },
  {
    period: "Physical Science",
    title: "GCE Advanced Level",
    place: "Zahira College, Colombo",
    detail:
      "Combined Maths · Physics · Chemistry — English A, S passes in all three subjects, plus a B in GIT.",
    tags: ["Combined Maths", "Physics", "Chemistry"],
    logos: ["zahira"],
    icon: "graduation",
    status: "past",
    category: "education",
  },
  {
    period: "2022 – Present",
    title: "Running international client relationships",
    place: "Operations & Business Development Lead · AM International",
    detail:
      "Coordinating B2B clients and partners across borders — digital marketing, outreach and brand positioning.",
    tags: ["B2B", "Marketing", "Remote"],
    logos: ["amispice"],
    icon: "briefcase",
    status: "now",
    category: "experience",
  },
  {
    period: "May – Jul 2026",
    title: "Business development internship",
    place: "QP Employment · Colombo",
    detail:
      "Drove client outreach for Middle Eastern enterprise clients — including Pepsi, Smasco and Al Reza — with LinkedIn-led networking and market analysis.",
    tags: ["Internship", "Enterprise clients"],
    logos: ["qp"],
    icon: "briefcase",
    status: "past",
    category: "experience",
  },
  {
    period: "Jul – Sep 2026",
    title: "InfoSchol Scholarship — Induction Programme",
    place: "Informatics Institute of Technology",
    detail:
      "Scholarship programme covering Python, app & web development, mathematics for computing and game development — completed 2026.",
    tags: ["Scholarship", "Python", "Web", "Games"],
    logos: ["iit"],
    icon: "graduation",
    status: "now",
    category: "education",
  },
  {
    period: "Jan 2027",
    title: "BSc (Hons) Computer Science",
    place: "University of Westminster, UK — via IIT",
    detail:
      "Specialising in software development, web design & development, or machine learning — and looking for a software engineering internship before it starts.",
    tags: ["Degree", "Software Development", "ML"],
    logos: ["westminster", "iit"],
    icon: "rocket",
    status: "next",
    category: "education",
  },
];

export const journeyStats = [
  { value: "9 A's", label: "at GCE O/L, English medium" },
  { value: "1.5M+", label: "audience supported on YouTube" },
  { value: "3", label: "projects designed & shipped" },
  { value: "2", label: "university courses in progress" },
];

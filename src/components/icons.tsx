import {
  Atom,
  BrainCircuit,
  Code2,
  Gamepad2,
  GitBranch,
  Github,
  KanbanSquare,
  Palette,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";

export const techIcons: Record<string, LucideIcon> = {
  python: Code2,
  code: Code2,
  palette: Palette,
  git: GitBranch,
  kanban: KanbanSquare,
  users: Users,
  brain: BrainCircuit,
  android: Smartphone,
  atom: Atom,
  gamepad: Gamepad2,
};

export { Github };

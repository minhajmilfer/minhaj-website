# Minhaj Milfer — Portfolio

Personal portfolio site for Minhaj Milfer: intro, selected work, skills,
courses, journey timeline, and contact. Built with React, TypeScript, and
Tailwind CSS.

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server
npm run build   # build for production (outputs to dist/)
```

## Stack

- React 18 + Vite
- TypeScript
- Tailwind CSS
- Lucide icons

## Deploying

The build output is a fully static site in `dist/`. It uses relative asset
paths (`base: "./"`), so it can be hosted on any static host: Netlify, Vercel,
GitHub Pages, or a plain web server.

Example Netlify / Vercel:

```bash
npm install
npm run build
# publish the `dist` directory
```

## Notes

- CV is shared on request via a mailto form (see `src/components/CvRequestModal.tsx`).
- Press the backtick key (`` ` ``) anywhere for the terminal easter egg.
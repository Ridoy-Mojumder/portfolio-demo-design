# Ridoy Mojumder - one-page folio

A Next.js (App Router) designer portfolio. Every section lives on a single scroll: cover, about, selected work, practice, and correspondence. The left rail is a magazine spine.

Ridoy Mojumder's frontend, Framer, and Laravel portfolio. The site presents selected client and personal projects, 30+ Framer templates, and contact details in an editorial one-page format.

## Run it

```bash
cd alex-chen-folio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Update the portfolio

Edit `components/Folio.tsx` for name, projects, skills, experience, and contact. Update the title and description in `app/layout.tsx`. Replace `public/portrait.jpg` to update the portrait. The red seal initials (`RM`) sit in the spine.

## Stack

Next.js 15 · React 19 · TypeScript · CSS (no Tailwind) · Google fonts via `next/font` (Bodoni Moda, Source Serif 4, IBM Plex Sans)

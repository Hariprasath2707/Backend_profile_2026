# Hariprasath V — Developer Portfolio

A modern backend-developer portfolio built with **React + Vite + Tailwind CSS**
and **React Router**. Editorial / terminal-inspired aesthetic with a light/dark
theme toggle, an animated code terminal, a working contact form, and dedicated
case-study pages for each project.

## Getting started

You'll need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build locally
```

## Editing your content

Almost everything lives in **one file**: `src/data/content.js`
(profile, contact, socials, about, projects + case-study details, experience,
education, marquee).

### Pre-publish checklist
- [ ] Replace `public/profile.jpg` with your headshot (portrait ~800×1000).
- [ ] `public/Hariprasath_Resume.pdf` is wired to the Résumé button — replace it
      to update your resume.
- [ ] Set up the contact form (see below) — optional but recommended.
- [ ] After deploying, set your real URL in `index.html` (the `og:*`,
      `twitter:*`, canonical, and JSON-LD `url` fields) so share previews work.

## What's included

### Animated code terminal (hero)
The right side of the hero shows a self-typing "code window" that cycles through
backend snippets. It's theme-aware and pauses for users who prefer reduced
motion. Edit the snippets in `src/components/CodeWindow.jsx`.

### Contact form
A real form (name / email / message) in the Contact section.
- By default it opens the visitor's email app pre-filled to you.
- To receive messages **without** the visitor needing an email client, create a
  free form at https://formspree.io, then paste its endpoint into
  `contact.formEndpoint` in `src/data/content.js`. The form will then submit
  directly and show a success state.

### Project case-study pages
Each project links to its own page at `/projects/<slug>` (e.g.
`/projects/focult`) with overview, challenge, approach, key features, outcome
metrics, and full tech stack. Everything from the original card (tags, Live,
Code) is kept. Edit the per-project detail fields in `src/data/content.js`.

### Theme, motion & SEO
Light/dark toggle (remembered between visits), scroll-reveal animations, a
scroll-progress bar, plus full SEO + Open Graph/Twitter meta and a pre-made
`public/og-image.png` share image.

## Project structure

```
public/
  Hariprasath_Resume.pdf   profile.jpg   og-image.png   favicon.svg
  _redirects               ← Netlify SPA routing
src/
  data/content.js          ← edit this (all your text + project details)
  pages/
    Home.jsx               ← the main one-page site
    ProjectDetail.jsx      ← per-project case-study page
  components/              ← Nav, Hero, CodeWindow, Marquee, Projects,
                             About, Experience, Education, Contact, Footer,
                             ScrollProgress
  App.jsx                  ← routes + shared chrome
  main.jsx                 ← Router entry
vercel.json                ← Vercel SPA routing
```

## Deploying (static site)

- **Vercel** — import the repo and deploy. `vercel.json` is already included so
  direct links like `/projects/focult` work on refresh.
- **Netlify** — build command `npm run build`, publish directory `dist`.
  `public/_redirects` handles SPA routing.
- **GitHub Pages** — works, but SPA deep links need extra config; Vercel or
  Netlify is simpler for the project pages.

Good luck with the job hunt!

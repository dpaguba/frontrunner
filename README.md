# Frontrunner

A collection of seven React projects I built while learning the framework, each a real standalone Vite build with components, hooks and GSAP-driven motion.

The landing page ties them together as an editorial portfolio: a hero, a stats strip and a grid of cards, each embedding its app as a live demo in an iframe. Hover a card to reveal the running project, click through to its source.

## Running it

Each project is its own Vite app, and a postinstall wires them all up:

```bash
npm install           # installs the showcase and every sub-project
npm run build:demos   # build all seven demos into public/demos/
npm run dev           # showcase on http://localhost:5180
```

Each project also runs on its own, e.g. `npm run dev` inside `projects/velocity/`.

## Layout

- `index.html` and `src/` build the showcase shell: navbar, hero, project grid and the iframe viewer.
- `src/data/projects.js` lists every project with its accent colour and tags.
- `projects/<name>/` holds one React app each, self contained, built into `public/demos/`.

## Projects

- `valorant-nft` (Valorant NFT Marketplace): a dark NFT marketplace with a countdown, floating particles and GSAP animations.
- `beauty-studio` (Beauty Studio): a luxury beauty clinic landing page with GSAP ScrollSmoother and a full section layout.
- `gabriel-contassot` (Gabriel Contassot): a minimal black portfolio with ScrollTrigger clip-path reveals and a text-scramble hover.
- `zajno-digital-studio` (Zajno Digital Studio): an agency landing with a randomised loading counter, a custom GSAP ease and a clip-path reveal.
- `absent-agency` (Absent Agency): a design studio site with scroll-driven case study reveals and a wordmark that fills on scroll.
- `jirani` (Jirani Restaurant): a multi-page dark restaurant site with React Router, a filterable menu and a booking form.
- `velocity` (Velocity): a multi-page SaaS agency site with React Router, tabbed case studies and a contact form.

## Stack

React 19, Vite 7, Tailwind CSS v4, GSAP 3 with ScrollTrigger, React Router v7.

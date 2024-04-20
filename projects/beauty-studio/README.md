# Beauty Studio

A luxury beauty clinic landing page with smooth scroll animations.

## Overview

Single-page React application built as a full-section landing page for a premium beauty clinic. The main focus is GSAP ScrollSmoother for buttery smooth page scroll and section-by-section reveal animations.

## Features

- GSAP ScrollSmoother for smooth inertia-based scrolling
- Full-section layout: Hero, About, Services, Team, Pricing, Testimonials, Blog, Newsletter, Footer
- Responsive across mobile, tablet, and desktop

## Tech Stack

- **React 19** — component architecture
- **GSAP 3 + ScrollSmoother** — smooth scroll and scroll-triggered animations
- **Tailwind CSS v4** — utility-first styling
- **Vite** — build tool

## Project Structure

```
src/
  components/
    Header.jsx       Sticky navigation
    Hero.jsx         Full-screen opening section
    About.jsx        Studio story and values
    Services.jsx     Service offerings grid
    Team.jsx         Staff profiles
    Pricing.jsx      Pricing tiers
    Testimonial.jsx  Client reviews
    Blog.jsx         Latest articles
    Newsletter.jsx   Email capture
    Footer.jsx       Footer links and info
  App.jsx            ScrollSmoother setup + section assembly
  main.jsx           Root render
```

## Getting Started

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # production build → dist/
```

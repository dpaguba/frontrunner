# Jirani Restaurant

A modern, fully responsive restaurant website built with React, React Router and GSAP.

## Overview

Jirani is a multi-page restaurant site with a dark, premium aesthetic. Originally built as a static HTML/CSS/JS markup exercise from a Figma design, later fully converted to React with a complete redesign.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, feature highlights, customer favorites, CTA banner |
| `/#/menu` | Menu — filterable dish grid by category (Burgers, New Items, Snacks) |
| `/#/about` | About — restaurant story, animated stat counters, chef profiles, testimonial |
| `/#/book` | Book a Table — reservation form with success state, contact info |

## Tech Stack

- **React 19** — component architecture
- **React Router v7** (HashRouter) — client-side routing for static hosting
- **GSAP + ScrollTrigger** — scroll-driven fade-in animations and stat counters
- **CSS Custom Properties** — full design system (colors, spacing, typography)
- **Playfair Display + DM Sans** — premium serif + modern sans pairing

## Design System

```
--bg: #0d0d0d          Dark background
--surface: #161616     Section background
--card: #1e1e1e        Card background
--accent: #FF7400      Orange brand color
--text: #f0ebe3        Primary text (warm white)
--text-muted: #8a8070  Secondary text
```

## Features

- Fully responsive — mobile, tablet, desktop
- Mobile hamburger menu with slide-in overlay
- Scroll-aware navbar (transparent → dark + blur)
- Category tab filtering on Menu page
- Animated stat counters triggered on scroll (About page)
- Reservation form with success confirmation state
- `fade-up` scroll animation on all major content blocks

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
```

## Project Structure

```
src/
  components/
    Navbar.jsx      Responsive sticky nav with HashRouter links
    Footer.jsx      4-column footer with social icons
  pages/
    Home.jsx        Landing page with hero and featured dishes
    Menu.jsx        Filterable menu grid
    About.jsx       Story, stats, chefs, testimonial
    Book.jsx        Reservation form + contact info
  index.css         Complete design system
  App.jsx           Route definitions
  main.jsx          Entry point with HashRouter
public/
  images/           All restaurant photography assets
```

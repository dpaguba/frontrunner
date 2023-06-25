# Velocity

A modern, fully responsive software agency website built with React, React Router, and GSAP.

## Overview

Velocity is a multi-page agency site with a clean, light SaaS aesthetic. Originally built as a static HTML/CSS/JS markup exercise, later converted to React with a complete modern redesign — multi-page routing, improved copy, scroll animations, and full mobile responsiveness.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats strip, service cards, services preview, CTA |
| `/#/services` | Services — detailed service breakdowns with imagery, extra capabilities |
| `/#/case-studies` | Case Studies — tabbed showcase (Computer Vision, ML, Big Data) |
| `/#/contact` | Contact — inquiry form with success state, contact info |

## Tech Stack

- **React 19** — component architecture
- **React Router v7** (HashRouter) — client-side routing for static hosting
- **GSAP + ScrollTrigger** — scroll-driven fade-in animations
- **CSS Custom Properties** — full design system (colors, spacing, typography)
- **Space Grotesk + Inter** — modern geometric + clean sans pairing

## Design System

```
--bg: #ffffff           White background
--surface: #f8fafc      Light section background
--accent: #0a5cff       Blue brand color
--text: #0f172a         Near-black primary text
--text-muted: #64748b   Secondary text
--border: #e2e8f0       Subtle border
```

## Features

- Fully responsive — mobile, tablet, desktop
- Mobile hamburger menu with overlay
- Scroll-aware navbar (border + shadow on scroll)
- `.fade-up` scroll animations on all major content blocks
- Tabbed case studies panel with smooth transitions
- Contact form with success confirmation state
- Alternating service card layout (large format, image + text)

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
    Footer.jsx      3-column footer
  pages/
    Home.jsx        Landing page with hero, stats, service previews
    Services.jsx    Full service breakdowns + extra capabilities
    CaseStudies.jsx Tabbed case study showcase
    Contact.jsx     Inquiry form + contact info
  index.css         Complete design system
  App.jsx           Route definitions + ScrollToTop
  main.jsx          Entry point with HashRouter
public/
  images/           Photography and icon assets
```

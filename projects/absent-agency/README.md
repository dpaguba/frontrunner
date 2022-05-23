# Absent Agency

A recreation of the Absent Agency design studio website.

## Overview

Single-page React application with a fixed-layout design. The signature effect is a large wordmark at the bottom of the page that fills with black as the user scrolls, paired with scroll-driven clip-path reveals on five case study entries.

## Features

- Fixed full-viewport layout with scroll-driven reveal logic in JavaScript
- Five case studies revealed via `clip-path` animation tied to scroll position
- Wordmark SVG fill animates from white to black as the page scrolls
- Responsive layout

## Tech Stack

- **React 19** — component architecture
- **Vite** — build tool
- **CSS custom properties** — layout and animation tokens

## Project Structure

```
src/
  components/
    Hero.jsx         Fixed-position header with wordmark
    CaseStudies.jsx  Scroll-driven clip-path case study reveals
  App.jsx            Scroll handler + layout
  main.jsx           Root render
```

## Getting Started

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # production build → dist/
```

## Credits

Original design by [Absent Agency](https://absentagency.com/). This is a recreation for portfolio and learning purposes only.

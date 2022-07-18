# Gabriel Contassot

A recreation of the Gabriel Contassot freelance portfolio website.

## Overview

Single-page React application with a minimal black aesthetic. As the user scrolls, GSAP ScrollTrigger drives clip-path reveals on eight full-screen case study images. A custom `useTextScramble` hook powers a character-randomization effect on nav links during hover.

## Features

- GSAP ScrollTrigger clip-path and scale animations on scroll
- Text scramble effect on nav hover (RAF-based character randomization)
- Full-screen image gallery with smooth transitions
- Minimal black-and-white design

## Tech Stack

- **React 19** — component architecture
- **GSAP 3 + ScrollTrigger** — scroll-driven clip-path and scale animations
- **Vite** — build tool

## Project Structure

```
src/
  components/
    Nav.jsx        Navigation with useTextScramble hook
    Portfolio.jsx  Scroll-animated full-screen image gallery
  App.jsx          Layout
  main.jsx         Root render
```

## Getting Started

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # production build → dist/
```

## Credits

Original design by [Gabriel Contassot](https://gabrielcontassot.com/). This is a recreation for portfolio and learning purposes only.

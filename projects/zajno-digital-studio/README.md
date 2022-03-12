# Zajno Digital Studio

A recreation of the Zajno Digital Studio agency landing page.

## Overview

Single-page React application. The centrepiece is a loading sequence: a randomized counter races from 0 to 100 using a custom GSAP ease ("hop"), after which a full-viewport clip-path mask lifts to reveal the hero image with a simultaneous scale animation.

## Features

- Loading counter with randomized increments and custom GSAP `CustomEase` ("hop")
- Full-viewport clip-path reveal on load completion
- Hero image scale entrance animation
- Minimal, typographic design

## Tech Stack

- **React 19** — component architecture
- **GSAP 3 + CustomEase** — loading counter easing and clip-path reveal timeline
- **Vite** — build tool

## Project Structure

```
src/
  App.jsx    GSAP timeline, counter logic, clip-path reveal
  main.jsx   Root render
```

## Getting Started

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # production build → dist/
```

## Credits

Original design by [Zajno Digital Studio](https://zajno.com/). Recreation for portfolio and learning purposes only.

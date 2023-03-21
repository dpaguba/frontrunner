# Valorant NFT Marketplace

A dark-themed NFT marketplace concept built around the Valorant universe.

## Overview

Single-page React application styled after a gaming NFT platform. Built as a frontend exercise focused on GSAP animations, countdown timers, and particle effects.

## Features

- Full-screen hero with Reyna character art and animated entrance
- Floating particle system across the viewport
- Live countdown timer to a mock auction end
- NFT card grid with hover effects
- Stat cards (floor price, volume, owners)
- Responsive layout

## Tech Stack

- **React 19** — component architecture
- **GSAP 3** — entrance animations and timeline sequencing
- **Tailwind CSS v4** — utility-first styling
- **Vite** — build tool

## Project Structure

```
src/
  components/
    Navigation.jsx       Top navbar
    HeroSection.jsx      Full-screen hero with character art
    FloatingParticles.jsx Canvas-based particle system
    NFTCard.jsx          Individual NFT listing card
    StatCard.jsx         Floor price / volume / owners stats
  NFTMarketplace.jsx     Page layout assembling all sections
  App.jsx                Entry component
  main.jsx               Root render
```

## Getting Started

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # production build → dist/
```

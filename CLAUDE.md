# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## DAPUR SENJA - Restaurant Booking Website

A frontend-only restaurant/cafe booking SPA with a "sunset vibes" aesthetic, built with React, Vite, and Tailwind CSS.

### Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server (port 3000, 0.0.0.0) |
| `npm run build` | Build for production (`dist/`) |
| `npm run preview` | Preview production build |
| `npm run clean` | Clean build artifacts |
| `npm run lint` | TypeScript type checking |

### Architecture

**Tech Stack:** React 19, Vite 6, Tailwind CSS 4, Framer Motion 12, React Router 7, Google Generative AI

**Structure:**
- `src/pages/` - Route components (Home, About, Menu, Gallery, Reservation)
- `src/components/layout/` - Navbar, Footer
- `src/components/ui/` - Reusable UI (AnimatedSection)
- `src/constants/` - Static content (MENU_ITEMS, GALLERY_IMAGES, TESTIMONIALS)

**Styling:** Tailwind with custom theme (senja-orange, senja-brown, senja-cream palette), Google Fonts (Inter + Playfair Display)

**Key Patterns:**
- Component-based with React Router 7
- Local state only (no global state library)
- Framer Motion for scroll animations
- WhatsApp-integrated reservation form

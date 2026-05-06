<h1 align="center">
  <img src="public/logo.png" alt="Minals Logo" width="80" /><br/>
  Minals — Ramaiah Enterprises
</h1>

<p align="center">
  Official corporate website for <strong>Minals (Ramaiah Enterprises)</strong> — a trusted manufacturer and distributor of food and cleaning products across South India since 1962.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2.4-black?logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss" />
</p>

---

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Design System](#design-system)
- [Architecture Notes](#architecture-notes)

---

## About the Project

Minals (Ramaiah Enterprises) is a legacy brand with 60+ years of manufacturing excellence. This website serves as the company's official digital presence, showcasing their product catalogue, dealer network, and contact information.

Built with **Next.js 16 App Router**, **TypeScript**, and **Tailwind CSS v3**, the site is fully server-rendered — meaning every page is generated on the server before it reaches the browser, ensuring fast, reliable performance with no flash on navigation.

---

## Pages

| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Hero section, product category cards, heritage banner |
| **Products** | `/products` | Full product catalogue with category filter sidebar + prices |
| **Products — Cleaning** | `/products?category=cleaning` | Filtered to cleaning products only |
| **Products — Food** | `/products?category=food` | Filtered to food products only |
| **Our Story** | `/our-story` | Company history, legacy section, and journey timeline |
| **Dealers** | `/dealers` | Dealer network with India map and partner form |
| **Contact Us** | `/contact-us` | Contact form, address, and business hours |
| **Enquire Now** | `/enquire-now` | Lead capture enquiry form with sidebar |

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.4 | Framework — App Router, Server Components |
| [React](https://react.dev/) | 19.x | UI library |
| TypeScript | 5.x | Type safety across all components |
| [Tailwind CSS](https://tailwindcss.com/) | 3.x | All styling — utility-first CSS framework |
| [PostCSS](https://postcss.org/) | — | CSS processing pipeline for Tailwind |
| [Font Awesome 6](https://fontawesome.com/) | 6.0 | Icons (loaded via CDN in layout) |
| [Google Fonts](https://fonts.google.com/) | — | Playfair Display & Inter via `next/font` |

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** — v20.x or higher → [Download](https://nodejs.org/)
- **npm** — comes bundled with Node.js

Check your versions:
```bash
node -v
npm -v
```

---

### Installation

**Step 1 — Clone the repository**
```bash
git clone https://github.com/Saravanan2005real/Interian.git
cd Interian
```

**Step 2 — Install dependencies**
```bash
npm install
```

**Step 3 — Start the development server**
```bash
npm run dev
```

**Step 4 — Open in your browser**
```
http://localhost:3000
```

> If port 3000 is in use, Next.js will automatically use the next available port (e.g. 3001).

---

## Project Structure

```
Interian/
│
├── public/                        # Static assets served at root
│   ├── logo.png                   # Brand logo
│   ├── hero.png                   # Hero section product image
│   ├── 60 years.png               # Brand seal (60 years of trust)
│   ├── cleaning.png               # Cleaning category image
│   ├── food.png                   # Food category image
│   ├── india-map.png              # Dealers page map
│   ├── vintage.png                # Heritage / Our Story image
│   └── products/                  # Individual product images (19 products)
│
├── src/
│   └── app/                       # Next.js App Router
│       │
│       ├── components/
│       │   ├── Header.tsx         # Shared header component (Tailwind)
│       │   └── Footer.tsx         # Shared footer component (Tailwind)
│       │
│       ├── layout.tsx             # Root layout — fonts, head tags, globals.css
│       ├── globals.css            # @tailwind directives + minimal CSS overrides
│       ├── page.tsx               # Home page (/)
│       │
│       ├── products/
│       │   └── page.tsx           # Products — pure server component, category filter
│       │
│       ├── our-story/
│       │   └── page.tsx           # Our Story — timeline and photo gallery
│       │
│       ├── dealers/
│       │   └── page.tsx           # Dealers — map + partner application form
│       │
│       ├── contact-us/
│       │   └── page.tsx           # Contact Us — form + contact details
│       │
│       └── enquire-now/
│           └── page.tsx           # Enquire Now — lead form + sidebar
│
├── tailwind.config.ts             # Tailwind configuration (brand colors, fonts)
├── postcss.config.js              # PostCSS configuration
├── next.config.ts                 # Next.js configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies and scripts
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with Turbopack |
| `npm run build` | Build the app for production |
| `npm start` | Run the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Design System

All brand tokens are defined in `tailwind.config.ts` as custom Tailwind colors:

```ts
colors: {
  primary:      '#002B5B',   // Deep navy blue — brand primary
  secondary:    '#B8860B',   // Dark gold — prices, accents, CTAs
  accent:       '#D4AF37',   // Bright gold — hover states
  'text-main':  '#333333',   // Body text
  'text-light': '#666666',   // Muted / secondary text
  'bg-light':   '#f9f9f9',   // Light page backgrounds
}
```

**Usage in JSX — no CSS files needed:**
```tsx
<div className="bg-primary text-white px-5 py-3 rounded-lg hover:bg-secondary">
  Click me
</div>
```

**Typography:**
- **Headings** — `font-playfair` (Playfair Display serif) via `next/font/google`
- **Body / UI** — `font-inter` (Inter sans-serif) via `next/font/google`

**Icons** — Font Awesome 6 Free loaded from CDN in `layout.tsx`

---

## Architecture Notes

### Why Tailwind CSS (not Vanilla CSS)
The project was migrated from Vanilla CSS to **Tailwind CSS v3**. Benefits:

- ✅ **No separate CSS files** — styles live directly in JSX `className` attributes
- ✅ **Consistent design tokens** — all colors defined once in `tailwind.config.ts`
- ✅ **Smaller bundle** — Tailwind's purge removes unused styles automatically
- ✅ **No naming collisions** — utility classes can't conflict across pages
- ✅ **Shared components** — `Header.tsx` and `Footer.tsx` are reused across all pages, eliminating duplication

### Why the Products page is a pure Server Component
The `/products` page reads `?category=` using Next.js's `searchParams` server prop — **not** the `useSearchParams()` hook. This means:

- ✅ **Fully rendered on the server** — correct products are sent on first response
- ✅ **No Suspense boundary needed** — zero client/server hydration gap
- ✅ **No white flash** on navigation
- ✅ **SEO-friendly** — category URLs (`/products?category=food`) are crawlable

### Shared Components
Instead of repeating the header and footer HTML across all 6 pages, they are extracted into:
- `src/app/components/Header.tsx` — accepts `activePage` prop to highlight current nav link
- `src/app/components/Footer.tsx` — consistent footer with links, social icons, and copyright bar

---

## License

© 2026 Minals (Ramaiah Enterprises). All Rights Reserved.

---

<p align="center">Made with ❤️ for Minals — a legacy since 1962</p>
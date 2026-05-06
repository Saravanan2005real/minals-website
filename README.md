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
- [Recent Updates & Bug Fixes](#recent-updates--bug-fixes)
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

## Recent Updates & Bug Fixes

### Navigation & Routing
- **Fixed broken navigation**: Replaced all dead `<a href="#">` placeholder links with proper Next.js `<Link>` components across all page headers and footers. Every nav link (Home, Our Story, Products, Dealers, Contact Us, Enquire Now) now routes correctly from every page.
- **Logo click → Home reload**: Clicking the Minals logo from any page performs a full browser reload and redirects to the top of the Home page.
- **Fixed Next.js 16 `searchParams` Promise error**: The `/products` page was throwing a server-side crash because `searchParams` is a Promise in Next.js 15/16 and must be awaited. Fixed by making the page `async` and properly awaiting `searchParams`.

### Products Page
- **Interactive quantity selector**: Each product card now has a `Qty` input field. Users can type the number of items they want (e.g., 20), and the quantity is included in the WhatsApp enquiry message.
  - Clicking the input selects all text — no "120" bug when typing over existing value.
  - Backspace and mid-edit states work correctly (field can be temporarily empty while typing).
  - On blur, value clamps to minimum 1.
- **WhatsApp enquiry per product**: The "Enquiry" button on each product card opens WhatsApp directly with a prefilled message: `Hi, I'm interested in [Product Name] (Qty: X). Please share details/price and availability.`
- **Sort bar styled as a card**: The "Sort by / item count" bar is now enclosed in a white rounded box with a pill-style sort selector showing the active option highlighted in navy.
- **Server-side sorting**: Products can be sorted by Default, Price Low→High, or Price High→Low using URL params (`?sort=price-asc`), fully SEO-friendly with no client-side JS required.

### Enquire Now Page
- **WhatsApp button is now functional**: The "Chat on WhatsApp" button opens WhatsApp with a prefilled message. If the page receives a `?product=` query param (passed from a product card), the message is prefilled with that product name.
- **Correct contact details**: The "Get in touch" cards now show the correct registered address, phone, and email from the footer — not placeholder/incorrect data.

### Our Story Page
- **Hero section conflict fixed**: The right blue panel and the sticky header were the same `bg-primary` color with no boundary, making them appear as one merged block. Added a 3px gold (`border-secondary`) top border to the right panel to cleanly separate it from the header.
- **Logo background fixed**: The "60+ Years of Trust" badge image had a visible non-transparent background mismatching the panel. Applied `mix-blend-mode: multiply` with brightness/contrast correction so the badge blends seamlessly into the dark blue panel.
- **Hero background whitened**: The left text and middle photo areas of the hero are now pure white, removing the `#fafafa` grey gap that was visible between the header and the hero content.

### Contact Us Page
- **Removed feature bar**: The "Trusted Since 1962 / Quick Support / Pan India Reach / Quality Assurance" feature strip at the bottom of the page has been removed for a cleaner layout.

### Global
- **Removed all animations & transitions**: Stripped out the Intersection Observer scroll-reveal animations and all CSS `transition` effects. Pages now load content instantly with no fade-ins or delays.

---

## Pages

| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Hero section, product category cards, heritage banner |
| **Products** | `/products` | Full product catalogue with category filter sidebar, prices, qty selector, and WhatsApp enquiry |
| **Products — Cleaning** | `/products?category=cleaning` | Filtered to cleaning products only |
| **Products — Food** | `/products?category=food` | Filtered to food products only |
| **Our Story** | `/our-story` | Company history, legacy section, and journey timeline |
| **Dealers** | `/dealers` | Dealer network with India map and partner form |
| **Contact Us** | `/contact-us` | Contact form, address, and business hours |
| **Enquire Now** | `/enquire-now` | Lead capture enquiry form with WhatsApp CTA and contact sidebar |

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
| [Google Fonts](https://fonts.google.com/) | — | **Inter** via `next/font/google` — sole font used across the entire site |

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
git clone https://github.com/Saravanan2005real/minals-website.git
cd minals-website
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
minals-website/
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
│       │   ├── Header.tsx         # Shared header — logo, nav, WhatsApp CTA
│       │   └── Footer.tsx         # Shared footer — 5-column layout with contact info
│       │
│       ├── layout.tsx             # Root layout — Inter font, Font Awesome CDN, globals.css
│       ├── globals.css            # @tailwind directives + minimal overrides
│       ├── page.tsx               # Home page (/)
│       │
│       ├── products/
│       │   ├── page.tsx                   # Server component — filter, sort, product list
│       │   └── products-grid-client.tsx   # Client component — interactive qty input per card
│       │
│       ├── our-story/
│       │   └── page.tsx           # Our Story — hero, legacy, timeline, photos
│       │
│       ├── dealers/
│       │   └── page.tsx           # Dealers — India map + become a dealer form
│       │
│       ├── contact-us/
│       │   └── page.tsx           # Contact Us — contact form + address details
│       │
│       └── enquire-now/
│           └── page.tsx           # Enquire Now — lead form + WhatsApp CTA sidebar
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

**Usage in JSX — no separate CSS files needed:**
```tsx
<div className="bg-primary text-white px-5 py-3 rounded-lg hover:bg-secondary">
  Click me
</div>
```

**Typography:**
- **Sole Font** — `Inter` (sans-serif) loaded via `next/font/google` and applied globally via `font-inter` on the `<body>`. Used uniformly across all headings, labels, and body text for a clean, modern corporate aesthetic.

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

### Products Page — Server + Client Split
The `/products` page uses a hybrid architecture:

- `page.tsx` is a **pure Server Component** — reads `?category=` and `?sort=` from `searchParams`, filters/sorts the product list server-side, and passes the result as a prop.
- `products-grid-client.tsx` is a **Client Component** — renders the product grid with per-card interactive quantity inputs. Each card manages its own `qty` (committed number) and `raw` (display string) state independently, preventing the "120 bug" where typing over an existing value would append instead of replace.

### WhatsApp Integration
- **Product cards**: Each "Enquiry" button opens `wa.me/919566002233` with a prefilled message including the product name and selected quantity.
- **Enquire Now page**: The "Chat on WhatsApp" button opens WhatsApp with a generic enquiry message, or a product-specific one if `?product=` is present in the URL.

### Shared Components
- `Header.tsx` — Shared across all pages. Logo click performs a full-page reload to Home (`<a href="/">`). Active nav link is highlighted with a gold underline. Includes an integrated "WhatsApp us" CTA button.
- `Footer.tsx` — 5-column grid footer with brand info, quick links, product links, support links, and full contact details (address, phone, email).

---

## License

© 2026 Minals (Ramaiah Enterprises). All Rights Reserved.

---

<p align="center">Made with ❤️ for Minals — a legacy since 1962</p>

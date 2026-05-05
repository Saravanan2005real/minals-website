# Minals — Ramaiah Enterprises

> A premium corporate website for **Minals (Ramaiah Enterprises)** — a trusted brand since 1962, delivering high-quality food and cleaning products across South India.

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Vanilla CSS3**, this project is a production-ready, fully responsive website with a sophisticated dark-blue and gold brand identity.

---

## 🌐 Live Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, product categories, heritage banner |
| `/products` | Products — Server-rendered catalogue with category filter |
| `/products?category=cleaning` | Cleaning products only |
| `/products?category=food` | Food products only |
| `/our-story` | Brand history and company story |
| `/dealers` | Dealer network and locations |
| `/contact-us` | Contact form and address details |
| `/enquire-now` | Lead enquiry form |

---

## ✨ Features

- **Zero Flash Navigation** — Products page is a pure server component. No client-side hydration delay, no white flash between page loads.
- **Server-Side Category Filtering** — The `?category=` query param is read on the server. The correct set of products is rendered before anything reaches the browser.
- **Sticky Sidebar Filter** — Category sidebar stays visible as you scroll through products.
- **Responsive Layout** — Fully optimized for desktop, tablet, and mobile with CSS Grid and Flexbox.
- **Google Fonts** — Playfair Display (headings) and Inter (body) loaded via `next/font` for zero layout shift.
- **Font Awesome Icons** — Loaded from CDN for crisp, scalable icons throughout the UI.
- **SEO Ready** — Metadata, semantic HTML, descriptive `alt` attributes, and proper heading hierarchy on every page.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework — App Router, Server Components |
| TypeScript | Type safety across all components |
| Vanilla CSS3 | Styling — Flex, Grid, CSS Variables |
| [Font Awesome 6](https://fontawesome.com/) | Icons |
| Google Fonts (via `next/font`) | Typography — Playfair Display & Inter |

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** (comes with Node)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Saravanan2005real/Interian.git
cd Interian
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

**4. Open in browser**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
Interian/
├── public/                  # Static assets
│   ├── logo.png             # Brand logo
│   ├── hero.png             # Hero section image
│   └── products/            # Product images (sanitizer.png, etc.)
│
├── src/
│   └── app/
│       ├── layout.tsx       # Root layout (fonts, global head tags)
│       ├── globals.css      # Full design system & all page styles
│       ├── page.tsx         # Home page
│       │
│       ├── products/
│       │   └── page.tsx     # Products page (server component, category filter)
│       │
│       ├── our-story/
│       │   └── page.tsx     # Our Story page
│       │
│       ├── dealers/
│       │   └── page.tsx     # Dealers page
│       │
│       ├── contact-us/
│       │   └── page.tsx     # Contact Us page
│       │
│       └── enquire-now/
│           └── page.tsx     # Enquire Now page
│
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

---

## 🔑 Key Technical Decisions

### Why the Products page is a Server Component
The products page reads the `?category=` URL query param using Next.js's `searchParams` prop (server-side), not the `useSearchParams()` hook (client-side). This means:

- The page renders **entirely on the server** with the correct data
- **No Suspense boundary needed** — there is no client/server hydration gap
- **No white flash** — the browser receives fully-rendered HTML on the first response
- Category filtering works by navigating to `?category=cleaning` or `?category=food` — simple, reliable, and crawlable by search engines

### CSS Variables Design System
All colors, spacing, and effects are driven by CSS custom properties defined in `:root {}` inside `globals.css`. Changing the brand color palette is a one-line change.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 📜 License

© 2026 Minals (Ramaiah Enterprises). All Rights Reserved.
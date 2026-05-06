# Minals (Ramaiah Enterprises) - Design System

This document outlines the design language, color palette, typography, and component guidelines used in the Minals Corporate Website.

## 1. Brand Identity

- **Brand Name**: Minals
- **Parent Company**: Ramaiah Enterprises
- **Tagline**: A Legacy of Purity. A Future of Promise.
- **Established**: 1962
- **Core Values**: Trust, Quality, Pioneers in food and cleaning solutions.

## 2. Typography

The project uses two Google Fonts to balance modernity with tradition:

- **Primary Font (Headings)**: `Playfair Display` (Serif)
  - Used for titles (`h1`, `h2`, `h3`) and the main brand name to convey heritage, elegance, and trust.
- **Secondary Font (Body Text)**: `Inter` (Sans-serif)
  - Used for body text, navigation, and UI elements to ensure high legibility and a clean, modern look.

## 3. Color Palette

The color system is defined in `tailwind.config.ts`:

### Core Colors
- **Primary**: `#002B5B` (Deep Navy Blue) - Used for headers, primary buttons, and strong emphasis.
- **Secondary**: `#B8860B` (Dark Goldenrod) - Used for accents, badges, and secondary buttons.
- **Accent**: `#D4AF37` (Metallic Gold) - Used for hover states, active navigation links, and highlights.

### Text Colors
- **Main Text**: `#333333` - Used for primary body copy.
- **Light Text**: `#666666` - Used for subtitles, descriptions, and less emphasized text.

### Background Colors
- **Light Background**: `#f9f9f9` - Standard off-white background.
- **Food Category Background**: `#f0f4f0` - Subtle greenish tint for food product areas.
- **Cleaning Category Background**: `#f0f7ff` - Subtle bluish tint for cleaning product areas.

## 4. Layout & Grid System

The application uses standard Tailwind CSS flexbox and grid layouts, with specific custom grids defined for recurring components:
- `footer`: `1.8fr 1fr 1fr 1fr 1fr`
- `products-shell`: `280px 1fr`
- `products-hero`: `1.1fr 0.9fr`
- `features-bar`: `repeat(4, 1fr)`
- `heritage`: `0.65fr 2fr`

Container padding is generally set using responsive percentages (e.g., `px-[5%]`) to ensure scalability across screen sizes.

## 5. UI Elements & Effects

### Shadows
Custom shadows are applied to elevate elements:
- `card`: `0 10px 26px rgba(0,0,0,0.03)`
- `panel`: `0 10px 30px rgba(0,0,0,0.05)`
- `soft`: `0 4px 15px rgba(0,0,0,0.1)`
- `filter`: `0 10px 30px rgba(0,0,0,0.03)`

### Transitions & Hover States
- Interactive elements (cards, buttons) feature slight Y-axis translations (`-translate-y-[5px]` or `-translate-y-0.5`) on hover.
- Links and navigation items switch to the `Accent` color on hover.

### Special Effects
- **Hero Image Masking**: The hero images utilize CSS masking (`mask-image` with linear gradients) and `mix-blend-mode: multiply` to seamlessly blend into the background.

## 6. Iconography

The project uses **Font Awesome 6 (Free/Solid)** for iconography. Icons are heavily utilized in:
- Navigation (dropdown arrows)
- Features Bar (`fa-shield`, `fa-handshake`, `fa-users`, `fa-location-dot`)
- Buttons (arrows, WhatsApp icon)

## 7. Component Structure

- **Header**: Sticky (`sticky top-0 z-[1000]`), primary background color, white text, includes brand logo, navigation links, and Quick Enquiry buttons.
- **Hero Section**: Features a radial gradient background, large typography, and a masked hero image.
- **Features Bar**: A white card overlaid on a light gray background outlining the 4 main value propositions.
- **Category Grid**: Split cards highlighting 'Food' and 'Cleaning' product categories with distinct, tinted backgrounds.
- **Heritage Banner**: A robust section using the primary background with a vintage image and trust badges.
- **Footer**: Simple, clean layout with copyright information and policy links.

## 8. Development Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript

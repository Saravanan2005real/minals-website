# Minals (Ramaiah Enterprises) - Design System

This document outlines the design language, color palette, typography, and component guidelines used in the Minals Corporate Website.

## 1. Brand Identity

- **Brand Name**: Minals
- **Parent Company**: Ramaiah Enterprises
- **Tagline**: A Legacy of Purity. A Future of Promise.
- **Established**: 1962
- **Core Values**: Trust, Quality, Pioneers in food and cleaning solutions.

## 2. Typography

The project uses a curated font pairing to balance tradition and modern professionalism:

- **Primary Font (Headings)**: `Playfair Display` (Serif)
  - Used for hero titles, section headings, and the brand name.
  - Conveys heritage, high-end quality, and the "Since 1962" legacy.
- **Secondary Font (Body Text)**: `Inter` & `Montserrat` (Sans-serif)
  - `Inter` is used for primary body copy for maximum legibility.
  - `Montserrat` is used for labels, badges, and UI elements to add a modern, geometric feel.

## 3. Color Palette

The color system is defined in `tailwind.config.ts`:

### Core Colors
- **Primary**: `#002B5B` (Deep Navy Blue) - Represents trust, depth, and corporate stability.
- **Secondary**: `#B8860B` (Dark Goldenrod) - Represents excellence, quality, and heritage.
- **Accent**: `#D4AF37` (Metallic Gold) - Used for critical CTAs and active states.

### Semantic Categories
- **Sanitizers**: `#e8f4fa` (Light Blue)
- **Cleaning**: `#eef5fa` (Soft Navy)
- **Wellness**: `#eef8ed` (Sage Green)
- **Food**: `#fdf4e6` (Wheat/Cream)

## 4. Folder Structure (Aligned)

The repository follows a clean Next.js 15 App Router structure:

```
interian-ai-2/
├── public/                 # Static assets
│   ├── products/           # 44 Descriptive named product images
│   ├── logo.png            # Main brand logo
│   └── hero.png            # Optimized hero visuals
├── src/
│   └── app/                # Main application logic
│       ├── components/     # Shared UI (Header, Footer)
│       ├── dealers/        # Dealer network page
│       ├── products/       # Dynamic product catalog
│       └── ...             # Other pages (Story, Contact)
├── design.md               # This document
└── README.md               # Project overview & guide
```

## 5. Product Catalog (44 Products)

The catalog is divided into four main pillars:

### I. Sanitizers (11)
- Ceylon Citronella, German Rose, Italian Herbs, London Lavender, Malaysian Sandal, Minals Sanitizer Fluid, Royal Jasmine, Sentol (Jasmine, Lavender, Lemon), Spanish Limon.

### II. Cleaning Solutions (13)
- Minals Black Power, Premier (Bleaching Powder, Ant Powder, Toilet Cleaner, Liquid Soap, Floor Cleaners: Lemon/Floral/Neem, Bathroom Cleaner, Power Plus, Dishwash, Super Washing Soda, Glass Cleaner).

### III. Wellness & Care (7)
- Minals (Castor Oil, Neem Oil, Rose Water), Sri Lakshmi Sandal Tablet, Lion Colours (Kesari, Lemon Yellow, Orange Red).

### IV. Food Products (13)
- Martin Vinegar, Omum Water, Lion (Artificial Flavours, Soft Drink Concentrates, Biryani Flavour, Milk Mixes: Badam/Pista/Rose, Special Colors, Cardamom Powder, Pachai Karpooram, Corn Flour, Baking Powder).

## 6. Architecture & Logic

- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS v3 with custom brand tokens.
- **Enquiry Logic**: 
  - Integrated WhatsApp CTA with pre-filled product/quantity details.
  - Automated lead capture via Google Sheets API (No-Code backend integration).
- **Responsiveness**: "Mobile-First" approach with specific "Above the Fold" optimizations for small screens.

---
*Last Updated: May 2026*


# Minals - Ramaiah Enterprises

A premium, production-ready corporate website for **Ramaiah Enterprises**, built with **Next.js 16**, **TypeScript**, and **CSS3**. This project showcases a high-fidelity design for the Minals brand, featuring a sophisticated dark blue and gold aesthetic that honors the company's 60+ year legacy.

## 🌟 Key Updates & Bug Fixes

- **Next.js 16 Server Component Fix**: Addressed a critical Next.js 15/16 App Router error (`searchParams` is a Promise) on the `/products` page which was breaking navigation across the site. The route now properly `await`s the `searchParams` Promise.
- **Global Navigation Routing**: Replaced dead `<a href="#">` placeholder links with proper Next.js `<Link>` components across the Header, Footer, and Quick Links. You can now seamlessly navigate between Home, Products, Our Story, Dealers, Contact Us, and Enquire Now.
- **Logo & Home Reloads**: Updated all branding logos and "Home" buttons to act as hard reload anchors (`<a href="/">`). Clicking the logo or "Home" from any page will instantly execute a full browser reload and jump to the top of the Home page.
- **Sticky Filter Alignment**: Improved the UI of the Products category sidebar so it vertically self-centers on the screen as you scroll, instead of pinning tightly to the top edge. 
- **Removed Animations**: Stripped out all transition delays and Intersection Observer reveal effects. Pages now load their content instantly without scroll fade-ins.

## 🌟 Key Features

- **Modern Tech Stack**: Built with Next.js 16 (App Router) and TypeScript for optimal performance and developer experience.
- **High-Fidelity UI**: Meticulously designed to match brand guidelines with a focus on premium aesthetics and professional layout.
- **Dynamic Hero Section**: Features custom-blended product photography and an animated "60 Years of Trust" brand seal.
- **Interactive Product Categories**: High-quality card layouts for Food and Cleaning product divisions with soft pastel palettes.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Performance Optimized**: Leverages Next.js font optimization and efficient image handling for lightning-fast load times.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: Vanilla CSS3 with Modern Flex/Grid and CSS Variables
- **Icons**: [Font Awesome 6](https://fontawesome.com/)
- **Typography**: Playfair Display (Serif) & Inter (Sans-serif) via Google Fonts
- **Development**: TypeScript, ESLint, Prettier

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Saravanan2005real/Interian.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

- `src/app/`: Next.js App Router source code. Includes nested routes for `products`, `our-story`, `dealers`, `contact-us`, and `enquire-now`.
- `public/`: Static assets (logos, product images, brand seals).
- `globals.css`: Core design system and global styles.
- `page.tsx`: Main landing page implementation.

## 📜 License

© 2026 Minals (Ramaiah Enterprises). All Rights Reserved.
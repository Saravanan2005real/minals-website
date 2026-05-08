'use client';

import { useState } from 'react';
import Link from 'next/link';

type ProductCategory = 'all' | 'sanitizers' | 'cleaning' | 'wellness' | 'food';

const filterItems: { cat: ProductCategory; icon: string }[] = [
  { cat: 'all',        icon: 'fas fa-cubes' },
  { cat: 'sanitizers', icon: 'fas fa-hands-wash' },
  { cat: 'cleaning',   icon: 'fas fa-broom' },
  { cat: 'wellness',   icon: 'fas fa-leaf' },
  { cat: 'food',       icon: 'fas fa-utensils' },
];

function categoryLabel(c: ProductCategory) {
  switch (c) {
    case 'all':        return 'All Products';
    case 'sanitizers': return 'Sanitizers';
    case 'cleaning':   return 'Cleaning Products';
    case 'wellness':   return 'Wellness & Care';
    case 'food':       return 'Food Products';
  }
}

function buildUrl(cat: string) {
  const p = new URLSearchParams();
  if (cat !== 'all') p.set('category', cat);
  const q = p.toString();
  return q ? `/products?${q}` : `/products`;
}

export default function CategoryPanelClient({
  activeCategory,
}: {
  activeCategory: ProductCategory;
}) {
  // Desktop: starts closed; Mobile: starts closed
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  const categoryList = (
    <div className="flex flex-col" role="tablist" aria-label="Product categories">
      {filterItems.map(({ cat, icon }) => (
        <Link
          key={cat}
          href={buildUrl(cat)}
          role="tab"
          aria-selected={activeCategory === cat}
          onClick={() => setMobileOpen(false)}
          className={`w-full grid grid-cols-[34px_1fr_18px] items-center gap-[10px] px-4 py-3 border-t border-black/[0.06] text-left no-underline text-inherit hover:bg-[#f7fbff] transition-colors ${
            activeCategory === cat ? 'bg-[#eef5fa]' : 'bg-white'
          }`}
        >
          <span className="w-[34px] h-[34px] rounded-[10px] inline-flex items-center justify-center bg-primary/[0.06] text-primary">
            <i className={icon} />
          </span>
          <span className="text-[14px] font-bold text-[#0f2f54]">{categoryLabel(cat)}</span>
          <span className="text-primary/55 text-[12px]">
            <i className="fas fa-chevron-right" />
          </span>
        </Link>
      ))}
    </div>
  );

  return (
    <>
      {/* ══ DESKTOP (lg+): sticky collapsible sidebar ══
          Wrapper is self-stretch so the grid cell is as tall as the products
          column — this gives the sticky aside room to actually scroll & lock. */}
      <div className="hidden lg:block self-stretch">
      <aside className="sticky top-[100px] rounded-[14px] bg-white border border-black/[0.06] shadow-filter overflow-hidden ml-2">
        {/* Clickable header toggles the list */}
        <button
          type="button"
          onClick={() => setDesktopOpen((v) => !v)}
          aria-expanded={desktopOpen}
          className="w-full flex items-center justify-between px-4 py-[14px] bg-gradient-to-r from-[#062e5e] to-primary text-white cursor-pointer border-none outline-none"
        >
          <span className="font-montserrat text-[14px] font-bold tracking-[0.2px]">Categories</span>
          <i className={`fas fa-chevron-${desktopOpen ? 'up' : 'down'} text-[11px] transition-transform duration-200`} />
        </button>

        {/* Smooth height animation via max-height */}
        <div
          className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
          style={{ maxHeight: desktopOpen ? '500px' : '0px' }}
        >
          {categoryList}
        </div>
      </aside>
      </div>

      {/* ══ MOBILE (< lg): fixed bottom sheet ══ */}
      <div className="lg:hidden">
        {/* Dim backdrop when open */}
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
            mobileOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* The sheet — always in DOM, slides via transform so animation works */}
        <div
          role="dialog"
          aria-modal={mobileOpen}
          aria-label="Product categories"
          className="fixed bottom-0 left-0 right-0 z-50 flex flex-col bg-white rounded-t-[20px] shadow-[0_-6px_32px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-in-out"
          style={{
            height: '85dvh',
            transform: mobileOpen
              ? 'translateY(0)'
              : 'translateY(calc(100% - 52px))',
          }}
        >
          {/* Fixed-height header bar — always visible at bottom, tap to open */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            className="flex-shrink-0 w-full flex items-center justify-between px-5 bg-gradient-to-r from-[#062e5e] to-primary text-white rounded-t-[20px] border-none cursor-pointer outline-none"
            style={{ height: '52px' }}
          >
            <div className="flex items-center gap-[10px]">
              <i className="fas fa-layer-group text-[13px] opacity-80" />
              <span className="font-montserrat text-[14px] font-bold tracking-[0.2px]">
                Category
              </span>
            </div>
            {/* Down arrow to close when open, up arrow to hint expansion when closed */}
            <i
              className={`fas fa-chevron-${mobileOpen ? 'down' : 'up'} text-[13px] transition-transform duration-200`}
            />
          </button>

          {/* Scrollable list fills rest of sheet */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            {categoryList}
          </div>
        </div>
      </div>
    </>
  );
}

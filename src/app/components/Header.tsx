'use client';

import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  activePage?: 'home' | 'our-story' | 'products' | 'dealers' | 'contact-us' | 'enquire-now';
}

export default function Header({ activePage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = (page: string) =>
    `nav-link text-[16px] font-medium no-underline transition-colors block py-2 lg:py-0 ${
      activePage === page ? 'text-accent nav-active' : 'text-white hover:text-accent'
    }`;

  return (
    <header className="bg-primary text-white px-[5%] py-[10px] flex justify-between items-center sticky top-0 z-[1000] flex-wrap lg:flex-nowrap">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <a href="/" className="flex items-center gap-[12px] no-underline">
          <img src="/logo.png" alt="Minals Logo" className="h-[40px] md:h-[52px] drop-shadow-md" />
          <div className="flex flex-col items-center border-l border-white/20 pl-3 md:pl-4">
            <h1 className="text-[20px] md:text-[26px] tracking-[5px] m-0 leading-none text-white text-center w-full">MINALS</h1>
            <h2 className="font-montserrat text-[9px] md:text-[11px] font-medium tracking-[0.2px] mt-[2px] uppercase text-white/90 w-full text-center">RAMAIAH ENTERPRISES</h2>
            <div className="flex items-center gap-1 md:gap-2 mt-[2px]">
              <span className="w-[10px] md:w-[20px] h-px bg-secondary" />
              <span className="text-secondary text-[8px] md:text-[10px] font-semibold tracking-[1px] uppercase">SINCE 1962</span>
              <span className="w-[10px] md:w-[20px] h-px bg-secondary" />
            </div>
          </div>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-white text-[24px] focus:outline-none ml-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>

      <div className={`w-full lg:w-auto lg:flex items-center flex-col lg:flex-row mt-4 lg:mt-0 ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <nav className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-8">
          <ul className="flex flex-col lg:flex-row gap-2 lg:gap-[26px] text-center lg:text-left w-full">
            <li><a href="/" className={linkClass('home')}>Home</a></li>
            <li><Link href="/our-story" className={linkClass('our-story')}>Our Story</Link></li>
            <li><Link href="/products" className={linkClass('products')}>Products</Link></li>
            <li><Link href="/dealers" className={linkClass('dealers')}>Dealers</Link></li>
            <li><Link href="/contact-us" className={linkClass('contact-us')}>Contact Us</Link></li>
          </ul>
        </nav>

        <div className="flex flex-col sm:flex-row gap-[12px] items-center w-full lg:w-auto justify-center lg:justify-start">
          <Link href="/enquire-now" className="bg-secondary text-white px-4 py-[8px] rounded-[5px] text-[13px] font-semibold flex items-center justify-center gap-[8px] no-underline hover:bg-accent hover:-translate-y-0.5 w-full sm:w-auto">
            Enquire Now <i className="fas fa-arrow-right text-[11px]" />
          </Link>
          <a href="https://wa.me/918220012671" target="_blank" rel="noopener noreferrer"
            className="border border-white/30 text-white px-4 py-[8px] rounded-[5px] text-[13px] flex items-center justify-center gap-[8px] no-underline hover:border-[#25D366] hover:bg-[#25D366]/10 transition-colors w-full sm:w-auto">
            <i className="fab fa-whatsapp text-[20px]" style={{ color: '#25D366' }} />
            WhatsApp us
          </a>
        </div>
      </div>
    </header>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  activePage?: 'home' | 'our-story' | 'products' | 'dealers' | 'contact-us' | 'enquire-now';
}

export default function Header({ activePage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle body scroll locking when menu is open
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const linkClass = (page: string) =>
    `nav-link text-[20px] lg:text-[16px] font-medium no-underline transition-colors block py-4 lg:py-0 ${
      activePage === page ? 'text-accent' : 'text-white hover:text-accent'
    }`;

  return (
    <header className="bg-primary text-white px-[5%] py-[10px] flex justify-between items-center sticky top-0 z-[1000] flex-wrap lg:flex-nowrap">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Link href="/" className="flex items-center gap-[12px] no-underline relative z-[4000]" onClick={closeMenu}>
          <div className="relative w-[40px] h-[40px] md:w-[52px] md:h-[52px] drop-shadow-md">
            <Image 
              src="/logo.png" 
              alt="Minals Logo" 
              fill
              className="object-contain"
              sizes="52px"
            />
          </div>
          <div className="flex flex-col items-center border-l border-white/20 pl-3 md:pl-4">
            <h1 className="text-[20px] md:text-[26px] tracking-[5px] m-0 leading-none text-white text-center w-full">MINALS</h1>
            <h2 className="font-montserrat text-[9px] md:text-[11px] font-medium tracking-[0.2px] mt-[2px] uppercase text-white/90 w-full text-center">RAMAIAH ENTERPRISES</h2>
            <div className="flex items-center gap-1 md:gap-2 mt-[2px]">
              <span className="w-[10px] md:w-[20px] h-px bg-secondary" />
              <span className="text-secondary text-[8px] md:text-[10px] font-semibold tracking-[1px] uppercase">SINCE 1962</span>
              <span className="w-[10px] md:w-[20px] h-px bg-secondary" />
            </div>
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-white text-[24px] focus:outline-none ml-4 relative z-[4000]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>

      {/* Navigation Menu */}
      <div className={`
        fixed inset-0 bg-primary z-[3000] flex flex-col w-full items-center justify-center
        transition-all duration-500 ease-in-out
        ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} 
        lg:static lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto lg:flex-row lg:bg-transparent lg:z-auto lg:w-auto lg:mt-0 lg:justify-end
      `}>
        <nav className="w-full lg:w-auto mb-8 lg:mb-0 lg:mr-8 mt-20 lg:mt-0">
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-[26px] text-center lg:text-left w-full">
            <li><a href="/" className={linkClass('home')} onClick={closeMenu}>Home</a></li>
            <li><Link href="/our-story" className={linkClass('our-story')} onClick={closeMenu}>Our Story</Link></li>
            <li><Link href="/products" className={linkClass('products')} onClick={closeMenu}>Products</Link></li>
            <li><Link href="/dealers" className={linkClass('dealers')} onClick={closeMenu}>Dealers</Link></li>
            <li><Link href="/contact-us" className={linkClass('contact-us')} onClick={closeMenu}>Contact Us</Link></li>
          </ul>
        </nav>

        <div className="flex flex-col sm:flex-row gap-[12px] items-center w-[80%] lg:w-auto justify-center lg:justify-start">

          <a href="https://wa.me/918220012671?text=Hello%20Minals,%20I%20am%20interested%20in%20your%20products.%20Please%20provide%20more%20details." target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex border border-white/30 text-white px-4 py-[8px] rounded-[5px] text-[13px] items-center justify-center gap-[8px] no-underline hover:border-[#25D366] hover:bg-[#25D366]/10 transition-colors w-full sm:w-auto">
            <i className="fab fa-whatsapp text-[20px]" style={{ color: '#25D366' }} />
            Quick Enquiry
          </a>
        </div>
      </div>

      {/* Mobile Floating Quick Enquiry (WhatsApp) */}
      <a 
        href="https://wa.me/918220012671?text=Hello%20Minals,%20I%20am%20interested%20in%20your%20products.%20Please%20provide%20more%20details." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[2000] sm:hidden bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.3)] flex items-center justify-center hover:scale-110 transition-transform active:scale-95 animate-bounce-subtle"
        aria-label="Quick Enquiry on WhatsApp"
      >
        <i className="fab fa-whatsapp text-[28px]" />
      </a>
    </header>
  );
}

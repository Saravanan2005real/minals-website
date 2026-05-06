import Link from 'next/link';

interface HeaderProps {
  activePage?: 'home' | 'our-story' | 'products' | 'dealers' | 'contact-us' | 'enquire-now';
}

export default function Header({ activePage }: HeaderProps) {
  const linkClass = (page: string) =>
    `text-[14px] font-medium no-underline ${activePage === page ? 'text-accent' : 'text-white hover:text-accent'}`;

  return (
    <header className="bg-primary text-white px-[5%] py-[15px] flex justify-between items-center sticky top-0 z-[1000]">
      <a href="/" className="flex items-center gap-[15px] no-underline">
        <img src="/logo.png" alt="Minals Logo" className="h-[70px] drop-shadow-md" />
        <div className="flex flex-col items-center border-l border-white/20 pl-5">
          <h1 className="font-playfair text-[32px] tracking-[5px] m-0 leading-none text-white text-center w-full">MINALS</h1>
          <h2 className="font-inter text-[13.5px] font-medium tracking-[0.2px] mt-[2px] uppercase text-white/90 w-full text-center">RAMAIAH ENTERPRISES</h2>
          <div className="flex items-center gap-2 mt-[2px]">
            <span className="w-[25px] h-px bg-secondary" />
            <span className="text-secondary text-[11px] font-semibold tracking-[1px] uppercase">SINCE 1962</span>
            <span className="w-[25px] h-px bg-secondary" />
          </div>
        </div>
      </a>

      <nav>
        <ul className="flex gap-[30px]">
          <li><a href="/" className={linkClass('home')}>Home</a></li>
          <li><Link href="/our-story" className={linkClass('our-story')}>Our Story</Link></li>
          <li><Link href="/products" className={linkClass('products')}>Products <i className="fas fa-chevron-down text-[10px]" /></Link></li>
          <li><Link href="/dealers" className={linkClass('dealers')}>Dealers</Link></li>
          <li><Link href="/contact-us" className={linkClass('contact-us')}>Contact Us</Link></li>
        </ul>
      </nav>

      <div className="flex gap-[15px] items-center">
        <Link href="/enquire-now" className="bg-secondary text-white px-5 py-[10px] rounded-[5px] font-semibold flex items-center gap-[10px] no-underline hover:bg-accent hover:-translate-y-0.5">
          Enquire Now <i className="fas fa-arrow-right" />
        </Link>
        <a href="#" className="border border-white/50 text-white px-5 py-[10px] rounded-[5px] text-[14px] flex items-center gap-[10px] no-underline">
          <i className="fab fa-whatsapp" /> Quick Enquiry via WhatsApp
        </a>
      </div>
    </header>
  );
}

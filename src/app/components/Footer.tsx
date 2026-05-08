import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-[5%] pt-[50px] flex flex-col">
      {/* Top grid — brand + 2 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-[50px] pb-[40px] items-start">

        {/* Brand */}
        <div className="flex flex-col gap-5 lg:pr-[30px] lg:border-r border-white/10 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-[15px] no-underline">
            <div className="relative w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] drop-shadow-md">
              <Image 
                src="/logo.png" 
                alt="Minals Logo" 
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-center border-l border-white/20 pl-4 lg:pl-5">
              <h1 className="text-[24px] lg:text-[32px] tracking-[5px] m-0 leading-none text-white text-center w-full">MINALS</h1>
              <h2 className="text-[10px] lg:text-[13.5px] font-montserrat font-medium tracking-[0.2px] mt-[2px] uppercase text-white/90 w-full text-center">RAMAIAH ENTERPRISES</h2>
              <div className="flex items-center gap-2 mt-[2px]">
                <span className="w-[15px] lg:w-[25px] h-px bg-secondary" />
                <span className="text-secondary text-[9px] lg:text-[11px] font-semibold tracking-[1px] uppercase">SINCE 1962</span>
                <span className="w-[15px] lg:w-[25px] h-px bg-secondary" />
              </div>
            </div>
          </Link>
          <p className="text-[13px] lg:text-[14px] leading-[1.6] text-[#e0e0e0] max-w-full lg:max-w-[280px]">
            <strong className="font-semibold text-white block mb-[5px]">Rooted in values. Driven by trust.</strong>
            Serving generations with quality and care since 1962.
          </p>
        </div>

        {/* Quick Links */}
        <FooterCol title="Quick Links">
          <li><a href="/" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block transition-all">Home</a></li>
          <li><Link href="/our-story" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block transition-all">Our Story</Link></li>
          <li><Link href="/products" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block transition-all">Products</Link></li>
          <li><Link href="/dealers" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block transition-all">Dealers</Link></li>
          <li><Link href="/contact-us" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block transition-all">Contact Us</Link></li>
        </FooterCol>

        {/* Our Products */}
        <FooterCol title="Our Products">
          <li><Link href="/products?category=food" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block transition-all">Food Products</Link></li>
          <li><Link href="/products?category=cleaning" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block transition-all">Cleaning Products</Link></li>
          <li><Link href="/products" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block transition-all">View All Products</Link></li>
        </FooterCol>



      </div>


    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[15px] font-montserrat font-bold mb-[18px] text-white whitespace-nowrap uppercase tracking-[0.3px] border-b-2 border-secondary/50 pb-[10px]">{title}</h4>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}

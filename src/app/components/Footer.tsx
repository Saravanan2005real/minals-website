import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-[5%] pt-[50px] flex flex-col">
      {/* Top grid — brand + 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr_1.4fr] gap-10 lg:gap-[50px] pb-[40px] items-start">

        {/* Brand */}
        <div className="flex flex-col gap-5 lg:pr-[30px] lg:border-r border-white/10 sm:col-span-2 lg:col-span-1">
          <a href="/" className="flex items-center gap-[15px] no-underline">
            <img src="/logo.png" alt="Minals Logo" className="h-[50px] lg:h-[70px] drop-shadow-md" />
            <div className="flex flex-col items-center border-l border-white/20 pl-4 lg:pl-5">
              <h1 className="text-[24px] lg:text-[32px] tracking-[5px] m-0 leading-none text-white text-center w-full">MINALS</h1>
              <h2 className="text-[10px] lg:text-[13.5px] font-montserrat font-medium tracking-[0.2px] mt-[2px] uppercase text-white/90 w-full text-center">RAMAIAH ENTERPRISES</h2>
              <div className="flex items-center gap-2 mt-[2px]">
                <span className="w-[15px] lg:w-[25px] h-px bg-secondary" />
                <span className="text-secondary text-[9px] lg:text-[11px] font-semibold tracking-[1px] uppercase">SINCE 1962</span>
                <span className="w-[15px] lg:w-[25px] h-px bg-secondary" />
              </div>
            </div>
          </a>
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

        {/* Support */}
        <FooterCol title="Support">
          <li><Link href="/enquire-now" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block transition-all">Enquiry</Link></li>
          <li><Link href="/enquire-now" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block transition-all">Bulk Orders</Link></li>
          <li><Link href="/contact-us" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block transition-all">FAQs</Link></li>
        </FooterCol>

        {/* Contact Us */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="text-[15px] font-bold mb-[18px] text-white uppercase tracking-[0.3px] border-b-2 border-secondary/50 pb-[10px]">Contact Us</h4>
          <ul className="flex flex-col gap-[14px]">
            <li className="flex flex-col gap-[2px]">
              <span className="text-white text-[12px] font-semibold uppercase tracking-[0.5px] mb-[2px]">Ramaiah Enterprises</span>
              <span className="text-[#c8cdd3] text-[13px] leading-[1.6]">
                No 56, Govindappa Street,<br />Chennai - 600 001
              </span>
            </li>
            <li className="flex flex-col gap-[1px]">
              <span className="text-white text-[12px] font-semibold uppercase tracking-[0.5px]">Phone</span>
              <span className="text-[#c8cdd3] text-[13px]">044 - 25212585</span>
            </li>
            <li className="flex flex-col gap-[1px]">
              <span className="text-white text-[12px] font-semibold uppercase tracking-[0.5px]">Mobile</span>
              <span className="text-[#c8cdd3] text-[13px]">+91 95660 02233</span>
            </li>
            <li className="flex flex-col gap-[1px]">
              <span className="text-white text-[12px] font-semibold uppercase tracking-[0.5px]">Mail Us</span>
              <a href="mailto:ramaiah25@gmail.com" className="text-[#c8cdd3] text-[13px] no-underline hover:text-secondary transition-colors">ramaiah25@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar — all in one centred row */}
      <div className="border-t border-white/10 py-[16px] mt-auto flex justify-center items-center gap-[6px] text-[11px] sm:text-[13px] text-[#9aa3ae] flex-wrap text-center">
        <span>© 2024 Minals (Ramaiah Enterprises). All Rights Reserved.</span>
        <span className="text-white/20 mx-[2px] sm:mx-[6px] hidden sm:inline">|</span>
        <a href="#" className="text-[#9aa3ae] no-underline hover:text-white whitespace-nowrap mt-2 sm:mt-0">Privacy Policy</a>
        <span className="text-white/20 mx-[2px] sm:mx-[6px]">|</span>
        <a href="#" className="text-[#9aa3ae] no-underline hover:text-white whitespace-nowrap mt-2 sm:mt-0">Terms &amp; Conditions</a>
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

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-[5%] pt-[50px] flex flex-col">
      {/* Top grid */}
      <div className="flex justify-between items-start gap-[50px] pb-[40px]">
        {/* Brand */}
        <div className="flex flex-col gap-5 flex-[1.8] min-w-[200px] pr-[40px] border-r border-white/10">
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
          <p className="text-[14px] leading-[1.6] text-[#e0e0e0] max-w-[280px]">
            <strong className="font-semibold text-white block mb-[5px]">Rooted in values. Driven by trust.</strong>
            Serving generations with quality and care since 1962.
          </p>
        </div>

        {/* Quick Links */}
        <FooterCol title="Quick Links">
          <li><a href="/" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block">Home</a></li>
          <li><Link href="/our-story" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block">Our Story</Link></li>
          <li><Link href="/products" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block">Products</Link></li>
          <li><Link href="/dealers" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block">Dealers</Link></li>
          <li><Link href="/contact-us" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block">Contact Us</Link></li>
        </FooterCol>

        {/* Our Products */}
        <FooterCol title="Our Products">
          <li><a href="#" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block">Food Products</a></li>
          <li><a href="#" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block">Cleaning Products</a></li>
          <li><a href="#" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block">View All Products</a></li>
        </FooterCol>

        {/* Support */}
        <FooterCol title="Support">
          <li><a href="#" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block">Enquiry</a></li>
          <li><a href="#" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block">Bulk Orders</a></li>
          <li><a href="#" className="text-[#c8cdd3] text-[14px] no-underline hover:text-secondary hover:pl-1 inline-block">FAQs</a></li>
        </FooterCol>

        {/* Follow Us */}
        <div className="flex-1 min-w-[120px]">
          <h4 className="text-[15px] font-bold mb-[18px] text-white whitespace-nowrap uppercase tracking-[0.3px] border-b-2 border-secondary/50 pb-[10px]">Follow Us</h4>
          <div className="flex gap-3 flex-wrap">
            {['fab fa-facebook-f', 'fab fa-instagram', 'fab fa-linkedin-in', 'fab fa-whatsapp'].map((icon) => (
              <a key={icon} href="#" className="text-white text-[16px] w-9 h-9 border border-white/25 rounded-full flex items-center justify-center no-underline hover:bg-secondary hover:border-secondary">
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-[18px] mt-auto flex justify-between items-center text-[13px] text-[#9aa3ae] gap-5 flex-wrap">
        <p className="m-0">© 2024 Minals (Ramaiah Enterprises). All Rights Reserved.</p>
        <div className="flex items-center">
          <a href="#" className="text-[#9aa3ae] no-underline ml-5 hover:text-white whitespace-nowrap">Privacy Policy</a>
          <span className="ml-5 text-white/20">|</span>
          <a href="#" className="text-[#9aa3ae] no-underline ml-5 hover:text-white whitespace-nowrap">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex-1 min-w-[130px]">
      <h4 className="text-[15px] font-bold mb-[18px] text-white whitespace-nowrap uppercase tracking-[0.3px] border-b-2 border-secondary/50 pb-[10px]">{title}</h4>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}

'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* ─── Header ─── */}
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
            <li><a href="/" className="text-white text-[14px] font-medium hover:text-accent active">Home</a></li>
            <li><Link href="/our-story" className="text-white text-[14px] font-medium hover:text-accent">Our Story</Link></li>
            <li><Link href="/products" className="text-white text-[14px] font-medium hover:text-accent">Products <i className="fas fa-chevron-down text-[10px]" /></Link></li>
            <li><Link href="/dealers" className="text-white text-[14px] font-medium hover:text-accent">Dealers</Link></li>
            <li><Link href="/contact-us" className="text-white text-[14px] font-medium hover:text-accent">Contact Us</Link></li>
          </ul>
        </nav>

        <div className="flex gap-[15px] items-center">
          <a href="/enquire-now" className="bg-secondary text-white px-5 py-[10px] rounded-[5px] font-semibold flex items-center gap-[10px] no-underline hover:bg-accent hover:-translate-y-0.5">
            Enquire Now <i className="fas fa-arrow-right" />
          </a>
          <a href="#" className="border border-white/50 text-white px-5 py-[10px] rounded-[5px] text-[14px] flex items-center gap-[10px] no-underline">
            <i className="fab fa-whatsapp" /> Quick Enquiry via WhatsApp
          </a>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="px-[5%] py-[80px] flex items-center bg-[radial-gradient(circle_at_70%_50%,#ffffff_0%,#fafafa_100%)] min-h-[80vh]">
        <div className="flex-1 max-w-[500px] relative">
          <h2 className="font-playfair text-[48px] text-primary leading-[1.3]">
            A Legacy of Purity. <span className="text-secondary block mt-[5px]">A Future of Promise.</span>
          </h2>
          <p className="text-[18px] text-text-light mb-[50px]">From our family to yours, delivering quality and care since 1962.</p>
          <div className="flex items-center gap-[30px] mb-[60px]">
            <Link href="/products" className="bg-secondary text-white px-[30px] py-[15px] rounded-[5px] font-semibold flex items-center gap-[10px] no-underline hover:bg-accent">
              Explore Products <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div className="absolute right-[20%] bottom-[-80px] w-[160px]">
            <img src="/60 years.png" alt="60 Years of Trust" className="w-full drop-shadow-md" />
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <img src="/hero.png" alt="Minals Products" className="hero-products-img max-w-full" />
        </div>
      </section>

      {/* ─── Features Bar ─── */}
      <section className="px-[5%] py-[30px] bg-[#fafafa]">
        <div className="bg-white rounded-[12px] py-10 px-5 grid grid-cols-4 shadow-[0_5px_25px_rgba(0,0,0,0.03)] border border-[#f0f0f0]">
          {[
            { icon: 'fa-shield',       title: 'QUALITY YOU CAN TRUST',  desc: 'Every product meets the highest quality standards.' },
            { icon: 'fa-handshake',    title: '60+ YEARS OF LEGACY',     desc: 'Built on trust, integrity and hard work since 1962.' },
            { icon: 'fa-users',        title: 'HAPPY CUSTOMERS',         desc: 'Serving millions of families across generations.' },
            { icon: 'fa-location-dot', title: 'WIDE DISTRIBUTION',       desc: 'Strong network across South India ensuring easy availability.' },
          ].map((f, i) => (
            <div key={i} className={`flex flex-row gap-[15px] items-center px-[25px]${i > 0 ? ' border-l border-[#e5e5e5]' : ''}`}>
              <i className={`fas ${f.icon} text-primary text-[32px] shrink-0`} />
              <div>
                <h4 className="font-inter text-[13px] font-bold text-primary tracking-[0.5px] mb-[5px]">{f.title}</h4>
                <p className="text-[12px] text-[#666] leading-[1.4] m-0">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Category Grid ─── */}
      <section className="grid grid-cols-2 gap-[30px] px-[5%] py-[60px]">
        {/* Food */}
        <div className="rounded-[12px] h-[260px] flex relative overflow-hidden border border-black/[0.03] bg-[#f4f6ef] hover:-translate-y-[5px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <div className="flex-[1.2] px-10 py-[30px] z-10 flex flex-col justify-center">
            <h3 className="font-playfair text-[28px] text-primary mb-[10px]">Food Products</h3>
            <p className="text-[14px] text-[#555] mb-5 leading-[1.4]">Natural ingredients,<br />made with care.</p>
            <Link href="/products?category=food" className="inline-flex items-center gap-[10px] text-[#004a99] font-bold no-underline text-[15px]">
              View Products <i className="fas fa-arrow-right text-[14px]" />
            </Link>
          </div>
          <div className="flex-1 relative h-full">
            <img src="/food.png" alt="Food Products" className="w-full h-full object-cover object-center" />
          </div>
        </div>
        {/* Cleaning */}
        <div className="rounded-[12px] h-[260px] flex relative overflow-hidden border border-black/[0.03] bg-[#eef5fa] hover:-translate-y-[5px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <div className="flex-[1.2] px-10 py-[30px] z-10 flex flex-col justify-center">
            <h3 className="font-playfair text-[28px] text-primary mb-[10px]">Cleaning Products</h3>
            <p className="text-[14px] text-[#555] mb-5 leading-[1.4]">Hygienic solutions for<br />a healthier tomorrow.</p>
            <Link href="/products?category=cleaning" className="inline-flex items-center gap-[10px] text-[#004a99] font-bold no-underline text-[15px]">
              View Products <i className="fas fa-arrow-right text-[14px]" />
            </Link>
          </div>
          <div className="flex-1 relative h-full">
            <img src="/cleaning.png" alt="Cleaning Products" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </section>

      {/* ─── Heritage Banner ─── */}
      <section className="px-[5%] py-[60px]">
        <div className="bg-primary rounded-[12px] flex overflow-hidden min-h-[140px]">
          <div className="flex-[0.65]">
            <img src="/vintage.png" alt="Ramaiah Enterprises Heritage" className="w-full h-full object-cover" />
          </div>
          <div className="flex-[2] px-[30px] py-[10px] flex items-center justify-between">
            <div className="flex-[1.2] pr-5">
              <h2 className="font-playfair text-secondary text-[24px] leading-[1.2] mb-[6px] whitespace-nowrap">Rooted in Values. Driven by Trust.</h2>
              <p className="text-white text-[13px] leading-[1.4] opacity-90 whitespace-nowrap">Serving generations with quality and care since 1962.</p>
            </div>
            <div className="w-px h-[60px] bg-secondary/40 mx-[10px]" />
            <div className="flex-[1.8] grid grid-cols-3 items-center">
              {[
                { icon: 'fa-shield',      title: 'TRUST',    desc: 'Built on honesty\nand transparency' },
                { icon: 'fa-certificate', title: 'QUALITY',  desc: 'Quality products for\nyour home & business' },
                { icon: 'fa-award',       title: 'PIONEERS', desc: 'Pioneers in cleaning\n& food solutions' },
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center text-center px-[15px] text-white${i > 0 ? ' border-l border-secondary/30' : ''}`}>
                  <i className={`fas ${item.icon} text-[20px] mb-[6px] text-white`} />
                  <h4 className="text-[10px] font-bold mb-1 tracking-[0.5px]">{item.title}</h4>
                  <p className="text-[9px] leading-[1.3] opacity-80 whitespace-pre-line">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="px-[5%] py-[40px] flex justify-between items-center text-[14px] text-text-light border-t border-[#eee] bg-white">
        <p>© 2024 Minals (Ramaiah Enterprises). All Rights Reserved.</p>
        <div>
          <a href="#" className="text-text-light no-underline ml-5 hover:text-primary">Privacy Policy</a>
          <span className="ml-5">|</span>
          <a href="#" className="text-text-light no-underline ml-5 hover:text-primary">Terms & Conditions</a>
        </div>
      </footer>
    </main>
  );
}

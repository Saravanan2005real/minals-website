'use client';
 
import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header activePage="home" />

      {/* ─── Hero ─── */}
      <section className="px-[5%] pt-[15px] lg:pt-[40px] pb-[20px] flex flex-col lg:flex-row items-center bg-[radial-gradient(circle_at_70%_50%,#ffffff_0%,#fafafa_100%)] min-h-0 lg:min-h-[60vh] text-center lg:text-left gap-6 lg:gap-0 overflow-hidden relative">
        <div className="flex-1 max-w-[500px] relative order-2 lg:order-1">
          <h2 className="text-[32px] md:text-[48px] text-primary leading-[1.25] mb-2">
            A Legacy of Purity. <span className="text-secondary block mt-[2px]">A Future of Promise.</span>
          </h2>
          <p className="text-[15px] md:text-[18px] text-text-light mb-6 md:mb-[50px] mt-[10px] lg:mt-0">From our family to yours, delivering quality and care since 1962.</p>
          <div className="flex items-center justify-center lg:justify-start gap-[30px] mb-8 lg:mb-[60px]">
            <Link href="/products" className="bg-secondary text-white px-[30px] py-[15px] rounded-[5px] font-semibold flex items-center gap-[10px] no-underline hover:bg-accent transition-all hover:-translate-y-1 shadow-lg active:scale-95">
              Explore Products <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full lg:w-auto">
          <div className="hero-products-img-container relative w-full max-w-[850px] h-[300px] md:h-[550px] lg:h-[650px]">
            <Image 
              src="/hero.png" 
              alt="Minals Products" 
              fill
              priority
              className="object-contain hero-products-img"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ─── Features Bar ─── */}
      <section className="px-[5%] pt-0 pb-[30px] bg-[#fafafa]">
        <div className="bg-white rounded-[12px] py-10 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 shadow-[0_5px_25px_rgba(0,0,0,0.03)] border border-[#f0f0f0] overflow-hidden">
          {[
            { icon: 'fa-award',          title: 'QUALITY YOU CAN TRUST',  desc: 'Every product meets the highest quality standards.' },
            { icon: 'fa-calendar-check', title: '60+ YEARS OF LEGACY',     desc: 'Built on trust, integrity and hard work since 1962.' },
            { icon: 'fa-heart',          title: 'HAPPY CUSTOMERS',         desc: 'Serving millions of families across generations.' },
            { icon: 'fa-truck-fast',     title: 'WIDE DISTRIBUTION',       desc: 'Strong network across South India ensuring easy availability.' },
          ].map((f, i) => (
            <div key={i} className={`flex flex-row gap-[15px] items-center px-[10px] lg:px-[25px] py-4 transition-all duration-300 hover:bg-primary/[0.02] hover:-translate-y-1 group ${i > 0 && i % 2 === 0 ? 'lg:border-l lg:border-[#e5e5e5]' : ''} ${i % 2 !== 0 ? 'sm:border-l sm:border-[#e5e5e5]' : ''}`}>
              <div className="w-[45px] h-[45px] bg-primary/5 rounded-full flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                <i className={`fas ${f.icon} text-primary text-[20px] group-hover:scale-110 transition-transform`} />
              </div>
              <div>
                <h4 className="font-montserrat text-[13px] font-bold text-primary tracking-[0.5px] mb-[5px]">{f.title}</h4>
                <p className="text-[12px] text-[#666] leading-[1.4] m-0">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Category Grid ─── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] px-[5%] py-[40px] lg:py-[60px]">
        {/* Food */}
        <div className="group rounded-[12px] h-[220px] sm:h-[260px] flex relative overflow-hidden border border-black/[0.03] bg-[#f4f6ef] hover:-translate-y-[8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500">
          <div className="flex-[1.2] px-6 sm:px-10 py-[20px] sm:py-[30px] z-10 flex flex-col justify-center">
            <h3 className="text-[22px] sm:text-[28px] text-primary mb-[10px]">Food Products</h3>
            <p className="text-[13px] sm:text-[14px] text-[#555] mb-5 leading-[1.4]">Natural ingredients,<br />made with care.</p>
            <Link href="/products?category=food" className="inline-flex items-center gap-[10px] text-[#004a99] font-bold no-underline text-[15px] group-hover:gap-[15px] transition-all">
              View Products <i className="fas fa-arrow-right text-[14px]" />
            </Link>
          </div>
          <div className="flex-1 relative h-full overflow-hidden">
            <Image 
              src="/food.png" 
              alt="Food Products" 
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </div>
        {/* Cleaning */}
        <div className="group rounded-[12px] h-[220px] sm:h-[260px] flex relative overflow-hidden border border-black/[0.03] bg-[#eef5fa] hover:-translate-y-[8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500">
          <div className="flex-[1.2] px-6 sm:px-10 py-[20px] sm:py-[30px] z-10 flex flex-col justify-center">
            <h3 className="text-[22px] sm:text-[28px] text-primary mb-[10px]">Cleaning Products</h3>
            <p className="text-[13px] sm:text-[14px] text-[#555] mb-5 leading-[1.4]">Hygienic solutions for<br />a healthier tomorrow.</p>
            <Link href="/products?category=cleaning" className="inline-flex items-center gap-[10px] text-[#004a99] font-bold no-underline text-[15px] group-hover:gap-[15px] transition-all">
              View Products <i className="fas fa-arrow-right text-[14px]" />
            </Link>
          </div>
          <div className="flex-1 relative h-full overflow-hidden">
            <Image 
              src="/cleaning.png" 
              alt="Cleaning Products" 
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </div>
      </section>

      {/* ─── Heritage Banner ─── */}
      <section className="px-[5%] py-[40px] lg:py-[60px]">
        <div className="bg-primary rounded-[12px] flex flex-col lg:flex-row overflow-hidden min-h-auto lg:min-h-[140px]">
          <div className="w-full lg:flex-[0.65] h-[150px] lg:h-auto relative">
            <Image 
              src="/vintage.png" 
              alt="Ramaiah Enterprises Heritage" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw"
            />
          </div>
          <div className="flex-1 lg:flex-[2] px-[20px] sm:px-[30px] py-[20px] sm:py-[30px] lg:py-[10px] flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-0 text-center lg:text-left">
            <div className="w-full lg:flex-[1.2] lg:pr-5">
              <h2 className="text-secondary text-[20px] sm:text-[24px] leading-[1.2] mb-[6px] whitespace-normal lg:whitespace-nowrap">Rooted in Values. Driven by Trust.</h2>
              <p className="text-white text-[13px] leading-[1.4] opacity-90 whitespace-normal lg:whitespace-nowrap">Serving generations with quality and care since 1962.</p>
            </div>
            <div className="hidden lg:block w-px h-[60px] bg-secondary/40 mx-[10px]" />
            <div className="w-full lg:flex-[1.8] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 items-center">
              {[
                { icon: 'fa-shield',      title: 'TRUST',    desc: 'Built on honesty\nand transparency' },
                { icon: 'fa-certificate', title: 'QUALITY',  desc: 'Quality products for\nyour home & business' },
                { icon: 'fa-award',       title: 'PIONEERS', desc: 'Pioneers in cleaning\n& food solutions' },
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center text-center px-[15px] text-white ${i > 0 ? 'sm:border-l sm:border-secondary/30' : ''}`}>
                  <i className={`fas ${item.icon} text-[20px] mb-[6px] text-white`} />
                  <h4 className="text-[10px] font-bold mb-1 tracking-[0.5px]">{item.title}</h4>
                  <p className="text-[9px] leading-[1.3] opacity-80 whitespace-pre-line">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


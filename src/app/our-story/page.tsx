'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OurStoryPage() {
  return (
    <main className="bg-white">
      <Header activePage="our-story" />

      {/* ─── Hero + Legacy Combined Section ─── */}
      <section className="px-[5%] py-[18px] lg:py-[26px] bg-white">
        <div className="flex flex-col lg:flex-row items-start gap-[35px]">
          {/* Left Content */}
          <div className="w-full lg:w-[40%] pt-[18px] lg:pt-[22px]">
            <h1 className="text-[52px] lg:text-[60px] leading-none text-primary mb-[16px] font-light">
              Our Story
            </h1>
            <div className="w-[60px] h-[2px] bg-secondary mb-[28px] relative after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-secondary after:rotate-45 after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2"></div>
            <p className="text-[18px] lg:text-[20px] font-bold text-primary mb-5 leading-[1.5]">
              A journey of trust, quality and unwavering commitment since 1962.
            </p>
            <p className="text-[16px] lg:text-[17px] text-text-light text-justify mb-5 leading-[2]">
              What began over six decades ago as a humble trading enterprise founded by the visionary Mr. Ramaiah has blossomed into a trusted household name across South India. With an enduring passion for purity, we've dedicated our lives to creating products that genuinely care for your family and home.
            </p>
            <p className="text-[16px] lg:text-[17px] text-text-light text-justify mb-[24px] leading-[2]">
              Through changing times, our core philosophy remains untouched: to blend traditional values of integrity with modern manufacturing excellence. Every Minals product carries a piece of our rich heritage, crafted to bring reliability and brilliance into your everyday life.
            </p>
            <a
              href="#journey"
              className="bg-secondary text-white px-[30px] py-[15px] rounded-[5px] font-semibold inline-flex items-center gap-[10px] no-underline hover:bg-accent transition-all hover:-translate-y-1 shadow-lg active:scale-95 group"
            >
              Explore Our Journey
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[60%] pt-[40px] lg:pt-[126px]">
            {/* Smaller Image Card */}
            <div className="w-full flex flex-col sm:flex-row rounded-[14px] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-[#ececec] mb-7">
              {/* Left Image */}
              <div className="w-full sm:flex-[2.2] relative h-[220px] lg:h-[300px]">
                <Image
                  src="/vintage-cleaning-store-tamil-corrected.png"
                  alt="Ramaiah Enterprises 1962"
                  fill
                  priority
                  className="object-cover object-[center_10%] [filter:sepia(0.3)_contrast(1.05)]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              {/* Right Panel */}
              <div className="w-full sm:flex-[1] bg-primary text-white flex flex-col items-center justify-center p-6 lg:p-8 text-center relative">
                <div className="relative w-[105px] h-[105px] lg:w-[120px] lg:h-[120px] mb-5">
                  <Image
                    src="/60-years-trust.png"
                    alt="60+ Years of Trust"
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>
                <p className="text-[15px] lg:text-[16px] leading-[1.7]">
                  Six decades of delivering purity, reliability and excellence.
                </p>
              </div>
            </div>

            {/* Legacy Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: 'fa-handshake',
                  title: 'Trust',
                  desc: 'Built on honesty, transparency and lasting customer relationships.',
                },
                {
                  icon: 'fa-medal',
                  title: 'Quality',
                  desc: 'Delivering the highest standards of purity and product safety.',
                },
                {
                  icon: 'fa-compass',
                  title: 'Pioneers',
                  desc: 'Leading cleaning and food solutions since 1962.',
                },
                {
                  icon: 'fa-circle-check',
                  title: 'Commitment',
                  desc: 'Dedicated to care, consistency and customer satisfaction.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group bg-white border border-[#e8e8e8] rounded-[16px] p-5 shadow-[0_6px_18px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:bg-primary/[0.02] transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-[50px] h-[50px] rounded-full bg-primary text-white flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-secondary">
                      <i className={`fas ${item.icon} text-[16px] transition-transform duration-300 group-hover:scale-110`} />
                    </div>
                    {/* Text */}
                    <div>
                      <h4 className="text-[17px] font-bold text-primary mb-[4px] leading-none">
                        {item.title}
                      </h4>
                      <p className="text-[14px] text-text-light leading-[1.6]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Journey Timeline ─── */}
      <section
        id="journey"
        className="py-[20px] lg:py-[30px] bg-[radial-gradient(circle_at_top,#f8f9fa_0%,#ffffff_100%)] relative overflow-hidden"
      >
        <div className="text-center mb-[35px]">
          <span className="text-secondary font-bold tracking-[3px] uppercase text-[11px] mb-2 block">
            Our Milestones
          </span>
          <h2 className="text-[30px] lg:text-[40px] text-primary font-playfair font-bold inline-block relative">
            The Minals Journey
            <div className="w-[70px] h-[3px] bg-secondary mx-auto mt-4 rounded-full"></div>
          </h2>
        </div>

        <div className="max-w-[1000px] mx-auto px-[5%] relative">
          {/* Central Line Desktop */}
          <div className="hidden md:block absolute left-1/2 top-[20px] bottom-[40px] w-[2px] bg-gradient-to-b from-secondary/60 via-secondary/20 to-transparent -translate-x-1/2 z-0"></div>
          {/* Central Line Mobile */}
          <div className="block md:hidden absolute left-[30px] top-[20px] bottom-[40px] w-[2px] bg-gradient-to-b from-secondary/60 via-secondary/20 to-transparent z-0"></div>

          {[
            {
              year: '1962',
              title: 'Our Inauguration',
              desc: 'Founded with unparalleled dedication by Mr. Ramaiah.',
              img: '/timeline-3.jpg',
              caption: 'Honoured by leaders.',
            },
            {
              year: '1970s',
              title: 'Expansion & Recognition',
              desc: 'Expanded rapidly across South India.',
              img: '/timeline-1.jpg',
            },
            {
              year: '1985',
              title: 'Pioneering White Phenyl',
              desc: 'Introduced our innovative White Phenyl.',
              img: '/timeline-2.jpg',
            },
            {
              year: '1998',
              title: 'A New Era of Leadership',
              desc: 'Modern practices while preserving core values.',
              img: '/timeline-3.jpg',
            },
            {
              year: '2012 & Beyond',
              title: '50 Golden Years',
              desc: 'Celebrating decades of trust and innovation.',
              img: '/timeline-4.jpg',
              caption: 'Golden Jubilee',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-[25px] md:mb-[35px] group ${
                i % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[30px] md:left-1/2 top-[28px] md:top-[34px] w-[16px] h-[16px] rounded-full bg-white border-[3px] border-secondary shadow-[0_0_0_3px_rgba(184,134,11,0.1)] -translate-x-1/2 z-10"></div>

              {/* Content */}
              <div className="w-full md:w-[45%] pl-[60px] md:pl-0">
                <div
                  className={`group relative transition-all duration-300 cursor-pointer ${
                    i % 2 !== 0 ? 'md:text-left' : 'md:text-right'
                  }`}
                >
                  <span className="inline-block px-3 py-1 bg-[#f4f7f9] text-secondary font-bold rounded-full text-[12px] tracking-[0.5px] mb-3 border border-secondary/20 transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                    {item.year}
                  </span>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-primary mb-2 font-playfair transition-all duration-300 group-hover:text-secondary">
                    {item.title}
                  </h3>
                  <p className="text-text-light text-[13px] md:text-[14px] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-[45%] pl-[60px] md:pl-0 mt-4 md:mt-0">
                <div className="group relative rounded-[14px] overflow-hidden shadow-md border-[3px] border-white hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 cursor-pointer h-[220px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-2 text-center border-t border-black/5 z-10">
                      <p className="text-[12px] font-semibold text-primary m-0 transition-all duration-300 group-hover:text-secondary">
                        {item.caption}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

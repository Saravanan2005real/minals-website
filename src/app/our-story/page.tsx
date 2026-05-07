'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OurStoryPage() {
  return (
    <main className="bg-white">
      <Header activePage="our-story" />

      {/* ─── Hero Section ─── */}
      <section className="px-[5%] py-[35px] lg:py-[45px] bg-white relative flex flex-col lg:flex-row items-center gap-[25px] lg:gap-[35px]">

        {/* Decorative Background Leaf */}
        <div className="absolute left-[-5%] top-[10%] w-[300px] opacity-10 pointer-events-none hidden lg:block">
          {/* <img src="/leaf.png" alt="" className="w-full h-auto" /> */}
        </div>

        {/* Left: Text Content */}
        <div className="w-full lg:flex-[0.7] z-10 text-center lg:text-left">

          <h1 className="text-[36px] lg:text-[46px] text-primary mb-[10px]">
            Our Story
          </h1>

          <div className="w-[60px] h-[2px] bg-secondary mb-[20px] mx-auto lg:mx-0 relative after:content-[''] after:absolute after:w-[6px] after:h-[6px] after:bg-secondary after:rotate-45 after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2"></div>

          <p className="text-[16px] lg:text-[18px] font-bold text-primary mb-3 leading-[1.5]">
            A journey of trust, quality and unwavering commitment since 1962.
          </p>

          <p className="text-[15px] lg:text-[16px] text-text-light mb-3 leading-[1.7] max-w-[95%] mx-auto lg:mx-0">
            What began over six decades ago as a humble trading enterprise founded by the visionary Mr. Ramaiah has blossomed into a trusted household name across South India. With an enduring passion for purity, we've dedicated our lives to creating products that genuinely care for your family and home.
          </p>

          <p className="text-[15px] lg:text-[16px] text-text-light mb-[20px] leading-[1.7] max-w-[95%] mx-auto lg:mx-0">
            Through changing times, our core philosophy remains untouched: to blend traditional values of integrity with modern manufacturing excellence. Every Minals product carries a piece of our rich heritage, crafted to bring reliability and brilliance into your everyday life.
          </p>

          <a
            href="#journey"
            className="group bg-gradient-to-r from-secondary to-accent text-white px-[28px] py-[12px] rounded-[8px] font-bold tracking-[0.5px] shadow-[0_8px_20px_rgba(184,134,11,0.35)] flex items-center justify-center lg:justify-start gap-[10px] no-underline w-fit mx-auto lg:mx-0 hover:shadow-[0_12px_25px_rgba(184,134,11,0.5)] hover:-translate-y-1 transition-all duration-300"
          >
            Explore Our Journey
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Right: Banner Card */}
        <div className="w-full lg:flex-[1.2] flex flex-col sm:flex-row rounded-[12px] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.1)] border border-[#eaeaea]">

          {/* Left Image */}
          <div className="w-full sm:flex-[2] relative h-[260px] sm:h-[340px]">
            <img
              src="/vintage.png"
              alt="Ramaiah Enterprises 1962"
              className="w-full h-full object-cover [filter:sepia(0.3)_contrast(1.05)]"
            />
          </div>

          {/* Right Panel */}
          <div className="w-full sm:flex-[1] bg-primary text-white flex flex-col items-center justify-center p-6 sm:p-8 text-center">

            <img
              src="/60 years.png"
              alt="60+ Years of Trust"
              className="w-[110px] sm:w-[130px] mb-4 drop-shadow-xl"
            />

            <p className="text-[14px] sm:text-[15px] leading-[1.5] font-inter">
              Six decades of delivering purity, reliability and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Legacy Section ─── */}
      <section className="px-[5%] py-[12px] lg:py-[18px] bg-white">

        <div className="text-center mb-6 max-w-[800px] mx-auto">

          <h2 className="text-[28px] lg:text-[32px] text-primary inline-block relative after:block after:w-[50px] after:h-[2px] after:bg-secondary after:mx-auto after:mt-[10px] mb-4">
            Our Legacy. Your Trust.
          </h2>

          <p className="text-[15px] lg:text-[16px] text-text-light leading-[1.6]">
            For over 60 years, the Minals name has stood as a hallmark of quality.
            Our growth from a modest local supplier to an industry pioneer is deeply
            rooted in the four foundational pillars that guide everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[18px]">

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
              className="flex flex-col items-center sm:items-start text-center sm:text-left gap-[10px]"
            >

              <i className={`fas ${item.icon} text-[24px] text-primary mt-1`} />

              <div>
                <h4 className="text-[15px] text-text-main font-bold mb-1">
                  {item.title}
                </h4>

                <p className="text-[13px] text-text-light leading-[1.5]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
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
                  className={`bg-white p-4 md:p-5 rounded-[14px] shadow-[0_8px_20px_rgba(0,0,0,0.04)] border border-black/[0.03] relative ${
                    i % 2 !== 0 ? 'md:text-left' : 'md:text-right'
                  }`}
                >

                  <span className="inline-block px-3 py-1 bg-[#f4f7f9] text-secondary font-bold rounded-full text-[12px] tracking-[0.5px] mb-3 border border-secondary/20">
                    {item.year}
                  </span>

                  <h3 className="text-[18px] md:text-[20px] font-bold text-primary mb-2 font-playfair">
                    {item.title}
                  </h3>

                  <p className="text-text-light text-[13px] md:text-[14px] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-[45%] pl-[60px] md:pl-0 mt-4 md:mt-0">

                <div className="relative rounded-[14px] overflow-hidden shadow-md border-[3px] border-white">

                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto object-cover max-h-[220px]"
                  />

                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-2 text-center border-t border-black/5">

                      <p className="text-[12px] font-semibold text-primary m-0">
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

      {/* ─── Promise Banner ─── */}
      <div className="bg-primary text-white px-[5%] py-6 mx-[5%] rounded-[12px] relative overflow-hidden mb-4 text-center sm:text-left">

        <h3 className="text-[20px] sm:text-[22px] text-secondary mb-[4px] relative z-10">
          From one family's promise to a nation's trust.
        </h3>

        <p className="text-[13px] sm:text-[14px] text-[#e0e0e0] relative z-10">
          And the journey continues...
        </p>
      </div>

      <Footer />
    </main>
  );
}
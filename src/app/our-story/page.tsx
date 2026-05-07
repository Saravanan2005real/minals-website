'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OurStoryPage() {
  return (
    <main className="bg-white">
      <Header activePage="our-story" />

      {/* ─── Hero Section ─── */}
      <section className="px-[5%] py-[50px] lg:py-[65px] bg-white relative flex flex-col lg:flex-row items-center gap-[35px] lg:gap-[50px]">
        
        {/* Decorative Background Leaf */}
        <div className="absolute left-[-5%] top-[10%] w-[300px] opacity-10 pointer-events-none hidden lg:block">
          {/* <img src="/leaf.png" alt="" className="w-full h-auto" /> */}
        </div>

        {/* Left: Text Content */}
        <div className="w-full lg:flex-[0.7] z-10 text-center lg:text-left">

          <h1 className="text-[34px] lg:text-[46px] font-bold text-primary mb-3 leading-tight">
            Our Story
          </h1>

          <div className="w-[70px] h-[2px] bg-secondary mb-6 mx-auto lg:mx-0 relative after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-secondary after:rotate-45 after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2"></div>

          <p className="text-[18px] lg:text-[20px] font-semibold text-primary mb-5 leading-relaxed max-w-[700px] mx-auto lg:mx-0">
            A journey of trust, quality and unwavering commitment since 1962.
          </p>

          <p className="text-[16px] lg:text-[17px] text-text-light text-justify leading-8 mb-6 max-w-[700px] mx-auto lg:mx-0">
            What began over six decades ago as a humble trading enterprise founded by
            the visionary Mr. Ramaiah has blossomed into a trusted household name
            across South India. With an enduring passion for purity, we've dedicated
            our lives to creating products that genuinely care for your family and
            home.
          </p>

          <p className="text-[16px] lg:text-[17px] text-text-light text-justify leading-8 mb-8 max-w-[700px] mx-auto lg:mx-0">
            Through changing times, our core philosophy remains untouched: to blend
            traditional values of integrity with modern manufacturing excellence.
            Every Minals product carries a piece of our rich heritage, crafted to
            bring reliability and brilliance into your everyday life.
          </p>

          <a
            href="#journey"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary to-accent text-white px-8 py-4 rounded-lg font-semibold tracking-wide shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Explore Our Journey
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Right Banner */}
        <div className="w-full lg:flex-[1.2] flex flex-col sm:flex-row rounded-[12px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-[#eaeaea]">
          
          {/* Left Image */}
          <div className="w-full sm:flex-[2] relative h-[280px] sm:h-[360px]">
            <img
              src="/vintage.png"
              alt="Ramaiah Enterprises 1962"
              className="w-full h-full object-cover [filter:sepia(0.3)_contrast(1.05)]"
            />
          </div>

          {/* Right Panel */}
          <div className="w-full sm:flex-[1] bg-primary text-white flex flex-col items-center justify-center p-8 sm:p-10 text-center">
            <img
              src="/60 years.png"
              alt="60+ Years of Trust"
              className="w-[120px] sm:w-[140px] mb-6 drop-shadow-xl"
            />

            <p className="text-[15px] sm:text-[16px] leading-[1.6] font-inter">
              Six decades of delivering purity, reliability and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Legacy Section ─── */}
<section className="px-[5%] py-[8px] bg-white border-t border-black/[0.04]">

  {/* Heading */}
  <div className="text-center mb-7">
    <h2 className="text-[28px] lg:text-[34px] font-bold text-primary inline-block relative">
      Our Legacy. Your Trust.
      <div className="w-[45px] h-[2px] bg-secondary mx-auto mt-3"></div>
    </h2>
  </div>

  {/* Legacy Items */}
  <div className="max-w-[1100px] mx-auto divide-y divide-black/[0.06]">

    {[
      {
        icon: 'fa-handshake',
        title: 'Trust',
        desc: 'Built on honesty, transparency and strong relationships with generations of satisfied customers.',
      },
      {
        icon: 'fa-medal',
        title: 'Quality',
        desc: 'Every product meets the highest standards of purity and safety with rigorous testing and quality checks.',
      },
      {
        icon: 'fa-compass',
        title: 'Pioneers',
        desc: 'Pioneers in cleaning and food solutions since 1962, consistently delivering reliable and proven solutions.',
      },
      {
        icon: 'fa-circle-check',
        title: 'Commitment',
        desc: 'Committed to improving lives with every product we deliver, ensuring care, consistency, and customer satisfaction.',
      },
    ].map((item) => (
      <div
        key={item.title}
        className="flex items-start gap-5 py-5"
      >

        {/* Icon */}
        <div className="w-[52px] h-[52px] rounded-full bg-primary text-white flex items-center justify-center shrink-0">
          <i className={`fas ${item.icon} text-[18px]`} />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h4 className="text-[20px] font-bold text-primary mb-1">
            {item.title}
          </h4>

          <p className="text-[15px] text-text-light leading-[1.6]">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

{/* ─── Compact Timeline Section ─── */}
<section
  id="journey"
  className="py-[25px] lg:py-[35px] bg-[radial-gradient(circle_at_top,#f8f9fa_0%,#ffffff_100%)]"
>

  {/* Heading */}
  <div className="text-center mb-10">

    <span className="text-secondary font-bold tracking-[2px] uppercase text-[12px] block mb-2">
      Our Milestones
    </span>

    <h2 className="text-[28px] lg:text-[38px] font-bold text-primary inline-block relative">
      The Minals Journey

      <div className="w-[55px] h-[2px] bg-secondary mx-auto mt-3"></div>
    </h2>
  </div>

  {/* Timeline */}
  <div className="max-w-[1200px] mx-auto px-[5%]">

    {/* Top Line */}
    <div className="hidden lg:block h-[2px] bg-black/[0.08] relative mb-12">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full flex justify-between">

        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className="w-[14px] h-[14px] rounded-full bg-secondary border-4 border-white shadow"
          ></div>
        ))}
      </div>
    </div>

    {/* Timeline Items */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">

      {[
        {
          year: '1962',
          title: 'Our Inauguration',
          desc: 'Founded with unparalleled dedication by Mr. Ramaiah. Inaugurated by Former President Thiru. R. Venkatraman, with a successful start by Public Works & Revenue Minister Thiru. Ramaiah. The foundation was built on strong values of quality and deep-rooted trust.',
          img: '/timeline-3.jpg',
          caption: 'Honoured by leaders.',
        },
        {
          year: '1970s',
          title: 'Expansion & Recognition',
          desc: 'Manufactured home-based products receiving excellent response across Tamil Nadu, Andhra Pradesh, Karnataka, and Kerala. The increasing demand helped us rapidly expand our distribution network and strengthen our presence as a reliable household brand.',
          img: '/timeline-1.jpg',
        },
        {
          year: '1985',
          title: 'Pioneering White Phenyl',
          desc: 'Our innovative White Phenyl product was introduced for the first time, revolutionizing house cleaning efforts. This product quickly became a trusted choice in households and institutions, setting a benchmark for future innovations in the industry.',
          img: '/timeline-2.jpg',
        },
        {
          year: '1998',
          title: 'A New Era of Leadership',
          desc: 'Thiru. G.R. Ravindran took over the organization, adopting modern practices while preserving our core values. His visionary leadership helped scale operations, bring fresh energy to the organization, and expand our product lines significantly',
          img: '/timeline-3.jpg',
        },
        {
          year: '2012 & Beyond',
          title: '50 Golden Years',
          desc: 'Celebrating 50 years of excellence. This milestone reflects decades of trust, dedication, and customer satisfaction. Today, Minals continues to evolve with innovation while staying deeply committed to its founding legacy.',
          img: '/timeline-4.jpg',
          caption: 'Golden Jubilee',
        },
      ].map((item, i) => (
        <div key={i}>

          {/* Year */}
          <h3 className="text-[24px] font-bold text-primary mb-2">
            {item.year}
          </h3>

          {/* Title */}
          <h4 className="text-[18px] font-bold text-primary leading-[1.4] mb-3 min-h-[50px]">
            {item.title}
          </h4>

          {/* Description */}
          <p className="text-[14px] text-text-light leading-[1.5] mb-4 min-h-[45px]">
            {item.desc}
          </p>

          {/* Image */}
          <div className="rounded-[12px] overflow-hidden shadow-md border border-black/[0.05]">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[115px] object-cover"
            />
          </div>

          {/* Caption */}
          {item.caption && (
            <p className="text-[13px] font-semibold text-primary mt-3">
              {item.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ─── Promise Banner ─── */}
      <div className="bg-primary text-white px-[5%] py-8 mx-[5%] rounded-[12px] relative overflow-hidden mb-6 text-center sm:text-left">
        
        <h3 className="text-[20px] sm:text-[24px] text-secondary mb-[5px] relative z-10">
          From one family's promise to a nation's trust.
        </h3>

        <p className="text-[14px] sm:text-[15px] text-[#e0e0e0] relative z-10">
          And the journey continues...
        </p>
      </div>

      <Footer />
    </main>
  );
}
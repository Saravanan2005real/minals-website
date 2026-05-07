'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OurStoryPage() {
  return (
    <main className="bg-white">
      <Header activePage="our-story" />

      {/* ─── Hero Section ─── */}
      <section className="px-[5%] py-[60px] lg:py-[80px] bg-white relative flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px]">
        {/* Decorative Background Leaf (if available) */}
        <div className="absolute left-[-5%] top-[10%] w-[300px] opacity-10 pointer-events-none hidden lg:block">
          {/* <img src="/leaf.png" alt="" className="w-full h-auto" /> */}
        </div>

        {/* Left: Text Content */}
        <div className="w-full lg:flex-[0.7] z-10 text-center lg:text-left">
          <h1 className="text-[36px] lg:text-[46px] text-primary mb-[10px]">Our Story</h1>
          <div className="w-[60px] h-[2px] bg-secondary mb-[25px] mx-auto lg:mx-0 relative after:content-[''] after:absolute after:w-[6px] after:h-[6px] after:bg-secondary after:rotate-45 after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2"></div>
          <p className="text-[16px] lg:text-[18px] font-bold text-primary mb-4 leading-[1.5]">
            A journey of trust, quality and unwavering commitment since 1962.
          </p>
          <p className="text-[15px] lg:text-[16px] text-text-light mb-4 leading-[1.7] max-w-[95%] mx-auto lg:mx-0">
            What began over six decades ago as a humble trading enterprise founded by the visionary Mr. Ramaiah has blossomed into a trusted household name across South India. With an enduring passion for purity, we've dedicated our lives to creating products that genuinely care for your family and home.
          </p>
          <p className="text-[15px] lg:text-[16px] text-text-light mb-[40px] leading-[1.7] max-w-[95%] mx-auto lg:mx-0">
            Through changing times, our core philosophy remains untouched: to blend traditional values of integrity with modern manufacturing excellence. Every Minals product carries a piece of our rich heritage, crafted to bring reliability and brilliance into your everyday life.
          </p>
          <a href="#journey" className="group bg-gradient-to-r from-secondary to-accent text-white px-[32px] py-[14px] rounded-[8px] font-bold tracking-[0.5px] shadow-[0_8px_20px_rgba(184,134,11,0.35)] flex items-center justify-center lg:justify-start gap-[12px] no-underline w-fit mx-auto lg:mx-0 hover:shadow-[0_12px_25px_rgba(184,134,11,0.5)] hover:-translate-y-1 transition-all duration-300">
            Explore Our Journey <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Right: The Banner Card */}
        <div className="w-full lg:flex-[1.3] flex flex-col sm:flex-row rounded-[12px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-[#eaeaea]">
          {/* Left Photo within Banner */}
          <div className="w-full sm:flex-[2] relative h-[300px] sm:h-[400px]">
            <img 
              src="/vintage.png" 
              alt="Ramaiah Enterprises 1962" 
              className="w-full h-full object-cover [filter:sepia(0.3)_contrast(1.05)]" 
            />
          </div>
          {/* Right Blue Panel within Banner */}
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
      <section className="px-[5%] py-[40px] lg:py-[60px] bg-white">
        <div className="text-center mb-12 max-w-[800px] mx-auto">
          <h2 className="text-[28px] lg:text-[32px] text-primary inline-block relative after:block after:w-[50px] after:h-[2px] after:bg-secondary after:mx-auto after:mt-[12px] mb-6">
            Our Legacy. Your Trust.
          </h2>
          <p className="text-[15px] lg:text-[16px] text-text-light leading-[1.7]">
            For over 60 years, the Minals name has stood as a hallmark of quality. Our growth from a modest local supplier to an industry pioneer is deeply rooted in the four foundational pillars that guide everything we do.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-[30px]">
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
            <div key={item.title} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-[15px]">
              <i className={`fas ${item.icon} text-[28px] text-primary mt-1`} />
              <div>
                <h4 className="text-[16px] lg:text-[15px] text-text-main font-bold mb-2">{item.title}</h4>
                <p className="text-[14px] lg:text-[13px] text-text-light leading-[1.5]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Journey Timeline ─── */}
      <section id="journey" className="py-[80px] lg:py-[120px] bg-[radial-gradient(circle_at_top,#f8f9fa_0%,#ffffff_100%)] relative overflow-hidden">
        <div className="text-center mb-[80px]">
          <span className="text-secondary font-bold tracking-[3px] uppercase text-[12px] mb-3 block">Our Milestones</span>
          <h2 className="text-[32px] lg:text-[42px] text-primary font-playfair font-bold inline-block relative">
            The Minals Journey
            <div className="w-[80px] h-[3px] bg-secondary mx-auto mt-5 rounded-full"></div>
          </h2>
        </div>

        <div className="max-w-[1100px] mx-auto px-[5%] relative">
          {/* Central Line Desktop */}
          <div className="hidden md:block absolute left-1/2 top-[20px] bottom-[50px] w-[3px] bg-gradient-to-b from-secondary/60 via-secondary/20 to-transparent -translate-x-1/2 z-0"></div>
          
          {/* Central Line Mobile */}
          <div className="block md:hidden absolute left-[35px] top-[20px] bottom-[50px] w-[3px] bg-gradient-to-b from-secondary/60 via-secondary/20 to-transparent z-0"></div>

          {[
            {
              year: '1962',
              title: 'Our Inauguration',
              desc: 'Founded with unparalleled dedication by Mr. Ramaiah. Inaugurated by Former President Thiru. R. Venkatraman, with a successful start by Public Works & Revenue Minister Thiru. Ramaiah. The foundation was built on strong values of quality and deep-rooted trust.',
              img: '/timeline-3.jpg', 
              caption: 'Honoured by leaders. Driven by values.',
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
              desc: 'Thiru. G.R. Ravindran took over the organization, adopting modern practices while preserving our core values. His visionary leadership helped scale operations, bring fresh energy to the organization, and expand our product lines significantly.',
              img: '/timeline-3.jpg',
            },
            {
              year: '2012 & Beyond',
              title: '50 Golden Years',
              desc: 'Celebrating 50 years of excellence. This milestone reflects decades of trust, dedication, and customer satisfaction. Today, Minals continues to evolve with innovation while staying deeply committed to its founding legacy.',
              img: '/timeline-4.jpg',
              caption: 'Celebrating our Golden Jubilee',
            },
          ].map((item, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between mb-[60px] md:mb-[100px] group ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Animated Dot */}
              <div className="absolute left-[35px] md:left-1/2 top-[32px] md:top-[40px] w-[20px] h-[20px] rounded-full bg-white border-[4px] border-secondary shadow-[0_0_0_4px_rgba(184,134,11,0.1)] -translate-x-1/2 z-10 group-hover:scale-125 group-hover:bg-secondary group-hover:border-white group-hover:shadow-[0_0_15px_rgba(184,134,11,0.5)] transition-all duration-300"></div>

              {/* Content Card */}
              <div className="w-full md:w-[45%] pl-[70px] md:pl-0">
                <div className={`bg-white p-6 md:p-8 rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-black/[0.03] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:-translate-y-1 transition-all duration-300 relative ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                  {/* Connector Triangle */}
                  <div className={`hidden md:block absolute top-[40px] w-4 h-4 bg-white border-black/[0.03] transform rotate-45 ${i % 2 !== 0 ? 'border-l border-b -left-[8px]' : 'border-r border-t -right-[8px]'}`}></div>
                  
                  <span className="inline-block px-4 py-1.5 bg-[#f4f7f9] text-secondary font-bold rounded-full text-[13px] tracking-[0.5px] mb-4 border border-secondary/20 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    {item.year}
                  </span>
                  <h3 className="text-[20px] md:text-[24px] font-bold text-primary mb-3 font-playfair">{item.title}</h3>
                  <p className="text-text-light text-[14px] md:text-[15px] leading-[1.7]">{item.desc}</p>
                </div>
              </div>

              {/* Image Box */}
              <div className={`w-full md:w-[45%] pl-[70px] md:pl-0 mt-6 md:mt-0 ${!item.img ? 'hidden md:block' : ''}`}>
                {item.img ? (
                  <div className={`relative rounded-[16px] overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] border-[4px] border-white`}>
                    <img src={item.img} alt={item.title} className="w-full h-auto object-cover max-h-[300px]" />
                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-3 text-center border-t border-black/5">
                        <p className="text-[13px] font-semibold text-primary m-0">{item.caption}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-full min-h-[150px]"></div>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ─── Promise Banner ─── */}
      <div className="bg-primary text-white px-[5%] py-10 mx-[5%] rounded-[12px] relative overflow-hidden mb-10 text-center sm:text-left">
        <h3 className="text-[20px] sm:text-[24px] text-secondary mb-[5px] relative z-10">From one family's promise to a nation's trust.</h3>
        <p className="text-[14px] sm:text-[15px] text-[#e0e0e0] relative z-10">And the journey continues...</p>
      </div>

      <Footer />
    </main>
  );
}

'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OurStoryPage() {
  return (
    <main className="bg-white">
      <Header activePage="our-story" />

      {/* ─── Hero ─── */}
      <section className="flex bg-[#fafafa] border-b border-[#eaeaea] relative overflow-hidden">
        {/* Left */}
        <div className="flex-1 px-[5%] py-[80px] flex flex-col justify-center z-10">
          <h1 className="text-[42px] text-primary mb-[15px]">Our Story</h1>
          <p className="text-[16px] font-semibold text-[#444] mb-5">A journey of trust, quality and commitment since 1962.</p>
          <p className="text-[15px] text-text-light mb-[30px] leading-[1.6] max-w-[90%]">
            What began in 1962 as a small trading business has today grown into a trusted name in households and industries across India.
          </p>
          <a href="#journey" className="bg-secondary text-white px-[25px] py-3 rounded-[5px] font-semibold inline-flex items-center gap-[10px] no-underline w-fit hover:bg-accent hover:-translate-y-0.5">
            Our Journey <i className="fas fa-arrow-right" />
          </a>
        </div>
        {/* Middle photo */}
        <div className="flex-[1.5] relative py-[40px] pr-[5%]">
          <img src="/vintage.png" alt="Ramaiah Enterprises 1962" className="w-full h-full object-cover rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] [filter:sepia(0.6)_contrast(1.1)]" />
        </div>
        {/* Right panel */}
        <div className="flex-[0.8] bg-primary text-white flex flex-col items-center justify-center p-10 text-center">
          <img src="/60 years.png" alt="60+ Years of Trust" className="w-[120px] mb-5" />
          <p className="text-[16px] leading-[1.5] text-[#eaeaea]">Six decades of delivering purity, reliability and excellence.</p>
        </div>
      </section>

      {/* ─── Legacy Section ─── */}
      <section className="px-[5%] py-[60px] bg-white">
        <div className="text-center mb-10">
          <h2 className="text-[32px] text-primary inline-block relative after:block after:w-[50px] after:h-[2px] after:bg-secondary after:mx-auto after:mt-[10px]">
            Our Legacy. Your Trust.
          </h2>
        </div>
        <div className="flex justify-between gap-[30px]">
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
            <div key={item.title} className="flex-1 flex items-start gap-[15px]">
              <i className={`fas ${item.icon} text-[28px] text-primary mt-1`} />
              <div>
                <h4 className="text-[15px] text-text-main font-bold mb-2">{item.title}</h4>
                <p className="text-[13px] text-text-light leading-[1.5]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Journey Timeline ─── */}
      <section id="journey" className="px-[5%] py-[80px] bg-[radial-gradient(circle_at_right_center,#f4f7f9_0%,#ffffff_100%)] relative">
        <div className="text-center mb-10">
          <h2 className="text-[32px] text-primary inline-block relative after:block after:w-[50px] after:h-[2px] after:bg-secondary after:mx-auto after:mt-[10px]">
            Our Journey
          </h2>
        </div>
        <div className="flex gap-[60px] max-w-[1400px] mx-auto">
          {/* Timeline */}
          <div className="flex-1 flex flex-col relative before:content-[''] before:absolute before:left-[45px] before:top-0 before:bottom-0 before:w-[2px] before:bg-primary before:z-0">
            {[
              {
                icon: 'fa-handshake',
                title: '1962: Our Inauguration',
                desc: 'Founded with effort and dedication by Mr. Ramaiah. Inaugurated by Former President Thiru. R. Venkatraman, with a successful start by Public Works & Revenue Minister Thiru. Ramaiah. The foundation of the company was built on strong values of quality, trust, and long-term vision for growth. It marked the beginning of a legacy that continues to inspire excellence.',
              },
              {
                icon: 'fa-chart-line',
                title: 'Good Response & Expansion',
                desc: 'Manufactured home-based products. Good response from Tamil Nadu, Andhra, Karnataka, Kerala, and beyond overseas states (countries). The increasing demand helped us expand our distribution network and strengthen our presence in both domestic and international markets. This growth phase established our reputation as a reliable household brand.',
              },
              {
                icon: 'fa-flask',
                title: 'Newly Introduced: White Phenyl',
                desc: 'Our innovative White Phenyl product was introduced for the first time, leading house cleaning efforts. This product quickly gained popularity for its effectiveness and quality, becoming a trusted choice in households and institutions. It also set a benchmark for future product innovations.',
              },
              {
                icon: 'fa-seedling',
                title: 'G.R. Ravindran Takes the Reins',
                desc: 'Thiru. G.R. Ravindran took over the organization after Thiru. Ramaiah expired. Under his leadership, the company adopted modern practices while preserving its core values. His vision helped scale operations and bring new energy to the organization.',
              },
              {
                icon: null,
                year: '2012',
                title: 'Golden Jubilee & Beyond',
                desc: 'Celebrating 50 years of excellence. Honoring our winners and our continued journey. This milestone reflects decades of trust, dedication, and customer satisfaction. The company continues to evolve with innovation while staying committed to its legacy.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-[30px] mb-10 relative z-10">
                <div className="w-[90px] min-h-[90px] bg-white border-2 border-primary [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center shrink-0">
                  {item.icon
                    ? <i className={`fas ${item.icon} text-[32px] text-secondary`} />
                    : <span className="font-bold text-[18px] text-secondary">{item.year}</span>
                  }
                </div>
                <div className="pt-[15px]">
                  <h3 className="text-[22px] text-primary mb-[10px]">{item.title}</h3>
                  <p className="text-[14px] text-text-light leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Photos */}
          <div className="flex-1 flex flex-col gap-[30px]">
            <div className="flex gap-5 justify-center flex-wrap">
              {[
                { rot: '-3deg', year: '1962',   caption: 'The Founders and Early Pioneers' },
                { rot: '2deg',  year: '1962-3', caption: 'The Founders and Early Pioneers', ty: '20px' },
                { rot: '-1deg', year: '1962-4', caption: 'The Founders and Early Pioneers' },
              ].map((p) => (
                <div key={p.year} style={{ transform: `rotate(${p.rot})${p.ty ? ` translateY(${p.ty})` : ''}` }}
                  className="w-[200px] bg-[#fffaf0] p-2 border-[3px] border-secondary shadow-[0_10px_25px_rgba(0,0,0,0.15)] flex flex-col items-center">
                  <img src="/vintage.png" alt={`Founders ${p.year}`} className="w-full h-auto object-cover [filter:sepia(0.8)_contrast(1.2)]" />
                  <div className="font-inter text-[11px] font-semibold text-text-main text-center mt-2 leading-[1.2]">
                    <strong className="block text-[13px] text-primary">{p.year}</strong>
                    {p.caption}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ transform: 'rotate(1deg)' }} className="w-[90%] mx-auto mt-5 bg-[#fffaf0] p-2 border-[3px] border-secondary shadow-[0_10px_25px_rgba(0,0,0,0.15)] flex flex-col items-center">
              <img src="/vintage.png" alt="Golden Jubilee" className="w-full h-auto object-cover [filter:sepia(0.8)_contrast(1.2)]" />
              <div className="font-inter text-[11px] font-semibold text-text-main text-center mt-2">
                <strong className="block text-[13px] text-primary">50 Golden Jubilee</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Promise Banner ─── */}
      <div className="bg-primary text-white px-[5%] py-10 mx-[5%] rounded-[12px] relative overflow-hidden mb-10">
        <h3 className="text-[24px] text-secondary mb-[5px] relative z-10">From one family's promise to a nation's trust.</h3>
        <p className="text-[15px] text-[#e0e0e0] relative z-10">And the journey continues...</p>
      </div>

      <Footer />
    </main>
  );
}

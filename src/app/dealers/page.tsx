'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inputClass = "w-full px-[15px] py-3 border border-[#e0e0e0] rounded-[6px] text-[14px] font-inter bg-[#fdfdfd] focus:outline-none focus:border-secondary focus:shadow-[0_0_0_2px_rgba(184,134,11,0.1)]";

export default function DealersPage() {
  return (
    <main className="bg-bg-light">
      <Header activePage="dealers" />

      {/* ─── Main Layout ─── */}
      <div className="px-[5%] py-[60px] flex justify-between items-start gap-10 max-w-[1400px] mx-auto">

        {/* Left info */}
        <div className="flex-[1.2] flex flex-col gap-[30px]">
          <div>
            <h2 className="text-[36px] text-primary font-bold mb-[15px]">Our Dealer Network</h2>
            <p className="text-[15px] text-text-light leading-[1.6] max-w-[90%]">
              Partner with us and grow together. We are building a strong network across India to deliver quality products to every home and business.
            </p>
          </div>

          <div className="flex gap-5 mt-[10px]">
            {[
              { icon: 'fa-map-marker-alt', title: 'Wide Reach',       desc: 'Pan India presence' },
              { icon: 'fa-users',          title: 'Reliable Partners', desc: 'Growing together' },
              { icon: 'fa-headset',        title: 'Timely Support',    desc: 'Always at your service' },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <i className={`fas ${f.icon} text-[24px] text-primary mt-[3px]`} />
                <div>
                  <h4 className="text-[14px] text-text-main font-bold mb-[2px]">{f.title}</h4>
                  <p className="text-[12px] text-text-light">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[12px] p-[25px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5 mt-[10px]">
            <h3 className="font-inter text-[16px] text-primary font-bold text-center mb-[25px]">Who Can Partner With Us?</h3>
            <div className="flex justify-between">
              {[
                { icon: 'fa-truck-loading', label: 'Distributors' },
                { icon: 'fa-boxes',          label: 'Wholesalers' },
                { icon: 'fa-store',          label: 'Retailers' },
                { icon: 'fa-building',       label: 'Institutional Suppliers' },
              ].map((p) => (
                <div key={p.label} className="flex flex-col items-center gap-[10px] text-center">
                  <i className={`fas ${p.icon} text-[30px] text-primary`} />
                  <span className="text-[12px] font-semibold text-primary">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 flex justify-center items-center">
          <img src="/india-map.png" alt="India Map with Locations" className="max-w-full h-auto object-contain" />
        </div>

        {/* Form */}
        <div className="flex-[0.8] bg-white rounded-[12px] px-[30px] py-[35px] shadow-panel border border-black/5">
          <h3 className="text-[24px] text-primary mb-[10px]">Become a Dealer</h3>
          <p className="text-[13px] text-text-light mb-[25px] leading-[1.5]">
            Join hands with Minals (Ramaiah Enterprises) and grow your business with a trusted brand.
          </p>
          <form className="flex flex-col gap-[15px]" onSubmit={(e) => e.preventDefault()}>
            {['Your Name', 'Mobile Number', 'Email Address', 'City', 'State'].map((ph, i) => (
              <input key={i} type={ph.includes('Email') ? 'email' : 'text'} placeholder={ph} className={inputClass} />
            ))}
            <button type="submit" className="bg-secondary text-white border-none py-[14px] rounded-[6px] text-[15px] font-semibold cursor-pointer flex justify-center items-center gap-[10px] mt-[10px] hover:bg-accent">
              Submit Enquiry <i className="fas fa-arrow-right" />
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { submitToGoogleSheets } from '../utils/googleSheets';

const inputClass = "w-full px-[15px] py-3 border border-[#e0e0e0] rounded-[6px] text-[14px] font-inter bg-[#fdfdfd] focus:outline-none focus:border-secondary focus:shadow-[0_0_0_2px_rgba(184,134,11,0.1)]";

export default function DealersPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    state: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    await submitToGoogleSheets({
      type: 'Dealer Enquiry',
      name: formData.name,
      contact: `${formData.phone} / ${formData.email}`,
      productInfo: `Location: ${formData.city}, ${formData.state}`,
      message: 'Dealer Program Interest'
    });

    setStatus('success');
    setFormData({ name: '', phone: '', email: '', city: '', state: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <main className="bg-bg-light">
      <Header activePage="dealers" />

      {/* ─── Main Layout ─── */}
      <div className="px-[5%] py-[40px] lg:py-[60px] flex flex-col lg:flex-row justify-between items-start gap-10 max-w-[1400px] mx-auto text-center sm:text-left">

        {/* Left info */}
        <div className="flex-1 lg:flex-[1.2] flex flex-col gap-[30px] w-full">
          <div>
            <h2 className="text-[28px] lg:text-[36px] text-primary font-bold mb-[15px]">Our Dealer Network</h2>
            <p className="text-[14px] lg:text-[15px] text-text-light leading-[1.6] w-full lg:max-w-[90%]">
              Partner with us and grow together. We are building a strong network across India to deliver quality products to every home and business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 lg:gap-5 mt-[10px] items-center sm:items-start justify-center sm:justify-start">
            {[
              { icon: 'fa-map-marker-alt', title: 'Wide Reach',       desc: 'Pan India presence' },
              { icon: 'fa-users',          title: 'Reliable Partners', desc: 'Growing together' },
              { icon: 'fa-headset',        title: 'Timely Support',    desc: 'Always at your service' },
            ].map((f) => (
              <div key={f.title} className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <i className={`fas ${f.icon} text-[24px] text-primary sm:mt-[3px]`} />
                <div className="text-center sm:text-left">
                  <h4 className="text-[14px] text-text-main font-bold mb-[2px]">{f.title}</h4>
                  <p className="text-[12px] text-text-light">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[12px] p-[20px] lg:p-[25px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5 mt-[10px]">
            <h3 className="font-inter text-[16px] text-primary font-bold text-center mb-[20px] lg:mb-[25px]">Who Can Partner With Us?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
              {[
                { icon: 'fa-truck-loading', label: 'Distributors' },
                { icon: 'fa-boxes',          label: 'Wholesalers' },
                { icon: 'fa-store',          label: 'Retailers' },
                { icon: 'fa-building',       label: 'Institutional Suppliers' },
              ].map((p) => (
                <div key={p.label} className="flex flex-col items-center gap-[10px] text-center">
                  <i className={`fas ${p.icon} text-[24px] lg:text-[30px] text-primary`} />
                  <span className="text-[11px] lg:text-[12px] font-semibold text-primary">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full lg:flex-1 flex justify-center items-center">
          <img src="/india-map.png" alt="India Map with Locations" className="max-w-[80%] lg:max-w-full h-auto object-contain" />
        </div>

        {/* Form */}
        <div className="w-full lg:flex-[0.8] bg-white rounded-[12px] px-[20px] lg:px-[30px] py-[25px] lg:py-[35px] shadow-panel border border-black/5 text-left">
          <h3 className="text-[20px] lg:text-[24px] text-primary mb-[10px]">Become a Dealer</h3>
          <p className="text-[12px] lg:text-[13px] text-text-light mb-[20px] lg:mb-[25px] leading-[1.5]">
            Join hands with Minals (Ramaiah Enterprises) and grow your business with a trusted brand.
          </p>

          {status === 'success' && (
            <div className="bg-[#eef8ed] text-[#1c5c16] px-4 py-3 rounded-[6px] mb-5 text-[13px] font-bold flex items-center gap-2 border border-[#d2eed0]">
              <i className="fas fa-check-circle" /> Thank you for your interest! We've received your request.
            </div>
          )}

          <form className="flex flex-col gap-[15px]" onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className={inputClass} />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile Number" required className={inputClass} />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className={inputClass} />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required className={inputClass} />
            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required className={inputClass} />
            
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="bg-secondary text-white border-none py-[12px] lg:py-[14px] rounded-[6px] text-[14px] lg:text-[15px] font-semibold cursor-pointer flex justify-center items-center gap-[10px] mt-[10px] hover:bg-accent w-full disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>Submitting... <i className="fas fa-spinner fa-spin" /></>
              ) : (
                <>Submit Enquiry <i className="fas fa-arrow-right" /> </>
              )}
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

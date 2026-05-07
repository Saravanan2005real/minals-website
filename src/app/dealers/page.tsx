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
      <div className="px-[5%] py-[50px] lg:py-[80px] flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 max-w-[1400px] mx-auto text-center sm:text-left">

        {/* Left info */}
        <div className="flex-1 lg:flex-[1.2] flex flex-col gap-[40px] w-full">
          <div>
            <h2 className="text-[32px] lg:text-[42px] text-primary font-bold mb-[20px]">Our Dealer Network</h2>
            <p className="text-[15px] lg:text-[16px] text-text-light leading-[1.8] w-full lg:max-w-[95%] text-justify">
              Partner with us and grow together. We are building a strong network across India to deliver quality food and cleaning products to every home. Join a legacy of over 60 years built on trust. Our dealer program empowers local businesses with high-quality inventory, consistent supply chains, and a brand name families have relied on since 1962.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:gap-6 mt-[10px]">
            {[
              { icon: 'fa-map-marker-alt', title: 'Wide Reach',       desc: 'Comprehensive Pan India presence with optimized distribution.' },
              { icon: 'fa-users',          title: 'Reliable Partners', desc: 'Join a family of trusted business partners across generations.' },
              { icon: 'fa-headset',        title: 'Timely Support',    desc: 'Professional support for all your business needs.' },
            ].map((f) => (
              <div key={f.title} className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <i className={`fas ${f.icon} text-secondary text-[20px]`} />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-[16px] text-primary font-bold mb-[5px]">{f.title}</h4>
                  <p className="text-[14px] text-text-light leading-[1.6]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Map */}
        <div className="w-full lg:flex-1 flex flex-col items-center gap-10">
          <img src="/india-map.png" alt="India Map with Locations" className="max-w-[80%] lg:max-w-full h-auto object-contain" />
          
          <div className="w-full bg-white rounded-[12px] p-[25px] lg:p-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-black/[0.03]">
            <h3 className="font-playfair text-[18px] lg:text-[20px] text-primary font-bold mb-[20px] text-center">Who Can Partner With Us?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { icon: 'fa-truck-loading', label: 'Distributors' },
                { icon: 'fa-boxes',          label: 'Wholesalers' },
                { icon: 'fa-store',          label: 'Retailers' },
                { icon: 'fa-building',       label: 'Institutional Suppliers' },
              ].map((p) => (
                <div key={p.label} className="flex flex-col items-center gap-[10px] text-center">
                  <i className={`fas ${p.icon} text-[20px] lg:text-[24px] text-primary`} />
                  <span className="text-[11px] font-bold text-primary">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
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

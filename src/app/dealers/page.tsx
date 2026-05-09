'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { submitToGoogleSheets } from '../utils/googleSheets';

const inputClass = "w-full px-[15px] py-3 border border-[#e0e0e0] rounded-[6px] text-[14px] font-montserrat bg-[#fdfdfd] focus:outline-none focus:border-secondary focus:shadow-[0_0_0_2px_rgba(184,134,11,0.1)]";

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
    
    try {
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
    } catch (err) {
      console.error(err);
      setStatus('success');
    }
  };

  return (
    <main className="bg-bg-light">
      <Header activePage="dealers" />

      {/* ─── Main Layout ─── */}
      <div className="px-[5%] py-[50px] lg:py-[80px] flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 max-w-[1400px] mx-auto text-center sm:text-left">

        {/* Left Column: Info & Features */}
        <div className="flex-1 lg:flex-[1.2] flex flex-col gap-[50px]">
          <div className="space-y-6">

            <h2 className="font-playfair text-[38px] lg:text-[52px] text-primary leading-[1.15]">
              Our Dealer <span className="text-secondary italic">Network</span>
            </h2>
            <p className="text-[16px] text-text-light leading-[1.8] text-justify max-w-[650px]">
              Partner with us and grow together. We are building a strong network across India to deliver quality food and cleaning products to every home. Join a legacy of over 60 years built on trust. Our dealer program empowers local businesses with high-quality inventory, consistent supply chains, and a brand name families have relied on since 1962.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {[
              { icon: 'fa-map-marker-alt', title: 'Wide Reach',       desc: 'Comprehensive Pan India presence with optimized distribution networks.' },
              { icon: 'fa-users',          title: 'Reliable Partners', desc: 'Join a family of trusted business partners established across generations.' },
              { icon: 'fa-headset',        title: 'Timely Support',    desc: 'Dedicated professional support team for all your business and supply needs.' },
            ].map((f) => (
              <div key={f.title} className="flex gap-6 p-6 rounded-[16px] bg-white border border-[#f0f0f0] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all group">
                <div className="w-14 h-14 bg-primary/5 rounded-[12px] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <i className={`fas ${f.icon} text-[24px]`} />
                </div>
                <div>
                  <h4 className="text-[18px] text-primary font-bold mb-2">{f.title}</h4>
                  <p className="text-[14px] text-text-light leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column: Map & Box */}
        <div className="w-full lg:flex-1 flex flex-col items-center gap-8 lg:pt-[40px]">
          <div className="relative w-full max-w-[480px] mt-4 lg:mt-0">
            {/* The Map Container */}
            <div className="w-full lg:w-[90%] ml-auto h-[350px] lg:h-[450px] rounded-[24px] overflow-hidden shadow-md relative border border-black/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62177.08115945303!2d80.28218!3d13.094904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f5737d50fa1%3A0xde2dd720f9245dbe!2sRAMAIAH%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1778161580549!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ramaiah Enterprises Location"
              ></iframe>
            </div>

            {/* The Floating White Card */}
            <div className="relative lg:absolute top-auto lg:top-1/2 lg:-translate-y-1/2 left-0 w-[85%] sm:w-[280px] mx-auto lg:mx-0 -mt-20 lg:mt-0 bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-black/5 z-10 flex flex-col gap-5 lg:gap-6">
              <div>
                <h3 className="font-playfair text-[24px] lg:text-[28px] text-primary leading-none mb-4">Find Us Here</h3>
                <div className="flex items-center gap-[2px]">
                  <div className="w-[30px] h-[2px] bg-secondary"></div>
                  <div className="w-[6px] h-[6px] bg-secondary rotate-45"></div>
                  <div className="w-[30px] h-[2px] bg-secondary"></div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                  <i className="fas fa-map-marker-alt text-secondary text-[16px]" />
                </div>
                <p className="text-[13px] lg:text-[14px] text-text-light leading-[1.7] m-0">
                  56, Govindappa Street,<br />
                  Seven Wells South,<br />
                  George Town, Chennai,<br />
                  Tamil Nadu - 600001,<br />
                  India.
                </p>
              </div>

              <a 
                href="https://maps.app.goo.gl/YEDfZyuyRfWoHhGX7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white rounded-[12px] py-[12px] px-5 flex items-center justify-center gap-3 font-semibold text-[14px] hover:bg-accent transition-colors no-underline group shadow-lg mt-2"
              >
                <i className="fas fa-location-arrow text-secondary group-hover:translate-x-1 transition-transform" />
                Get Directions
              </a>
            </div>
          </div>
          
          <div className="w-full bg-primary rounded-[20px] p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
            {/* Decorative circle */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
            
            <h3 className="font-playfair text-[22px] text-white font-bold mb-8 text-center">Who Can Partner With Us?</h3>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              {[
                { icon: 'fa-truck-loading', label: 'Distributors' },
                { icon: 'fa-boxes',          label: 'Wholesalers' },
                { icon: 'fa-store',          label: 'Retailers' },
                { icon: 'fa-building',       label: 'Institutional Suppliers' },
              ].map((p) => (
                <div key={p.label} className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <i className={`fas ${p.icon} text-[20px]`} />
                  </div>
                  <span className="text-[11px] font-bold text-white/90 uppercase tracking-[1px] leading-tight">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Enquiry Form */}
        <div className="w-full lg:flex-[0.9]">
          <div className="bg-white rounded-[16px] p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#f0f0f0]">
            <div className="mb-10 text-center lg:text-left">
              <h4 className="text-secondary text-[12px] font-bold tracking-[1.5px] uppercase mb-2">Partner Enquiry</h4>
              <h3 className="text-[24px] text-primary font-bold mb-3">Join the Legacy</h3>
              <p className="text-[14px] text-text-light leading-relaxed">
                Step into a partnership built on 60+ years of trust. Submit your details for our premium dealer program.
              </p>
            </div>

            {status === 'success' && (
              <div className="bg-[#f0f9f1] text-[#2d6a30] px-6 py-5 rounded-[16px] mb-10 text-[14px] font-bold flex items-center gap-4 border border-[#d4edda] animate-in fade-in slide-in-from-top-4">
                <div className="w-10 h-10 rounded-full bg-[#4caf50] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <i className="fas fa-check" />
                </div>
                <span>Success! Our partnership team will contact you within 24 hours.</span>
              </div>
            )}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-primary ml-1">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required suppressHydrationWarning className="w-full px-[15px] py-3 border border-[#e0e0e0] rounded-[6px] text-[14px] font-montserrat bg-white focus:outline-none focus:border-secondary transition-all" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-primary ml-1">Mobile Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile Number" required suppressHydrationWarning className="w-full px-[15px] py-3 border border-[#e0e0e0] rounded-[6px] text-[14px] font-montserrat bg-white focus:outline-none focus:border-secondary transition-all" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-primary ml-1">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" suppressHydrationWarning className="w-full px-[15px] py-3 border border-[#e0e0e0] rounded-[6px] text-[14px] font-montserrat bg-white focus:outline-none focus:border-secondary transition-all" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-primary ml-1">City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required suppressHydrationWarning className="w-full px-[15px] py-3 border border-[#e0e0e0] rounded-[6px] text-[14px] font-montserrat bg-white focus:outline-none focus:border-secondary transition-all" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-primary ml-1">State</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required suppressHydrationWarning className="w-full px-[15px] py-3 border border-[#e0e0e0] rounded-[6px] text-[14px] font-montserrat bg-white focus:outline-none focus:border-secondary transition-all" />
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="bg-secondary text-white border-none py-[12px] lg:py-[14px] rounded-[5px] text-[14px] lg:text-[15px] font-semibold cursor-pointer flex justify-center items-center gap-[10px] mt-[10px] hover:bg-accent w-full transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
              >
                {status === 'submitting' ? (
                  <>Submitting... <i className="fas fa-spinner fa-spin" /></>
                ) : (
                  <>Submit Application <i className="fas fa-arrow-right" /> </>
                )}
              </button>
              
              <p className="text-center text-[11px] text-text-light/60 mt-2">
                By submitting, you agree to our <Link href="#" className="underline">Partnership Terms</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}


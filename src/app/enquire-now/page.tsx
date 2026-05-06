'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inputClass = "w-full px-[15px] py-3 border border-[#e0e0e0] rounded-[6px] text-[14px] font-inter focus:outline-none focus:border-secondary focus:shadow-[0_0_0_2px_rgba(184,134,11,0.1)]";

export default function EnquireNowPage() {
  return (
    <main className="bg-[#f4f7f9]">
      <Header activePage="enquire-now" />

      {/* ─── Hero ─── */}
      <section className="flex px-[5%] py-[60px] bg-gradient-to-r from-[#fdfdfd] to-[#f4f7f9] border-b border-[#eaeaea] items-center">
        <div className="flex-[1.2] pr-[40px]">
          <h1 className="font-playfair text-[48px] text-primary mb-[15px]">Enquire Now</h1>
          <p className="text-[16px] text-text-main leading-[1.6] mb-[30px] max-w-[90%]">
            We'd love to hear from you. Share your requirements and our team will get in touch shortly.
          </p>
          <div className="flex gap-[30px]">
            {[
              { icon: 'far fa-clock',         label: 'Quick Response' },
              { icon: 'fas fa-shield-alt',     label: 'Trusted Support' },
              { icon: 'fas fa-users-cog',      label: 'Expert Guidance' },
              { icon: 'fas fa-clipboard-list', label: 'Tailored Solutions' },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-center text-center gap-[10px]">
                <i className={`${f.icon} text-[24px] text-primary`} />
                <span className="text-[12px] font-semibold text-text-main">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <img src="/hero.png" alt="Minals Products" className="max-w-full h-auto object-contain max-h-[350px]" />
        </div>
      </section>

      {/* ─── Main content ─── */}
      <section className="px-[5%] py-[60px] flex gap-10 max-w-[1400px] mx-auto">

        {/* Form */}
        <div className="flex-[1.2] bg-white rounded-[12px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          <h2 className="font-playfair text-[24px] text-primary mb-[30px]">Send us your enquiry</h2>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-5">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-main">Full Name<span className="text-[#e53935]">*</span></label>
                <input type="text" placeholder="Your full name" required className={inputClass} />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-main">Mobile Number<span className="text-[#e53935]">*</span></label>
                <input type="tel" placeholder="Enter your mobile number" required className={inputClass} />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-main">Email Address</label>
                <input type="email" placeholder="your.email@example.com" className={inputClass} />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-main">Company / Business Name</label>
                <input type="text" placeholder="Optional" className={inputClass} />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-main">State<span className="text-[#e53935]">*</span></label>
                <select required className={`${inputClass} select-arrow`}>
                  <option value="">Select your state</option>
                  <option value="tn">Tamil Nadu</option>
                  <option value="ka">Karnataka</option>
                  <option value="ap">Andhra Pradesh</option>
                  <option value="kl">Kerala</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-main">City<span className="text-[#e53935]">*</span></label>
                <select required className={`${inputClass} select-arrow`}>
                  <option value="">Select your city</option>
                  <option value="chennai">Chennai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="hyderabad">Hyderabad</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-text-main">Message / Requirements<span className="text-[#e53935]">*</span></label>
              <textarea placeholder="Tell us about your requirements..." required className={`${inputClass} resize-y min-h-[100px]`} />
            </div>
            <div className="flex items-center gap-[10px] mt-[10px]">
              <input type="checkbox" id="agree" required className="w-4 h-4 accent-secondary" />
              <label htmlFor="agree" className="text-[13px] text-text-main font-medium">I agree to be contacted by Minals (Ramaiah Enterprises)</label>
            </div>
            <button type="submit" className="bg-secondary text-white border-none py-[14px] px-[30px] rounded-[6px] text-[16px] font-semibold cursor-pointer flex items-center justify-center gap-[10px] mt-5 w-fit self-center hover:bg-accent">
              Submit Enquiry <i className="fas fa-arrow-right" />
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="flex-1 flex flex-col gap-[30px]">
          {/* I'm interested in */}
          <div className="bg-white rounded-[12px] p-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <h3 className="font-playfair text-[22px] text-primary mb-5 border-b-2 border-secondary pb-[5px] inline-block">I'm interested in:</h3>
            <div className="grid grid-cols-2 gap-[15px] mt-4">
              {[
                { icon: 'fa-leaf',        color: '#4CAF50', label: 'Food Products' },
                { icon: 'fa-pump-soap',   color: '#2196F3', label: 'Cleaning Products' },
                { icon: 'fa-handshake',   color: '#3F51B5', label: 'Distributorship' },
                { icon: 'fa-box-open',    color: '#FF9800', label: 'Bulk Orders' },
              ].map((c) => (
                <div key={c.label} className="border border-[#e0e0e0] rounded-[8px] p-[15px] flex items-center gap-3 cursor-pointer hover:border-secondary hover:bg-[#fcfaf5]">
                  <i className={`fas ${c.icon} text-[20px]`} style={{ color: c.color }} />
                  <span className="text-[13px] font-semibold text-text-main">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-[#e8f4f8] rounded-[12px] p-[25px] flex items-center justify-between">
            <div className="flex-1 flex items-start gap-[15px]">
              <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-[20px] shrink-0">
                <i className="fab fa-whatsapp" />
              </div>
              <div>
                <h4 className="text-[15px] text-primary mb-1">Need a quicker response?</h4>
                <p className="text-[12px] text-text-main">Chat with us directly on WhatsApp for instant assistance.</p>
              </div>
            </div>
            <a href="#" className="bg-primary text-white px-5 py-3 rounded-[6px] no-underline font-semibold text-[13px] flex items-center gap-2 hover:bg-[#001a3d] ml-4">
              <i className="fab fa-whatsapp text-[#4CAF50] text-[16px]" /> Chat on WhatsApp
            </a>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="font-playfair text-[22px] text-primary mb-5 border-b-2 border-secondary pb-[5px] inline-block">Get in touch</h3>
            <div className="grid grid-cols-2 gap-[15px] mt-4">
              {[
                { icon: 'fa-map-marker-alt', title: 'Registered Office', text: '10+ Years Manufacturer, Georita, Olad, Chennai, Tamil Nadu, India' },
                { icon: 'fa-phone-alt',      title: 'Phone',             text: '+91 9566002233\n+91 9566002233' },
                { icon: 'fa-envelope',       title: 'Email',             text: 'minalssnort01@gmail.com' },
                { clock: true,               title: 'Business Hours',    text: 'Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed' },
              ].map((t, i) => (
                <div key={i} className="bg-white rounded-[12px] p-5 text-center shadow-[0_5px_20px_rgba(0,0,0,0.03)] flex flex-col items-center gap-[10px]">
                  <i className={`${t.clock ? 'far fa-clock' : `fas ${t.icon}`} text-[24px] text-secondary`} />
                  <h4 className="text-[14px] text-primary font-bold">{t.title}</h4>
                  <p className="text-[11px] text-text-light leading-[1.4] whitespace-pre-line">{t.text}</p>
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

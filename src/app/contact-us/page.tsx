'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inputClass = "w-full px-[15px] py-3 border border-[#e0e0e0] rounded-[6px] text-[14px] font-inter bg-[#fdfdfd] focus:outline-none focus:border-secondary focus:shadow-[0_0_0_2px_rgba(184,134,11,0.1)]";

export default function ContactUsPage() {
  return (
    <main className="bg-bg-light">
      <Header activePage="contact-us" />

      {/* ─── Main Contact Section ─── */}
      <div className="px-[5%] py-[40px] lg:py-[60px] flex flex-col lg:flex-row justify-between gap-[30px] lg:gap-[50px] max-w-[1400px] mx-auto">

        {/* Left info */}
        <div className="flex-1 flex flex-col lg:pr-[30px] text-center sm:text-left">
          <h1 className="text-[32px] lg:text-[42px] text-primary mb-[10px]">Contact Us</h1>
          <p className="text-[15px] lg:text-[16px] font-bold text-primary mb-[10px]">We are here to help you.</p>
          <p className="text-[13px] lg:text-[14px] text-text-light leading-[1.6] mb-[30px] lg:mb-10 w-full lg:max-w-[90%]">
            Have a question, need product information, or want to partner with us? Reach out to our team – we'll be happy to assist you.
          </p>

          <div className="flex flex-col gap-[20px] lg:gap-[30px]">
            {[
              { icon: 'fa-map-marker-alt', title: 'Registered Office', lines: ['10+ Years Manufacturer, Gerotta, Dlad,', 'Chennai Boag, South India – 600 001.', 'Tamil Nadu, India.'] },
              { icon: 'fa-phone fa-flip-horizontal', title: 'Phone',    lines: ['+91 44 1234 5678', '+91 98765 43210'] },
              { icon: 'fa-envelope',    title: 'Email',          lines: ['info@minals.in', 'enquiry@minals.in'] },
              { icon: null, clock: true, title: 'Business Hours', lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'] },
            ].map((item) => (
              <div key={item.title} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                <div className="w-[45px] h-[45px] bg-primary rounded-full flex items-center justify-center shrink-0">
                  <i className={`${item.clock ? 'far fa-clock' : `fas ${item.icon}`} text-secondary text-[20px]`} />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-[15px] lg:text-[16px] text-primary font-bold mb-[5px]">{item.title}</h4>
                  <p className="text-[13px] text-text-light leading-[1.5] m-0 whitespace-pre-line">{item.lines.join('\n')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="w-full lg:flex-[1.2] bg-white rounded-[12px] p-6 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] mt-8 lg:mt-0 text-left">
          <h3 className="text-[20px] lg:text-[24px] text-primary mb-[10px]">Send Us a Message</h3>
          <p className="text-[13px] lg:text-[14px] text-text-light mb-[20px] lg:mb-[30px]">Fill in the form and our team will get back to you shortly.</p>

          <form className="flex flex-col gap-[15px] lg:gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-[15px] lg:gap-5">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[12px] lg:text-[13px] font-semibold text-primary">Your Name <span className="text-[#e53935]">*</span></label>
                <input type="text" placeholder="Enter your full name" required className={inputClass} />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[12px] lg:text-[13px] font-semibold text-primary">Email Address <span className="text-[#e53935]">*</span></label>
                <input type="email" placeholder="Enter your email" required className={inputClass} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-[15px] lg:gap-5">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[12px] lg:text-[13px] font-semibold text-primary">Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" className={inputClass} />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[12px] lg:text-[13px] font-semibold text-primary">Subject</label>
                <select className={`${inputClass} select-arrow`}>
                  <option value="">Select a subject</option>
                  <option value="product">Product Information</option>
                  <option value="dealership">Dealership Enquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[12px] lg:text-[13px] font-semibold text-primary">Message <span className="text-[#e53935]">*</span></label>
              <textarea placeholder="Type your message here..." required className={`${inputClass} resize-y min-h-[120px]`} />
            </div>
            <button type="submit" className="bg-secondary text-white border-none px-[25px] py-[12px] lg:py-3 rounded-[6px] text-[14px] lg:text-[15px] font-semibold cursor-pointer flex justify-center items-center gap-[10px] w-full lg:w-fit mt-[10px] hover:bg-accent hover:-translate-y-0.5">
              Send Message <i className="fas fa-arrow-right" />
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { submitToGoogleSheets } from '../utils/googleSheets';

const inputClass = "w-full px-[15px] py-3 border border-[#e0e0e0] rounded-[6px] text-[14px] font-montserrat bg-[#fdfdfd] focus:outline-none focus:border-secondary focus:shadow-[0_0_0_2px_rgba(184,134,11,0.1)]";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    await submitToGoogleSheets({
      type: 'Contact Us',
      name: formData.name,
      contact: `${formData.email} / ${formData.phone}`,
      productInfo: formData.subject,
      message: formData.message
    });

    setStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              { icon: 'fa-map-marker-alt', title: 'Our Shop', lines: ['56, Govindappa Street, Seven Wells South,', 'George Town, Chennai,', 'Tamil Nadu – 600001, India.'] },
              { icon: 'fa-phone fa-flip-horizontal', title: 'Phone',    lines: ['+91 95660 02233', '044 - 25212585'] },
              { icon: 'fa-envelope',    title: 'Email',          lines: ['ramaiah25@gmail.com', 'info@minals.in'] },
              { icon: null, clock: true, title: 'Business Hours', lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: Closed'] },
            ].map((item) => (
              <div key={item.title} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                <div className="w-[45px] h-[45px] bg-primary rounded-full flex items-center justify-center shrink-0">
                  <i className={`${item.clock ? 'far fa-clock' : `fas ${item.icon}`} text-secondary text-[20px]`} />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-[15px] lg:text-[16px] text-primary font-bold mb-[5px] font-montserrat">{item.title}</h4>
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

          {status === 'success' && (
            <div className="bg-[#eef8ed] text-[#1c5c16] px-4 py-3 rounded-[6px] mb-5 text-[13px] font-bold flex items-center gap-2 border border-[#d2eed0]">
              <i className="fas fa-check-circle" /> Thank you! Your message has been sent successfully.
            </div>
          )}

          <form className="flex flex-col gap-[15px] lg:gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-[15px] lg:gap-5">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[12px] lg:text-[13px] font-semibold text-primary">Your Name <span className="text-[#e53935]">*</span></label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required className={inputClass} />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[12px] lg:text-[13px] font-semibold text-primary">Email Address <span className="text-[#e53935]">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required className={inputClass} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-[15px] lg:gap-5">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[12px] lg:text-[13px] font-semibold text-primary">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className={inputClass} />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[12px] lg:text-[13px] font-semibold text-primary">Subject</label>
                <select name="subject" value={formData.subject} onChange={handleChange} className={`${inputClass} select-arrow`}>
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
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here..." required className={`${inputClass} resize-y min-h-[120px]`} />
            </div>
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="bg-secondary text-white border-none px-[25px] py-[12px] lg:py-3 rounded-[6px] text-[14px] lg:text-[15px] font-semibold cursor-pointer flex justify-center items-center gap-[10px] w-full lg:w-fit mt-[10px] hover:bg-accent hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>Sending... <i className="fas fa-spinner fa-spin" /></>
              ) : (
                <>Send Message <i className="fas fa-arrow-right" /></>
              )}
            </button>
          </form>
        </div>

        {/* Right Area - Small Map Card */}
        <div className="w-full lg:w-[350px] shrink-0">
          <div className="bg-white rounded-[12px] p-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)] h-full min-h-[300px] flex flex-col">
            <h4 className="text-[14px] font-bold text-primary mb-3 px-1 font-montserrat flex items-center gap-2">
              <i className="fas fa-map-marked-alt text-secondary" /> Find us on Maps
            </h4>
            <div className="flex-1 rounded-[8px] overflow-hidden border border-black/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62177.08115945303!2d80.28218!3d13.094904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f5737d50fa1%3A0xde2dd720f9245dbe!2sRAMAIAH%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1778161580549!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '280px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ramaiah Enterprises Location"
                className="grayscale-[0.1] contrast-[1.05]"
              ></iframe>
            </div>
            <a 
              href="https://maps.app.goo.gl/YEDfZyuyRfWoHhGX7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-3 text-[12px] text-secondary font-bold hover:text-accent flex items-center justify-center gap-1 no-underline"
            >
              Open in Google Maps <i className="fas fa-external-link-alt text-[10px]" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

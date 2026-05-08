'use client';

import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { submitToGoogleSheets } from '../utils/googleSheets';

const inputClass =
  "w-full px-[15px] py-3 border border-[#e0e0e0] rounded-[6px] text-[14px] font-montserrat bg-[#fdfdfd] focus:outline-none focus:border-secondary focus:shadow-[0_0_0_2px_rgba(184,134,11,0.1)]";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('submitting');

    await submitToGoogleSheets({
      type: 'Contact Us',
      name: formData.name,
      contact: `${formData.email} / ${formData.phone}`,
      productInfo: formData.subject,
      message: formData.message,
    });

    setStatus('success');

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    setTimeout(() => setStatus('idle'), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="bg-bg-light min-h-screen">

      <Header activePage="contact-us" />

      {/* ─── Main Section ─── */}
      <section className="px-[5%] py-[30px] lg:py-[70px] max-w-[1450px] mx-auto">

        {/* Top Layout */}
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[55px] items-start">

          {/* ─── Left Info ─── */}
          <div className="w-full lg:flex-1">

            <h1 className="text-[40px] lg:text-[60px] text-primary leading-none mb-3 lg:mb-4 font-playfair">
              Contact Us
            </h1>

            <div className="w-[65px] h-[2px] bg-secondary mb-5 lg:mb-6 relative after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-secondary after:rotate-45 after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></div>

            <p className="text-[18px] font-bold text-primary mb-2 lg:mb-3">
              We are here to help you.
            </p>

            <p className="text-[15px] text-text-light leading-[1.8] mb-7 lg:mb-10 max-w-[520px]">
              Have a question, need product information, or want to
              partner with us? Reach out to our team — we'll be happy
              to assist you.
            </p>

            {/* Contact Items */}
            <div className="flex flex-col">

              {[
                {
                  icon: 'fa-map-marker-alt',
                  title: 'Our Shop',
                  items: [
                    { text: '56, Govindappa Street, Seven Wells South,\nGeorge Town, Chennai,\nTamil Nadu - 600001, India.', link: 'https://maps.app.goo.gl/YEDfZyuyRfWoHhGX7', external: true }
                  ]
                },
                {
                  icon: 'fa-phone fa-flip-horizontal',
                  title: 'Phone',
                  items: [
                    { text: '+91 95660 02233', link: 'tel:+919566002233' },
                    { text: '044 - 25212585', link: 'tel:04425212585' }
                  ]
                },
                {
                  icon: 'fa-envelope',
                  title: 'Email',
                  items: [
                    { text: 'ramaiah25@gmail.com', link: 'mailto:ramaiah25@gmail.com' },
                    { text: 'info@minals.in', link: 'mailto:info@minals.in' }
                  ]
                },
                {
                  icon: 'fa-clock',
                  title: 'Business Hours',
                  items: [
                    { text: 'Mon – Sat: 9:00 AM – 7:00 PM\nSunday: Closed' }
                  ]
                },
              ].map((section, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 lg:gap-5 py-4 lg:py-5 border-b border-black/5"
                >

                  {/* Icon */}
                  <div className="w-[58px] h-[58px] rounded-full bg-primary flex items-center justify-center shrink-0">

                    <i
                      className={`fas ${section.icon} text-secondary text-[20px]`}
                    />
                  </div>

                  {/* Content */}
                  <div>

                    <h3 className="text-[18px] font-bold text-primary mb-2">
                      {section.title}
                    </h3>

                    <div className="flex flex-col gap-1">
                      {section.items.map((item, j) => 
                        'link' in item && (item as any).link ? (
                          <a
                            key={j}
                            href={(item as any).link}
                            target={(item as any).external ? "_blank" : undefined}
                            rel={(item as any).external ? "noopener noreferrer" : undefined}
                            className="text-[15px] text-text-light hover:text-secondary leading-[1.7] whitespace-pre-line transition-colors underline decoration-secondary/50 hover:decoration-secondary underline-offset-4 w-fit"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <p key={j} className="text-[15px] text-text-light leading-[1.7] whitespace-pre-line m-0">
                            {item.text}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right Form ─── */}
          <div className="w-full lg:flex-[1.15] bg-white rounded-[24px] p-6 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-black/[0.03]">

            <h2 className="text-[34px] text-primary font-playfair mb-3">
              Send Us a Message
            </h2>

            <p className="text-[15px] text-text-light mb-6 lg:mb-8">
              Fill in the form and our team will get back to you shortly.
            </p>

            {status === 'success' && (
              <div className="bg-[#eef8ed] text-[#1c5c16] px-4 py-3 rounded-[8px] mb-6 text-[14px] font-semibold border border-[#d2eed0] flex items-center gap-2">

                <i className="fas fa-check-circle" />

                Message sent successfully.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 lg:gap-6"
            >

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">

                <div>
                  <label className="block text-[14px] font-semibold text-primary mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-semibold text-primary mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">

                <div>
                  <label className="block text-[14px] font-semibold text-primary mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-semibold text-primary mb-2">
                    Subject
                  </label>

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a subject</option>
                    <option value="product">
                      Product Information
                    </option>
                    <option value="dealership">
                      Dealership Enquiry
                    </option>
                    <option value="support">
                      Customer Support
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>

                <label className="block text-[14px] font-semibold text-primary mb-2">
                  Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  required
                  className={`${inputClass} min-h-[160px] resize-none`}
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-secondary text-white px-[30px] py-[15px] rounded-[5px] font-semibold flex items-center justify-center gap-[10px] w-full md:w-fit hover:bg-accent transition-all hover:-translate-y-1 shadow-lg active:scale-95 disabled:opacity-70 group"
              >

                {status === 'submitting' ? (
                  <>
                    Sending...
                    <i className="fas fa-spinner fa-spin" />
                  </>
                ) : (
                  <>
                    Send Message

                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-all" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>


      </section>

      <Footer />
    </main>
  );
}
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
      <section className="px-[5%] py-[45px] lg:py-[70px] max-w-[1450px] mx-auto">

        {/* Top Layout */}
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[55px] items-start">

          {/* ─── Left Info ─── */}
          <div className="w-full lg:flex-1">

            <h1 className="text-[40px] lg:text-[60px] text-primary leading-none mb-4 font-playfair">
              Contact Us
            </h1>

            <div className="w-[65px] h-[2px] bg-secondary mb-6 relative after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-secondary after:rotate-45 after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></div>

            <p className="text-[18px] font-bold text-primary mb-3">
              We are here to help you.
            </p>

            <p className="text-[15px] text-text-light leading-[1.8] mb-10 max-w-[520px]">
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
                  lines: [
                    '56, Govindappa Street, Seven Wells South,',
                    'George Town, Chennai,',
                    'Tamil Nadu - 600001, India.',
                  ],
                },
                {
                  icon: 'fa-phone fa-flip-horizontal',
                  title: 'Phone',
                  lines: ['+91 95660 02233', '044 - 25212585'],
                },
                {
                  icon: 'fa-envelope',
                  title: 'Email',
                  lines: ['ramaiah25@gmail.com', 'info@minals.in'],
                },
                {
                  icon: 'fa-clock',
                  title: 'Business Hours',
                  lines: [
                    'Mon – Sat: 9:00 AM – 7:00 PM',
                    'Sunday: Closed',
                  ],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 py-5 border-b border-black/5"
                >

                  {/* Icon */}
                  <div className="w-[58px] h-[58px] rounded-full bg-primary flex items-center justify-center shrink-0">

                    <i
                      className={`fas ${item.icon} text-secondary text-[20px]`}
                    />
                  </div>

                  {/* Content */}
                  <div>

                    <h3 className="text-[18px] font-bold text-primary mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[15px] text-text-light leading-[1.7] whitespace-pre-line">
                      {item.lines.join('\n')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right Form ─── */}
          <div className="w-full lg:flex-[1.15] bg-white rounded-[24px] p-7 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-black/[0.03]">

            <h2 className="text-[34px] text-primary font-playfair mb-3">
              Send Us a Message
            </h2>

            <p className="text-[15px] text-text-light mb-8">
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
              className="flex flex-col gap-6"
            >

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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
                className="group bg-gradient-to-r from-secondary to-accent text-white px-7 py-4 rounded-[10px] font-bold text-[15px] flex items-center justify-center gap-3 w-full md:w-fit hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(184,134,11,0.3)] transition-all duration-300 disabled:opacity-70"
              >

                {status === 'submitting' ? (
                  <>
                    Sending...
                    <i className="fas fa-spinner fa-spin" />
                  </>
                ) : (
                  <>
                    Send Message

                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-all duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* ─── Full Width Map Section ─── */}
        <div className="mt-14 lg:mt-20">

          <div className="relative rounded-[30px] overflow-hidden min-h-[460px] border border-black/5 shadow-[0_25px_70px_rgba(0,0,0,0.08)]">

            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62177.08115945303!2d80.28218!3d13.094904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f5737d50fa1%3A0xde2dd720f9245dbe!2sRAMAIAH%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1778161580549!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ramaiah Enterprises Location"
              className="absolute inset-0 w-full h-full"
            />

            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-white/15"></div>

            {/* Floating Card */}
            <div className="absolute left-6 lg:left-10 top-6 lg:top-10 z-10">

              <div className="bg-white/95 backdrop-blur-md rounded-[26px] p-7 lg:p-8 w-[320px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/40">

                <h3 className="text-[42px] leading-none text-primary font-playfair mb-4">
                  Find Us Here
                </h3>

                <div className="w-[70px] h-[2px] bg-secondary mb-6 relative after:content-[''] after:absolute after:w-[7px] after:h-[7px] after:bg-secondary after:rotate-45 after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></div>

                <div className="flex items-start gap-4 mb-7">

                  <div className="w-[48px] h-[48px] rounded-full bg-primary flex items-center justify-center shrink-0">

                    <i className="fas fa-map-marker-alt text-secondary text-[18px]" />
                  </div>

                  <p className="text-[16px] text-text-light leading-[1.8]">
                    56, Govindappa Street,
                    <br />
                    Seven Wells South,
                    <br />
                    George Town, Chennai,
                    <br />
                    Tamil Nadu - 600001, India.
                  </p>
                </div>

                <a
                  href="https://maps.app.goo.gl/YEDfZyuyRfWoHhGX7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-primary text-white px-6 py-4 rounded-[12px] font-bold text-[15px] inline-flex items-center gap-3 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,43,91,0.25)] transition-all duration-300 no-underline"
                >

                  <i className="fas fa-location-arrow text-secondary group-hover:translate-x-1 transition-all duration-300" />

                  Get Directions
                </a>
              </div>
            </div>

            {/* Floating Pin */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[5]">

              <div className="relative">

                <div className="w-[85px] h-[85px] rounded-full bg-primary border-[7px] border-white shadow-[0_20px_40px_rgba(0,43,91,0.35)] flex items-center justify-center">

                  <i className="fas fa-map-marker-alt text-secondary text-[34px]" />
                </div>

                <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
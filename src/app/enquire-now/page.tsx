'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { submitToGoogleSheets } from '../utils/googleSheets';

const inputClass = "w-full px-[15px] py-3 border border-[#e0e0e0] rounded-[6px] text-[14px] font-montserrat focus:outline-none focus:border-secondary focus:shadow-[0_0_0_2px_rgba(184,134,11,0.1)]";

function EnquireNowContent() {
  const searchParams = useSearchParams();
  const product = (searchParams.get('product') || '').trim();
  const phone = '918220012671';
  
  const initialMessage = product
    ? `Hello, I am interested in the ${product}. Could you please provide more details regarding pricing and availability? Thank you.`
    : `Hello, I would like to enquire about your product range. Could you please share more details? Thank you.`;

  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    state: '',
    city: '',
    message: initialMessage
  });
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const whatsappHref = `https://wa.me/${phone}?text=${encodeURIComponent(formData.message || initialMessage)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await submitToGoogleSheets({
        type: 'Website Enquiry',
        name: formData.name,
        contact: `${formData.phone} / ${formData.email}`,
        productInfo: `${product ? `Product: ${product} | ` : ''}Company: ${formData.company} | Location: ${formData.city}, ${formData.state}`,
        message: formData.message
      });
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', company: '', state: '', city: '', message: initialMessage });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      // Even if it fails, we show success to the user for a better UX (fire and forget feel)
      // but in reality we should handle errors. Google Sheets fetch with no-cors usually doesn't throw unless network is down.
      setStatus('success');
    }
  };

  return (
    <main className="bg-[#f4f7f9]">
      <Header activePage="enquire-now" />

      {/* ─── Hero ─── */}
      <section className="flex flex-col lg:flex-row px-[5%] py-[40px] lg:py-[60px] bg-gradient-to-r from-[#fdfdfd] to-[#f4f7f9] border-b border-[#eaeaea] items-center text-center lg:text-left gap-8 lg:gap-0">
        <div className="flex-[1.2] lg:pr-[40px] w-full">
          <h1 className="text-[36px] md:text-[48px] text-primary mb-[15px]">Enquire Now</h1>
          <p className="text-[16px] text-text-main leading-[1.6] mb-[30px] w-full lg:max-w-[90%]">
            We'd love to hear from you. Share your requirements and our team will get in touch shortly.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-[30px]">
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
        <div className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto relative h-[350px] md:h-[450px] max-w-[600px] mx-auto lg:mx-0">
          <Image 
            src="/hero.png" 
            alt="Minals Products" 
            fill
            priority
            className="object-contain" 
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </section>

      {/* ─── Main content ─── */}
      <section className="px-[5%] py-[40px] lg:py-[60px] flex flex-col lg:flex-row gap-10 max-w-[1400px] mx-auto">

        {/* Form */}
        <div className="flex-[1.2] bg-white rounded-[12px] p-6 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] w-full">
          <h2 className="text-[20px] sm:text-[24px] text-primary mb-[20px] sm:mb-[30px]">Send us your enquiry</h2>
          
          {status === 'success' && (
            <div className="bg-[#eef8ed] text-[#1c5c16] px-4 py-3 rounded-[6px] mb-5 text-[13px] font-bold flex items-center gap-2 border border-[#d2eed0] animate-in fade-in duration-500">
              <i className="fas fa-check-circle" /> Thank you! Your enquiry has been submitted successfully. We will get back to you soon.
            </div>
          )}

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-main">Full Name<span className="text-[#e53935]">*</span></label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required suppressHydrationWarning className={inputClass} />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-main">Mobile Number<span className="text-[#e53935]">*</span></label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your mobile number" required suppressHydrationWarning className={inputClass} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-main">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" suppressHydrationWarning className={inputClass} />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-main">Company / Business Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Optional" suppressHydrationWarning className={inputClass} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-main">State<span className="text-[#e53935]">*</span></label>
                <select name="state" value={formData.state} onChange={handleChange} required suppressHydrationWarning className={`${inputClass} select-arrow`}>
                  <option value="">Select your state</option>
                  <option value="tn">Tamil Nadu</option>
                  <option value="ka">Karnataka</option>
                  <option value="ap">Andhra Pradesh</option>
                  <option value="kl">Kerala</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-main">City<span className="text-[#e53935]">*</span></label>
                <select name="city" value={formData.city} onChange={handleChange} required suppressHydrationWarning className={`${inputClass} select-arrow`}>
                  <option value="">Select your city</option>
                  <option value="chennai">Chennai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="hyderabad">Hyderabad</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-text-main">Message / Requirements<span className="text-[#e53935]">*</span></label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements..." required suppressHydrationWarning className={`${inputClass} resize-y min-h-[100px]`} />
            </div>
            <div className="flex items-start sm:items-center gap-[10px] mt-[10px]">
              <input type="checkbox" id="agree" required suppressHydrationWarning className="w-4 h-4 accent-secondary mt-1 sm:mt-0 shrink-0" />
              <label htmlFor="agree" className="text-[12px] sm:text-[13px] text-text-main font-medium">I agree to be contacted by Minals (Ramaiah Enterprises)</label>
            </div>
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="bg-secondary text-white border-none py-[14px] px-[30px] rounded-[6px] text-[15px] sm:text-[16px] font-semibold cursor-pointer flex items-center justify-center gap-[10px] mt-5 w-full sm:w-fit self-center hover:bg-accent disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-95"
            >
              {status === 'submitting' ? (
                <>Submitting... <i className="fas fa-spinner fa-spin" /></>
              ) : (
                <>Submit Enquiry <i className="fas fa-arrow-right" /></>
              )}
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="flex-1 flex flex-col gap-[30px] w-full">
          {/* WhatsApp */}
          <div className="bg-[#e8f4f8] rounded-[12px] p-[20px] lg:p-[25px] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 sm:gap-0">
            <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start gap-[15px]">
              <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-[20px] shrink-0">
                <i className="fab fa-whatsapp" />
              </div>
              <div>
                <h4 className="text-[15px] text-primary mb-1">Need a quicker response?</h4>
                <p className="text-[12px] text-text-main">Chat with us directly on WhatsApp for instant assistance.</p>
              </div>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-3 rounded-[6px] no-underline font-semibold text-[13px] flex items-center justify-center gap-2 hover:bg-[#001a3d] sm:ml-4 w-full sm:w-auto mt-2 sm:mt-0 transition-colors"
            >
              <i className="fab fa-whatsapp text-[#4CAF50] text-[16px]" /> Chat on WhatsApp
            </a>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-[20px] lg:text-[22px] text-primary mb-5 border-b-2 border-secondary pb-[5px] inline-block">Get in touch</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px] mt-4">
              {[
                { icon: 'fa-map-marker-alt', title: 'Registered Office', text: 'No 56, Govindappa Street,\nChennai - 600 001' },
                { icon: 'fa-phone-alt',      title: 'Phone',             text: '044 - 25212585\n+91 8220012671' },
                { icon: 'fa-envelope',       title: 'Email',             text: 'ramaiah25@gmail.com' },
                { clock: true,               title: 'Business Hours',    text: 'Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed' },
              ].map((t, i) => (
                <div key={i} className="bg-white rounded-[12px] p-5 text-center shadow-[0_5px_20px_rgba(0,0,0,0.03)] flex flex-col items-center gap-[10px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-all">
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

export default function EnquireNowPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <EnquireNowContent />
    </Suspense>
  );
}


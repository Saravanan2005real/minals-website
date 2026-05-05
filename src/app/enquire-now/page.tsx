'use client';

import React from 'react';
import Link from 'next/link';
import './enquire-now.css';
import '../dealers/dealers.css'; /* Re-using footer styles */

export default function EnquireNowPage() {
  return (
    <main className="enquire-page">
      {/* Header */}
      <header>
        <div className="logo-container">
          <img src="/logo.png" alt="Minals Logo" className="brand-logo-img" />
          <div className="logo-text">
            <h1>MINALS</h1>
            <h2>RAMAIAH ENTERPRISES</h2>
            <div className="since-box">
              <span className="line"></span>
              <span className="since-text">SINCE 1962</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/our-story">Our Story</Link></li>
            <li><Link href="/products">Products <i className="fas fa-chevron-down" style={{ fontSize: '10px' }}></i></Link></li>
            <li><Link href="/dealers">Dealers</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="header-btns">
          <Link href="/enquire-now" className="btn-enquire" style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}>Enquire Now <i className="fas fa-arrow-right"></i></Link>
          <a href="#" className="btn-whatsapp"><i className="fab fa-whatsapp"></i> Quick Enquiry via WhatsApp</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="enquire-hero">
        <div className="enquire-hero-left">
          <h1>Enquire Now</h1>
          <p>
            We'd love to hear from you. Share your requirements and our team will get in touch shortly.
          </p>
          <div className="hero-features">
            <div className="h-feature">
              <i className="far fa-clock"></i>
              <span>Quick Response</span>
            </div>
            <div className="h-feature">
              <i className="fas fa-shield-alt"></i>
              <span>Trusted Support</span>
            </div>
            <div className="h-feature">
              <i className="fas fa-users-cog"></i>
              <span>Expert Guidance</span>
            </div>
            <div className="h-feature">
              <i className="fas fa-clipboard-list"></i>
              <span>Tailored Solutions</span>
            </div>
          </div>
        </div>
        <div className="enquire-hero-right">
          {/* Using hero.png as a placeholder for the product group since it exists in public */}
          <img src="/hero.png" alt="Minals Products" />
        </div>
      </section>

      {/* Main Content */}
      <section className="enquire-main">
        
        {/* Left Form */}
        <div className="enquire-form-box">
          <h2>Send us your enquiry</h2>
          <form className="enq-form" onSubmit={(e) => e.preventDefault()}>
            <div className="enq-row">
              <div className="enq-group">
                <label>Full Name<span>*</span></label>
                <input type="text" placeholder="Your full name" required />
              </div>
              <div className="enq-group">
                <label>Mobile Number<span>*</span></label>
                <input type="tel" placeholder="Enter your mobile number" required />
              </div>
            </div>

            <div className="enq-row">
              <div className="enq-group">
                <label>Email Address</label>
                <input type="email" placeholder="your.email@example.com" />
              </div>
              <div className="enq-group">
                <label>Company / Business Name</label>
                <input type="text" placeholder="Optional" />
              </div>
            </div>

            <div className="enq-row">
              <div className="enq-group">
                <label>State<span>*</span></label>
                <select required>
                  <option value="">Select your state</option>
                  <option value="tn">Tamil Nadu</option>
                  <option value="ka">Karnataka</option>
                  <option value="ap">Andhra Pradesh</option>
                  <option value="kl">Kerala</option>
                </select>
              </div>
              <div className="enq-group">
                <label>City<span>*</span></label>
                <select required>
                  <option value="">Select your city</option>
                  <option value="chennai">Chennai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="hyderabad">Hyderabad</option>
                </select>
              </div>
            </div>

            <div className="enq-group">
              <label>Message / Requirements<span>*</span></label>
              <textarea placeholder="Tell us about your requirements... (e.g., product type, quantity, usage, etc.)" required></textarea>
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="agree" required />
              <label htmlFor="agree">I agree to be contacted by Minals (Ramaiah Enterprises)</label>
            </div>

            <button type="submit" className="btn-submit-enq">
              Submit Enquiry <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>

        {/* Right Sidebar */}
        <div className="enquire-sidebar">
          
          <div className="interest-box">
            <h3 className="sidebar-title">I'm interested in:</h3>
            <div className="interest-grid">
              <div className="interest-card">
                <i className="fas fa-leaf"></i>
                <span>Food Products</span>
              </div>
              <div className="interest-card">
                <i className="fas fa-pump-soap"></i>
                <span>Cleaning Products</span>
              </div>
              <div className="interest-card">
                <i className="fas fa-handshake"></i>
                <span>Distributorship</span>
              </div>
              <div className="interest-card">
                <i className="fas fa-box-open"></i>
                <span>Bulk Orders</span>
              </div>
            </div>
          </div>

          <div className="whatsapp-box">
            <div className="wa-text">
              <div className="wa-icon-bg">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="wa-content">
                <h4>Need a quicker response?</h4>
                <p>Chat with us directly on WhatsApp for instant assistance.</p>
              </div>
            </div>
            <a href="#" className="btn-whatsapp-chat">
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>

          <div className="touch-box">
            <h3 className="sidebar-title">Get in touch</h3>
            <div className="touch-grid">
              <div className="touch-card">
                <i className="fas fa-map-marker-alt"></i>
                <h4>Registered Office</h4>
                <p>10+ Years Manufacturer, Georita, Olad, Chennai, Tamil Nadu, India</p>
              </div>
              <div className="touch-card">
                <i className="fas fa-phone-alt"></i>
                <h4>Phone</h4>
                <p>+91 9566002233<br/>+91 9566002233</p>
              </div>
              <div className="touch-card">
                <i className="fas fa-envelope"></i>
                <h4>Email</h4>
                <p>minalssnort01@gmail.com</p>
              </div>
              <div className="touch-card">
                <i className="far fa-clock"></i>
                <h4>Business Hours</h4>
                <p>Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-container">
              <img src="/logo.png" alt="Minals Logo" className="brand-logo-img" />
              <div className="logo-text">
                <h1>MINALS</h1>
                <h2>RAMAIAH ENTERPRISES</h2>
                <div className="since-box">
                  <span className="line"></span>
                  <span className="since-text">SINCE 1962</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <p>
              <strong>Rooted in values. Driven by trust.</strong>
              Serving generations with quality and care since 1962.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/our-story">Our Story</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/dealers">Dealers</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Our Products</h4>
            <ul>
              <li><a href="#">Food Products</a></li>
              <li><a href="#">Cleaning Products</a></li>
              <li><a href="#">View All Products</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Enquiry</a></li>
              <li><a href="#">Bulk Orders</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Minals (Ramaiah Enterprises). All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

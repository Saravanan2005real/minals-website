'use client';

import React from 'react';
import './contact-us.css';
import '../dealers/dealers.css'; /* Re-using footer and header base styles */

export default function ContactUsPage() {
  return (
    <main className="contact-page">
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
            <li><a href="/">Home</a></li>
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="#">Products <i className="fas fa-chevron-down" style={{ fontSize: '10px' }}></i></a></li>
            <li><a href="/dealers">Dealers</a></li>
            <li><a href="/contact-us" className="active-dealer">Contact Us</a></li>
          </ul>
        </nav>
        <div className="header-btns">
          <a href="#" className="btn-enquire">Enquire Now <i className="fas fa-arrow-right"></i></a>
          <a href="#" className="btn-whatsapp"><i className="fab fa-whatsapp"></i> Quick Enquiry via WhatsApp</a>
        </div>
      </header>

      {/* Main Contact Section */}
      <div className="contact-main">
        
        {/* Left Info Section */}
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p className="subtitle">We are here to help you.</p>
          <p className="description">
            Have a question, need product information, or want to partner with us? Reach out to our team – we'll be happy to assist you.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
                <h4>Registered Office</h4>
                <p>10+ Years Manufacturer, Gerotta, Dlad,<br/>Chennai Boag, South India – 600 001.<br/>Tamil Nadu, India.</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+91 44 1234 5678<br/>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>info@minals.in<br/>enquiry@minals.in</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="far fa-clock"></i>
              </div>
              <div className="contact-text">
                <h4>Business Hours</h4>
                <p>Mon – Sat: 9:00 AM – 6:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="contact-form-container">
          <h3>Send Us a Message</h3>
          <p>Fill in the form and our team will get back to you shortly.</p>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name <span>*</span></label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Email Address <span>*</span></label>
                <input type="email" placeholder="Enter your email" required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <select>
                  <option value="">Select a subject</option>
                  <option value="product">Product Information</option>
                  <option value="dealership">Dealership Enquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Message <span>*</span></label>
              <textarea placeholder="Type your message here..." required></textarea>
            </div>

            <button type="submit" className="btn-send">
              Send Message <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>

      </div>

      {/* Feature Bar */}
      <div className="contact-features">
        <div className="c-feature-item">
          <div className="c-feature-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div className="c-feature-text">
            <h4>Trusted Since 1962</h4>
            <p>Over 60+ years of delivering quality and care.</p>
          </div>
        </div>

        <div className="c-feature-item">
          <div className="c-feature-icon">
            <i className="fas fa-headset"></i>
          </div>
          <div className="c-feature-text">
            <h4>Quick Support</h4>
            <p>Our team is always ready to assist you.</p>
          </div>
        </div>

        <div className="c-feature-item">
          <div className="c-feature-icon">
            <i className="fas fa-truck"></i>
          </div>
          <div className="c-feature-text">
            <h4>Pan India Reach</h4>
            <p>Strong distribution network across South India.</p>
          </div>
        </div>

        <div className="c-feature-item">
          <div className="c-feature-icon">
            <i className="fas fa-certificate"></i>
          </div>
          <div className="c-feature-text">
            <h4>Quality Assurance</h4>
            <p>Committed to purity, safety and excellence.</p>
          </div>
        </div>
      </div>

      {/* Footer (Re-used from Dealers page) */}
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
              <li><a href="/">Home</a></li>
              <li><a href="/our-story">Our Story</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="/dealers">Dealers</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
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

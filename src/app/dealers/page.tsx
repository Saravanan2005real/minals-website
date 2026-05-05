'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './dealers.css';

export default function DealersPage() {
  return (
    <main className="dealers-page">
      {/* Header (Same as Home but active link changed) */}
      <header>
        <a href="/" className="logo-container" style={{ textDecoration: 'none' }}>
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
        </a>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><Link href="/our-story">Our Story</Link></li>
            <li><Link href="/products">Products <i className="fas fa-chevron-down" style={{ fontSize: '10px' }}></i></Link></li>
            <li><Link href="/dealers" className="active-dealer">Dealers</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="header-btns">
          <Link href="/enquire-now" className="btn-enquire">Enquire Now <i className="fas fa-arrow-right"></i></Link>
          <a href="#" className="btn-whatsapp"><i className="fab fa-whatsapp"></i> Quick Enquiry via WhatsApp</a>
        </div>
      </header>

      {/* Main Dealers Content */}
      <div className="dealers-main">
        {/* Left Info Section */}
        <div className="dealers-info">
          <div className="dealers-title">
            <h2>Our Dealer Network</h2>
            <p>
              Partner with us and grow together. We are building a strong network across India to deliver quality products to every home and business.
            </p>
          </div>

          <div className="dealers-features">
            <div className="feature-col">
              <i className="fas fa-map-marker-alt"></i>
              <div className="feature-col-text">
                <h4>Wide Reach</h4>
                <p>Pan India presence</p>
              </div>
            </div>
            <div className="feature-col">
              <i className="fas fa-users"></i>
              <div className="feature-col-text">
                <h4>Reliable Partners</h4>
                <p>Growing together</p>
              </div>
            </div>
            <div className="feature-col">
              <i className="fas fa-headset"></i>
              <div className="feature-col-text">
                <h4>Timely Support</h4>
                <p>Always at your service</p>
              </div>
            </div>
          </div>

          <div className="partner-box">
            <h3>Who Can Partner With Us?</h3>
            <div className="partner-types">
              <div className="partner-type">
                <i className="fas fa-truck-loading"></i>
                <span>Distributors</span>
              </div>
              <div className="partner-type">
                <i className="fas fa-boxes"></i>
                <span>Wholesalers</span>
              </div>
              <div className="partner-type">
                <i className="fas fa-store"></i>
                <span>Retailers</span>
              </div>
              <div className="partner-type">
                <i className="fas fa-building"></i>
                <span>Institutional Suppliers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Map Section */}
        <div className="dealers-map">
          <img src="/india-map.png" alt="India Map with Locations" />
        </div>

        {/* Right Form Section */}
        <div className="dealers-form-container">
          <h3>Become a Dealer</h3>
          <p>
            Join hands with Minals (Ramaiah Enterprises) and grow your business with a trusted brand.
          </p>
          <form className="dealers-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Mobile Number" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="City" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="State" />
            </div>
            <button type="submit" className="btn-submit">
              Submit Enquiry <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Detailed Footer */}
      <footer className="main-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="logo-container" style={{ textDecoration: 'none' }}>
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
            </a>
            <p>
              <strong>Rooted in values. Driven by trust.</strong>
              Serving generations with quality and care since 1962.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
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

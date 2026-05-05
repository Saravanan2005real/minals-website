'use client';

import React from 'react';
import './our-story.css';
import '../dealers/dealers.css'; /* Re-using footer and other common styles */

export default function OurStoryPage() {
  return (
    <main className="our-story-page">
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
            <li><a href="/our-story" className="active-dealer">Our Story</a></li>
            <li><a href="#">Products <i className="fas fa-chevron-down" style={{ fontSize: '10px' }}></i></a></li>
            <li><a href="/dealers">Dealers</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </nav>
        <div className="header-btns">
          <a href="#" className="btn-enquire">Enquire Now <i className="fas fa-arrow-right"></i></a>
          <a href="#" className="btn-whatsapp"><i className="fab fa-whatsapp"></i> Quick Enquiry via WhatsApp</a>
        </div>
      </header>

      {/* Hero Section (from Image 1) */}
      <section className="story-hero">
        <div className="story-hero-left">
          <h1>Our Story</h1>
          <p className="subtitle">A journey of trust, quality and commitment since 1962.</p>
          <p>
            What began in 1962 as a small trading business has today grown into a trusted name in households and industries across India.
          </p>
          <a href="#journey" className="btn-journey">Our Journey <i className="fas fa-arrow-right"></i></a>
        </div>
        <div className="story-hero-middle">
          <img src="/vintage.png" alt="Ramaiah Enterprises 1962" />
        </div>
        <div className="story-hero-right">
          <img src="/60 years.png" alt="60+ Years of Trust" />
          <p>Six decades of delivering purity, reliability and excellence.</p>
        </div>
      </section>

      {/* Legacy Section (from Image 1) */}
      <section className="legacy-section">
        <div className="legacy-title">
          <h2>Our Legacy. Your Trust.</h2>
        </div>
        <div className="legacy-grid">
          <div className="legacy-item">
            <i className="fas fa-handshake"></i>
            <div className="legacy-text">
              <h4>Trust</h4>
              <p>Built on honesty, transparency and strong relationships.</p>
            </div>
          </div>
          <div className="legacy-item">
            <i className="fas fa-shield-alt"></i>
            <div className="legacy-text">
              <h4>Quality</h4>
              <p>Every product meets the highest standards of purity and safety.</p>
            </div>
          </div>
          <div className="legacy-item">
            <i className="fas fa-award"></i>
            <div className="legacy-text">
              <h4>Pioneers</h4>
              <p>Pioneers in cleaning and food solutions since 1962.</p>
            </div>
          </div>
          <div className="legacy-item">
            <i className="fas fa-users"></i>
            <div className="legacy-text">
              <h4>Commitment</h4>
              <p>Committed to improving lives with every product we deliver.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Journey Section (from Image 2) */}
      <section id="journey" className="journey-section">
        <div className="legacy-title">
          <h2>Our Journey</h2>
        </div>
        <div className="journey-container">
          
          <div className="journey-timeline">
            
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="timeline-content">
                <h3>1962: Our Inauguration</h3>
                <p>Founded with effort and dedication by Mr. Ramaiah. Inaugurated by Former President Thiru. R. Venkatraman, with a successful start by Public Works & Revenue Minister Thiru. Ramaiah.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="timeline-content">
                <h3>Good Response & Expansion</h3>
                <p>Manufactured home-based products. Good response from Tamilnadu, Andhra, Karnataka, Kerala, and beyond overseas states (countries).</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-flask"></i>
              </div>
              <div className="timeline-content">
                <h3>Newly Introduced: White Phenyl</h3>
                <p>Our innovative White Phenyl product was introduced for the first time, leading house cleaning efforts.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <div className="timeline-content">
                <h3>G.R. Ravindran Takes the Reins</h3>
                <p>Thiru. G.R. Ravindran took over the organization after Thiru. Ramaiah expired.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <span>2012</span>
              </div>
              <div className="timeline-content">
                <h3>Golden Jubilee & Beyond</h3>
                <p>Celebrating 50 years of excellence. Honoring our winners and our continued journey.</p>
              </div>
            </div>

          </div>

          <div className="journey-photos">
            <div className="photos-row">
              <div className="photo-frame small">
                <img src="/vintage.png" alt="Founders 1962" />
                <div className="photo-caption">
                  <strong>1962</strong>
                  The Founders and Early Pioneers
                </div>
              </div>
              <div className="photo-frame small">
                <img src="/vintage.png" alt="Founders 1962-3" />
                <div className="photo-caption">
                  <strong>1962-3</strong>
                  The Founders and Early Pioneers
                </div>
              </div>
              <div className="photo-frame small">
                <img src="/vintage.png" alt="Founders 1962-4" />
                <div className="photo-caption">
                  <strong>1962-4</strong>
                  The Founders and Early Pioneers
                </div>
              </div>
            </div>
            
            <div className="photo-frame large">
              <img src="/vintage.png" alt="Golden Jubilee" />
              <div className="photo-caption">
                <strong>50 Golden Jubilee</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Promise Banner (from Image 1) */}
      <div className="promise-banner">
        <h3>From one family's promise to a nation's trust.</h3>
        <p>And the journey continues...</p>
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

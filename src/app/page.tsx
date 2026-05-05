'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal, .category-card, section').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
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
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Products <i className="fas fa-chevron-down" style={{ fontSize: '10px' }}></i></a></li>
            <li><a href="#">Dealers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <div className="header-btns">
          <a href="#" className="btn-enquire">Enquire Now <i className="fas fa-arrow-right"></i></a>
          <a href="#" className="btn-whatsapp"><i className="fab fa-whatsapp"></i> Quick Enquiry via WhatsApp</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>A Legacy of Purity. <span>A Future of Promise.</span></h2>
          <p>From our family to yours, delivering quality and care since 1962.</p>
          <div className="hero-btns">
            <a href="#" className="btn-explore">Explore Products <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="badge-60">
            <img src="/60 years.png" alt="60 Years of Trust" />
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero.png" alt="Minals Products" className="hero-products-img" />
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon"><i className="fas fa-shield"></i></div>
            <div className="feature-text">
              <h4>QUALITY YOU CAN TRUST</h4>
              <p>Every product meets the highest quality standards.</p>
            </div>
          </div>
          <div className="feature-item divider">
            <div className="feature-icon"><i className="fas fa-handshake"></i></div>
            <div className="feature-text">
              <h4>60+ YEARS OF LEGACY</h4>
              <p>Built on trust, integrity and hard work since 1962.</p>
            </div>
          </div>
          <div className="feature-item divider">
            <div className="feature-icon"><i className="fas fa-users"></i></div>
            <div className="feature-text">
              <h4>HAPPY CUSTOMERS</h4>
              <p>Serving millions of families across generations.</p>
            </div>
          </div>
          <div className="feature-item divider">
            <div className="feature-icon"><i className="fas fa-location-dot"></i></div>
            <div className="feature-text">
              <h4>WIDE DISTRIBUTION</h4>
              <p>Strong network across South India ensuring easy availability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="category-grid">
        <div className="category-card card-food">
          <div className="category-info">
            <h3>Food Products</h3>
            <p>Natural ingredients,<br />made with care.</p>
            <a href="#" className="view-link">View Products <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="category-img">
            <img src="/food.png" alt="Food Products" />
          </div>
        </div>
        <div className="category-card card-cleaning">
          <div className="category-info">
            <h3>Cleaning Products</h3>
            <p>Hygienic solutions for<br />a healthier tomorrow.</p>
            <a href="#" className="view-link">View Products <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="category-img">
            <img src="/cleaning.png" alt="Cleaning Products" />
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="trust-image" style={{ backgroundImage: "url('/vintage.png')" }}></div>
        <div className="trust-content">
          <h2>Rooted in Values. Driven by Trust.</h2>
          <p>Serving generations with quality and care since 1962.</p>
          <div className="trust-stats">
            <div className="stat-item">
              <div className="stat-icon"><i className="fas fa-check-circle"></i></div>
              <h4>TRUST</h4>
              <p>Built on honesty<br />and transparency</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><i className="fas fa-star"></i></div>
              <h4>QUALITY</h4>
              <p>Quality products for<br />your home & business</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><i className="fas fa-award"></i></div>
              <h4>PIONEERS</h4>
              <p>Pioneers in cleaning<br />& food solutions</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Minals (Ramaiah Enterprises). All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms & Conditions</a>
        </div>
      </footer>
    </main>
  );
}

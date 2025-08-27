'use client';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1 className="entry-title">Contact</h1>
          <p className="entry-subtitle">Professional Pond Services in Utah</p>
        </div>
      </header>

      <div className="page-content">
        <div className="container">
          {/* Contact Information Section */}
          <div className="contact-section">
            <div className="contact-grid">
              {/* Contact Details */}
              <div className="contact-details">
                <div className="contact-card">
                  <h3>Contact Information</h3>
                  
                  <div className="info-group">
                    <h4>We are available:</h4>
                    <p>Monday thru Saturday</p>
                    <p>10:00 am. until 6:00 pm.</p>
                    <p className="closed">Closed Sunday</p>
                  </div>

                  <div className="info-group">
                    <h4>We are located:</h4>
                    <a href="https://maps.app.goo.gl/RjUYzSwfXJTqpxFH6" target="_blank" rel="noopener" className="address-link">
                      <strong>5911 S 1300 E</strong><br />
                      <strong>Salt Lake City, Utah, 84121</strong>
                    </a>
                  </div>

                  <div className="info-group">
                    <h4>Please call or email us:</h4>
                    <div className="contact-links">
                      <a href="tel:8015908516" className="phone-link">
                        <i className="fas fa-phone"></i>
                        801-590-8516
                      </a>
                      <a href="mailto:contact@utahwatergardens.com" className="email-link">
                        <i className="fas fa-envelope"></i>
                        contact@utahwatergardens.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Showroom Information */}
              <div className="showroom-info">
                <div className="showroom-card">
                  <h3>Visit Our Showroom</h3>
                  <p>
                    Come stop in and see our showroom of plants and fish for your pond as well as other supplies 
                    to keep your pond fresh and healthy all year long:
                  </p>
                  
                  <div className="schedule-section">
                    <h4>Are you needing to schedule a pond service?</h4>
                    <p>Click below to schedule:</p>
                    
                    <Link href="/schedule" className="schedule-button">
                      <i className="fas fa-calendar"></i>
                      Schedule A Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <div className="map-card">
              <h3>Find Us</h3>
              <div className="map-container">
                <iframe 
                  src="https://maps.google.com/maps?q=Utah%20Water%20Gardens%2C%205911%20S%201300%20E%2C%20Salt%20Lake%20City%2C%20UT%2084121&t=m&z=15&output=embed&iwloc=near"
                  title="Utah Water Gardens, 5911 S 1300 E, Salt Lake City, UT 84121"
                  aria-label="Utah Water Gardens, 5911 S 1300 E, Salt Lake City, UT 84121"
                  className="google-map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="call-to-action">
            <div className="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Contact us today to discuss your pond needs and get a free consultation.</p>
              <div className="cta-buttons">
                <Link href="tel:8015908516" className="cta-button primary">
                  <i className="fas fa-phone"></i>
                  Call Now
                </Link>
                <Link href="/schedule" className="cta-button secondary">
                  <i className="fas fa-calendar"></i>
                  Schedule Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

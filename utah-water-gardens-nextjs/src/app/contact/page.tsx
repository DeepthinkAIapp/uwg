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

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background: #fff;
        }

        .page-header {
          background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%);
          color: white;
          padding: 80px 0 60px;
          text-align: center;
        }

        .entry-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0 0 15px 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .entry-subtitle {
          font-size: 1.2rem;
          margin: 0;
          opacity: 0.9;
        }

        .page-content {
          padding: 60px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .contact-section {
          margin-bottom: 60px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .contact-card, .showroom-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .contact-card:hover, .showroom-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          border-color: #d32f2f;
        }

        .contact-card h3, .showroom-card h3 {
          color: #d32f2f;
          font-size: 1.8rem;
          margin: 0 0 30px 0;
          font-weight: 600;
          text-align: center;
        }

        .info-group {
          margin-bottom: 30px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 15px;
          border-left: 4px solid #d32f2f;
        }

        .info-group h4 {
          color: #333;
          font-size: 1.2rem;
          margin: 0 0 15px 0;
          font-weight: 600;
        }

        .info-group p {
          margin: 5px 0;
          color: #666;
          font-size: 1.1rem;
        }

        .closed {
          color: #d32f2f !important;
          font-weight: 600;
        }

        .address-link {
          color: #d32f2f;
          text-decoration: none;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }

        .address-link:hover {
          color: #b71c1c;
          text-decoration: underline;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .phone-link, .email-link {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #d32f2f;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 10px 15px;
          background: white;
          border-radius: 10px;
          border: 2px solid transparent;
        }

        .phone-link:hover, .email-link:hover {
          color: #b71c1c;
          border-color: #d32f2f;
          transform: translateX(5px);
        }

        .phone-link i, .email-link i {
          font-size: 1.2rem;
        }

        .showroom-card p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 1.1rem;
        }

        .schedule-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 25px;
          border-radius: 15px;
          text-align: center;
        }

        .schedule-section h4 {
          color: #333;
          margin: 0 0 10px 0;
          font-size: 1.3rem;
        }

        .schedule-section p {
          margin: 0 0 20px 0;
          color: #666;
        }

        .schedule-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          background: #d32f2f;
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          border: 2px solid #d32f2f;
        }

        .schedule-button:hover {
          background: #b71c1c;
          border-color: #b71c1c;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(211, 47, 47, 0.3);
        }

        .map-section {
          margin-bottom: 60px;
        }

        .map-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .map-card h3 {
          color: #d32f2f;
          font-size: 1.8rem;
          margin: 0 0 30px 0;
          font-weight: 600;
          text-align: center;
        }

        .map-container {
          height: 400px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .google-map {
          width: 100%;
          height: 100%;
          border: none;
        }

        .call-to-action {
          background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%);
          color: white;
          padding: 60px 0;
          border-radius: 20px;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin: 0 0 20px 0;
          font-weight: 700;
        }

        .cta-content p {
          font-size: 1.2rem;
          margin: 0 0 40px 0;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .cta-button.primary {
          background: white;
          color: #d32f2f;
        }

        .cta-button.primary:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .cta-button.secondary {
          background: transparent;
          color: white;
          border-color: white;
        }

        .cta-button.secondary:hover {
          background: white;
          color: #d32f2f;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .entry-title {
            font-size: 2.5rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .contact-card, .showroom-card {
            padding: 30px 20px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

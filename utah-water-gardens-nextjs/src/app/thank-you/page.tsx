'use client';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="entry-title">Thank You!</h1>
          <p className="entry-subtitle">We&apos;ve Received Your Message</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="page-content">
        <div className="container">
          <div className="thank-you-card">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            
            <h2>Message Received Successfully</h2>
            <p>
              Thank you for contacting Utah Water Gardens! We&apos;ve received your message and will 
              get back to you within 24 hours. Our team is excited to help you with your water 
              garden project.
            </p>

            <div className="next-steps">
              <h3>What Happens Next?</h3>
              <div className="steps-grid">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <h4>Review Your Request</h4>
                  <p>Our team will carefully review your message and gather any additional information needed.</p>
                </div>
                <div className="step-item">
                  <div className="step-number">2</div>
                  <h4>Contact You</h4>
                  <p>We&apos;ll reach out within 24 hours to discuss your project and answer any questions.</p>
                </div>
                <div className="step-item">
                  <div className="step-number">3</div>
                  <h4>Schedule Consultation</h4>
                  <p>If needed, we&apos;ll schedule a consultation to assess your site and provide detailed recommendations.</p>
                </div>
                <div className="step-item">
                  <div className="step-number">4</div>
                  <h4>Get Started</h4>
                  <p>Once we have all the details, we&apos;ll provide a comprehensive quote and timeline for your project.</p>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <h3>Need Immediate Assistance?</h3>
              <p>If you need urgent help or have an emergency, please call us directly:</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Call Us</h4>
                    <p>801-590-8516</p>
                  </div>
                </div>
                <div className="contact-method">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email Us</h4>
                    <p>contact@utahwatergardens.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Visit Us</h4>
                    <p>5911 S 1300 E, Salt Lake City, Utah, 84121</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="helpful-links">
              <h3>While You Wait</h3>
              <p>Explore our resources to learn more about water gardens and our services:</p>
              
              <div className="links-grid">
                <Link href="/pond-gallery" className="resource-link">
                  <i className="fas fa-images"></i>
                  <span>View Our Gallery</span>
                </Link>
                <Link href="/pond-services" className="resource-link">
                  <i className="fas fa-cog"></i>
                  <span>Our Services</span>
                </Link>
                <Link href="/plants-fish" className="resource-link">
                  <i className="fas fa-fish"></i>
                  <span>Plants & Fish</span>
                </Link>
                <Link href="/resources" className="resource-link">
                  <i className="fas fa-book"></i>
                  <span>Resources</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="call-to-action">
            <div className="container">
              <div className="cta-content">
                <h2>Ready to Get Started?</h2>
                <p>Don&apos;t wait for our response - explore our services and start planning your dream water garden today.</p>
                <div className="cta-buttons">
                  <Link href="/contact" className="cta-button primary">
                    <i className="fas fa-phone"></i>
                    Call Now
                  </Link>
                  <Link href="/schedule" className="cta-button secondary">
                    <i className="fas fa-calendar"></i>
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

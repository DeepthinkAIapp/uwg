import Link from 'next/link';
import Image from 'next/image';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="entry-title">Thank You!</h1>
          <p className="entry-subtitle">We've Received Your Message</p>
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
              Thank you for contacting Utah Water Gardens! We've received your message and will 
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
                  <p>We'll reach out within 24 hours to discuss your project and answer any questions.</p>
                </div>
                <div className="step-item">
                  <div className="step-number">3</div>
                  <h4>Schedule Consultation</h4>
                  <p>If needed, we'll schedule a consultation to assess your site and provide detailed recommendations.</p>
                </div>
                <div className="step-item">
                  <div className="step-number">4</div>
                  <h4>Get Started</h4>
                  <p>Once we have all the details, we'll provide a comprehensive quote and timeline for your project.</p>
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
                <p>Don't wait for our response - explore our services and start planning your dream water garden today.</p>
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

      <style jsx>{`
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

        .thank-you-card {
          background: white;
          border-radius: 20px;
          padding: 60px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
          margin-bottom: 60px;
        }

        .success-icon {
          font-size: 4rem;
          color: #4caf50;
          margin-bottom: 30px;
        }

        .thank-you-card h2 {
          font-size: 2.5rem;
          color: #333;
          margin: 0 0 20px 0;
          font-weight: 700;
        }

        .thank-you-card p {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
          margin: 0 0 40px 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .next-steps {
          margin: 60px 0;
        }

        .next-steps h3 {
          font-size: 2rem;
          color: #333;
          margin: 0 0 40px 0;
          font-weight: 600;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .step-item {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .step-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: #d32f2f;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 20px;
        }

        .step-item h4 {
          color: #333;
          font-size: 1.3rem;
          margin: 0 0 15px 0;
          font-weight: 600;
        }

        .step-item p {
          color: #666;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
        }

        .contact-info {
          margin: 60px 0;
          padding: 40px;
          background: #f8f9fa;
          border-radius: 15px;
        }

        .contact-info h3 {
          font-size: 2rem;
          color: #333;
          margin: 0 0 20px 0;
          font-weight: 600;
          text-align: center;
        }

        .contact-info p {
          text-align: center;
          font-size: 1.1rem;
          color: #666;
          margin: 0 0 30px 0;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .contact-method i {
          font-size: 2rem;
          color: #d32f2f;
        }

        .contact-method h4 {
          color: #333;
          margin: 0 0 5px 0;
          font-weight: 600;
        }

        .contact-method p {
          color: #666;
          margin: 0;
          font-size: 1rem;
        }

        .helpful-links {
          margin: 60px 0 0 0;
        }

        .helpful-links h3 {
          font-size: 2rem;
          color: #333;
          margin: 0 0 20px 0;
          font-weight: 600;
          text-align: center;
        }

        .helpful-links p {
          text-align: center;
          font-size: 1.1rem;
          color: #666;
          margin: 0 0 30px 0;
        }

        .links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .resource-link {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: #d32f2f;
          color: white;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .resource-link:hover {
          background: #b71c1c;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(211, 47, 47, 0.3);
        }

        .resource-link i {
          font-size: 1.5rem;
        }

        .call-to-action {
          background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%);
          color: white;
          padding: 80px 0;
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

          .thank-you-card {
            padding: 40px 30px;
          }

          .steps-grid {
            grid-template-columns: 1fr;
          }

          .contact-methods {
            grid-template-columns: 1fr;
          }

          .links-grid {
            grid-template-columns: 1fr;
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

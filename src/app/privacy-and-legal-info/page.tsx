'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyAndLegalInfoPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="entry-title">Privacy & Legal Information</h1>
          <p className="entry-subtitle">Your Privacy and Legal Rights</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="page-content">
        <div className="container">
          {/* Privacy Policy */}
          <div className="content-card">
            <h2>Privacy Policy</h2>
            <p className="last-updated">Last updated: January 2024</p>
            
            <div className="policy-section">
              <h3>Information We Collect</h3>
              <p>
                Utah Water Gardens collects information you provide directly to us, such as when you:
              </p>
              <ul>
                <li>Contact us through our website forms</li>
                <li>Request quotes or consultations</li>
                <li>Schedule services</li>
                <li>Sign up for our newsletter</li>
                <li>Visit our showroom</li>
              </ul>
              <p>
                This information may include your name, email address, phone number, address, 
                and details about your project requirements.
              </p>
            </div>

            <div className="policy-section">
              <h3>How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Communicate with you about your projects</li>
                <li>Send you relevant information and updates</li>
                <li>Process payments and transactions</li>
                <li>Comply with legal obligations</li>
                <li>Protect our rights and property</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3>Information Sharing</h3>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third 
                parties without your consent, except as described in this policy. We may share 
                your information with:
              </p>
              <ul>
                <li>Service providers who assist us in operating our business</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3>Data Security</h3>
              <p>
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no 
                method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="policy-section">
              <h3>Your Rights</h3>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="content-card">
            <h2>Terms of Service</h2>
            <p className="last-updated">Last updated: January 2024</p>

            <div className="policy-section">
              <h3>Acceptance of Terms</h3>
              <p>
                By accessing and using Utah Water Gardens' services, you accept and agree to be 
                bound by these terms and conditions. If you do not agree to these terms, please 
                do not use our services.
              </p>
            </div>

            <div className="policy-section">
              <h3>Service Description</h3>
              <p>
                Utah Water Gardens provides pond construction, maintenance, cleaning, and related 
                water feature services. We reserve the right to modify or discontinue services 
                at any time.
              </p>
            </div>

            <div className="policy-section">
              <h3>Payment Terms</h3>
              <ul>
                <li>Payment is due upon completion of services unless otherwise agreed</li>
                <li>We accept cash, check, and major credit cards</li>
                <li>Payment plans are available for larger projects</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are subject to change without notice</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3>Cancellation Policy</h3>
              <p>
                We require 24 hours notice for cancellation of scheduled appointments. 
                Cancellations made with less than 24 hours notice may incur a cancellation fee.
              </p>
            </div>

            <div className="policy-section">
              <h3>Warranty & Guarantee</h3>
              <p>
                We stand behind our work with a comprehensive warranty. Specific warranty terms 
                will be provided in writing for each project. This warranty covers workmanship 
                and materials as specified in your service agreement.
              </p>
            </div>

            <div className="policy-section">
              <h3>Limitation of Liability</h3>
              <p>
                Utah Water Gardens' liability is limited to the amount paid for services. We are 
                not liable for indirect, incidental, or consequential damages.
              </p>
            </div>
          </div>

          {/* Legal Disclaimers */}
          <div className="content-card">
            <h2>Legal Disclaimers</h2>

            <div className="policy-section">
              <h3>Website Information</h3>
              <p>
                The information on this website is provided "as is" without warranties of any 
                kind. While we strive to keep information accurate and up-to-date, we make no 
                representations about the accuracy, completeness, or reliability of any information.
              </p>
            </div>

            <div className="policy-section">
              <h3>External Links</h3>
              <p>
                Our website may contain links to external websites. We are not responsible for 
                the content or privacy practices of these external sites.
              </p>
            </div>

            <div className="policy-section">
              <h3>Intellectual Property</h3>
              <p>
                All content on this website, including text, images, and design, is the property 
                of Utah Water Gardens and is protected by copyright laws.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="content-card">
            <h2>Contact Us</h2>
            <p>
              If you have questions about our privacy policy, terms of service, or legal 
              information, please contact us:
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>801-590-8516</p>
                </div>
              </div>
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>contact@utahwatergardens.com</p>
                </div>
              </div>
              <div className="contact-method">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Address</h4>
                  <p>5911 S 1300 E<br />Salt Lake City, Utah 84121</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="call-to-action">
            <div className="container">
              <div className="cta-content">
                <h2>Questions About Our Policies?</h2>
                <p>We're here to help clarify any questions you may have about our privacy policy, terms of service, or legal information.</p>
                <div className="cta-buttons">
                  <Link href="/contact" className="cta-button primary">
                    <i className="fas fa-phone"></i>
                    Contact Us
                  </Link>
                  <Link href="/company-resources" className="cta-button secondary">
                    <i className="fas fa-info-circle"></i>
                    Company Info
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

        .content-card {
          background: white;
          border-radius: 20px;
          padding: 60px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          margin-bottom: 60px;
        }

        .content-card h2 {
          font-size: 2.5rem;
          color: #333;
          margin: 0 0 20px 0;
          font-weight: 700;
        }

        .last-updated {
          color: #666;
          font-style: italic;
          margin: 0 0 30px 0;
        }

        .policy-section {
          margin-bottom: 40px;
        }

        .policy-section:last-child {
          margin-bottom: 0;
        }

        .policy-section h3 {
          color: #d32f2f;
          font-size: 1.5rem;
          margin: 0 0 15px 0;
          font-weight: 600;
        }

        .policy-section p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 15px 0;
        }

        .policy-section ul {
          color: #666;
          line-height: 1.6;
          margin: 0 0 15px 0;
          padding-left: 20px;
        }

        .policy-section li {
          margin-bottom: 8px;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          background: #f8f9fa;
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

          .content-card {
            padding: 40px 30px;
          }

          .contact-methods {
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

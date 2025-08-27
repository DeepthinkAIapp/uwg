'use client';
import Link from 'next/link';

export default function SchedulePage() {
  return (
    <div className="schedule-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1 className="entry-title">Schedule a Pond Service</h1>
          <p className="entry-subtitle">Professional Pond Services in Utah</p>
        </div>
      </header>

      <div className="page-content">
        <div className="container">
          {/* Introduction Section */}
          <div className="intro-section">
            <p>At Utah Water Gardens, we offer a wide range of pond services to help keep your backyard oasis looking its best. Whether you need a routine pond cleaning, maintenance services, repair work, delivery of supplies, or a consultation with one of our experienced technicians, we&apos;re here to help.</p>
            <p>Scheduling a pond service is easy &mdash; simply contact us by phone, email, or through our website to request an appointment. Our friendly and knowledgeable team will work with you to schedule a service that fits your schedule and meets your specific needs.</p>
            <p>Our pond cleaning services include removing debris, vacuuming the bottom of the pond, and testing the water to ensure that it is balanced and free of harmful pollutants. Our maintenance services include pump and filter installation and maintenance, leak repair, and general upkeep to keep your pond in top condition.</p>
            <p>If your pond is in need of repair work, our experienced technicians can diagnose the problem and provide a solution that fits your budget and timeline. We also offer delivery of supplies, including pond liners, pumps, and aquatic plants, to make it easy for you to maintain your pond on your own.</p>
            <p>And if you&apos;re not sure what services you need, our technicians are happy to provide a consultation to assess the condition of your pond and make recommendations for the best course of action.</p>
          </div>

          {/* Scheduling Form */}
          <div className="form-section">
            <div className="form-card">
              <h2>Schedule Your Service</h2>
              <form className="schedule-form" action="/thank-you" method="post">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    What is your name? <span className="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address" className="form-label">
                    Address?
                  </label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    className="form-input" 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number? <span className="required">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="form-input" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address?
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Nature of our visit? <span className="required">*</span>
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="service_type" value="Consultation" required />
                      <span className="radio-text">Consultation</span>
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="service_type" value="Pond Cleaning" required />
                      <span className="radio-text">Pond Cleaning</span>
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="service_type" value="Pond Construction" required />
                      <span className="radio-text">Pond Construction</span>
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="service_type" value="Pond Maintenance" required />
                      <span className="radio-text">Pond Maintenance</span>
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="service_type" value="Repair" required />
                      <span className="radio-text">Repair</span>
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="service_type" value="Product Delivery" required />
                      <span className="radio-text">Product Delivery</span>
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="service_type" value="Pond and Lake Dredging" required />
                      <span className="radio-text">Pond and Lake Dredging</span>
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="service_type" value="Vac Services" required />
                      <span className="radio-text">Vac Services</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes" className="form-label">
                    Any special notes or considerations you&apos;d like us to know?
                  </label>
                  <textarea 
                    id="notes" 
                    name="notes" 
                    rows={5} 
                    className="form-textarea"
                  ></textarea>
                </div>

                <div className="form-submit">
                  <button type="submit" className="submit-button">
                    <i className="fas fa-paper-plane"></i>
                    Submit
                  </button>
                </div>

                <div className="form-disclaimer">
                  <p className="disclaimer-text">
                    <span className="highlighted-color color-red">
                      <code className="code">
                        By providing a telephone number and submitting the form you are consenting to be contacted by SMS text message from Utah Water Gardens.
                      </code>
                    </span>
                    <span className="highlighted-color color-red">
                      <code className="code">
                        &nbsp;Message frequency may vary.&nbsp;Message & data rates may apply.&nbsp;Reply STOP to opt-out of further messaging.&nbsp;Reply HELP for more information.&nbsp;See our Privacy Policy <Link href="/privacy-and-legal-info">here.</Link>
                      </code>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="call-to-action">
            <div className="cta-content">
              <h2>Need Immediate Assistance?</h2>
              <p>Don&apos;t wait to get your pond back in shape. Contact us directly for urgent services.</p>
              <div className="cta-buttons">
                <Link href="tel:8015908516" className="cta-button primary">
                  <i className="fas fa-phone"></i>
                  Call Now
                </Link>
                <Link href="/contact" className="cta-button secondary">
                  <i className="fas fa-envelope"></i>
                  Email Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .schedule-page {
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

        .intro-section {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          margin-bottom: 40px;
        }

        .intro-section p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          font-size: 1.1rem;
        }

        .intro-section p:last-child {
          margin-bottom: 0;
        }

        .form-section {
          margin-bottom: 60px;
        }

        .form-card {
          background: white;
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          max-width: 800px;
          margin: 0 auto;
        }

        .form-card h2 {
          color: #d32f2f;
          font-size: 2rem;
          margin: 0 0 40px 0;
          font-weight: 600;
          text-align: center;
        }

        .schedule-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          color: #333;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .required {
          color: #d32f2f;
        }

        .form-input, .form-textarea {
          padding: 15px;
          border: 2px solid #e9ecef;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #f8f9fa;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #d32f2f;
          background: white;
          box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .radio-group {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 10px;
        }

        .radio-label {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .radio-label:hover {
          background: #e9ecef;
          border-color: #d32f2f;
        }

        .radio-label input[type="radio"] {
          width: 18px;
          height: 18px;
          accent-color: #d32f2f;
        }

        .radio-text {
          font-weight: 500;
          color: #333;
        }

        .form-submit {
          text-align: center;
          margin-top: 20px;
        }

        .submit-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 40px;
          background: #d32f2f;
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid #d32f2f;
        }

        .submit-button:hover {
          background: #b71c1c;
          border-color: #b71c1c;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(211, 47, 47, 0.3);
        }

        .form-disclaimer {
          margin-top: 30px;
          padding: 20px;
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 10px;
        }

        .disclaimer-text {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .highlighted-color.color-red {
          color: #d32f2f;
        }

        .code {
          font-family: monospace;
          background: rgba(211, 47, 47, 0.1);
          padding: 2px 4px;
          border-radius: 4px;
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

          .form-card {
            padding: 30px 20px;
          }

          .radio-group {
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

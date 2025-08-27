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

      
    </div>
  );
}

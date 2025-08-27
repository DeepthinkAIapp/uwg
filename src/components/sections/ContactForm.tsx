'use client';

interface ContactFormProps {
  title?: string;
  description?: string;
}

export function ContactForm({ 
  title = "Get Your Free Quote",
  description = "Fill out the form below and we'll get back to you within 24 hours with a personalized quote."
}: ContactFormProps) {
  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="contact-form-wrapper">
          <div className="contact-form-content">
            <h2 className="contact-form-title">{title}</h2>
            <p className="contact-form-description">{description}</p>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select id="service" name="service" className="form-select">
                  <option value="">Select a service</option>
                  <option value="pond-cleanings">Pond Cleanings</option>
                  <option value="pond-maintenance">Pond Maintenance</option>
                  <option value="pond-construction">Pond Construction</option>
                  <option value="pond-repair">Pond Repair</option>
                  <option value="lake-dredging">Lake Dredging</option>
                  <option value="plant-delivery">Plant Delivery</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-textarea"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button type="submit" className="form-submit">
                <i className="fas fa-paper-plane"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

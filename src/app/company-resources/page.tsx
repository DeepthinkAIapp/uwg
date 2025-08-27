'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function CompanyResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="entry-title">Company Resources</h1>
          <p className="entry-subtitle">Everything You Need to Know About Utah Water Gardens</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="page-content">
        <div className="container">
          {/* Company Overview */}
          <div className="content-card">
            <div className="card-header">
              <h2>About Utah Water Gardens</h2>
              <p>Your trusted partner for beautiful water features throughout Utah</p>
            </div>
            
            <div className="company-info">
              <div className="info-grid">
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h3>Location</h3>
                  <p>5911 S 1300 E<br />Salt Lake City, Utah 84121</p>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <h3>Phone</h3>
                  <p>801-590-8516</p>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h3>Email</h3>
                  <p>contact@utahwatergardens.com</p>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <h3>Hours</h3>
                  <p>Mon-Fri: 8AM-6PM<br />Sat: 9AM-5PM<br />Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="content-card">
            <h2>Our Services</h2>
            <div className="services-overview">
              <div className="service-category">
                <h3>Pond Services</h3>
                <ul>
                  <li>Pond Construction & Design</li>
                  <li>Pond Maintenance & Cleaning</li>
                  <li>Pond Repair & Rebuild</li>
                  <li>Pond Dredging</li>
                  <li>Lake Dredging</li>
                  <li>Pond Consultations</li>
                  <li>Pond Filters & Pumps</li>
                  <li>Pond Supplies</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>Plants & Fish</h3>
                <ul>
                  <li>Aquatic Plants</li>
                  <li>Koi & Pond Fish</li>
                  <li>Plant Delivery</li>
                  <li>Fish Health Care</li>
                  <li>Seasonal Plant Care</li>
                </ul>
              </div>
              <div className="service-category">
                <h3>Additional Services</h3>
                <ul>
                  <li>Water Feature Design</li>
                  <li>Landscape Integration</li>
                  <li>Winterization Services</li>
                  <li>Emergency Repairs</li>
                  <li>Educational Workshops</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Company Policies */}
          <div className="content-card">
            <h2>Company Policies</h2>
            <div className="policies-grid">
              <div className="policy-item">
                <h3>Service Guarantee</h3>
                <p>We stand behind all our work with a comprehensive service guarantee. If you're not completely satisfied with our work, we'll make it right.</p>
              </div>
              <div className="policy-item">
                <h3>Insurance & Licensing</h3>
                <p>Utah Water Gardens is fully licensed and insured. We carry comprehensive liability insurance to protect our clients and their property.</p>
              </div>
              <div className="policy-item">
                <h3>Payment Terms</h3>
                <p>We offer flexible payment options including payment plans for larger projects. We accept cash, check, and major credit cards.</p>
              </div>
              <div className="policy-item">
                <h3>Scheduling</h3>
                <p>We schedule appointments based on project scope and urgency. Emergency services are available for critical situations.</p>
              </div>
            </div>
          </div>

          {/* Certifications & Awards */}
          <div className="content-card">
            <h2>Certifications & Recognition</h2>
            <div className="certifications">
              <div className="cert-item">
                <div className="cert-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3>Licensed Contractor</h3>
                <p>Fully licensed by the State of Utah for all pond and water feature construction</p>
              </div>
              <div className="cert-item">
                <div className="cert-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Insured & Bonded</h3>
                <p>Comprehensive insurance coverage for your peace of mind</p>
              </div>
              <div className="cert-item">
                <div className="cert-icon">
                  <i className="fas fa-award"></i>
                </div>
                <h3>Industry Recognition</h3>
                <p>Recognized for excellence in water feature design and construction</p>
              </div>
            </div>
          </div>

          {/* Team Information */}
          <div className="content-card">
            <h2>Our Team</h2>
            <div className="team-info">
              <p>
                Our team consists of experienced professionals passionate about creating beautiful 
                water features. From designers to technicians, every team member is dedicated to 
                delivering exceptional service and quality workmanship.
              </p>
              <div className="team-values">
                <h3>Our Values</h3>
                <ul>
                  <li><strong>Quality:</strong> We never compromise on the quality of our work</li>
                  <li><strong>Integrity:</strong> Honest, transparent communication with every client</li>
                  <li><strong>Expertise:</strong> Continuous education and training in the latest techniques</li>
                  <li><strong>Service:</strong> Exceptional customer service from start to finish</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Resources & Downloads */}
          <div className="content-card">
            <h2>Resources & Downloads</h2>
            <div className="resources-grid">
              <div className="resource-item">
                <div className="resource-icon">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <h3>Service Brochure</h3>
                <p>Complete overview of our services and capabilities</p>
                <Link href="/contact" className="resource-link">Request Brochure</Link>
              </div>
              <div className="resource-item">
                <div className="resource-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3>Maintenance Schedule</h3>
                <p>Seasonal maintenance checklist for your water feature</p>
                <Link href="/contact" className="resource-link">Get Schedule</Link>
              </div>
              <div className="resource-item">
                <div className="resource-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Care Guides</h3>
                <p>Comprehensive guides for plant and fish care</p>
                <Link href="/resources" className="resource-link">View Guides</Link>
              </div>
              <div className="resource-item">
                <div className="resource-icon">
                  <i className="fas fa-calculator"></i>
                </div>
                <h3>Quote Calculator</h3>
                <p>Get an estimate for your project</p>
                <Link href="/contact" className="resource-link">Get Quote</Link>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="content-card">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-section">
              <div className="faq-item">
                <h3>What areas do you serve?</h3>
                <p>We serve the entire Salt Lake Valley and surrounding areas including Utah County, Davis County, and Weber County.</p>
              </div>
              <div className="faq-item">
                <h3>Do you offer free consultations?</h3>
                <p>Yes, we offer free initial consultations to discuss your project and provide recommendations.</p>
              </div>
              <div className="faq-item">
                <h3>How long does a typical project take?</h3>
                <p>Project timelines vary based on scope and complexity. Small ponds may take 1-2 weeks, while larger features can take 4-8 weeks.</p>
              </div>
              <div className="faq-item">
                <h3>Do you provide maintenance services?</h3>
                <p>Yes, we offer comprehensive maintenance services including regular cleanings, seasonal care, and emergency repairs.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="call-to-action">
            <div className="container">
              <div className="cta-content">
                <h2>Ready to Work With Us?</h2>
                <p>Contact us today to discuss your water feature project and learn how we can bring your vision to life.</p>
                <div className="cta-buttons">
                  <Link href="/contact" className="cta-button primary">
                    <i className="fas fa-phone"></i>
                    Get Started
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

        .content-card {
          background: white;
          border-radius: 20px;
          padding: 60px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          margin-bottom: 60px;
        }

        .card-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .content-card h2 {
          font-size: 2.5rem;
          color: #333;
          margin: 0 0 20px 0;
          font-weight: 700;
        }

        .card-header p {
          font-size: 1.2rem;
          color: #666;
          margin: 0;
        }

        .company-info {
          margin-top: 40px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .info-item {
          text-align: center;
          padding: 30px;
          background: #f8f9fa;
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .info-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .info-icon {
          font-size: 2.5rem;
          color: #d32f2f;
          margin-bottom: 20px;
        }

        .info-item h3 {
          color: #333;
          font-size: 1.3rem;
          margin: 0 0 15px 0;
          font-weight: 600;
        }

        .info-item p {
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        .services-overview {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .service-category h3 {
          color: #d32f2f;
          font-size: 1.5rem;
          margin: 0 0 20px 0;
          font-weight: 600;
        }

        .service-category ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-category li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          color: #666;
        }

        .service-category li:last-child {
          border-bottom: none;
        }

        .policies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .policy-item {
          padding: 30px;
          background: #f8f9fa;
          border-radius: 15px;
          border-left: 4px solid #d32f2f;
        }

        .policy-item h3 {
          color: #333;
          font-size: 1.3rem;
          margin: 0 0 15px 0;
          font-weight: 600;
        }

        .policy-item p {
          color: #666;
          margin: 0;
          line-height: 1.6;
        }

        .certifications {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .cert-item {
          text-align: center;
          padding: 40px 30px;
          background: #f8f9fa;
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .cert-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .cert-icon {
          font-size: 3rem;
          color: #d32f2f;
          margin-bottom: 20px;
        }

        .cert-item h3 {
          color: #333;
          font-size: 1.3rem;
          margin: 0 0 15px 0;
          font-weight: 600;
        }

        .cert-item p {
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        .team-info p {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
          margin: 0 0 30px 0;
        }

        .team-values h3 {
          color: #333;
          font-size: 1.5rem;
          margin: 0 0 20px 0;
          font-weight: 600;
        }

        .team-values ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .team-values li {
          padding: 10px 0;
          color: #666;
          line-height: 1.5;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .resource-item {
          text-align: center;
          padding: 40px 30px;
          background: #f8f9fa;
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .resource-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .resource-icon {
          font-size: 2.5rem;
          color: #d32f2f;
          margin-bottom: 20px;
        }

        .resource-item h3 {
          color: #333;
          font-size: 1.3rem;
          margin: 0 0 15px 0;
          font-weight: 600;
        }

        .resource-item p {
          color: #666;
          margin: 0 0 20px 0;
          line-height: 1.5;
        }

        .resource-link {
          display: inline-block;
          padding: 10px 20px;
          background: #d32f2f;
          color: white;
          text-decoration: none;
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .resource-link:hover {
          background: #b71c1c;
          transform: translateY(-2px);
        }

        .faq-section {
          display: grid;
          gap: 30px;
        }

        .faq-item {
          padding: 30px;
          background: #f8f9fa;
          border-radius: 15px;
          border-left: 4px solid #d32f2f;
        }

        .faq-item h3 {
          color: #333;
          font-size: 1.3rem;
          margin: 0 0 15px 0;
          font-weight: 600;
        }

        .faq-item p {
          color: #666;
          margin: 0;
          line-height: 1.6;
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

          .info-grid {
            grid-template-columns: 1fr;
          }

          .services-overview {
            grid-template-columns: 1fr;
          }

          .policies-grid {
            grid-template-columns: 1fr;
          }

          .certifications {
            grid-template-columns: 1fr;
          }

          .resources-grid {
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

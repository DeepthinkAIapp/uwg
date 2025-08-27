'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function ResourcesPage() {
  return (
    <div className="resources-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1 className="entry-title">Resources</h1>
          <p className="entry-subtitle">Professional Pond Services in Utah</p>
        </div>
      </header>

      <div className="page-content">
        <div className="container">
          {/* Introduction Section */}
          <div className="intro-section">
            <h2>Pond Care Resources</h2>
            <p>
              Welcome to our comprehensive collection of pond care resources. Whether you&apos;re a new pond owner 
              or an experienced enthusiast, our guides and articles will help you maintain a healthy, beautiful water garden.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="resources-grid">
            {/* Finding a Leak Resource */}
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-search"></i>
              </div>
              <div className="resource-content">
                <h3>Finding A Leak In Your Pond</h3>
                <p>
                  Learn how to systematically identify and locate leaks in your pond. This comprehensive guide 
                  covers step-by-step troubleshooting methods to help you find the source of water loss.
                </p>
                <div className="resource-features">
                  <span className="feature-tag">Step-by-step guide</span>
                  <span className="feature-tag">Troubleshooting</span>
                  <span className="feature-tag">DIY friendly</span>
                </div>
                <Link href="/resources/finding-a-leak-in-your-pond" className="resource-link">
                  Read Guide
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Pond Water Loss Resource */}
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-tint"></i>
              </div>
              <div className="resource-content">
                <h3>Causes of Water Loss in Your Pond</h3>
                <p>
                  Understand the common causes of water loss in ponds and how to prevent them. This essential 
                  resource covers everything from evaporation to structural issues.
                </p>
                <div className="resource-features">
                  <span className="feature-tag">Prevention tips</span>
                  <span className="feature-tag">Common causes</span>
                  <span className="feature-tag">Maintenance guide</span>
                </div>
                <Link href="/resources/pondwaterloss" className="resource-link">
                  Read Guide
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Coming Soon Resources */}
            <div className="resource-card coming-soon">
              <div className="resource-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="resource-content">
                <h3>Seasonal Pond Care</h3>
                <p>
                  Comprehensive seasonal maintenance guides to keep your pond healthy year-round. 
                  Coming soon with detailed monthly care instructions.
                </p>
                <div className="resource-features">
                  <span className="feature-tag">Seasonal guide</span>
                  <span className="feature-tag">Monthly tips</span>
                  <span className="feature-tag">Coming soon</span>
                </div>
                <span className="coming-soon-badge">Coming Soon</span>
              </div>
            </div>

            <div className="resource-card coming-soon">
              <div className="resource-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <div className="resource-content">
                <h3>Plant Care Guide</h3>
                <p>
                  Essential information about aquatic plants, their care requirements, and how to 
                  create a balanced ecosystem in your pond.
                </p>
                <div className="resource-features">
                  <span className="feature-tag">Plant care</span>
                  <span className="feature-tag">Ecosystem balance</span>
                  <span className="feature-tag">Coming soon</span>
                </div>
                <span className="coming-soon-badge">Coming Soon</span>
              </div>
            </div>

            <div className="resource-card coming-soon">
              <div className="resource-icon">
                <i className="fas fa-fish"></i>
              </div>
              <div className="resource-content">
                <h3>Fish Health & Care</h3>
                <p>
                  Complete guide to maintaining healthy fish in your pond, including feeding, 
                  water quality, and disease prevention.
                </p>
                <div className="resource-features">
                  <span className="feature-tag">Fish care</span>
                  <span className="feature-tag">Health tips</span>
                  <span className="feature-tag">Coming soon</span>
                </div>
                <span className="coming-soon-badge">Coming Soon</span>
              </div>
            </div>

            <div className="resource-card coming-soon">
              <div className="resource-icon">
                <i className="fas fa-tools"></i>
              </div>
              <div className="resource-content">
                <h3>Equipment Maintenance</h3>
                <p>
                  Learn how to properly maintain your pond equipment including pumps, filters, 
                  and other essential components.
                </p>
                <div className="resource-features">
                  <span className="feature-tag">Equipment care</span>
                  <span className="feature-tag">Maintenance tips</span>
                  <span className="feature-tag">Coming soon</span>
                </div>
                <span className="coming-soon-badge">Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Expert Help Section */}
          <div className="expert-help-section">
            <div className="expert-content">
              <div className="expert-icon">
                <Image
                  src="/images/utahWaterGardensLogo500x463.png"
                  alt="Utah Water Gardens logo"
                  width={75}
                  height={75}
                  className="expert-logo"
                />
              </div>
              <h2>Need Expert Help?</h2>
              <p>
                Can&apos;t find what you&apos;re looking for? Our experienced team is here to help with 
                any pond-related questions or issues you may have.
              </p>
              <div className="expert-buttons">
                <Link href="/contact" className="expert-button primary">
                  <i className="fas fa-phone"></i>
                  Contact Us
                </Link>
                <Link href="/schedule" className="expert-button secondary">
                  <i className="fas fa-calendar"></i>
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="call-to-action">
            <div className="cta-content">
              <h2>Ready to Transform Your Pond?</h2>
              <p>Contact us today to discuss your pond needs and get professional advice from our experienced team.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="cta-button primary">
                  <i className="fas fa-phone"></i>
                  Get Expert Help
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
        .resources-page {
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
          text-align: center;
          margin-bottom: 60px;
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .intro-section h2 {
          color: #d32f2f;
          font-size: 2.5rem;
          margin: 0 0 20px 0;
          font-weight: 600;
        }

        .intro-section p {
          color: #666;
          font-size: 1.2rem;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .resource-card {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 2px solid transparent;
          transition: all 0.3s ease;
          position: relative;
        }

        .resource-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          border-color: #d32f2f;
        }

        .resource-card.coming-soon {
          opacity: 0.7;
        }

        .resource-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .resource-icon i {
          font-size: 1.5rem;
          color: white;
        }

        .resource-content h3 {
          color: #333;
          font-size: 1.4rem;
          margin: 0 0 15px 0;
          font-weight: 600;
        }

        .resource-content p {
          color: #666;
          line-height: 1.6;
          margin: 0 0 20px 0;
        }

        .resource-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .feature-tag {
          background: #f8f9fa;
          color: #d32f2f;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid #e9ecef;
        }

        .resource-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #d32f2f;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .resource-link:hover {
          color: #b71c1c;
          transform: translateX(5px);
        }

        .resource-link i {
          font-size: 0.9rem;
          transition: transform 0.3s ease;
        }

        .resource-link:hover i {
          transform: translateX(3px);
        }

        .coming-soon-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #ffc107;
          color: #333;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .expert-help-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 60px;
          border-radius: 20px;
          text-align: center;
          margin-bottom: 60px;
        }

        .expert-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .expert-icon {
          margin-bottom: 20px;
        }

        .expert-logo {
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .expert-content h2 {
          color: #333;
          font-size: 2rem;
          margin: 0 0 15px 0;
          font-weight: 600;
        }

        .expert-content p {
          color: #666;
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0 0 30px 0;
        }

        .expert-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .expert-button {
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

        .expert-button.primary {
          background: #d32f2f;
          color: white;
        }

        .expert-button.primary:hover {
          background: #b71c1c;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(211, 47, 47, 0.3);
        }

        .expert-button.secondary {
          background: transparent;
          color: #d32f2f;
          border-color: #d32f2f;
        }

        .expert-button.secondary:hover {
          background: #d32f2f;
          color: white;
          transform: translateY(-2px);
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

          .resources-grid {
            grid-template-columns: 1fr;
          }

          .expert-help-section {
            padding: 40px 20px;
          }

          .expert-buttons {
            flex-direction: column;
            align-items: center;
          }

          .expert-button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
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

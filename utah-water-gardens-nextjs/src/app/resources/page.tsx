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
                Can&apos;&apos;re looking for? Our experienced team is here to help with 
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

      
    </div>
  );
}

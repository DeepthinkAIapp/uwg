import Link from 'next/link';

export default function WaterFeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="entry-title">Water Features</h1>
          <p className="entry-subtitle">Professional Pond Services in Utah</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="page-content">
        <div className="container">
          <div className="modern-card">
            <h2>Custom Water Features</h2>
            <p>
              Transform your landscape with beautiful water features that add movement, sound, and visual interest 
              to your outdoor space. From elegant fountains to dramatic waterfalls, we create stunning water 
              features that enhance your property&apos;s beauty and value.
            </p>
            
            <div className="feature-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-md)', margin: 'var(--spacing-lg) 0' }}>
              <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span className="feature-icon">⛲</span>
                <span className="feature-text">Fountains</span>
              </div>
              <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span className="feature-icon">🌊</span>
                <span className="feature-text">Waterfalls</span>
              </div>
              <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span className="feature-icon">🏞️</span>
                <span className="feature-text">Streams</span>
              </div>
              <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span className="feature-icon">💡</span>
                <span className="feature-text">Lighting</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="call-to-action">
            <div className="container">
              <div className="cta-content">
                <h2>Ready to Add a Water Feature?</h2>
                <p>Contact us today to discuss your water feature ideas and get a free consultation.</p>
                <div className="cta-buttons">
                  <Link href="/contact" className="cta-button primary">
                    <i className="fas fa-phone"></i>
                    Get a Quote
                  </Link>
                  <Link href="/pond-services" className="cta-button secondary">
                    <i className="fas fa-arrow-left"></i>
                    View All Services
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

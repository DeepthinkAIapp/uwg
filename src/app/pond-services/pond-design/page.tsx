import Link from 'next/link';

export default function PondDesignPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="entry-title">Pond Design</h1>
          <p className="entry-subtitle">Professional Pond Services in Utah</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="page-content">
        <div className="container">
          <div className="modern-card">
            <h2>Custom Pond Design Services</h2>
            <p>
              Our expert pond designers work closely with you to create a custom water feature that perfectly 
              complements your landscape and meets your specific needs. We consider factors like climate, 
              soil conditions, and your vision to design a pond that will thrive in Utah&apos;s unique environment.
            </p>
            
            <div className="feature-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-md)', margin: 'var(--spacing-lg) 0' }}>
              <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span className="feature-icon">🎨</span>
                <span className="feature-text">Custom Design Plans</span>
              </div>
              <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span className="feature-icon">🌿</span>
                <span className="feature-text">Landscape Integration</span>
              </div>
              <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span className="feature-icon">📐</span>
                <span className="feature-text">Detailed Specifications</span>
              </div>
              <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span className="feature-icon">💰</span>
                <span className="feature-text">Cost Estimates</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="call-to-action">
            <div className="container">
              <div className="cta-content">
                <h2>Ready to Design Your Dream Pond?</h2>
                <p>Contact us today to schedule a consultation and start designing your perfect water feature.</p>
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

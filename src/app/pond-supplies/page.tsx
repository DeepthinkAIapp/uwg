import Link from 'next/link';

export default function PondSuppliesPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="entry-title">Pond Supplies</h1>
          <p className="entry-subtitle">Professional Pond Services in Utah</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="page-content">
        <div className="container">
          <div className="modern-card">
            <h2>Pond Supplies & Equipment</h2>
            <p>
              We offer a comprehensive selection of high-quality pond supplies and equipment to keep your 
              water feature healthy and beautiful. From filters and pumps to treatments and accessories, 
              we have everything you need to maintain your pond.
            </p>
            
            <div className="feature-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-md)', margin: 'var(--spacing-lg) 0' }}>
              <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span className="feature-icon">🔧</span>
                <span className="feature-text">Pumps & Filters</span>
              </div>
              <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span className="feature-icon">🧪</span>
                <span className="feature-text">Water Treatments</span>
              </div>
              <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span className="feature-icon">🌿</span>
                <span className="feature-text">Plant Supplies</span>
              </div>
              <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span className="feature-icon">🐟</span>
                <span className="feature-text">Fish Food & Care</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="call-to-action">
            <div className="container">
              <div className="cta-content">
                <h2>Need Pond Supplies?</h2>
                <p>Contact us today to discuss your pond supply needs or visit our showroom to see our selection.</p>
                <div className="cta-buttons">
                  <Link href="/contact" className="cta-button primary">
                    <i className="fas fa-phone"></i>
                    Get a Quote
                  </Link>
                  <Link href="/pond-filters" className="cta-button secondary">
                    <i className="fas fa-filter"></i>
                    View Filters
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

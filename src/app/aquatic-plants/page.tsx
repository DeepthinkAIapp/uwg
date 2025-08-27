'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function AquaticPlantsPage() {
  return (
    <div className="aquatic-plants-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1 className="entry-title">Aquatic Plants</h1>
          <p className="entry-subtitle">Transform Your Pond with Premium Aquatic Plants</p>
        </div>
      </header>

      <div className="page-content">
        {/* Hero Video Section */}
        <section className="hero-video">
          <div className="video-container">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="hero-video-element"
            >
              <source src="/images/IMG_1244.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay">
              <div className="hero-content">
                <h2>Premium Aquatic Plants for Utah Ponds</h2>
                <p>Discover our comprehensive selection of aquatic plants, from stunning water lilies to essential oxygenating plants. We offer the largest variety in Utah, including winter-hardy varieties and rare specimens perfect for your water feature.</p>
                <div className="hero-buttons">
                  <Link href="/plants-fish" className="hero-btn primary">View All Plants</Link>
                  <Link href="/contact" className="hero-btn secondary">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plant Categories Section */}
        <div className="modern-card">
          <div className="card-columns">
            <div className="card-column">
              <figure className="enhanced-image">
                <Image
                  width={600}
                  height={400}
                  src="/images/0626141448-1024x768-1.webp"
                  alt="A Colorado Water Lily, featuring pink petals and an ochre pistil"
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Colorado Water Lily</figcaption>
              </figure>
            </div>
            <div className="card-column content-section">
              <h2 className="section-heading">Essential Aquatic Plant Categories</h2>
              <p>Utah Water Gardens offers the largest variety of aquatic plants in Utah, including winter hardy water lilies, perennials, and tropicals. Our selection includes Utah natives and hard-to-find plants.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">??</span>
                  <span className="feature-text">Bog Plants</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">??</span>
                  <span className="feature-text">Marginal Plants</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">??</span>
                  <span className="feature-text">Shallow Water Plants</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">??</span>
                  <span className="feature-text">Submerged Plants</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">??</span>
                  <span className="feature-text">Free-Floating Plants</span>
                </div>
              </div>

              <div className="button-wrapper">
                <Link href="/plants-fish" className="modern-button">
                  <span className="button-text">View All Plants</span>
                  <span className="button-icon">?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="modern-card reverse-layout">
          <div className="card-columns">
            <div className="card-column content-section">
              <h2 className="section-heading">Benefits of Aquatic Plants</h2>
              <p>Aquatic plants provide many benefits to your pond or water feature and are essential for a healthy aquatic ecosystem. They act as natural filters to clean and clarify your water, and submerged plants like hornwort and anacharis oxygenate and clean the water.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">??</span>
                  <span className="feature-text">Natural Water Filtration</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">??</span>
                  <span className="feature-text">Fish Protection & Shade</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">??</span>
                  <span className="feature-text">Wildlife Attraction</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">??</span>
                  <span className="feature-text">Edible & Medicinal</span>
                </div>
              </div>

              <div className="button-wrapper">
                <Link href="/pond-maintenance" className="modern-button">
                  <span className="button-text">Learn Maintenance</span>
                  <span className="button-icon">?</span>
                </Link>
              </div>
            </div>
            <div className="card-column">
              <figure className="enhanced-image">
                <Image
                  width={600}
                  height={400}
                  src="/images/Sunset-Changeable-Water-Lily.webp"
                  alt="Sunset Changeable Water Lily floating atop a pond"
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Sunset Changeable Water Lily</figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Plant Categories Showcase */}
        <section className="plant-showcase-section">
          <div className="container">
            <div className="section-header">
              <h2>Our Plant Collection</h2>
              <p>Discover our comprehensive selection of aquatic plants, carefully curated for Utah&apos;s unique climate and your pond&apos;s specific needs.</p>
            </div>
            
            <div className="plant-categories-grid">
              {/* Water Lilies */}
              <div className="plant-category-card">
                <div className="category-image">
                  <Image
                    src="/images/waterLillies.webp"
                    alt="Beautiful water lilies floating on pond surface"
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="category-overlay">
                    <span className="category-icon">??</span>
                  </div>
                </div>
                <div className="category-content">
                  <h3>Water Lilies</h3>
                  <p>Stunning flowering plants that provide shade and beauty. Perfect for Utah&apos;s climate with winter-hardy varieties.</p>
                  <div className="category-features">
                    <span className="feature-tag">Winter Hardy</span>
                    <span className="feature-tag">Shade Provider</span>
                    <span className="feature-tag">Utah Native</span>
                  </div>
                  <Link href="/plants-fish" className="category-link">
                    Explore Lilies ?
                  </Link>
                </div>
              </div>

              {/* Aquatic Iris */}
              <div className="plant-category-card">
                <div className="category-image">
                  <Image
                    src="/images/0626141448-1024x768-1.webp"
                    alt="Aquatic iris plants with beautiful blooms"
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="category-overlay">
                    <span className="category-icon">??</span>
                  </div>
                </div>
                <div className="category-content">
                  <h3>Aquatic Iris</h3>
                  <p>Elegant flowering plants that add vertical interest and vibrant colors to your pond edges.</p>
                  <div className="category-features">
                    <span className="feature-tag">Vertical Interest</span>
                    <span className="feature-tag">Colorful Blooms</span>
                    <span className="feature-tag">Edge Plants</span>
                  </div>
                  <Link href="/plants-fish" className="category-link">
                    Explore Iris ?
                  </Link>
                </div>
              </div>

              {/* Tall Grasses */}
              <div className="plant-category-card">
                <div className="category-image">
                  <Image
                    src="/images/pondConstruction1000x800.webp"
                    alt="Tall ornamental grasses swaying in the breeze"
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="category-overlay">
                    <span className="category-icon">??</span>
                  </div>
                </div>
                <div className="category-content">
                  <h3>Tall Grasses</h3>
                  <p>Majestic ornamental grasses that add movement, texture, and natural screening to your water garden.</p>
                  <div className="category-features">
                    <span className="feature-tag">Movement</span>
                    <span className="feature-tag">Screening</span>
                    <span className="feature-tag">Texture</span>
                  </div>
                  <Link href="/plants-fish" className="category-link">
                    Explore Grasses ?
                  </Link>
                </div>
              </div>

              {/* Ornamental Marginals */}
              <div className="plant-category-card">
                <div className="category-image">
                  <Image
                    src="/images/pondMaintenance.webp"
                    alt="Ornamental marginal plants with unique foliage"
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="category-overlay">
                    <span className="category-icon">??</span>
                  </div>
                </div>
                <div className="category-content">
                  <h3>Ornamental Marginals</h3>
                  <p>Unique foliage plants that soften pond edges and provide year-round visual interest.</p>
                  <div className="category-features">
                    <span className="feature-tag">Unique Foliage</span>
                    <span className="feature-tag">Year-Round Interest</span>
                    <span className="feature-tag">Edge Softening</span>
                  </div>
                  <Link href="/plants-fish" className="category-link">
                    Explore Marginals ?
                  </Link>
                </div>
              </div>

              {/* Flowering Marginals */}
              <div className="plant-category-card">
                <div className="category-image">
                  <Image
                    src="/images/Sunset-Changeable-Water-Lily.webp"
                    alt="Colorful flowering marginal plants"
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="category-overlay">
                    <span className="category-icon">??</span>
                  </div>
                </div>
                <div className="category-content">
                  <h3>Flowering Marginals</h3>
                  <p>Beautiful blooming plants that add seasonal color and attract pollinators to your water garden.</p>
                  <div className="category-features">
                    <span className="feature-tag">Seasonal Color</span>
                    <span className="feature-tag">Pollinator Friendly</span>
                    <span className="feature-tag">Blooming</span>
                  </div>
                  <Link href="/plants-fish" className="category-link">
                    Explore Flowering ?
                  </Link>
                </div>
              </div>

              {/* Short and Medium Grasses */}
              <div className="plant-category-card">
                <div className="category-image">
                  <Image
                    src="/images/pondDredging.webp"
                    alt="Short and medium ornamental grasses"
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="category-overlay">
                    <span className="category-icon">??</span>
                  </div>
                </div>
                <div className="category-content">
                  <h3>Short & Medium Grasses</h3>
                  <p>Versatile grasses perfect for smaller spaces, containers, and creating layered garden effects.</p>
                  <div className="category-features">
                    <span className="feature-tag">Compact</span>
                    <span className="feature-tag">Container Friendly</span>
                    <span className="feature-tag">Layered Design</span>
                  </div>
                  <Link href="/plants-fish" className="category-link">
                    Explore Grasses ?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wildlife Benefits Section */}
        <div className="modern-card">
          <div className="card-columns">
            <div className="card-column content-section">
              <h2 className="section-heading">Wildlife & Ecosystem Benefits</h2>
              <p>In addition to their practical uses, aquatic plants can benefit other creatures that visit your pond or water feature. Flowering aquatic plants like cardinal flower and blue pickerel rush attract hummingbirds, butterflies, and dragonflies, and water lilies benefit honeybees by providing a safe place to drink water.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">??</span>
                  <span className="feature-text">Attract Hummingbirds</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">??</span>
                  <span className="feature-text">Butterfly Gardens</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">??</span>
                  <span className="feature-text">Honeybee Support</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">??</span>
                  <span className="feature-text">Dragonfly Habitat</span>
                </div>
              </div>

              <div className="button-wrapper">
                <Link href="/pond-gallery" className="modern-button">
                  <span className="button-text">View Gallery</span>
                  <span className="button-icon">?</span>
                </Link>
              </div>
            </div>
            <div className="card-column">
              <figure className="enhanced-image">
                <Image
                  width={600}
                  height={400}
                  src="/images/waterLillies.webp"
                  alt="Beautiful water lilies attracting wildlife to the pond"
                  style={{ objectFit: 'cover' }}
                />
                <figcaption>Wildlife-Friendly Water Lilies</figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="call-to-action">
          <div className="cta-content">
            <h2>Ready to Transform Your Pond?</h2>
            <p>Contact us today to discuss your aquatic plant needs. Our experts are here to help you create the perfect water garden ecosystem.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="cta-button primary">Get Started</Link>
              <Link href="/plant-delivery" className="cta-button secondary">Plant Delivery</Link>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .aquatic-plants-page {
          min-height: 100vh;
        }

        /* Page Header */
        .page-header {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
          color: white;
          padding: 4rem 0 2rem;
          text-align: center;
        }

        .entry-title {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .entry-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Hero Video Section */
        .hero-video {
          position: relative;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
        }

        .video-container {
          position: relative;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
        }

        .hero-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-content {
          text-align: center;
          color: white;
          max-width: 800px;
          padding: 0 2rem;
        }

        .hero-content h2 {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.3);
          color: #ffffff;
        }

        .hero-content p {
          font-size: 1.5rem;
          margin-bottom: 2.5rem;
          opacity: 1;
          line-height: 1.4;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-weight: 500;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-btn {
          display: inline-block;
          padding: 1rem 2rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .hero-btn.primary {
          background: var(--primary-red);
          color: white;
          border: 2px solid var(--primary-red);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .hero-btn.primary::before {
          content: &apos;&apos;;
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 29px;
          z-index: -1;
        }

        .hero-btn.primary:hover {
          background: var(--primary-red-dark);
          border-color: var(--primary-red-dark);
          transform: translateY(-2px);
        }

        .hero-btn.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .hero-btn.secondary::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 29px;
          z-index: -1;
        }

        .hero-btn.secondary:hover {
          background: white;
          color: var(--primary-blue);
          transform: translateY(-2px);
        }

        /* Modern Cards */
        .modern-card {
          padding: 4rem 0;
          background: white;
        }

        .modern-card:nth-child(even) {
          background: var(--gray-50);
        }

        .card-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .reverse-layout .card-columns {
          direction: rtl;
        }

        .reverse-layout .card-columns > * {
          direction: ltr;
        }

        .card-column {
          display: flex;
          flex-direction: column;
        }

        .content-section {
          padding: 2rem 0;
        }

        .section-heading {
          font-size: 2rem;
          color: var(--primary-blue);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .content-section p {
          font-size: 1.125rem;
          color: var(--gray-600);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        /* Enhanced Images */
        .enhanced-image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .enhanced-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        .enhanced-image figcaption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 1rem;
          text-align: center;
          font-weight: 500;
        }

        /* Feature Lists */
        .feature-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: var(--gray-50);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: var(--primary-blue);
          color: white;
          transform: translateY(-2px);
        }

        .feature-icon {
          font-size: 1.25rem;
        }

        .feature-text {
          font-weight: 500;
        }

        /* Buttons */
        .button-wrapper {
          text-align: center;
        }

        .modern-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--primary-blue);
          color: white;
          padding: 1rem 2rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .modern-button:hover {
          background: var(--primary-blue-dark);
          transform: translateY(-2px);
        }

        .button-icon {
          font-size: 1.125rem;
        }

        /* Plant Showcase Section */
        .plant-showcase-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 3rem;
          color: var(--primary-blue);
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .section-header p {
          font-size: 1.25rem;
          color: var(--gray-600);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .plant-categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .plant-category-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .plant-category-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .category-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .category-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .plant-category-card:hover .category-image img {
          transform: scale(1.05);
        }

        .category-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-icon {
          font-size: 3rem;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .category-content {
          padding: 2rem;
        }

        .category-content h3 {
          font-size: 1.75rem;
          color: var(--primary-blue);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .category-content p {
          color: var(--gray-600);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .category-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .feature-tag {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .category-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-red);
          font-weight: 600;
          text-decoration: none;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .category-link:hover {
          color: var(--primary-red-dark);
          transform: translateX(5px);
        }

        /* Call to Action */
        .call-to-action {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
          color: white;
          padding: 5rem 0;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .cta-content p {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 1rem 2rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .cta-button.primary {
          background: white;
          color: var(--primary-blue);
        }

        .cta-button.primary:hover {
          background: var(--gray-100);
          transform: translateY(-2px);
        }

        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-button.secondary:hover {
          background: white;
          color: var(--primary-blue);
          transform: translateY(-2px);
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-video {
            height: 100vh;
          }

          .hero-content h2 {
            font-size: 2rem;
          }

          .hero-content p {
            font-size: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 0.75rem;
          }

          .hero-btn {
            width: 100%;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
          }

          .entry-title {
            font-size: 2rem;
          }

          .hero-content h2 {
            font-size: 2rem;
          }

          .card-columns {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .reverse-layout .card-columns {
            direction: ltr;
          }

          .feature-list {
            grid-template-columns: 1fr;
          }

          .plant-categories-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .section-header h2 {
            font-size: 2.5rem;
          }

          .category-content h3 {
            font-size: 1.5rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .entry-title {
            font-size: 1.75rem;
          }

          .hero-content h2 {
            font-size: 1.75rem;
          }

          .section-heading {
            font-size: 1.5rem;
          }

          .container {
            padding: 0 1rem;
          }

          .plant-categories-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .category-content h3 {
            font-size: 1.25rem;
          }

          .category-features {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

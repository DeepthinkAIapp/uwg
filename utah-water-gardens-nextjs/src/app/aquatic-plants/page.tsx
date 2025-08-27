'use client';
import Image from 'next/image';
import Link from 'next/link';

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
              <p>Discover our comprehensive selection of aquatic plants, carefully curated for Utah&apos;&apos;s specific needs.</p>
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

      
    </div>
  );
}

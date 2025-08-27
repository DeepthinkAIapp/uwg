'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function PlantsFishPage() {
  return (
    <div className="plants-fish-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1 className="entry-title">Aquatic Plants & Koi Fish</h1>
          <p className="entry-subtitle">Transform Your Pond with Premium Plants and Fish</p>
        </div>
      </header>

      <div className="page-content">
        <div className="container">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <h2>Create a Living Ecosystem</h2>
              <p>Discover our premium selection of aquatic plants and koi fish, carefully chosen to thrive in Utah&apos;s unique climate. From vibrant water lilies to majestic koi, we provide everything you need to create a stunning, healthy water garden.</p>
              
              {/* Video Section */}
              <div className="hero-video">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="hero-video-element"
                  poster="/images/waterLillies.webp"
                >
                  <source src="/images/herouwg_prob4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* Plants Section */}
          <div className="content-card">
            <div className="card-layout">
              <div className="image-section">
                <Link href="/aquatic-plants">
                  <Image
                    src="/images/waterLillies.webp"
                    alt="Beautiful water lilies and aquatic plants for Utah ponds"
                    width={600}
                    height={400}
                    className="enhanced-image"
                    priority
                  />
                </Link>
                <figcaption>Premium Aquatic Plants</figcaption>
              </div>
              <div className="content-section">
                <h2>Aquatic Plants in Utah</h2>
                <p>Utah Water Gardens offers a comprehensive selection of aquatic plants designed to keep your pond healthy and beautiful year-round. Our expert team provides personalized guidance to help you choose the perfect plants for your water feature.</p>
                
                <div className="feature-list">
                  <div className="feature-item">
                    <span className="feature-icon">🌿</span>
                    <span className="feature-text">Water Lilies & Lotus</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🌱</span>
                    <span className="feature-text">Oxygenating Plants</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🌺</span>
                    <span className="feature-text">Marginal Plants</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🌿</span>
                    <span className="feature-text">Floating Plants</span>
                  </div>
                </div>

                <div className="button-container">
                  <Link href="/aquatic-plants" className="modern-button">
                    <span className="button-text">Explore Plants</span>
                    <span className="button-icon">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Fish Section */}
          <div className="content-card reverse-layout">
            <div className="card-layout">
              <div className="content-section">
                <h2>Koi Fish & Pond Fish</h2>
                <p>We offer a diverse selection of koi and pond fish, all winter-hardy and perfectly suited for Utah&apos;s climate. Our fish are carefully selected for their beauty, health, and ability to thrive in local conditions.</p>
                
                <div className="feature-list">
                  <div className="feature-item">
                    <span className="feature-icon">🐟</span>
                    <span className="feature-text">Premium Koi Varieties</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">❄️</span>
                    <span className="feature-text">Winter Hardy</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🏔️</span>
                    <span className="feature-text">Utah Climate Adapted</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">💚</span>
                    <span className="feature-text">Health Guaranteed</span>
                  </div>
                </div>

                <div className="button-container">
                  <Link href="/fish-koi" className="modern-button">
                    <span className="button-text">View Fish</span>
                    <span className="button-icon">→</span>
                  </Link>
                </div>
              </div>
              <div className="image-section">
                <Link href="/fish-koi">
                  <Image
                    src="/images/koi.webp"
                    alt="Colorful koi fish swimming in clear pond water"
                    width={600}
                    height={400}
                    className="enhanced-image"
                    priority
                  />
                </Link>
                <figcaption>Majestic Koi Fish</figcaption>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <section className="services-section">
            <h2>Professional Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🚚</div>
                <h3>Plant & Fish Delivery</h3>
                <p>Professional delivery and installation of aquatic plants and fish throughout Utah.</p>
                <Link href="/plant-delivery" className="service-link">Learn More →</Link>
              </div>
              <div className="service-card">
                <div className="service-icon">🎯</div>
                <h3>Expert Consultation</h3>
                <p>Get personalized advice on plant selection and fish care from our experienced team.</p>
                <Link href="/pond-consultations" className="service-link">Learn More →</Link>
              </div>
              <div className="service-card">
                <div className="service-icon">🔧</div>
                <h3>Pond Maintenance</h3>
                <p>Keep your aquatic ecosystem healthy with our comprehensive maintenance services.</p>
                <Link href="/pond-maintenance" className="service-link">Learn More →</Link>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="call-to-action">
            <div className="cta-content">
              <h2>Ready to Transform Your Pond?</h2>
              <p>Contact us today to discuss your aquatic plant and fish needs. Our experts are here to help you create the perfect water garden.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="cta-button primary">Get Started</Link>
                <Link href="/schedule" className="cta-button secondary">Schedule Consultation</Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      
    </div>
  );
}

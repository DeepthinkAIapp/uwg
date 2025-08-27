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

      <style jsx>{`
        .plants-fish-page {
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

        .hero-section {
          text-align: center;
          margin-bottom: 80px;
          padding: 60px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 20px;
        }

        .hero-content h2 {
          font-size: 2.5rem;
          color: #333;
          margin: 0 0 20px 0;
          font-weight: 700;
        }

        .hero-content p {
          font-size: 1.2rem;
          color: #666;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .hero-video {
          width: 100%;
          max-width: 800px;
          margin: 40px auto 0;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .hero-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .content-card {
          margin-bottom: 80px;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .card-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          min-height: 500px;
        }

        .reverse-layout .card-layout {
          direction: rtl;
        }

        .reverse-layout .card-layout > * {
          direction: ltr;
        }

        .image-section {
          position: relative;
          overflow: hidden;
        }

        .enhanced-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-section:hover .enhanced-image {
          transform: scale(1.05);
        }

        figcaption {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .content-section {
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .content-section h2 {
          font-size: 2.2rem;
          color: #333;
          margin: 0 0 20px 0;
          font-weight: 600;
        }

        .content-section p {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
          margin: 0 0 30px 0;
        }

        .feature-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: #e9ecef;
          transform: translateY(-2px);
        }

        .feature-icon {
          font-size: 1.5rem;
        }

        .feature-text {
          font-weight: 500;
          color: #333;
        }

        .button-container {
          text-align: center;
        }

        .modern-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          background: #d32f2f;
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          border: 2px solid #d32f2f;
        }

        .modern-button:hover {
          background: #b71c1c;
          border-color: #b71c1c;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(211, 47, 47, 0.3);
        }

        .button-icon {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .modern-button:hover .button-icon {
          transform: translateX(5px);
        }

        .services-section {
          margin-bottom: 80px;
          text-align: center;
        }

        .services-section h2 {
          font-size: 2.5rem;
          color: #333;
          margin: 0 0 50px 0;
          font-weight: 700;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: white;
          padding: 40px 30px;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          border-color: #d32f2f;
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
        }

        .service-card h3 {
          color: #d32f2f;
          font-size: 1.4rem;
          margin: 0 0 15px 0;
          font-weight: 600;
        }

        .service-card p {
          color: #666;
          margin: 0 0 20px 0;
          line-height: 1.6;
        }

        .service-link {
          color: #d32f2f;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .service-link:hover {
          color: #b71c1c;
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

          .card-layout {
            grid-template-columns: 1fr;
          }

          .reverse-layout .card-layout {
            direction: ltr;
          }

          .content-section {
            padding: 40px 30px;
          }

          .feature-list {
            grid-template-columns: 1fr;
          }

          .services-grid {
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

'use client';
import Link from 'next/link';

export default function PlantDeliveryPage() {
  return (
    <div className="plant-delivery-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1 className="entry-title">Plant and Koi Delivery</h1>
          <p className="entry-subtitle">Professional Pond Services in Utah</p>
        </div>
      </header>

      <div className="page-content">
        <div className="container">
          {/* Main Content */}
          <div className="content-section">
            <div className="intro-section">
              <p className="intro-text">
                We offer a wide variety of Aquatic plants for your Pond/Water Feature
              </p>
              <p className="delivery-info">
                For a small delivery fee we deliver plants or fish to your home or business including:
              </p>
            </div>

            {/* Products Grid */}
            <div className="products-grid">
              <div className="product-card">
                <div className="product-icon">🌸</div>
                <h3>Water Lilies</h3>
                <p>Beautiful flowering aquatic plants perfect for ponds</p>
              </div>
              <div className="product-card">
                <div className="product-icon">🌿</div>
                <h3>Water Hyacinth</h3>
                <p>Floating plants that help filter water naturally</p>
              </div>
              <div className="product-card">
                <div className="product-icon">🍃</div>
                <h3>Water Lettuce</h3>
                <p>Floating rosettes that provide shade and shelter</p>
              </div>
              <div className="product-card">
                <div className="product-icon">🌺</div>
                <h3>Water Canna</h3>
                <p>Colorful flowering plants for pond edges</p>
              </div>
              <div className="product-card">
                <div className="product-icon">🌾</div>
                <h3>Egyptian Papyrus</h3>
                <p>Tall, dramatic plants for pond backgrounds</p>
              </div>
              <div className="product-card">
                <div className="product-icon">🌴</div>
                <h3>Umbrella Palm</h3>
                <p>Unique umbrella-shaped leaves for visual interest</p>
              </div>
              <div className="product-card">
                <div className="product-icon">🐟</div>
                <h3>Koi</h3>
                <p>Beautiful, hardy fish for your pond ecosystem</p>
              </div>
              <div className="product-card">
                <div className="product-icon">✨</div>
                <h3>And Many More!</h3>
                <p>We carry a complete selection of aquatic plants and fish</p>
              </div>
            </div>

            <div className="delivery-note">
              <p>
                <strong>Special Offer:</strong> Depending on the size of the order we can waive the delivery fee. 
                Give us a call and see what we have to offer.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="call-to-action">
            <div className="cta-content">
              <h2>Ready to Order Plants or Fish?</h2>
              <p>Contact us today to discuss your delivery needs and get a quote.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="cta-button primary">
                  <i className="fas fa-phone"></i>
                  Call Us Today
                </Link>
                <Link href="/plants-fish" className="cta-button secondary">
                  <i className="fas fa-leaf"></i>
                  View Our Plants
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .plant-delivery-page {
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

        .content-section {
          margin-bottom: 60px;
        }

        .intro-section {
          text-align: center;
          margin-bottom: 50px;
        }

        .intro-text {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .delivery-info {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 40px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }

        .product-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          border-color: #d32f2f;
        }

        .product-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
        }

        .product-card h3 {
          color: #d32f2f;
          font-size: 1.4rem;
          margin: 0 0 15px 0;
          font-weight: 600;
        }

        .product-card p {
          color: #666;
          margin: 0;
          line-height: 1.6;
        }

        .delivery-note {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          border-left: 5px solid #d32f2f;
        }

        .delivery-note p {
          margin: 0;
          font-size: 1.1rem;
          color: #333;
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

          .products-grid {
            grid-template-columns: 1fr;
            gap: 20px;
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

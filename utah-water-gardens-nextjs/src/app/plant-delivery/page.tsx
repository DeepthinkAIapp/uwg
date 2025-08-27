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

      
    </div>
  );
}

'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function PlantCarePage() {
  return (
    <div className="plant-care-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1 className="entry-title">Plant Care Guide</h1>
          <p className="entry-subtitle">Essential Tips for Aquatic Plant Care</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="content-wrapper">
            {/* Primary Content */}
            <div className="content-primary">
              <div className="page-content">
                <p>
                  Aquatic plants are essential for a healthy pond ecosystem. They provide oxygen, filter the water, offer shade and shelter for fish, and add natural beauty to your water garden. This guide will help you understand how to care for different types of aquatic plants and maintain a thriving plant community.
                </p>

                <h2>Types of Aquatic Plants</h2>

                <h3>Oxygenating Plants</h3>
                <p>
                  These plants grow underwater and are essential for water quality. They absorb nutrients from the water and release oxygen, helping to keep your pond clean and healthy.
                </p>
                <ul>
                  <li><strong>Hornwort (Ceratophyllum demersum):</strong> Fast-growing, no roots needed</li>
                  <li><strong>Anacharis (Elodea canadensis):</strong> Popular oxygenator, easy to grow</li>
                  <li><strong>Cabomba (Cabomba caroliniana):</strong> Feathery foliage, good for fish</li>
                  <li><strong>Water Milfoil (Myriophyllum):</strong> Fine-textured, excellent oxygenator</li>
                </ul>

                <h3>Floating Plants</h3>
                <p>
                  These plants float on the water&apos;s surface, providing shade and helping to control algae growth by blocking sunlight.
                </p>
                <ul>
                  <li><strong>Water Lettuce (Pistia stratiotes):</strong> Tropical, needs warm water</li>
                  <li><strong>Water Hyacinth (Eichhornia crassipes):</strong> Beautiful flowers, fast spreader</li>
                  <li><strong>Duckweed (Lemna minor):</strong> Tiny floating plants, good for small ponds</li>
                  <li><strong>Frogbit (Limnobium laevigatum):</strong> Heart-shaped leaves, easy care</li>
                </ul>

                <h3>Marginal Plants</h3>
                <p>
                  These plants grow in shallow water or at the pond&apos;s edge, adding height and structure to your water garden.
                </p>
                <ul>
                  <li><strong>Iris (Iris spp.):</strong> Beautiful flowers, various colors</li>
                  <li><strong>Cattails (Typha spp.):</strong> Tall, natural look, good for wildlife</li>
                  <li><strong>Pickerel Weed (Pontederia cordata):</strong> Blue flowers, attracts pollinators</li>
                  <li><strong>Rush (Juncus spp.):</strong> Grassy appearance, good for erosion control</li>
                </ul>

                <h3>Water Lilies</h3>
                <p>
                  Water lilies are the stars of any pond, providing beautiful flowers and important shade for fish.
                </p>
                <ul>
                  <li><strong>Hardy Water Lilies:</strong> Survive winter, bloom spring to fall</li>
                  <li><strong>Tropical Water Lilies:</strong> More colorful, need warm water</li>
                  <li><strong>Night Bloomers:</strong> Open in evening, fragrant</li>
                  <li><strong>Day Bloomers:</strong> Open during day, various colors</li>
                </ul>

                <h2>Planting Guidelines</h2>

                <h3>Container Planting</h3>
                <p>
                  Most aquatic plants do best when planted in containers with aquatic soil and gravel.
                </p>
                <ul>
                  <li>Use containers with drainage holes</li>
                  <li>Fill with aquatic potting soil</li>
                  <li>Plant at appropriate depth for species</li>
                  <li>Cover soil with gravel to prevent clouding</li>
                  <li>Place in pond at recommended depth</li>
                </ul>

                <h3>Planting Depths</h3>
                <ul>
                  <li><strong>Oxygenators:</strong> 6-18 inches deep</li>
                  <li><strong>Water Lilies:</strong> 12-24 inches deep</li>
                  <li><strong>Marginal Plants:</strong> 2-6 inches deep</li>
                  <li><strong>Floating Plants:</strong> Surface of water</li>
                </ul>

                <h2>Seasonal Care</h2>

                <h3>Spring (March - May)</h3>
                <ul>
                  <li>Remove dead foliage from hardy plants</li>
                  <li>Divide overgrown plants</li>
                  <li>Add new plants as water warms</li>
                  <li>Start fertilizing established plants</li>
                  <li>Check for winter damage</li>
                </ul>

                <h3>Summer (June - August)</h3>
                <ul>
                  <li>Monitor plant growth and health</li>
                  <li>Remove excess floating plants</li>
                  <li>Fertilize regularly</li>
                  <li>Deadhead spent flowers</li>
                  <li>Control invasive species</li>
                </ul>

                <h3>Fall (September - November)</h3>
                <ul>
                  <li>Remove tropical plants before frost</li>
                  <li>Cut back hardy plants</li>
                  <li>Stop fertilizing</li>
                  <li>Prepare plants for winter</li>
                  <li>Store tropical plants indoors</li>
                </ul>

                <h3>Winter (December - February)</h3>
                <ul>
                  <li>Protect hardy plants from ice</li>
                  <li>Monitor water levels</li>
                  <li>Check for winter damage</li>
                  <li>Plan for spring additions</li>
                  <li>Maintain proper water circulation</li>
                </ul>

                <h2>Fertilization</h2>

                <p>
                  Aquatic plants need nutrients to thrive, especially in new ponds or those with few fish.
                </p>

                <h3>Fertilizer Types</h3>
                <ul>
                  <li><strong>Aquatic Plant Fertilizer:</strong> Specifically formulated for water plants</li>
                  <li><strong>Slow-Release Tablets:</strong> Long-lasting, placed in soil</li>
                  <li><strong>Liquid Fertilizer:</strong> Quick-acting, added to water</li>
                  <li><strong>Fish Waste:</strong> Natural fertilizer from pond fish</li>
                </ul>

                <h3>Fertilization Schedule</h3>
                <ul>
                  <li>Start fertilizing when water reaches 60°F</li>
                  <li>Fertilize every 2-4 weeks during growing season</li>
                  <li>Stop fertilizing 6 weeks before first frost</li>
                  <li>Use half-strength for new plants</li>
                  <li>Monitor plant response and adjust as needed</li>
                </ul>

                <h2>Common Plant Problems</h2>

                <h3>Yellowing Leaves</h3>
                <p>
                  <strong>Causes:</strong> Nutrient deficiency, too much sun, poor water quality
                </p>
                <ul>
                  <li>Test water quality</li>
                  <li>Add appropriate fertilizer</li>
                  <li>Provide shade if needed</li>
                  <li>Check for root damage</li>
                </ul>

                <h3>Algae on Plants</h3>
                <p>
                  <strong>Causes:</strong> Excess nutrients, too much sunlight, poor circulation
                </p>
                <ul>
                  <li>Gently clean affected leaves</li>
                  <li>Improve water circulation</li>
                  <li>Add more plants to compete for nutrients</li>
                  <li>Reduce fish feeding if overstocked</li>
                </ul>

                <h3>Plant Not Growing</h3>
                <p>
                  <strong>Causes:</strong> Wrong depth, poor soil, insufficient light, cold water
                </p>
                <ul>
                  <li>Check planting depth</li>
                  <li>Verify soil quality</li>
                  <li>Ensure adequate sunlight</li>
                  <li>Wait for water to warm</li>
                </ul>

                <h2>Plant Maintenance</h2>

                <h3>Pruning</h3>
                <ul>
                  <li>Remove dead or yellowing leaves regularly</li>
                  <li>Cut back overgrown stems</li>
                  <li>Deadhead spent flowers</li>
                  <li>Thin out dense growth</li>
                  <li>Use clean, sharp tools</li>
                </ul>

                <h3>Dividing Plants</h3>
                <ul>
                  <li>Divide every 2-3 years or when overgrown</li>
                  <li>Best done in spring or early summer</li>
                  <li>Use sharp knife or garden shears</li>
                  <li>Replant divisions immediately</li>
                  <li>Discard old, woody centers</li>
                </ul>

                <h3>Pest Control</h3>
                <ul>
                  <li>Remove affected leaves or plants</li>
                  <li>Use natural predators when possible</li>
                  <li>Avoid chemical pesticides</li>
                  <li>Maintain good water quality</li>
                  <li>Quarantine new plants</li>
                </ul>

                <h2>Utah-Specific Considerations</h2>

                <p>
                  Utah&apos;s climate presents unique challenges for aquatic plants. Here are some tips specific to our region:
                </p>

                <ul>
                  <li><strong>Hardy Plants:</strong> Choose plants rated for USDA Zone 5-6</li>
                  <li><strong>Winter Protection:</strong> Ensure adequate depth for winter survival</li>
                  <li><strong>Water Conservation:</strong> Use drought-tolerant species when possible</li>
                  <li><strong>Sun Exposure:</strong> Provide afternoon shade in hot summers</li>
                  <li><strong>Water Quality:</strong> Test for high pH and mineral content</li>
                </ul>

                <div className="cta-box">
                  <h3>Need Help with Your Plants?</h3>
                  <p>
                    Our team at Utah Water Gardens can help you select the right plants for your pond and provide expert care advice. We offer plant delivery and installation services throughout Utah.
                  </p>
                  <div className="cta-actions">
                    <Link href="/plant-delivery" className="cta-button primary">
                      <i className="fas fa-seedling"></i>
                      Order Plants
                    </Link>
                    <Link href="/contact" className="cta-button secondary">
                      <i className="fas fa-phone"></i>
                      Get Advice
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="content-sidebar">
              {/* Quick Contact */}
              <div className="sidebar-widget contact-widget">
                <h3 className="widget-title">
                  <i className="fas fa-phone"></i>
                  Get In Touch
                </h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <strong>Address</strong>
                      <p>5911 S 1300 E<br />Salt Lake City, Utah 84121</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <div>
                      <strong>Phone</strong>
                      <a href="tel:8015908516">801-590-8516</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="far fa-envelope"></i>
                    <div>
                      <strong>Email</strong>
                      <a href="mailto:contact@utahwatergardens.com">contact@utahwatergardens.com</a>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="contact-button">
                  <i className="fas fa-envelope"></i>
                  Send Message
                </Link>
              </div>

              {/* Services Widget */}
              <div className="sidebar-widget services-widget">
                <h3 className="widget-title">
                  <i className="fas fa-tools"></i>
                  Our Services
                </h3>
                <ul className="services-list">
                  <li>
                    <Link href="/plant-delivery">
                      <i className="fas fa-seedling"></i>
                      Plant Delivery
                    </Link>
                  </li>
                  <li>
                    <Link href="/pond-maintenance">
                      <i className="fas fa-cog"></i>
                      Pond Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link href="/pond-construction">
                      <i className="fas fa-hammer"></i>
                      Pond Construction
                    </Link>
                  </li>
                  <li>
                    <Link href="/pond-cleanings">
                      <i className="fas fa-broom"></i>
                      Pond Cleanings
                    </Link>
                  </li>
                  <li>
                    <Link href="/pond-repair-and-rebuild">
                      <i className="fas fa-wrench"></i>
                      Pond Repair
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Related Resources */}
              <div className="sidebar-widget resources-widget">
                <h3 className="widget-title">
                  <i className="fas fa-book"></i>
                  Related Resources
                </h3>
                <ul className="resources-list">
                  <li>
                    <Link href="/resources/pond-care-guide">
                      <i className="fas fa-water"></i>
                      Pond Care Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/fish-care">
                      <i className="fas fa-fish"></i>
                      Fish Care Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/faq">
                      <i className="fas fa-question-circle"></i>
                      Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link href="/aquatic-plants">
                      <i className="fas fa-seedling"></i>
                      Aquatic Plants
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Enhance Your Pond with Plants?</h2>
            <p className="cta-description">Contact us today for expert advice on aquatic plants and professional installation services.</p>
            <div className="cta-actions">
              <Link href="/plant-delivery" className="cta-button primary">
                <i className="fas fa-seedling"></i>
                Order Plants
              </Link>
              <Link href="/contact" className="cta-button secondary">
                <i className="fas fa-phone"></i>
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .plant-care-page {
          background: #fff;
        }

        .page-header {
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          color: white;
          padding: 60px 0;
          text-align: center;
        }

        .entry-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0 0 10px 0;
          color: white;
        }

        .entry-subtitle {
          font-size: 1.2rem;
          margin: 0;
          opacity: 0.9;
        }

        .main-content {
          padding: 60px 0;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .content-primary {
          background: white;
          border-radius: 8px;
          padding: 40px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .page-content {
          line-height: 1.8;
        }

        .page-content h2 {
          color: #059669;
          font-size: 2rem;
          margin: 40px 0 20px 0;
          font-weight: 600;
        }

        .page-content h3 {
          color: #10b981;
          font-size: 1.4rem;
          margin: 25px 0 15px 0;
          font-weight: 600;
        }

        .page-content p {
          margin-bottom: 20px;
          color: #374151;
        }

        .page-content ul {
          margin-bottom: 20px;
          padding-left: 20px;
        }

        .page-content li {
          margin-bottom: 8px;
          color: #374151;
        }

        .page-content strong {
          color: #059669;
        }

        .cta-box {
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border: 2px solid #10b981;
          border-radius: 12px;
          padding: 30px;
          margin: 40px 0;
          text-align: center;
        }

        .cta-box h3 {
          color: #059669;
          margin: 0 0 15px 0;
          font-size: 1.5rem;
        }

        .cta-box p {
          margin-bottom: 20px;
          color: #374151;
        }

        .cta-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .content-sidebar {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .sidebar-widget {
          background: white;
          border-radius: 8px;
          padding: 25px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .widget-title {
          color: #059669;
          font-size: 1.3rem;
          margin: 0 0 20px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .widget-title i {
          color: #10b981;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .contact-item i {
          color: #10b981;
          margin-top: 3px;
          min-width: 16px;
        }

        .contact-item strong {
          color: #059669;
          display: block;
          margin-bottom: 2px;
        }

        .contact-item a {
          color: #10b981;
          text-decoration: none;
        }

        .contact-item a:hover {
          text-decoration: underline;
        }

        .contact-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #10b981;
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          margin-top: 20px;
          transition: background-color 0.3s;
        }

        .contact-button:hover {
          background: #059669;
          text-decoration: none;
        }

        .services-list,
        .resources-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .services-list li,
        .resources-list li {
          margin-bottom: 10px;
        }

        .services-list a,
        .resources-list a {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #374151;
          text-decoration: none;
          padding: 8px 0;
          transition: color 0.3s;
        }

        .services-list a:hover,
        .resources-list a:hover {
          color: #10b981;
        }

        .services-list i,
        .resources-list i {
          color: #10b981;
          min-width: 16px;
        }

        .cta-section {
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          color: white;
          padding: 60px 0;
          text-align: center;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 15px 0;
          color: white;
        }

        .cta-description {
          font-size: 1.1rem;
          margin: 0 0 30px 0;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 30px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
        }

        .cta-button.primary {
          background: #ef4444;
          color: white;
        }

        .cta-button.primary:hover {
          background: #dc2626;
          transform: translateY(-2px);
        }

        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-button.secondary:hover {
          background: white;
          color: #059669;
          transform: translateY(-2px);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .entry-title {
            font-size: 2rem;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-box .cta-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}

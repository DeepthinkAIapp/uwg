'use client';
import Link from 'next/link';

export default function PondCareGuidePage() {
  return (
    <div className="pond-care-guide-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1 className="entry-title">Pond Care Guide</h1>
          <p className="entry-subtitle">Essential Tips for Maintaining Your Water Garden</p>
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
                  A well-maintained pond is a beautiful addition to any landscape, but it requires regular care to keep it healthy and thriving. This comprehensive guide will help you understand the basics of pond maintenance and ensure your water garden remains a source of joy for years to come.
                </p>

                <h2>Seasonal Pond Maintenance</h2>

                <h3>Spring Care (March - May)</h3>
                <ul>
                  <li><strong>Clean and inspect:</strong> Remove debris, clean filters, and check equipment</li>
                  <li><strong>Test water quality:</strong> Check pH, ammonia, and nitrate levels</li>
                  <li><strong>Start feeding fish:</strong> Begin with small amounts as water warms</li>
                  <li><strong>Add beneficial bacteria:</strong> Help establish healthy ecosystem</li>
                  <li><strong>Prune plants:</strong> Remove dead foliage and divide overgrown plants</li>
                </ul>

                <h3>Summer Care (June - August)</h3>
                <ul>
                  <li><strong>Monitor water levels:</strong> Top off with dechlorinated water as needed</li>
                  <li><strong>Control algae:</strong> Use natural methods and maintain proper plant balance</li>
                  <li><strong>Feed fish regularly:</strong> 2-3 times daily, only what they can consume in 5 minutes</li>
                  <li><strong>Check equipment:</strong> Ensure pumps and filters are working properly</li>
                  <li><strong>Remove debris:</strong> Keep surface clean of leaves and other organic matter</li>
                </ul>

                <h3>Fall Care (September - November)</h3>
                <ul>
                  <li><strong>Reduce feeding:</strong> Gradually decrease fish food as temperatures drop</li>
                  <li><strong>Clean thoroughly:</strong> Remove leaves and prepare for winter</li>
                  <li><strong>Trim plants:</strong> Cut back hardy plants and remove tropical varieties</li>
                  <li><strong>Install netting:</strong> Protect pond from falling leaves</li>
                  <li><strong>Check equipment:</strong> Ensure winter equipment is ready</li>
                </ul>

                <h3>Winter Care (December - February)</h3>
                <ul>
                  <li><strong>Stop feeding fish:</strong> Fish become dormant and don&apos;t need food</li>
                  <li><strong>Keep water moving:</strong> Prevent complete ice coverage</li>
                  <li><strong>Monitor equipment:</strong> Ensure heaters and aerators are working</li>
                  <li><strong>Check water quality:</strong> Test periodically even in cold weather</li>
                  <li><strong>Remove snow:</strong> Keep pond surface clear for gas exchange</li>
                </ul>

                <h2>Water Quality Management</h2>

                <p>
                  Maintaining proper water quality is essential for the health of your pond ecosystem. Regular testing and monitoring will help prevent problems before they become serious.
                </p>

                <h3>Key Water Parameters</h3>
                <ul>
                  <li><strong>pH:</strong> Ideal range is 6.8-8.2</li>
                  <li><strong>Ammonia:</strong> Should be 0 ppm</li>
                  <li><strong>Nitrite:</strong> Should be 0 ppm</li>
                  <li><strong>Nitrate:</strong> Keep below 40 ppm</li>
                  <li><strong>Temperature:</strong> Monitor seasonal changes</li>
                </ul>

                <h3>Natural Filtration</h3>
                <p>
                  A well-designed pond uses plants and beneficial bacteria to naturally filter the water. Include a variety of aquatic plants:
                </p>
                <ul>
                  <li><strong>Oxygenators:</strong> Hornwort, Anacharis, Cabomba</li>
                  <li><strong>Floating plants:</strong> Water lettuce, Water hyacinth</li>
                  <li><strong>Marginal plants:</strong> Iris, Cattails, Pickerel weed</li>
                  <li><strong>Water lilies:</strong> Provide shade and beauty</li>
                </ul>

                <h2>Fish Care Basics</h2>

                <p>
                  Fish are an important part of your pond ecosystem. Proper care ensures they remain healthy and active.
                </p>

                <h3>Feeding Guidelines</h3>
                <ul>
                  <li>Feed only what fish can consume in 5 minutes</li>
                  <li>Feed 2-3 times daily during active season</li>
                  <li>Use high-quality fish food appropriate for your species</li>
                  <li>Stop feeding when water temperature drops below 50°F</li>
                  <li>Resume feeding when water warms above 50°F</li>
                </ul>

                <h3>Common Fish Health Issues</h3>
                <ul>
                  <li><strong>Parasites:</strong> Watch for flashing, scratching, or unusual behavior</li>
                  <li><strong>Bacterial infections:</strong> Look for sores, fin rot, or cloudy eyes</li>
                  <li><strong>Oxygen deficiency:</strong> Fish gasping at surface</li>
                  <li><strong>Poor water quality:</strong> Lethargy, loss of appetite</li>
                </ul>

                <h2>Plant Care</h2>

                <p>
                  Aquatic plants not only beautify your pond but also play crucial roles in maintaining water quality and providing habitat for fish.
                </p>

                <h3>Plant Maintenance</h3>
                <ul>
                  <li>Divide overgrown plants every 2-3 years</li>
                  <li>Remove dead or yellowing leaves regularly</li>
                  <li>Fertilize potted plants with aquatic plant fertilizer</li>
                  <li>Control invasive species that can overtake the pond</li>
                  <li>Prune floating plants to prevent complete surface coverage</li>
                </ul>

                <h2>Equipment Maintenance</h2>

                <p>
                  Regular maintenance of pond equipment ensures everything works efficiently and prevents costly repairs.
                </p>

                <h3>Pump Care</h3>
                <ul>
                  <li>Clean pump intake regularly</li>
                  <li>Check for proper water flow</li>
                  <li>Inspect for wear and damage</li>
                  <li>Replace worn parts as needed</li>
                  <li>Consider pump size for your pond volume</li>
                </ul>

                <h3>Filter Maintenance</h3>
                <ul>
                  <li>Clean mechanical filters weekly</li>
                  <li>Rinse biological media monthly</li>
                  <li>Replace filter media as recommended</li>
                  <li>Check for proper water flow</li>
                  <li>Inspect for leaks or damage</li>
                </ul>

                <h2>Troubleshooting Common Problems</h2>

                <h3>Algae Issues</h3>
                <p>
                  <strong>Green water:</strong> Usually caused by excess nutrients and sunlight. Solutions include:
                </p>
                <ul>
                  <li>Add more plants to compete for nutrients</li>
                  <li>Reduce fish feeding</li>
                  <li>Use UV clarifiers</li>
                  <li>Add beneficial bacteria</li>
                  <li>Provide shade with floating plants</li>
                </ul>

                <h3>Cloudy Water</h3>
                <p>
                  <strong>Brown or cloudy water:</strong> Often caused by suspended particles. Solutions include:
                </p>
                <ul>
                  <li>Check and clean filters</li>
                  <li>Add flocculants</li>
                  <li>Ensure proper water circulation</li>
                  <li>Check for soil erosion into pond</li>
                </ul>

                <h3>Fish Health Problems</h3>
                <p>
                  <strong>Unhealthy fish:</strong> Usually indicates water quality issues. Steps to take:
                </p>
                <ul>
                  <li>Test water quality immediately</li>
                  <li>Perform partial water change</li>
                  <li>Check equipment function</li>
                  <li>Quarantine sick fish if possible</li>
                  <li>Consult with pond professional if problems persist</li>
                </ul>

                <h2>Professional Services</h2>

                <p>
                  While regular maintenance can be done by pond owners, some tasks are best left to professionals:
                </p>

                <ul>
                  <li><strong>Annual deep cleaning:</strong> Complete pond cleaning and inspection</li>
                  <li><strong>Equipment installation:</strong> New pumps, filters, or lighting</li>
                  <li><strong>Major repairs:</strong> Liner repairs, structural issues</li>
                  <li><strong>Water quality problems:</strong> Persistent issues requiring expertise</li>
                  <li><strong>Fish health issues:</strong> Disease diagnosis and treatment</li>
                </ul>

                <div className="cta-box">
                  <h3>Need Professional Help?</h3>
                  <p>
                    Our experienced team at Utah Water Gardens can help with all your pond care needs. From routine maintenance to complex repairs, we&apos;re here to keep your water garden beautiful and healthy.
                  </p>
                  <div className="cta-actions">
                    <Link href="/contact" className="cta-button primary">
                      <i className="fas fa-phone"></i>
                      Get Free Consultation
                    </Link>
                    <Link href="/schedule" className="cta-button secondary">
                      <i className="fas fa-calendar"></i>
                      Schedule Service
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
                    <Link href="/pond-cleanings">
                      <i className="fas fa-broom"></i>
                      Pond Cleanings
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
                    <Link href="/pond-repair-and-rebuild">
                      <i className="fas fa-wrench"></i>
                      Pond Repair
                    </Link>
                  </li>
                  <li>
                    <Link href="/pond-and-lake-dredging">
                      <i className="fas fa-water"></i>
                      Lake Dredging
                    </Link>
                  </li>
                  <li>
                    <Link href="/plant-delivery">
                      <i className="fas fa-seedling"></i>
                      Plant Delivery
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
                    <Link href="/resources/plant-care">
                      <i className="fas fa-seedling"></i>
                      Plant Care Guide
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
                    <Link href="/pond-maintenance">
                      <i className="fas fa-cog"></i>
                      Maintenance Services
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
            <h2 className="cta-title">Ready to Keep Your Pond Healthy?</h2>
            <p className="cta-description">Contact us today for professional pond maintenance services and expert advice on caring for your water garden.</p>
            <div className="cta-actions">
              <Link href="/contact" className="cta-button primary">
                <i className="fas fa-phone"></i>
                Get Free Quote
              </Link>
              <Link href="/schedule" className="cta-button secondary">
                <i className="fas fa-calendar"></i>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .pond-care-guide-page {
          background: #fff;
        }

        .page-header {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
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
          color: #1e3a8a;
          font-size: 2rem;
          margin: 40px 0 20px 0;
          font-weight: 600;
        }

        .page-content h3 {
          color: #3b82f6;
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
          color: #1e3a8a;
        }

        .cta-box {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border: 2px solid #3b82f6;
          border-radius: 12px;
          padding: 30px;
          margin: 40px 0;
          text-align: center;
        }

        .cta-box h3 {
          color: #1e3a8a;
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
          color: #1e3a8a;
          font-size: 1.3rem;
          margin: 0 0 20px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .widget-title i {
          color: #3b82f6;
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
          color: #3b82f6;
          margin-top: 3px;
          min-width: 16px;
        }

        .contact-item strong {
          color: #1e3a8a;
          display: block;
          margin-bottom: 2px;
        }

        .contact-item a {
          color: #3b82f6;
          text-decoration: none;
        }

        .contact-item a:hover {
          text-decoration: underline;
        }

        .contact-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #3b82f6;
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          margin-top: 20px;
          transition: background-color 0.3s;
        }

        .contact-button:hover {
          background: #1e3a8a;
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
          color: #3b82f6;
        }

        .services-list i,
        .resources-list i {
          color: #3b82f6;
          min-width: 16px;
        }

        .cta-section {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
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
          color: #1e3a8a;
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

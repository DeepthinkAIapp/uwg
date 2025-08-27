'use client';
import Image from 'next/image';

export default function FAQPage() {
  return (
    <div className="faq-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1 className="entry-title">Frequently Asked Questions</h1>
          <p className="entry-subtitle">Get answers to common questions about pond care and services</p>
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
                  We''t find the answer you''t hesitate to contact us directly.
                </p>

                <div className="faq-categories">
                  <h2>Pond Construction & Design</h2>

                  <div className="faq-item">
                    <h3>How much does it cost to build a pond?</h3>
                    <p>
                      Pond costs vary significantly based on size, complexity, and features. A basic 10x15 foot pond typically starts around $8,000-$15,000, while larger, more complex ponds with waterfalls and extensive landscaping can range from $20,000-$50,000 or more. We provide free consultations and detailed quotes for all projects.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>How long does it take to build a pond?</h3>
                    <p>
                      Most residential ponds take 1-3 weeks to complete, depending on size and complexity. Small ponds (under 1,000 gallons) can be completed in 3-5 days, while larger projects with extensive landscaping may take 2-4 weeks. Weather conditions can affect timelines.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>What size pond do I need?</h3>
                    <p>
                      The ideal pond size depends on your goals. For fish, we recommend at least 1,000 gallons (roughly 8x12 feet and 2-3 feet deep). For water features only, smaller ponds work well. Consider your space, budget, and maintenance preferences when choosing size.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>Do I need a permit to build a pond?</h3>
                    <p>
                      Permit requirements vary by location. In most Utah cities, small residential ponds don&apos;t require permits, but larger ponds or those near property lines might. We handle all permit applications and can check requirements for your specific location.
                    </p>
                  </div>

                  <h2>Pond Maintenance & Care</h2>

                  <div className="faq-item">
                    <h3>How often should I clean my pond?</h3>
                    <p>
                      Most ponds benefit from professional cleaning 1-2 times per year. Spring cleaning removes winter debris, while fall cleaning prepares for winter. Ponds with heavy fish loads or lots of trees may need more frequent cleaning. We offer maintenance plans to keep your pond healthy year-round.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>How do I control algae in my pond?</h3>
                    <p>
                      Algae control requires a multi-faceted approach: proper filtration, adequate plant coverage (60-70% of surface area), regular maintenance, and balanced fish population. We offer natural algae control solutions and can assess your specific situation to recommend the best approach.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>Do I need to feed my fish in winter?</h3>
                    <p>
                      No, you should not feed fish when water temperature is below 50°F. Fish become dormant in cold water and don''s climate, ponds should be at least 2-3 feet deep in the valley and 3-4 feet deep in higher elevations. This depth provides protection from winter freezing and summer heat. Deeper ponds (4-6 feet) offer even better protection and stability.
                    </p>
                  </div>

                  <h2>Fish & Aquatic Life</h2>

                  <div className="faq-item">
                    <h3>How many fish can I put in my pond?</h3>
                    <p>
                      A general rule is 1 inch of fish per 10 gallons of water. For koi, allow 250-500 gallons per fish. For goldfish, 50-100 gallons per fish. Remember that fish grow, so start with fewer fish and add more gradually. Overstocking leads to water quality problems.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>What fish are best for beginners?</h3>
                    <p>
                      Goldfish varieties like comets, shubunkins, and sarasa comets are excellent for beginners. They&apos;re hardy, affordable, and beautiful. Koi are also popular but require more space and care. We can help you choose the right fish for your pond and experience level.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>How do I know if my fish are healthy?</h3>
                    <p>
                      Healthy fish are active, have good appetite, clear eyes, smooth scales, and normal breathing. Watch for signs of illness like lethargy, loss of appetite, flashing (rubbing against objects), or visible spots. Regular water testing helps prevent health problems.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>Can fish survive Utah winters?</h3>
                    <p>
                      Yes, with proper pond design and care. Fish need adequate depth (3-4 feet minimum), water movement to prevent complete ice coverage, and good water quality. We carry winter-hardy fish species and can help you prepare your pond for winter.
                    </p>
                  </div>

                  <h2>Plants & Landscaping</h2>

                  <div className="faq-item">
                    <h3>What plants should I put in my pond?</h3>
                    <p>
                      A balanced pond includes oxygenating plants (hornwort, anacharis), floating plants (water lettuce, hyacinth), marginal plants (iris, cattails), and water lilies. We recommend 60-70% plant coverage for natural algae control and fish health.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>When should I plant aquatic plants?</h3>
                    <p>
                      Spring is the best time to plant, when water temperature reaches 60°F. Hardy plants can be planted earlier, while tropical plants should wait until water is consistently warm. We offer plant delivery and installation services throughout the growing season.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>Do I need to fertilize pond plants?</h3>
                    <p>
                      Yes, aquatic plants need nutrients to thrive. Use aquatic plant fertilizer tablets or liquid fertilizer. Start fertilizing when water reaches 60°F and continue through the growing season. Stop 6 weeks before first frost.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>How do I winterize my pond plants?</h3>
                    <p>
                      Hardy plants can stay in the pond over winter. Cut back dead foliage and ensure adequate depth. Tropical plants should be removed before frost or brought indoors. We offer winterization services to prepare your pond for cold weather.
                    </p>
                  </div>

                  <h2>Equipment & Systems</h2>

                  <div className="faq-item">
                    <h3>What size pump do I need?</h3>
                    <p>
                      Pump size depends on pond volume and desired flow rate. As a general rule, circulate the entire pond volume every 1-2 hours. For a 1,000-gallon pond, you''t always necessary. Well-balanced ponds with adequate plants often don&apos;t need UV. We can assess your specific situation and recommend whether UV would benefit your pond.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>How do I prevent my pond from freezing completely?</h3>
                    <p>
                      Keep water moving with a pump or aerator. Floating pond heaters can also help. Never break ice as the shock can harm fish. We offer winter equipment and can help you set up proper winter protection.
                    </p>
                  </div>

                  <h2>Services & Support</h2>

                  <div className="faq-item">
                    <h3>What areas do you serve?</h3>
                    <p>
                      We serve the greater Salt Lake City area and surrounding communities including Utah County, Davis County, and Weber County. We travel up to 50 miles from Salt Lake City for most services. Contact us to confirm service availability in your area.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>Do you offer emergency services?</h3>
                    <p>
                      Yes, we offer emergency services for critical situations like fish health problems, equipment failures, or water quality issues. We prioritize emergency calls and can usually respond within 24-48 hours depending on the situation.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>What is included in your maintenance plans?</h3>
                    <p>
                      Our maintenance plans include regular water testing, filter cleaning, plant care, fish health monitoring, seasonal maintenance, and emergency support. Plans can be customized to your specific needs and budget. Contact us for detailed information.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>Do you offer warranties on your work?</h3>
                    <p>
                      Yes, we provide warranties on all our work. New pond construction comes with a comprehensive warranty covering materials and workmanship. Equipment and plants have manufacturer warranties. We stand behind our work and are committed to your satisfaction.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>How do I schedule a consultation?</h3>
                    <p>
                      You can schedule a consultation by calling us at 801-590-8516, emailing contact@utahwatergardens.com, or using our online contact form. We offer free consultations and can usually schedule within a week. Consultations typically take 30-60 minutes.
                    </p>
                  </div>

                  <div className="faq-item">
                    <h3>Do you provide ongoing support after construction?</h3>
                    <p>
                      Absolutely! We provide ongoing support and education to all our customers. We offer maintenance services, troubleshooting help, and are always available to answer questions. We want your pond to be successful and enjoyable for years to come.
                    </p>
                  </div>

                </div>

                <div className="cta-box">
                  <h3>Still Have Questions?</h3>
                  <p>
                    If you didn''re looking for, we&apos;re here to help! Our experienced team can answer any questions about pond care, maintenance, or our services.
                  </p>
                  <div className="cta-actions">
                    <Link href="/contact" className="cta-button primary">
                      <i className="fas fa-phone"></i>
                      Contact Us
                    </Link>
                    <Link href="/schedule" className="cta-button secondary">
                      <i className="fas fa-calendar"></i>
                      Schedule Consultation
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
                    <Link href="/pond-construction">
                      <i className="fas fa-hammer"></i>
                      Pond Construction
                    </Link>
                  </li>
                  <li>
                    <Link href="/pond-maintenance">
                      <i className="fas fa-cog"></i>
                      Pond Maintenance
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
                    <Link href="/resources/pond-care-guide">
                      <i className="fas fa-water"></i>
                      Pond Care Guide
                    </Link>
                  </li>
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
                    <Link href="/schedule">
                      <i className="fas fa-calendar"></i>
                      Schedule Service
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
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">Contact us today for expert advice, professional services, and all your pond care needs.</p>
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
        .faq-page {
          background: #fff;
        }

        .page-header {
          background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
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

        .page-content p {
          margin-bottom: 20px;
          color: #374151;
        }

        .faq-categories h2 {
          color: #dc2626;
          font-size: 2rem;
          margin: 40px 0 20px 0;
          font-weight: 600;
          border-bottom: 2px solid #fecaca;
          padding-bottom: 10px;
        }

        .faq-item {
          margin-bottom: 30px;
          padding: 20px;
          background: #fef2f2;
          border-radius: 8px;
          border-left: 4px solid #dc2626;
        }

        .faq-item h3 {
          color: #dc2626;
          font-size: 1.3rem;
          margin: 0 0 15px 0;
          font-weight: 600;
        }

        .faq-item p {
          margin: 0;
          color: #374151;
        }

        .cta-box {
          background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%);
          border: 2px solid #dc2626;
          border-radius: 12px;
          padding: 30px;
          margin: 40px 0;
          text-align: center;
        }

        .cta-box h3 {
          color: #dc2626;
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
          color: #dc2626;
          font-size: 1.3rem;
          margin: 0 0 20px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .widget-title i {
          color: #ef4444;
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
          color: #ef4444;
          margin-top: 3px;
          min-width: 16px;
        }

        .contact-item strong {
          color: #dc2626;
          display: block;
          margin-bottom: 2px;
        }

        .contact-item a {
          color: #ef4444;
          text-decoration: none;
        }

        .contact-item a:hover {
          text-decoration: underline;
        }

        .contact-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ef4444;
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          margin-top: 20px;
          transition: background-color 0.3s;
        }

        .contact-button:hover {
          background: #dc2626;
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
          color: #ef4444;
        }

        .services-list i,
        .resources-list i {
          color: #ef4444;
          min-width: 16px;
        }

        .cta-section {
          background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
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
          background: #059669;
          color: white;
        }

        .cta-button.primary:hover {
          background: #047857;
          transform: translateY(-2px);
        }

        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-button.secondary:hover {
          background: white;
          color: #dc2626;
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

          .faq-categories h2 {
            font-size: 1.5rem;
          }

          .faq-item h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}

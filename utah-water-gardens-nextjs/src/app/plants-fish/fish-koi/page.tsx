'use client';
import Image from 'next/image';

export default function FishKoiPage() {
  return (
    <div className="fish-koi-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1 className="entry-title">Fish & Koi</h1>
          <p className="entry-subtitle">Professional Pond Services in Utah</p>
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
                  We offer a variety of colorful Winter Hardy Fish for your Pond/Water Features including Comets, Sarasa, Shubunkin, Lemon Metallic, Golden Orfes, and Koi. A great time to introduce new Fish to a Pond is in Late Spring and Early Summer when temperatures aren&apos;t too cold or too warm.
                </p>

                <div className="content-image">
                  <Image
                    src="/images/20140919_105345-768x576-1.webp"
                    alt="Koi fish swimming among aquatic plants and lily pads in a natural backyard pond"
                    width={768}
                    height={576}
                    className="alignright"
                  />
                </div>

                <p>
                  Fish and Koi are important members of Ponds and Water Features. Fish not only provide visual interest, but also perform functions them important members of any healthy Aquatic Ecosystem. Fish will naturally eat many types of algae and insects that can accumulate in Ponds and Water Features. Fish forage for their food in the wild and can help keep Ponds clean and free from pests like Mosquito that deposit their larvae in water.
                </p>

                <h2>Benefits of fish in your pond</h2>

                <p>
                  Fish can also provide benefits for Aquatic Plants in Ponds and Water Features. Fish waste contains nutrients that fertilize Aquatic Plants and add to a more complete Aquatic Ecosystem. Fish waste will not benefit plants that are kept potted in containers. Plants that are free-floating or bare root will benefit from the nutrients in Fish waste.
                </p>

                <h2>Tips for fish survival in winter weather</h2>

                <p>
                  Although the Fish we carry are Winter Hardy, certain conditions must be met to ensure their survival. To prevent Fish from dying in the Winter months here in Utah, Ponds should be 2-3 feet in depth in the Valley and 3-4 along the Benches and higher elevations. Greater depths can provide Fish with more protection from elements. Fish go dormant in Winter months, which means that their metabolism slows down and they do not eat. While they are dormant they are still breathing and require gas exchange to ensure their survival. In order for them to get the oxygen they need, Pond Surfaces should not ice over and freeze completely. A hole in the ice is necessary for the exchange of gases. This can be done by running the pump through the Winter, using a pond aerator, or using a floating Pond Heater that it thermostatically controlled.
                </p>
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

              {/* Testimonials Widget */}
              <div className="sidebar-widget testimonials-widget">
                <h3 className="widget-title">
                  <i className="fas fa-star"></i>
                  What Our Clients Say
                </h3>
                <div className="testimonial-item">
                  <div className="testimonial-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-text">
                    &quot;Utah Water Gardens did an amazing job on our pond. It&apos;s truly the centerpiece of our backyard now!&quot;
                  </p>
                  <div className="testimonial-author">
                    <strong>Joe</strong>
                    <span>Salt Lake City, UT</span>
                  </div>
                </div>
                <Link href="/testimonials" className="testimonials-link">
                  View All Reviews
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Add Fish to Your Pond?</h2>
            <p className="cta-description">Contact us today for a free consultation and let us help you choose the perfect fish for your water garden.</p>
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
        .fish-koi-page {
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
          font-size: 1.8rem;
          margin: 30px 0 15px 0;
          font-weight: 600;
        }

        .page-content p {
          margin-bottom: 20px;
          color: #374151;
        }

        .content-image {
          margin: 30px 0;
          text-align: center;
        }

        .content-image img {
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .alignright {
          float: right;
          margin: 0 0 20px 20px;
          max-width: 400px;
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

        .services-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .services-list li {
          margin-bottom: 10px;
        }

        .services-list a {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #374151;
          text-decoration: none;
          padding: 8px 0;
          transition: color 0.3s;
        }

        .services-list a:hover {
          color: #3b82f6;
        }

        .services-list i {
          color: #3b82f6;
          min-width: 16px;
        }

        .testimonial-item {
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 15px;
        }

        .testimonial-rating {
          color: #fbbf24;
          margin-bottom: 10px;
        }

        .testimonial-text {
          font-style: italic;
          margin: 0 0 15px 0;
          color: #374151;
        }

        .testimonial-author strong {
          color: #1e3a8a;
          display: block;
        }

        .testimonial-author span {
          color: #6b7280;
          font-size: 0.9rem;
        }

        .testimonials-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #3b82f6;
          text-decoration: none;
          font-weight: 600;
        }

        .testimonials-link:hover {
          text-decoration: underline;
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

          .alignright {
            float: none;
            margin: 20px 0;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

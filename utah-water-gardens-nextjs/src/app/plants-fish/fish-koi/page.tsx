'use client';
import Link from 'next/link';
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

      
    </div>
  );
}

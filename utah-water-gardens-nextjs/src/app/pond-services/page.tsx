import { HeroSlideshow } from '@/components/layout/HeroSlideshow';
import Link from 'next/link';
import { PageTemplate } from '@/components/layout/PageTemplate';
import Image from 'next/image';

export default function PondServicesPage() {
  return (
    <PageTemplate
      showBreadcrumbs={true}
      breadcrumbs={[
        { label: '', href: '' }
      ]}
      showTestimonials={true}
      showServices={true}
      showCTA={true}
      ctaTitle="Ready to Transform Your Pond?"
      ctaDescription="Contact us today for professional pond services and let us help you create the water garden of your dreams."
      ctaButtonText="Get Free Quote"
      ctaButtonLink="/contact"
    >
      {/* Hero Slideshow */}
      <HeroSlideshow 
        autoPlay={true}
        interval={6000}
        showIndicators={true}
        showControls={true}
      />

      {/* Main Content */}
      <section className="services-content">
        <div className="section-header">
          <h2 className="section-title">Professional Pond Services in Utah</h2>
          <p className="section-subtitle">
            From construction to maintenance, we provide comprehensive pond services to keep your water feature beautiful and healthy year-round.
          </p>
        </div>

        <div className="services-detailed">
          <div className="service-item">
            <div className="service-image">
              <Image
                src="/images/pondConstruction1000x800.webp"
                alt="Custom pond construction services"
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="service-details">
              <h3 className="service-name">Pond Construction</h3>
              <p className="service-description">
                We specialize in custom pond design and construction, helping homeowners create beautiful water features that enhance their outdoor living space. Our expert team handles everything from initial design to final installation.
              </p>
              <ul className="service-features">
                <li>Custom design and planning</li>
                <li>Professional excavation and installation</li>
                <li>Filtration system setup</li>
                <li>Landscaping integration</li>
              </ul>
              <Link href="/pond-construction" className="service-cta">
                Learn More About Construction
              </Link>
            </div>
          </div>

          <div className="service-item reverse">
            <div className="service-image">
              <Image
                src="/images/pondMaintenance.webp"
                alt="Pond maintenance and care services"
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="service-details">
              <h3 className="service-name">Pond Maintenance</h3>
              <p className="service-description">
                Regular maintenance is essential for keeping your pond healthy and beautiful. Our maintenance programs include water quality management, plant care, and seasonal cleanings to ensure your pond thrives year-round.
              </p>
              <ul className="service-features">
                <li>Water quality testing and treatment</li>
                <li>Plant maintenance and trimming</li>
                <li>Filter system maintenance</li>
                <li>Seasonal care programs</li>
              </ul>
              <Link href="/pond-maintenance" className="service-cta">
                View Maintenance Plans
              </Link>
            </div>
          </div>

          <div className="service-item">
            <div className="service-image">
              <Image
                src="/images/pondCleanings.webp"
                alt="Professional pond cleaning services"
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="service-details">
              <h3 className="service-name">Pond Cleanings</h3>
              <p className="service-description">
                Professional pond cleaning services to restore clarity and health to your water feature. We use specialized equipment and techniques to remove debris, algae, and sediment while preserving your aquatic ecosystem.
              </p>
              <ul className="service-features">
                <li>Complete pond vacuuming</li>
                <li>Algae and debris removal</li>
                <li>Filter system cleaning</li>
                <li>Water quality restoration</li>
              </ul>
              <Link href="/pond-cleanings" className="service-cta">
                Schedule a Cleaning
              </Link>
            </div>
          </div>

          <div className="service-item reverse">
            <div className="service-image">
              <Image
                src="/images/pondDredging.webp"
                alt="Lake and pond dredging services"
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="service-details">
              <h3 className="service-name">Lake & Pond Dredging</h3>
              <p className="service-description">
                For larger water features, our dredging services remove accumulated sediment and restore water depth. We have the equipment and expertise to handle projects of all sizes, from small ponds to large lakes.
              </p>
              <ul className="service-features">
                <li>Sediment removal and disposal</li>
                <li>Depth restoration</li>
                <li>Water quality improvement</li>
                <li>Ecosystem restoration</li>
              </ul>
              <Link href="/pond-and-lake-dredging" className="service-cta">
                Learn About Dredging
              </Link>
            </div>
          </div>
        </div>

        <div className="why-choose-us">
          <h2 className="section-title">Why Choose Utah Water Gardens?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="benefit-title">Expert Team</h3>
              <p className="benefit-description">
                Our experienced professionals have years of experience in pond design, construction, and maintenance.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="benefit-title">Reliable Service</h3>
              <p className="benefit-description">
                We pride ourselves on punctuality and quality workmanship, ensuring your project is completed on time.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="benefit-title">Local Business</h3>
              <p className="benefit-description">
                As a local Utah business, we understand the unique challenges of maintaining ponds in our climate.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="benefit-title">Quality Guaranteed</h3>
              <p className="benefit-description">
                We stand behind our work with quality guarantees and ongoing support for all our services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}

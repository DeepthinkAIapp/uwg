import { PageTemplate } from '@/components/layout/PageTemplate';
import Image from 'next/image';
import Link from 'next/link';

export default function PondFiltersPage() {
  return (
    <PageTemplate
      heroTitle="Professional Pond Filtration Systems"
      heroSubtitle="Keep your pond water crystal clear with expert filtration solutions"
      heroImage="/images/pondMaintenance.webp"
      heroAlt="Professional pond filtration service in Utah"
      breadcrumbs={[
        { label: 'Pond Services', href: '/pond-services' },
        { label: 'Pond Filters' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "What type of filter do I need for my pond?",
          answer: "The type of filter you need depends on your pond size, fish population, and water volume. Small ponds may only need a simple mechanical filter, while larger ponds with fish require biological filtration. We'll assess your specific needs and recommend the best system."
        },
        {
          question: "How often should I clean my pond filter?",
          answer: "Filter cleaning frequency depends on your filter type and pond conditions. Mechanical filters typically need cleaning every 1-2 weeks during peak season, while biological filters require less frequent maintenance. We'll provide a customized maintenance schedule for your system."
        },
        {
          question: "Can I upgrade my existing filter system?",
          answer: "Yes, we can upgrade your existing filter system to improve water quality and reduce maintenance. We'll assess your current setup and recommend upgrades that will work with your existing equipment or suggest complete system replacements when beneficial."
        },
        {
          question: "How do I know if my filter is working properly?",
          answer: "Signs of a properly working filter include clear water, healthy fish, and minimal algae growth. If you notice cloudy water, excessive algae, or poor fish health, your filter may need attention. We can diagnose and repair filter issues quickly."
        }
      ]}
      metaTitle="Pond Filters Utah | Professional Filtration Systems"
      metaDescription="Professional pond filtration systems in Utah. Expert filter installation, maintenance, and repair. Keep your pond water crystal clear. Call 801-590-8516 today!"
    >
      <div className="content-section">
        <h2>Expert Pond Filtration Systems</h2>
        <p>
          Proper filtration is essential for maintaining a healthy, beautiful pond. Our professional 
          filtration systems remove debris, balance water chemistry, and create the optimal environment 
          for fish and aquatic plants. Whether you need a new filter system, upgrades to existing 
          equipment, or maintenance services, our experienced team provides comprehensive filtration 
          solutions tailored to your pond's specific needs.
        </p>

        <div className="info-box">
          <h3>Why Proper Filtration is Critical</h3>
          <p>
            <strong>Water clarity:</strong> Removes debris and suspended particles for crystal clear water<br />
            <strong>Fish health:</strong> Maintains optimal water quality for healthy aquatic life<br />
            <strong>Algae control:</strong> Reduces nutrient buildup that feeds algae growth<br />
            <strong>System longevity:</strong> Protects pumps and equipment from damage
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Filtration Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-filter"></i>
            </div>
            <h3>Filter System Design</h3>
            <p>
              Custom filter system design based on your pond size, fish population, and water volume. 
              We'll recommend the perfect combination of mechanical, biological, and UV filtration for 
              optimal water quality.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Filter Installation</h3>
            <p>
              Professional installation of all types of pond filters including canister filters, 
              pressurized filters, and multi-stage systems. We ensure proper setup and integration 
              with your existing pond equipment.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h3>Filter Maintenance</h3>
            <p>
              Regular filter maintenance including cleaning, media replacement, and system optimization. 
              We'll create a maintenance schedule tailored to your specific filter system and pond conditions.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-wrench"></i>
            </div>
            <h3>Filter Repair</h3>
            <p>
              Expert diagnosis and repair of filter issues including leaks, clogs, and mechanical problems. 
              We can fix most filter problems quickly and get your system running optimally again.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-arrow-up"></i>
            </div>
            <h3>System Upgrades</h3>
            <p>
              Upgrade your existing filter system to improve performance, reduce maintenance, and enhance 
              water quality. We'll recommend upgrades that work with your current setup or suggest complete 
              system replacements.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Water Quality Testing</h3>
            <p>
              Comprehensive water quality testing to ensure your filter system is working properly. 
              We'll test pH, ammonia, nitrites, nitrates, and other parameters to maintain optimal conditions.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Types of Pond Filters</h2>
        <div className="filter-types-grid">
          <div className="filter-type-card">
            <h3>Mechanical Filters</h3>
            <p>
              <strong>Purpose:</strong> Remove physical debris and particles from water<br />
              <strong>Best for:</strong> All pond sizes, especially those with fish<br />
              <strong>Maintenance:</strong> Regular cleaning of filter media<br />
              <strong>Benefits:</strong> Improves water clarity, protects biological filters
            </p>
            <ul>
              <li>Foam filters</li>
              <li>Filter pads</li>
              <li>Filter brushes</li>
              <li>Sediment chambers</li>
            </ul>
          </div>

          <div className="filter-type-card">
            <h3>Biological Filters</h3>
            <p>
              <strong>Purpose:</strong> Convert harmful ammonia and nitrites to nitrates<br />
              <strong>Best for:</strong> Ponds with fish or high organic load<br />
              <strong>Maintenance:</strong> Minimal, avoid over-cleaning<br />
              <strong>Benefits:</strong> Maintains water quality, supports fish health
            </p>
            <ul>
              <li>Bio-balls</li>
              <li>Ceramic media</li>
              <li>Lava rock</li>
              <li>Bio-wheels</li>
            </ul>
          </div>

          <div className="filter-type-card">
            <h3>UV Sterilizers</h3>
            <p>
              <strong>Purpose:</strong> Kill algae and harmful bacteria with ultraviolet light<br />
              <strong>Best for:</strong> Ponds with algae problems<br />
              <strong>Maintenance:</strong> Bulb replacement annually<br />
              <strong>Benefits:</strong> Controls algae, improves water clarity
            </p>
            <ul>
              <li>UV clarifiers</li>
              <li>UV sterilizers</li>
              <li>Combination units</li>
              <li>Inline systems</li>
            </ul>
          </div>

          <div className="filter-type-card">
            <h3>Multi-Stage Filters</h3>
            <p>
              <strong>Purpose:</strong> Combine multiple filtration methods in one unit<br />
              <strong>Best for:</strong> Medium to large ponds<br />
              <strong>Maintenance:</strong> Regular cleaning of all stages<br />
              <strong>Benefits:</strong> Comprehensive filtration, space efficient
            </p>
            <ul>
              <li>Canister filters</li>
              <li>Pressurized filters</li>
              <li>Bead filters</li>
              <li>Sand filters</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Signs Your Filter Needs Attention</h2>
        <div className="signs-grid">
          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Cloudy Water</h3>
            <p>
              <strong>Signs:</strong> Water appears murky or cloudy<br />
              <strong>Causes:</strong> Clogged mechanical filter, insufficient filtration<br />
              <strong>Solution:</strong> Clean filter media, check flow rate
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h3>Excessive Algae</h3>
            <p>
              <strong>Signs:</strong> Green water, algae growth on surfaces<br />
              <strong>Causes:</strong> High nutrient levels, insufficient biological filtration<br />
              <strong>Solution:</strong> Upgrade biological filter, add UV sterilizer
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h3>Poor Fish Health</h3>
            <p>
              <strong>Signs:</strong> Fish stress, gasping, poor appetite<br />
              <strong>Causes:</strong> High ammonia/nitrites, poor water quality<br />
              <strong>Solution:</strong> Check biological filter, test water parameters
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Low Water Flow</h3>
            <p>
              <strong>Signs:</strong> Reduced waterfall flow, weak circulation<br />
              <strong>Causes:</strong> Clogged filter, pump issues<br />
              <strong>Solution:</strong> Clean filter, check pump performance
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-thermometer-half"></i>
            </div>
            <h3>Water Quality Issues</h3>
            <p>
              <strong>Signs:</strong> Foul odors, foam on surface<br />
              <strong>Causes:</strong> Organic buildup, insufficient filtration<br />
              <strong>Solution:</strong> Clean filter, increase filtration capacity
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Filter Malfunctions</h3>
            <p>
              <strong>Signs:</strong> Leaks, unusual noises, equipment failure<br />
              <strong>Causes:</strong> Wear and tear, improper maintenance<br />
              <strong>Solution:</strong> Professional repair or replacement
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Filter Maintenance Schedule</h2>
        <div className="maintenance-schedule">
          <div className="schedule-card">
            <h3>Weekly Maintenance</h3>
            <ul>
              <li>Check filter flow rate</li>
              <li>Inspect for visible debris</li>
              <li>Test water clarity</li>
              <li>Monitor fish behavior</li>
            </ul>
          </div>

          <div className="schedule-card">
            <h3>Monthly Maintenance</h3>
            <ul>
              <li>Clean mechanical filter media</li>
              <li>Check filter connections</li>
              <li>Test water parameters</li>
              <li>Inspect UV bulb (if applicable)</li>
            </ul>
          </div>

          <div className="schedule-card">
            <h3>Seasonal Maintenance</h3>
            <ul>
              <li>Deep clean filter system</li>
              <li>Replace worn filter media</li>
              <li>Check pump performance</li>
              <li>Update maintenance schedule</li>
            </ul>
          </div>

          <div className="schedule-card">
            <h3>Annual Maintenance</h3>
            <ul>
              <li>Replace UV bulbs</li>
              <li>Inspect all equipment</li>
              <li>Update filter media</li>
              <li>Professional system check</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Filter System Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h4>Crystal Clear Water</h4>
            <p>Remove debris and suspended particles for beautiful, clear water</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h4>Healthy Fish</h4>
            <p>Maintain optimal water quality for thriving aquatic life</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h4>Algae Control</h4>
            <p>Reduce nutrient buildup that feeds algae growth</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h4>Equipment Protection</h4>
            <p>Protect pumps and other equipment from damage</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h4>Reduced Maintenance</h4>
            <p>Proper filtration reduces overall pond maintenance needs</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h4>Peace of Mind</h4>
            <p>Confidence that your pond ecosystem is healthy and balanced</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Related Services</h2>
        <p>
          Our filtration services work together with our other pond services:
        </p>

        <div className="related-services">
          <Link href="/pond-maintenance" className="service-link">
            <i className="fas fa-cog"></i>
            Pond Maintenance
          </Link>
          <Link href="/pond-pump-repair" className="service-link">
            <i className="fas fa-wrench"></i>
            Pump Repair
          </Link>
          <Link href="/pond-supplies" className="service-link">
            <i className="fas fa-tools"></i>
            Pond Supplies
          </Link>
          <Link href="/pond-consultations" className="service-link">
            <i className="fas fa-comments"></i>
            Consultations
          </Link>
          <Link href="/contact" className="service-link">
            <i className="fas fa-phone"></i>
            Get Service
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Need Filter Service?</h2>
        <p>
          Don't let poor filtration compromise your pond's health and beauty. Contact us today for 
          professional filter installation, maintenance, or repair services.
        </p>
        
        <div className="cta-actions">
          <Link href="/contact" className="cta-button primary">
            <i className="fas fa-phone"></i>
            Get Filter Service
          </Link>
          <Link href="/schedule" className="cta-button secondary">
            <i className="fas fa-calendar"></i>
            Schedule Maintenance
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
}

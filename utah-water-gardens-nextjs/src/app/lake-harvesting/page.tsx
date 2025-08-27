import { PageTemplate } from '@/components/layout/PageTemplate';
import Link from 'next/link';

export default function LakeHarvestingPage() {
  return (
    <PageTemplate
      heroTitle="Professional Lake Harvesting Services"
      heroSubtitle="Expert fish population management and lake ecosystem optimization for large water bodies"
      heroImage="/images/pondDredging.webp"
      heroAlt="Professional lake harvesting service in Utah"
      breadcrumbs={[
        { label: 'Pond Services', href: '/pond-services' },
        { label: 'Lake Harvesting' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "What is lake harvesting and how does it differ from pond harvesting?",
          answer: "Lake harvesting involves managing fish populations in larger water bodies (typically 5+ acres). It requires different equipment and techniques than pond harvesting, including larger nets, boats, and more sophisticated population assessment methods."
        },
        {
          question: "How often should a lake be harvested?",
          answer: "Harvesting frequency depends on lake size, fish population density, and management goals. Most lakes benefit from harvesting every 2-5 years. We'll assess your specific lake and recommend an optimal schedule."
        },
        {
          question: "What types of fish do you harvest from lakes?",
          answer: "We harvest various species including bass, trout, catfish, bluegill, and other game fish. The specific species targeted depends on your lake's ecosystem and management objectives."
        },
        {
          question: "Do you provide post-harvesting management services?",
          answer: "Yes, we offer comprehensive post-harvesting services including water quality monitoring, fish health assessment, and recommendations for ongoing lake management and future harvesting schedules."
        }
      ]}
      metaTitle="Lake Harvesting Utah | Professional Fish Population Management"
      metaDescription="Professional lake harvesting services in Utah. Expert fish population management, ecosystem optimization, and large water body management. Call 801-590-8516 today!"
    >
      <div className="content-section">
        <h2>Expert Lake Harvesting Services</h2>
        <p>
          Maintain optimal fish health and lake ecosystem balance with our professional harvesting 
          services designed specifically for large water bodies. Lake harvesting is essential for 
          managing fish populations, preventing overcrowding, and ensuring your lake remains a 
          healthy, sustainable ecosystem. Our experienced team uses advanced harvesting techniques 
          and equipment to efficiently manage large-scale fish populations while preserving the 
          overall health of your lake. Whether you need population control, size management, or 
          complete lake restocking, we provide comprehensive harvesting solutions tailored to your 
          specific lake and management goals.
        </p>

        <div className="info-box">
          <h3>Why Lake Harvesting is Essential</h3>
          <p>
            <strong>Population control:</strong> Prevents overcrowding and resource competition in large water bodies<br />
            <strong>Fish health:</strong> Reduces stress and disease transmission among fish populations<br />
            <strong>Water quality:</strong> Maintains optimal oxygen and nutrient levels for lake health<br />
            <strong>Growth optimization:</strong> Allows remaining fish to grow larger and healthier<br />
            <strong>Ecosystem balance:</strong> Maintains proper predator-prey relationships
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Lake Harvesting Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Lake Assessment</h3>
            <p>
              Comprehensive evaluation of your lake's fish population including species identification, 
              size distribution, population density, and overall ecosystem health assessment.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h3>Population Management</h3>
            <p>
              Strategic harvesting to maintain optimal fish population levels, species ratios, and 
              size distribution for healthy lake ecosystems and better fishing opportunities.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-balance-scale"></i>
            </div>
            <h3>Size Management</h3>
            <p>
              Targeted harvesting to improve size distribution, allowing remaining fish to grow 
              larger and creating better trophy fishing opportunities.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-recycle"></i>
            </div>
            <h3>Fish Relocation</h3>
            <p>
              Safe relocation of harvested fish to other lakes or facilities, ensuring they continue 
              to thrive in appropriate environments and contribute to other ecosystems.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Water Quality Management</h3>
            <p>
              Post-harvesting water quality assessment and management to ensure optimal conditions 
              for remaining fish and overall lake ecosystem health.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-calendar"></i>
            </div>
            <h3>Harvesting Planning</h3>
            <p>
              Development of long-term harvesting schedules and strategies to maintain optimal 
              population levels and lake health over time.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Lake Harvesting Methods</h2>
        <div className="methods-grid">
          <div className="method-card">
            <h3>Gill Netting</h3>
            <p>
              <strong>Best for:</strong> Large lakes, multiple species, size-selective harvesting<br />
              <strong>Process:</strong> Strategic placement of gill nets to capture specific fish sizes<br />
              <strong>Benefits:</strong> Highly selective, efficient for large areas<br />
              <strong>Considerations:</strong> Requires proper mesh size selection and monitoring
            </p>
          </div>

          <div className="method-card">
            <h3>Seine Netting</h3>
            <p>
              <strong>Best for:</strong> Shoreline areas, concentrated populations<br />
              <strong>Process:</strong> Large seine nets deployed from boats to capture fish<br />
              <strong>Benefits:</strong> Effective for large catches, allows for selection<br />
              <strong>Considerations:</strong> Requires multiple boats and personnel
            </p>
          </div>

          <div className="method-card">
            <h3>Electrofishing</h3>
            <p>
              <strong>Best for:</strong> Precise targeting, assessment work<br />
              <strong>Process:</strong> Temporary stunning for easy capture and assessment<br />
              <strong>Benefits:</strong> Highly selective, minimal disturbance<br />
              <strong>Considerations:</strong> Requires specialized equipment and training
            </p>
          </div>

          <div className="method-card">
            <h3>Trapping</h3>
            <p>
              <strong>Best for:</strong> Specific species, ongoing management<br />
              <strong>Process:</strong> Strategic placement of traps for targeted capture<br />
              <strong>Benefits:</strong> Continuous management, species-specific<br />
              <strong>Considerations:</strong> Requires regular monitoring and maintenance
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Signs Your Lake Needs Harvesting</h2>
        <div className="signs-grid">
          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h3>Overcrowding</h3>
            <p>
              <strong>Signs:</strong> Fish competing for food, reduced growth rates, stunted fish<br />
              <strong>Impact:</strong> Poor fish health, reduced fishing quality<br />
              <strong>Solution:</strong> Population reduction through selective harvesting
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-thermometer-half"></i>
            </div>
            <h3>Poor Water Quality</h3>
            <p>
              <strong>Signs:</strong> Low oxygen levels, high nutrient loading, algae blooms<br />
              <strong>Impact:</strong> Fish stress, ecosystem imbalance<br />
              <strong>Solution:</strong> Population management to reduce nutrient load
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-ruler"></i>
            </div>
            <h3>Size Imbalance</h3>
            <p>
              <strong>Signs:</strong> Too many small fish, few large specimens<br />
              <strong>Impact:</strong> Poor fishing quality, resource competition<br />
              <strong>Solution:</strong> Selective harvesting to improve size distribution
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Disease Outbreaks</h3>
            <p>
              <strong>Signs:</strong> Sick fish, unusual behavior, mortality<br />
              <strong>Impact:</strong> Population decline, spread of illness<br />
              <strong>Solution:</strong> Remove affected fish to prevent spread
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Vegetation Issues</h3>
            <p>
              <strong>Signs:</strong> Excessive plant growth, reduced open water<br />
              <strong>Impact:</strong> Poor fish habitat, reduced oxygen levels<br />
              <strong>Solution:</strong> Population management to reduce nutrient load
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Long-term Management</h3>
            <p>
              <strong>Signs:</strong> No recent harvesting, declining fish quality<br />
              <strong>Impact:</strong> Gradual ecosystem degradation<br />
              <strong>Solution:</strong> Regular harvesting schedule implementation
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Lake Harvesting Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Initial Assessment</h3>
            <p>
              We conduct a comprehensive evaluation of your lake including fish population survey, 
              water quality analysis, and ecosystem health assessment to determine optimal harvesting strategy.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Method Selection</h3>
            <p>
              Based on your lake size, fish species, and management goals, we select the most 
              appropriate and efficient harvesting methods for your specific situation.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Equipment Setup</h3>
            <p>
              We deploy the necessary equipment including boats, nets, and monitoring devices 
              to ensure safe and efficient harvesting operations.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Fish Capture</h3>
            <p>
              Using the selected methods, we carefully capture fish while minimizing stress and 
              ensuring their safety throughout the harvesting process.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Selective Removal</h3>
            <p>
              We selectively remove fish based on predetermined criteria such as size, species, 
              or health status while preserving the overall population balance.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">6</div>
            <h3>Post-Harvest Management</h3>
            <p>
              We assess water quality, monitor remaining fish health, and provide comprehensive 
              recommendations for ongoing lake management and future harvesting schedules.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Lake Harvesting Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h4>Improved Fish Health</h4>
            <p>Reduce stress and disease transmission by maintaining optimal population levels</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h4>Better Water Quality</h4>
            <p>Maintain optimal oxygen levels and reduce nutrient loading for healthier water</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-ruler"></i>
            </div>
            <h4>Larger Fish Growth</h4>
            <p>Allow remaining fish to grow larger with reduced competition for resources</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-balance-scale"></i>
            </div>
            <h4>Population Balance</h4>
            <p>Maintain optimal species ratios and size distribution for better ecosystem health</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-fishing-rod"></i>
            </div>
            <h4>Better Fishing</h4>
            <p>Improve fishing quality with larger, healthier fish and better catch rates</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h4>Ecosystem Health</h4>
            <p>Maintain a balanced, sustainable lake ecosystem for long-term enjoyment</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Lake Harvesting Considerations</h2>
        <div className="considerations-grid">
          <div className="consideration-card">
            <h3>Timing</h3>
            <ul>
              <li>Spring or fall harvesting</li>
              <li>Avoid spawning seasons</li>
              <li>Consider water temperature</li>
              <li>Plan around weather conditions</li>
              <li>Coordinate with other lake work</li>
            </ul>
          </div>

          <div className="consideration-card">
            <h3>Fish Handling</h3>
            <ul>
              <li>Minimize stress during capture</li>
              <li>Proper fish identification</li>
              <li>Safe transportation methods</li>
              <li>Humane processing options</li>
              <li>Health assessment protocols</li>
            </ul>
          </div>

          <div className="consideration-card">
            <h3>Legal Requirements</h3>
            <ul>
              <li>Fishing license requirements</li>
              <li>Species-specific regulations</li>
              <li>Transportation permits</li>
              <li>Disposal regulations</li>
              <li>Environmental compliance</li>
            </ul>
          </div>

          <div className="consideration-card">
            <h3>Long-term Planning</h3>
            <ul>
              <li>Regular harvesting schedules</li>
              <li>Population monitoring</li>
              <li>Restocking strategies</li>
              <li>Habitat improvement</li>
              <li>Ongoing management plans</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Related Services</h2>
        <p>
          Our lake harvesting services work together with our other water body services:
        </p>

        <div className="related-services">
          <Link href="/pond-harvesting" className="service-link">
            <i className="fas fa-fish"></i>
            Pond Harvesting
          </Link>
          <Link href="/pond-maintenance" className="service-link">
            <i className="fas fa-cog"></i>
            Pond Maintenance
          </Link>
          <Link href="/pond-consultations" className="service-link">
            <i className="fas fa-comments"></i>
            Consultations
          </Link>
          <Link href="/lake-dredging" className="service-link">
            <i className="fas fa-water"></i>
            Lake Dredging
          </Link>
          <Link href="/contact" className="service-link">
            <i className="fas fa-phone"></i>
            Get Service
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Need Lake Harvesting?</h2>
        <p>
          Don't let overcrowding compromise your lake's health and fishing quality. Contact us today 
          for professional harvesting services that will restore balance to your lake ecosystem.
        </p>
        
        <div className="cta-actions">
          <Link href="/contact" className="cta-button primary">
            <i className="fas fa-phone"></i>
            Get Harvesting Quote
          </Link>
          <Link href="/schedule" className="cta-button secondary">
            <i className="fas fa-calendar"></i>
            Schedule Assessment
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
}

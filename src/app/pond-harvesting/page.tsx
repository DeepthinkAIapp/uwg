import { PageTemplate } from '@/components/layout/PageTemplate';
import Link from 'next/link';

export default function PondHarvestingPage() {
  return (
    <PageTemplate
      heroTitle="Professional Pond Harvesting Services"
      heroSubtitle="Expert fish harvesting and pond management for optimal fish health and population control"
      heroImage="/images/pondHarvesting1000x800.webp"
      heroAlt="Professional pond harvesting service in Utah"
      breadcrumbs={[
        { label: 'Pond Services', href: '/pond-services' },
        { label: 'Pond Harvesting' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "What is pond harvesting and why is it necessary?",
          answer: "Pond harvesting involves selectively removing fish from your pond to maintain optimal population levels, improve fish health, and prevent overcrowding. It&apos;s essential for maintaining water quality and ensuring the remaining fish have adequate space and resources."
        },
        {
          question: "How often should I harvest my pond?",
          answer: "Harvesting frequency depends on your pond size, fish population, and goals. Most ponds benefit from harvesting every 1-3 years. We&apos;ll assess your specific situation and recommend the optimal schedule for your pond."
        },
        {
          question: "Do you harvest all the fish or just some?",
          answer: "We practice selective harvesting, removing only specific fish based on size, health, and population management goals. We never harvest all fish unless you&apos;re planning to completely restock the pond."
        },
        {
          question: "What happens to the harvested fish?",
          answer: "We offer several options for harvested fish: relocation to other ponds, donation to educational facilities, or humane processing. We&apos;ll discuss your preferences and handle the fish according to your wishes."
        }
      ]}
      metaTitle="Pond Harvesting Utah | Professional Fish Population Management"
      metaDescription="Professional pond harvesting services in Utah. Expert fish population management, selective harvesting, and pond health optimization. Call 801-590-8516 today!"
    >
      <div className="content-section">
        <h2>Expert Pond Harvesting Services</h2>
        <p>
          Maintain optimal fish health and pond balance with our professional harvesting services. 
          Pond harvesting is essential for managing fish populations, preventing overcrowding, and 
          ensuring your pond ecosystem remains healthy and sustainable. Our experienced team uses 
          humane, selective harvesting methods to remove specific fish while preserving the overall 
          health of your pond. Whether you need population control, size management, or complete 
          pond restocking, we provide comprehensive harvesting solutions tailored to your specific needs.
        </p>

        <div className="info-box">
          <h3>Why Pond Harvesting is Essential</h3>
          <p>
            <strong>Population control:</strong> Prevents overcrowding and resource competition<br />
            <strong>Fish health:</strong> Reduces stress and disease transmission<br />
            <strong>Water quality:</strong> Maintains optimal oxygen and nutrient levels<br />
            <strong>Growth optimization:</strong> Allows remaining fish to grow larger and healthier
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Harvesting Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Population Assessment</h3>
            <p>
              Comprehensive evaluation of your fish population including species identification, 
              size distribution, and health assessment to determine optimal harvesting strategy.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h3>Selective Harvesting</h3>
            <p>
              Targeted removal of specific fish based on size, species, or health criteria while 
              preserving the overall population balance and ecosystem health.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-balance-scale"></i>
            </div>
            <h3>Size Management</h3>
            <p>
              Strategic harvesting to maintain optimal size distribution, allowing remaining fish 
              to grow larger and creating better fishing opportunities.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-recycle"></i>
            </div>
            <h3>Fish Relocation</h3>
            <p>
              Safe relocation of harvested fish to other ponds or facilities, ensuring they continue 
              to thrive in appropriate environments.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Water Quality Management</h3>
            <p>
              Post-harvesting water quality assessment and management to ensure optimal conditions 
              for remaining fish and overall pond health.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-calendar"></i>
            </div>
            <h3>Harvesting Planning</h3>
            <p>
              Development of long-term harvesting schedules and strategies to maintain optimal 
              population levels and pond health over time.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Harvesting Methods</h2>
        <div className="methods-grid">
          <div className="method-card">
            <h3>Seine Netting</h3>
            <p>
              <strong>Best for:</strong> Large ponds, multiple species<br />
              <strong>Process:</strong> Systematic netting to capture fish for selective removal<br />
              <strong>Benefits:</strong> Efficient, allows for careful selection<br />
              <strong>Considerations:</strong> Requires proper technique to minimize stress
            </p>
          </div>

          <div className="method-card">
            <h3>Electrofishing</h3>
            <p>
              <strong>Best for:</strong> Precise targeting, small populations<br />
              <strong>Process:</strong> Temporary stunning for easy capture and selection<br />
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

          <div className="method-card">
            <h3>Drain and Select</h3>
            <p>
              <strong>Best for:</strong> Complete restocking, major renovations<br />
              <strong>Process:</strong> Temporary pond drainage for complete fish removal<br />
              <strong>Benefits:</strong> Complete control, thorough assessment<br />
              <strong>Considerations:</strong> More invasive, requires fish relocation
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Signs Your Pond Needs Harvesting</h2>
        <div className="signs-grid">
          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h3>Overcrowding</h3>
            <p>
              <strong>Signs:</strong> Fish competing for food, reduced growth rates<br />
              <strong>Impact:</strong> Stunted growth, increased stress, poor health<br />
              <strong>Solution:</strong> Selective harvesting to reduce population density
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-thermometer-half"></i>
            </div>
            <h3>Poor Water Quality</h3>
            <p>
              <strong>Signs:</strong> Low oxygen levels, high ammonia, algae blooms<br />
              <strong>Impact:</strong> Fish stress, disease outbreaks, ecosystem imbalance<br />
              <strong>Solution:</strong> Population reduction to improve water quality
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
            <h3>Vegetation Overgrowth</h3>
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
        <h2>Harvesting Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Initial Assessment</h3>
            <p>
              We evaluate your pond&apos;s fish population, water quality, and overall ecosystem health 
              to determine the optimal harvesting strategy and goals.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Method Selection</h3>
            <p>
              Based on your pond size, fish species, and harvesting goals, we select the most 
              appropriate and humane harvesting method.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Fish Capture</h3>
            <p>
              Using the selected method, we carefully capture fish while minimizing stress and 
              ensuring their safety throughout the process.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Selective Removal</h3>
            <p>
              We selectively remove fish based on predetermined criteria such as size, species, 
              or health status while preserving the overall population balance.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Fish Handling</h3>
            <p>
              Removed fish are handled humanely and either relocated to other ponds, donated to 
              educational facilities, or processed according to your preferences.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">6</div>
            <h3>Post-Harvest Management</h3>
            <p>
              We assess water quality, monitor remaining fish health, and provide recommendations 
              for ongoing pond management and future harvesting schedules.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Harvesting Benefits</h2>
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
            <p>Maintain a balanced, sustainable pond ecosystem for long-term enjoyment</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Harvesting Considerations</h2>
        <div className="considerations-grid">
          <div className="consideration-card">
            <h3>Timing</h3>
            <ul>
              <li>Spring or fall harvesting</li>
              <li>Avoid spawning seasons</li>
              <li>Consider water temperature</li>
              <li>Plan around weather conditions</li>
              <li>Coordinate with other pond work</li>
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
          Our harvesting services work together with our other pond services:
        </p>

        <div className="related-services">
          <Link href="/pond-maintenance" className="service-link">
            <i className="fas fa-cog"></i>
            Pond Maintenance
          </Link>
          <Link href="/pond-cleanings" className="service-link">
            <i className="fas fa-broom"></i>
            Pond Cleanings
          </Link>
          <Link href="/pond-consultations" className="service-link">
            <i className="fas fa-comments"></i>
            Consultations
          </Link>
          <Link href="/lake-harvesting" className="service-link">
            <i className="fas fa-water"></i>
            Lake Harvesting
          </Link>
          <Link href="/contact" className="service-link">
            <i className="fas fa-phone"></i>
            Get Service
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Need Pond Harvesting?</h2>
        <p>
          Don&apos;t let overcrowding compromise your pond&apos;s health and fish quality. Contact us today 
          for professional harvesting services that will restore balance to your pond ecosystem.
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

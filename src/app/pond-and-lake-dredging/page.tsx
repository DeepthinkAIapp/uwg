import { PageTemplate } from '@/components/layout/PageTemplate';
import Image from 'next/image';
import Link from 'next/link';

export default function PondAndLakeDredgingPage() {
  return (
    <PageTemplate
      heroTitle="Professional Dredging Services"
      heroSubtitle="Expert sediment removal and water feature restoration for ponds and lakes"
      heroImage="/images/pondDredging.webp"
      heroAlt="Professional dredging services in Utah"
      breadcrumbs={[
        { label: 'Pond Services', href: '/pond-services' },
        { label: 'Dredging Services' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "What's the difference between pond and lake dredging?",
          answer: "Pond dredging focuses on smaller water features (typically under 5 acres) using specialized equipment for residential and small commercial projects. Lake dredging handles larger water bodies (5+ acres) using advanced floating equipment and pipeline systems for commercial and municipal projects."
        },
        {
          question: "How do I know if I need pond or lake dredging?",
          answer: "Consider your water feature size: ponds are typically under 5 acres and lakes are 5+ acres. Ponds usually need dredging every 5-10 years, while lakes may need it every 10-20 years. We can assess your specific situation during consultation."
        },
        {
          question: "What equipment do you use for dredging?",
          answer: "For ponds, we use mechanical dredges, suction dredges, and environmental dredges. For lakes, we use hydraulic dredges, floating excavators, and pipeline systems. Equipment selection depends on water body size, sediment type, and project requirements."
        },
        {
          question: "Do you handle environmental permits?",
          answer: "Yes, we handle all necessary permits for both pond and lake dredging projects. This includes water quality permits, wildlife protection measures, and sediment disposal permits. Lake dredging typically requires more extensive permitting."
        }
      ]}
      metaTitle="Dredging Services Utah | Pond & Lake Sediment Removal"
      metaDescription="Professional dredging services in Utah for ponds and lakes. Expert sediment removal, depth restoration, and water quality improvement. Choose the right dredging service for your water feature."
    >
      <div className="content-section">
        <h2>Professional Dredging Services</h2>
        <p>
          Over time, all water features naturally accumulate sediment, organic matter, and debris that 
          can significantly reduce water depth and quality. Our professional dredging services restore 
          your water feature to its original depth and beauty, improving water quality, fish habitat, 
          and overall ecosystem health. We offer specialized services for both ponds and lakes, using 
          the most appropriate equipment and techniques for your specific water feature.
        </p>

        <div className="info-box">
          <h3>Why Dredging is Essential</h3>
          <p>
            <strong>Restores water depth:</strong> Removes accumulated sediment to restore original depth<br />
            <strong>Improves water quality:</strong> Reduces nutrient buildup and algae growth<br />
            <strong>Enhances fish habitat:</strong> Creates better conditions for aquatic life<br />
            <strong>Prevents future problems:</strong> Addresses issues before they become severe
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Choose Your Dredging Service</h2>
        <div className="service-choice-grid">
          <div className="service-choice-card">
            <div className="choice-image">
              <Image 
                src="/images/pondDredging1000x800.webp" 
                alt="Pond dredging service" 
                width={400} 
                height={300}
                className="rounded-lg"
              />
            </div>
            <h3>Pond Dredging</h3>
            <p>
              <strong>Best for:</strong> Residential ponds, small commercial water features (under 5 acres)<br />
              <strong>Equipment:</strong> Mechanical dredges, suction dredges, environmental dredges<br />
              <strong>Timeline:</strong> 1-3 days for most projects<br />
              <strong>Focus:</strong> Precision work, minimal disruption, fish preservation
            </p>
            <ul className="service-features">
              <li>Small to medium ponds</li>
              <li>Residential and commercial</li>
              <li>Fish and plant preservation</li>
              <li>Minimal environmental impact</li>
              <li>Quick project completion</li>
            </ul>
            <Link href="/pond-dredging" className="cta-button primary">
              <i className="fas fa-water"></i>
              Learn About Pond Dredging
            </Link>
          </div>

          <div className="service-choice-card">
            <div className="choice-image">
              <Image 
                src="/images/lakeDredging1000x800.webp" 
                alt="Lake dredging service" 
                width={400} 
                height={300}
                className="rounded-lg"
              />
            </div>
            <h3>Lake Dredging</h3>
            <p>
              <strong>Best for:</strong> Large lakes, reservoirs, municipal water bodies (5+ acres)<br />
              <strong>Equipment:</strong> Hydraulic dredges, floating excavators, pipeline systems<br />
              <strong>Timeline:</strong> 1-3 months for large projects<br />
              <strong>Focus:</strong> Large-scale operations, environmental compliance, long-term planning
            </p>
            <ul className="service-features">
              <li>Large lakes and reservoirs</li>
              <li>Municipal and commercial</li>
              <li>Environmental permitting</li>
              <li>Advanced equipment</li>
              <li>Comprehensive planning</li>
            </ul>
            <Link href="/lake-dredging" className="cta-button primary">
              <i className="fas fa-water"></i>
              Learn About Lake Dredging
            </Link>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Signs Your Water Feature Needs Dredging</h2>
        <div className="signs-grid">
          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-arrow-down"></i>
            </div>
            <h3>Reduced Water Depth</h3>
            <p>
              <strong>Signs:</strong> Water is noticeably shallower than when built<br />
              <strong>Impact:</strong> Reduced fish habitat, limited recreational use<br />
              <strong>Solution:</strong> Sediment removal to restore original depth
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h3>Excessive Algae Growth</h3>
            <p>
              <strong>Signs:</strong> Thick algae mats, green water, foul odors<br />
              <strong>Impact:</strong> Poor water quality, fish stress, unpleasant appearance<br />
              <strong>Solution:</strong> Remove nutrient-rich sediment that feeds algae
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h3>Poor Fish Health</h3>
            <p>
              <strong>Signs:</strong> Fish stress, reduced population, poor growth<br />
              <strong>Impact:</strong> Declining fish population, poor fishing<br />
              <strong>Solution:</strong> Improve water quality and create better habitat
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-water"></i>
            </div>
            <h3>Muddy or Cloudy Water</h3>
            <p>
              <strong>Signs:</strong> Persistent cloudiness, poor visibility<br />
              <strong>Impact:</strong> Reduced aesthetic appeal, poor water quality<br />
              <strong>Solution:</strong> Remove suspended sediment and organic matter
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-tree"></i>
            </div>
            <h3>Overgrown Aquatic Plants</h3>
            <p>
              <strong>Signs:</strong> Plants covering most of the water surface<br />
              <strong>Impact:</strong> Reduced open water, poor oxygen levels<br />
              <strong>Solution:</strong> Selective removal and vegetation management
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-thermometer-half"></i>
            </div>
            <h3>Water Quality Issues</h3>
            <p>
              <strong>Signs:</strong> Low oxygen levels, high nutrient content<br />
              <strong>Impact:</strong> Poor ecosystem health, fish kills<br />
              <strong>Solution:</strong> Remove organic matter and improve circulation
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Dredging Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Initial Assessment</h3>
            <p>
              We conduct a thorough evaluation including depth measurements, sediment analysis, 
              water quality testing, and environmental impact assessment to determine dredging needs.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Project Planning</h3>
            <p>
              Based on our assessment, we develop a comprehensive dredging plan including equipment 
              selection, timeline, disposal methods, and environmental compliance requirements.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Equipment Mobilization</h3>
            <p>
              We mobilize the appropriate dredging equipment for your water feature size and 
              project requirements, ensuring minimal disruption to your property.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Dredging Operations</h3>
            <p>
              Using specialized equipment, we systematically remove sediment and organic matter while 
              monitoring water quality and minimizing environmental impact.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Material Disposal</h3>
            <p>
              We handle all dredged material according to environmental regulations and your 
              preferences, whether spreading as topsoil or hauling to approved disposal sites.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">6</div>
            <h3>Restoration and Monitoring</h3>
            <p>
              We restore aquatic vegetation, monitor water quality, and provide long-term maintenance 
              recommendations to ensure optimal water feature health.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Dredging Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-water"></i>
            </div>
            <h4>Improved Water Quality</h4>
            <p>Removes nutrient-rich sediment that contributes to algae growth and poor water quality</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h4>Enhanced Fish Habitat</h4>
            <p>Creates optimal depth zones and improves oxygen levels for better fish health and growth</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h4>Better Aesthetics</h4>
            <p>Restores the visual appeal of your water feature with clearer water and proper depth</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-swimming-pool"></i>
            </div>
            <h4>Increased Recreational Value</h4>
            <p>Improves swimming, fishing, and boating opportunities with restored depth</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h4>Better Aquatic Plant Balance</h4>
            <p>Creates conditions for healthy aquatic plant growth without overgrowth</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4>Long-term Water Feature Health</h4>
            <p>Prevents future problems and extends the life of your water feature</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Ready to Restore Your Water Feature?</h2>
        <p>
          Don&apos;t let sediment buildup compromise your water feature&apos;s beauty and health. Contact us today for 
          a professional assessment and dredging consultation.
        </p>
        
        <div className="cta-actions">
          <Link href="/contact" className="cta-button primary">
            <i className="fas fa-phone"></i>
            Get Free Consultation
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

import { PageTemplate } from '@/components/layout/PageTemplate';
import Link from 'next/link';

export default function PondDredgingPage() {
  return (
    <PageTemplate
      heroTitle="Professional Pond Dredging Services"
      heroSubtitle="Restore your pond's depth and beauty with expert dredging solutions"
      heroImage="/images/pondDredging.webp"
      heroAlt="Professional pond dredging service in Utah"
      breadcrumbs={[
        { label: 'Pond Services', href: '/pond-services' },
        { label: 'Pond Dredging' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "When does my pond need dredging?",
          answer: "Ponds typically need dredging when sediment buildup reduces water depth by 25% or more, when water quality deteriorates, or when aquatic plants become overgrown. Signs include shallow water, excessive algae, and poor fish habitat."
        },
        {
          question: "How long does pond dredging take?",
          answer: "Pond dredging typically takes 1-3 days depending on pond size and sediment depth. Small backyard ponds (under 1,000 sq ft) usually take 1 day, while larger ponds may take 2-3 days. We'll provide a detailed timeline during consultation."
        },
        {
          question: "What happens to the dredged material?",
          answer: "We offer several disposal options including spreading on your property as topsoil, hauling to approved disposal sites, or using it for landscaping projects. We'll discuss the best option for your situation."
        },
        {
          question: "Will dredging harm my fish and plants?",
          answer: "We use specialized equipment and techniques to minimize disruption. Fish are typically relocated during dredging, and we can preserve and replant aquatic vegetation. We'll discuss preservation options during planning."
        }
      ]}
      metaTitle="Pond Dredging Utah | Professional Pond Sediment Removal"
      metaDescription="Professional pond dredging services in Utah. Expert sediment removal, depth restoration, and water quality improvement for residential and commercial ponds."
    >
      <div className="content-section">
        <h2>Expert Pond Dredging Services</h2>
        <p>
          Over time, ponds naturally accumulate sediment, organic matter, and debris that can 
          significantly reduce water depth and quality. Our professional pond dredging services 
          restore your water feature to its original depth and beauty, improving water quality, 
          fish habitat, and overall pond health. Whether you have a small backyard pond or a 
          larger commercial water feature, our experienced team uses specialized equipment and 
          techniques to safely and efficiently remove accumulated sediment.
        </p>

        <div className="info-box">
          <h3>Why Pond Dredging is Important</h3>
          <p>
            <strong>Restores water depth:</strong> Removes accumulated sediment to restore original depth<br />
            <strong>Improves water quality:</strong> Reduces nutrient buildup and algae growth<br />
            <strong>Enhances fish habitat:</strong> Creates better conditions for aquatic life<br />
            <strong>Prevents future problems:</strong> Addresses issues before they become severe
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Pond Dredging Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-water"></i>
            </div>
            <h3>Sediment Removal</h3>
            <p>
              Complete removal of accumulated sediment, organic matter, and debris from pond 
              bottoms. We use specialized equipment to efficiently remove material while preserving 
              water quality and minimizing disruption.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-ruler-vertical"></i>
            </div>
            <h3>Depth Restoration</h3>
            <p>
              Restore your pond to its original or desired depth. We can create specific depth 
              zones for different purposes, such as deep areas for fish and shallow areas for 
              aquatic plants.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Aquatic Vegetation Management</h3>
            <p>
              Remove overgrown aquatic plants and vegetation that can choke your pond. We can also 
              selectively preserve beneficial plants and replant them after dredging is complete.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-recycle"></i>
            </div>
            <h3>Material Disposal</h3>
            <p>
              Comprehensive disposal solutions for dredged material. We can spread it as topsoil, 
              haul it to approved disposal sites, or use it for landscaping projects on your property.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h3>Fish Habitat Enhancement</h3>
            <p>
              Create optimal conditions for fish by removing sediment and creating proper depth zones. 
              We can also add fish habitat structures during the dredging process.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Post-Dredging Restoration</h3>
            <p>
              Complete restoration services including shoreline stabilization, aquatic plant replanting, 
              and water quality optimization to ensure your pond thrives after dredging.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Signs Your Pond Needs Dredging</h2>
        <div className="signs-grid">
          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-arrow-down"></i>
            </div>
            <h3>Reduced Water Depth</h3>
            <p>
              <strong>Signs:</strong> Water is noticeably shallower than when the pond was built<br />
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
        <h2>Our Pond Dredging Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Initial Assessment</h3>
            <p>
              We conduct a thorough evaluation of your pond including depth measurements, sediment 
              analysis, water quality testing, and fish population assessment to determine dredging needs.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Project Planning</h3>
            <p>
              Based on our assessment, we develop a comprehensive dredging plan including equipment 
              selection, timeline, disposal methods, and fish/plant preservation strategies.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Fish and Plant Relocation</h3>
            <p>
              We carefully relocate fish to temporary holding areas and preserve beneficial aquatic 
              plants for replanting after dredging is complete.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Dredging Operations</h3>
            <p>
              Using specialized equipment, we systematically remove sediment and organic matter while 
              monitoring water quality and minimizing disruption to the surrounding area.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Material Disposal</h3>
            <p>
              We handle all dredged material according to your preferences, whether spreading as 
              topsoil, hauling to disposal sites, or using for landscaping projects.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">6</div>
            <h3>Restoration and Monitoring</h3>
            <p>
              We replant aquatic vegetation, return fish to the pond, and monitor water quality 
              to ensure optimal conditions for your restored water feature.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Pond Dredging Equipment and Techniques</h2>
        <div className="equipment-grid">
          <div className="equipment-card">
            <h3>Mechanical Dredging</h3>
            <p>
              <strong>Best for:</strong> Small to medium ponds, shallow sediment, specific areas<br />
              <strong>Advantages:</strong> Precise, controlled, minimal water disturbance<br />
              <strong>Process:</strong> Uses excavators and specialized buckets
            </p>
          </div>

          <div className="equipment-card">
            <h3>Suction Dredging</h3>
            <p>
              <strong>Best for:</strong> Fine sediment, organic matter removal<br />
              <strong>Advantages:</strong> Gentle, preserves water clarity, efficient<br />
              <strong>Process:</strong> Uses vacuum systems to remove loose material
            </p>
          </div>

          <div className="equipment-card">
            <h3>Environmental Dredging</h3>
            <p>
              <strong>Best for:</strong> Sensitive ecosystems, fish preservation<br />
              <strong>Advantages:</strong> Minimal impact, preserves habitat, selective removal<br />
              <strong>Process:</strong> Specialized techniques to protect aquatic life
            </p>
          </div>

          <div className="equipment-card">
            <h3>Manual Dredging</h3>
            <p>
              <strong>Best for:</strong> Very small ponds, hard-to-reach areas<br />
              <strong>Advantages:</strong> Precise control, minimal equipment footprint<br />
              <strong>Process:</strong> Hand tools and specialized equipment
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Pond Dredging Benefits</h2>
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
            <h4>Long-term Pond Health</h4>
            <p>Prevents future problems and extends the life of your water feature</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Pond Dredging Cost Factors</h2>
        <p>
          Pond dredging costs vary based on several factors. We provide detailed quotes after assessing 
          your specific situation.
        </p>

        <div className="cost-factors">
          <div className="factor-card">
            <h3>Pond Size and Depth</h3>
            <p>Larger ponds and deeper sediment require more time and equipment</p>
          </div>

          <div className="factor-card">
            <h3>Sediment Type and Amount</h3>
            <p>Different materials require different removal techniques and disposal methods</p>
          </div>

          <div className="factor-card">
            <h3>Access and Location</h3>
            <p>Site accessibility affects equipment choice and project timeline</p>
          </div>

          <div className="factor-card">
            <h3>Disposal Requirements</h3>
            <p>Local regulations and disposal site availability impact costs</p>
          </div>

          <div className="factor-card">
            <h3>Fish and Plant Preservation</h3>
            <p>Additional care for aquatic life may require specialized techniques</p>
          </div>

          <div className="factor-card">
            <h3>Post-Dredging Restoration</h3>
            <p>Shoreline stabilization and replanting services add to total cost</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Related Services</h2>
        <p>
          We offer comprehensive pond services to keep your water feature healthy and beautiful:
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
          <Link href="/pond-repair-and-rebuild" className="service-link">
            <i className="fas fa-tools"></i>
            Pond Repair
          </Link>
          <Link href="/pond-construction" className="service-link">
            <i className="fas fa-hammer"></i>
            Pond Construction
          </Link>
          <Link href="/lake-dredging" className="service-link">
            <i className="fas fa-water"></i>
            Lake Dredging
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Ready to Restore Your Pond?</h2>
        <p>
          Don't let sediment buildup compromise your pond's beauty and health. Contact us today for 
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

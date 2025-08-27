import { PageTemplate } from '@/components/layout/PageTemplate';
import Link from 'next/link';

export default function LakeDredgingPage() {
  return (
    <PageTemplate
      heroTitle="Professional Lake Dredging Services"
      heroSubtitle="Large-scale sediment removal and lake restoration for commercial and municipal water bodies"
      heroImage="/images/pondDredging.webp"
      heroAlt="Professional lake dredging service in Utah"
      breadcrumbs={[
        { label: 'Pond Services', href: '/pond-services' },
        { label: 'Lake Dredging' }
      ]}

    >
      <div className="content-section">
        <h2>Expert Lake Dredging Services</h2>
        <p>
          Large lakes, reservoirs, and commercial water bodies require specialized dredging services 
          to maintain their depth, water quality, and recreational value. Our professional lake 
          dredging services use advanced equipment and techniques to handle large-scale sediment 
          removal projects efficiently and safely. Whether you manage a municipal lake, commercial 
          reservoir, or large recreational water body, our experienced team provides comprehensive 
          dredging solutions.
        </p>

        <div className="info-box">
          <h3>Why Lake Dredging is Critical</h3>
          <p>
            <strong>Maintains water depth:</strong> Prevents lakes from becoming too shallow for navigation and recreation<br />
            <strong>Improves water quality:</strong> Removes nutrient-rich sediment that causes algae blooms<br />
            <strong>Preserves ecosystem:</strong> Maintains healthy aquatic habitats for fish and wildlife<br />
            <strong>Extends lake life:</strong> Prevents premature aging and degradation of the water body
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Lake Dredging Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-water"></i>
            </div>
            <h3>Large-Scale Sediment Removal</h3>
            <p>
              Complete removal of accumulated sediment, organic matter, and debris from lake bottoms. 
              We use specialized floating equipment to efficiently remove material while preserving 
              water quality and minimizing disruption.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-ruler-vertical"></i>
            </div>
            <h3>Depth Restoration</h3>
            <p>
              Restore your lake to its original or desired depth. We can create specific depth zones 
              for different purposes, such as deep areas for fish and shallow areas for aquatic plants.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Aquatic Vegetation Management</h3>
            <p>
              Remove overgrown aquatic plants and vegetation that can choke your lake. We can also 
              selectively preserve beneficial plants and replant them after dredging is complete.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-recycle"></i>
            </div>
            <h3>Material Disposal Solutions</h3>
            <p>
              Comprehensive disposal solutions for large volumes of dredged material. We can spread 
              it as topsoil, haul it to approved disposal sites, or use it for landscaping projects.
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
              and water quality optimization to ensure your lake thrives after dredging.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Signs Your Lake Needs Dredging</h2>
        <div className="signs-grid">
          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-arrow-down"></i>
            </div>
            <h3>Significantly Reduced Depth</h3>
            <p>
              <strong>Signs:</strong> Water is much shallower than historical levels<br />
              <strong>Impact:</strong> Limited boating, fishing, and recreational use<br />
              <strong>Solution:</strong> Large-scale sediment removal to restore depth
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h3>Severe Algae Blooms</h3>
            <p>
              <strong>Signs:</strong> Thick algae mats, green water, foul odors<br />
              <strong>Impact:</strong> Poor water quality, fish kills, unpleasant appearance<br />
              <strong>Solution:</strong> Remove nutrient-rich sediment that feeds algae
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h3>Declining Fish Population</h3>
            <p>
              <strong>Signs:</strong> Reduced fish catches, poor fish health<br />
              <strong>Impact:</strong> Declining fishing quality, ecosystem imbalance<br />
              <strong>Solution:</strong> Improve water quality and create better habitat
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-water"></i>
            </div>
            <h3>Poor Water Clarity</h3>
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
            <h3>Excessive Aquatic Growth</h3>
            <p>
              <strong>Signs:</strong> Plants covering large areas of water surface<br />
              <strong>Impact:</strong> Reduced open water, poor oxygen levels<br />
              <strong>Solution:</strong> Selective removal and vegetation management
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-thermometer-half"></i>
            </div>
            <h3>Water Quality Deterioration</h3>
            <p>
              <strong>Signs:</strong> Low oxygen levels, high nutrient content<br />
              <strong>Impact:</strong> Poor ecosystem health, fish kills<br />
              <strong>Solution:</strong> Remove organic matter and improve circulation
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Lake Dredging Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Comprehensive Assessment</h3>
            <p>
              We conduct a thorough evaluation including depth mapping, sediment analysis, water 
              quality testing, and environmental impact assessment to determine dredging needs.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Project Planning & Permits</h3>
            <p>
              We develop a comprehensive dredging plan and handle all necessary permits including 
              environmental, water quality, and disposal permits.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Equipment Mobilization</h3>
            <p>
              We mobilize specialized floating dredging equipment and establish work areas with 
              minimal disruption to lake users.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Dredging Operations</h3>
            <p>
              Using advanced dredging equipment, we systematically remove sediment and organic 
              matter while monitoring water quality and environmental impacts.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Material Processing & Disposal</h3>
            <p>
              We process and dispose of large volumes of dredged material according to environmental 
              regulations and project requirements.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">6</div>
            <h3>Restoration & Monitoring</h3>
            <p>
              We restore aquatic vegetation, monitor water quality, and provide long-term maintenance 
              recommendations to ensure optimal lake health.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Lake Dredging Equipment and Techniques</h2>
        <div className="equipment-grid">
          <div className="equipment-card">
            <h3>Hydraulic Dredging</h3>
            <p>
              <strong>Best for:</strong> Large lakes, deep sediment removal, long-distance pumping<br />
              <strong>Advantages:</strong> Efficient, minimal disruption, precise control<br />
              <strong>Process:</strong> Uses high-pressure water to loosen and pump sediment
            </p>
          </div>

          <div className="equipment-card">
            <h3>Mechanical Dredging</h3>
            <p>
              <strong>Best for:</strong> Specific areas, heavy sediment, shoreline work<br />
              <strong>Advantages:</strong> Precise, controlled, minimal water disturbance<br />
              <strong>Process:</strong> Uses floating excavators and specialized buckets
            </p>
          </div>

          <div className="equipment-card">
            <h3>Environmental Dredging</h3>
            <p>
              <strong>Best for:</strong> Sensitive ecosystems, contaminated sediment<br />
              <strong>Advantages:</strong> Minimal impact, preserves habitat, selective removal<br />
              <strong>Process:</strong> Specialized techniques to protect aquatic life
            </p>
          </div>

          <div className="equipment-card">
            <h3>Pipeline Dredging</h3>
            <p>
              <strong>Best for:</strong> Large volumes, long-distance transport<br />
              <strong>Advantages:</strong> Continuous operation, efficient transport<br />
              <strong>Process:</strong> Pumps sediment through pipelines to disposal sites
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Lake Dredging Benefits</h2>
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
            <p>Restores the visual appeal of your lake with clearer water and proper depth</p>
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
            <h4>Long-term Lake Health</h4>
            <p>Prevents future problems and extends the life of your water body</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Lake Dredging Cost Factors</h2>
        <p>
          Lake dredging costs vary based on several factors. We provide detailed quotes after assessing 
          your specific situation.
        </p>

        <div className="cost-factors">
          <div className="factor-card">
            <h3>Lake Size and Depth</h3>
            <p>Larger lakes and deeper sediment require more time and specialized equipment</p>
          </div>

          <div className="factor-card">
            <h3>Sediment Type and Volume</h3>
            <p>Different materials require different removal techniques and disposal methods</p>
          </div>

          <div className="factor-card">
            <h3>Access and Location</h3>
            <p>Site accessibility affects equipment choice and project timeline</p>
          </div>

          <div className="factor-card">
            <h3>Environmental Requirements</h3>
            <p>Permits, environmental monitoring, and compliance measures impact costs</p>
          </div>

          <div className="factor-card">
            <h3>Disposal Requirements</h3>
            <p>Local regulations and disposal site availability impact costs</p>
          </div>

          <div className="factor-card">
            <h3>Project Timeline</h3>
            <p>Urgency and seasonal constraints may affect equipment availability and costs</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Environmental Considerations</h2>
        <div className="environmental-grid">
          <div className="environmental-card">
            <h3>Permit Management</h3>
            <p>We handle all necessary permits including water quality, wildlife protection, and sediment disposal permits.</p>
          </div>

          <div className="environmental-card">
            <h3>Wildlife Protection</h3>
            <p>We implement measures to protect fish, birds, and other wildlife during dredging operations.</p>
          </div>

          <div className="environmental-card">
            <h3>Water Quality Monitoring</h3>
            <p>We continuously monitor water quality during dredging to ensure minimal environmental impact.</p>
          </div>

          <div className="environmental-card">
            <h3>Sediment Analysis</h3>
            <p>We analyze sediment for contaminants and determine appropriate disposal methods.</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Related Services</h2>
        <p>
          We offer comprehensive water body management services:
        </p>

        <div className="related-services">
          <Link href="/pond-dredging" className="service-link">
            <i className="fas fa-water"></i>
            Pond Dredging
          </Link>
          <Link href="/pond-maintenance" className="service-link">
            <i className="fas fa-cog"></i>
            Pond Maintenance
          </Link>
          <Link href="/pond-cleanings" className="service-link">
            <i className="fas fa-broom"></i>
            Pond Cleanings
          </Link>
          <Link href="/pond-construction" className="service-link">
            <i className="fas fa-hammer"></i>
            Pond Construction
          </Link>
          <Link href="/contact" className="service-link">
            <i className="fas fa-phone"></i>
            Get Consultation
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Ready to Restore Your Lake?</h2>
        <p>
          Don&apos;t let sediment buildup compromise your lake&apos;s beauty and functionality. Contact us today for 
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

import { PageTemplate } from '@/components/layout/PageTemplate';
import Image from 'next/image';
import Link from 'next/link';

export default function PondRepairAndRebuildPage() {
  return (
    <PageTemplate
      heroTitle="Professional Pond Repair & Rebuild Services"
      heroSubtitle="Expert restoration and rebuilding of damaged or aging water features"
      heroImage="/images/pondRepair1000x800.webp"
      heroAlt="Professional pond repair and rebuild service in Utah"
      breadcrumbs={[
        { label: 'Pond Services', href: '/pond-services' },
        { label: 'Pond Repair & Rebuild' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "How do I know if my pond needs repair or a complete rebuild?",
          answer: "Minor issues like small leaks or equipment problems can usually be repaired. However, if you have extensive liner damage, structural problems, or want to significantly change the design, a rebuild may be more cost-effective. We'll assess your situation and recommend the best approach."
        },
        {
          question: "What causes pond damage that requires repair?",
          answer: "Common causes include liner deterioration, settling or shifting soil, equipment failure, water quality issues, and natural wear over time. Freeze-thaw cycles in Utah's climate can also cause damage. Regular maintenance helps prevent many issues."
        },
        {
          question: "How long does pond repair or rebuilding take?",
          answer: "Repair time depends on the extent of damage. Simple repairs may take a few hours to a day, while major repairs can take 2-5 days. Complete rebuilds typically take 1-3 weeks depending on size and complexity."
        },
        {
          question: "Do you handle insurance claims for pond damage?",
          answer: "Yes, we can help with insurance claims for pond damage. We'll document the damage, provide detailed estimates, and work with your insurance company to ensure proper coverage for repairs or rebuilding."
        }
      ]}
      metaTitle="Pond Repair Utah | Professional Pond Rebuilding Services"
      metaDescription="Professional pond repair and rebuilding services in Utah. Expert restoration of damaged water features. Quality repairs and complete rebuilds. Call 801-590-8516 today!"
    >
      <div className="content-section">
        <h2>Expert Pond Repair & Rebuild Services</h2>
        <p>
          Don't let pond damage compromise your water feature's beauty and functionality. Our professional 
          repair and rebuild services restore damaged ponds to their former glory or create something even 
          better. Whether you need minor repairs or a complete rebuild, our experienced team has the 
          expertise to handle any pond issue. We assess damage, provide detailed solutions, and execute 
          repairs with precision to ensure your pond is beautiful, functional, and built to last.
        </p>

        <div className="info-box">
          <h3>When to Consider Repair vs. Rebuild</h3>
          <p>
            <strong>Repair:</strong> Minor leaks, equipment issues, small structural problems<br />
            <strong>Rebuild:</strong> Extensive damage, design changes, major structural issues<br />
            <strong>Assessment:</strong> We'll evaluate your situation and recommend the best approach<br />
            <strong>Cost-effectiveness:</strong> Sometimes rebuilding is more economical than extensive repairs
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Repair & Rebuild Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Damage Assessment</h3>
            <p>
              Comprehensive evaluation of pond damage including structural issues, liner problems, 
              equipment failures, and water quality issues. We provide detailed reports and repair recommendations.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Leak Detection & Repair</h3>
            <p>
              Professional leak detection using advanced techniques and equipment. We locate and repair 
              leaks in liners, plumbing, and equipment to restore water-tight integrity.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-layer-group"></i>
            </div>
            <h3>Liner Replacement</h3>
            <p>
              Complete liner replacement with high-quality materials. We remove old liners, prepare the 
              surface, and install new liners with proper underlayment and protection.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Equipment Repair</h3>
            <p>
              Expert repair of pumps, filters, and other pond equipment. We diagnose issues, repair or 
              replace components, and ensure optimal performance.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-mountain"></i>
            </div>
            <h3>Rock Work Restoration</h3>
            <p>
              Repair and restoration of rock work, waterfalls, and stream features. We fix loose rocks, 
              rebuild damaged structures, and restore natural appearance.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-home"></i>
            </div>
            <h3>Complete Rebuilds</h3>
            <p>
              Full pond reconstruction with improved design and materials. We remove old structures, 
              redesign for better functionality, and build a new pond that exceeds expectations.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Common Pond Problems We Fix</h2>
        <div className="problems-grid">
          <div className="problem-card">
            <h3>Liner Issues</h3>
            <ul>
              <li>Punctures and tears</li>
              <li>UV deterioration</li>
              <li>Seam failures</li>
              <li>Improper installation</li>
              <li>Age-related damage</li>
            </ul>
          </div>

          <div className="problem-card">
            <h3>Structural Problems</h3>
            <ul>
              <li>Soil settling</li>
              <li>Wall collapses</li>
              <li>Foundation issues</li>
              <li>Rock work damage</li>
              <li>Erosion problems</li>
            </ul>
          </div>

          <div className="problem-card">
            <h3>Equipment Failures</h3>
            <ul>
              <li>Pump malfunctions</li>
              <li>Filter problems</li>
              <li>Electrical issues</li>
              <li>Plumbing leaks</li>
              <li>Control system failures</li>
            </ul>
          </div>

          <div className="problem-card">
            <h3>Water Quality Issues</h3>
            <ul>
              <li>Persistent algae</li>
              <li>Poor circulation</li>
              <li>Filtration problems</li>
              <li>pH imbalances</li>
              <li>Oxygen deficiencies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Repair Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Initial Assessment</h3>
            <p>
              We thoroughly inspect your pond to identify all issues and determine the best repair 
              approach. We'll document damage and provide a detailed repair plan with cost estimates.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Fish Protection</h3>
            <p>
              If needed, we safely relocate fish to temporary holding tanks with proper aeration and 
              water quality. We ensure fish remain healthy throughout the repair process.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Water Removal</h3>
            <p>
              We carefully drain the pond and remove debris to access damaged areas. We preserve 
              plants and equipment that can be salvaged.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Repair Execution</h3>
            <p>
              We execute repairs using quality materials and proper techniques. This may include 
              liner replacement, equipment repair, structural fixes, or complete rebuilding.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">5</div>
            <h3>System Testing</h3>
            <p>
              We test all systems including pumps, filters, and plumbing to ensure everything works 
              properly. We check for leaks and verify optimal performance.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">6</div>
            <h3>Restoration & Refill</h3>
            <p>
              We restore landscaping, return fish safely, and refill the pond. We provide detailed 
              instructions for care and maintenance going forward.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Signs Your Pond Needs Repair</h2>
        <div className="signs-grid">
          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Water Loss</h3>
            <p>
              <strong>Signs:</strong> Rapid water level drops, soggy areas around pond<br />
              <strong>Causes:</strong> Liner leaks, plumbing issues, structural damage<br />
              <strong>Solution:</strong> Leak detection and repair, liner replacement if needed
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Structural Damage</h3>
            <p>
              <strong>Signs:</strong> Collapsed walls, shifted rocks, sinking areas<br />
              <strong>Causes:</strong> Soil settling, erosion, poor construction<br />
              <strong>Solution:</strong> Structural repairs, foundation reinforcement
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h3>Equipment Failure</h3>
            <p>
              <strong>Signs:</strong> No water flow, unusual noises, electrical issues<br />
              <strong>Causes:</strong> Wear and tear, improper maintenance, age<br />
              <strong>Solution:</strong> Equipment repair or replacement, system upgrades
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Poor Water Quality</h3>
            <p>
              <strong>Signs:</strong> Persistent algae, foul odors, fish stress<br />
              <strong>Causes:</strong> Filtration problems, circulation issues, design flaws<br />
              <strong>Solution:</strong> System upgrades, design improvements, equipment repair
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Age-Related Issues</h3>
            <p>
              <strong>Signs:</strong> Deteriorating materials, frequent problems, outdated design<br />
              <strong>Causes:</strong> Natural aging, outdated technology, wear over time<br />
              <strong>Solution:</strong> Complete rebuild with modern materials and design
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-thermometer-half"></i>
            </div>
            <h3>Seasonal Damage</h3>
            <p>
              <strong>Signs:</strong> Freeze damage, ice-related problems, weather wear<br />
              <strong>Causes:</strong> Utah's climate, freeze-thaw cycles, weather exposure<br />
              <strong>Solution:</strong> Weather-resistant repairs, improved materials
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Rebuild vs. Repair Decision Guide</h2>
        <div className="decision-guide">
          <div className="guide-card">
            <h3>Choose Repair When:</h3>
            <ul>
              <li>Damage is localized and minor</li>
              <li>Equipment needs replacement</li>
              <li>Small leaks or punctures</li>
              <li>Recent construction (under 5 years)</li>
              <li>Budget is limited</li>
              <li>Current design works well</li>
            </ul>
          </div>

          <div className="guide-card">
            <h3>Choose Rebuild When:</h3>
            <ul>
              <li>Extensive structural damage</li>
              <li>Multiple system failures</li>
              <li>Design improvements desired</li>
              <li>Pond is over 10 years old</li>
              <li>Repair costs exceed 50% of rebuild</li>
              <li>Want modern features and technology</li>
            </ul>
          </div>

          <div className="guide-card">
            <h3>Factors to Consider:</h3>
            <ul>
              <li>Extent of damage</li>
              <li>Age of current pond</li>
              <li>Desired improvements</li>
              <li>Budget constraints</li>
              <li>Long-term goals</li>
              <li>Property value impact</li>
            </ul>
          </div>

          <div className="guide-card">
            <h3>Our Recommendation:</h3>
            <ul>
              <li>Professional assessment</li>
              <li>Detailed cost comparison</li>
              <li>Long-term value analysis</li>
              <li>Warranty considerations</li>
              <li>Maintenance requirements</li>
              <li>Future upgrade potential</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Repair & Rebuild Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h4>Restored Functionality</h4>
            <p>Fix all issues and restore your pond to full working condition with improved performance</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h4>Enhanced Beauty</h4>
            <p>Improve aesthetics with better design, materials, and landscaping during repair or rebuild</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h4>Cost Savings</h4>
            <p>Address issues early to prevent more expensive problems and extend pond lifespan</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4>Warranty Protection</h4>
            <p>New materials and workmanship come with warranties for peace of mind</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h4>Modern Technology</h4>
            <p>Upgrade to current equipment and design standards for better efficiency and performance</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h4>Peace of Mind</h4>
            <p>Enjoy your pond knowing it's properly repaired and built to last for years to come</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Related Services</h2>
        <p>
          Our repair and rebuild services work together with our other pond services:
        </p>

        <div className="related-services">
          <Link href="/pond-consultations" className="service-link">
            <i className="fas fa-comments"></i>
            Consultations
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
            Get Service
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Need Pond Repair or Rebuild?</h2>
        <p>
          Don't let pond problems get worse. Contact us today for a professional assessment and 
          expert repair or rebuild services that will restore your water feature to its full potential.
        </p>
        
        <div className="cta-actions">
          <Link href="/contact" className="cta-button primary">
            <i className="fas fa-phone"></i>
            Get Repair Quote
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

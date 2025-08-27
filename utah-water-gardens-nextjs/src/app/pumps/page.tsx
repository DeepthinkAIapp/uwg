import { PageTemplate } from '@/components/layout/PageTemplate';
import Image from 'next/image';
import Link from 'next/link';

export default function PumpsPage() {
  return (
    <PageTemplate
      heroTitle="Professional Pond Pump Services"
      heroSubtitle="Expert pump selection, installation, and maintenance for optimal water circulation"
      heroImage="/images/pumpRepair.webp"
      heroAlt="Professional pond pump service in Utah"
      breadcrumbs={[
        { label: 'Pond Services', href: '/pond-services' },
        { label: 'Pumps' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "What size pump do I need for my pond?",
          answer: "Pump size depends on your pond volume, desired flow rate, and head height (vertical lift). As a general rule, you want to circulate your entire pond volume every 1-2 hours. We'll calculate the exact pump size needed for your specific pond and features."
        },
        {
          question: "How long do pond pumps typically last?",
          answer: "Quality pond pumps typically last 3-7 years with proper maintenance. Submersible pumps may need replacement sooner than external pumps. Regular cleaning, proper installation, and avoiding dry running can significantly extend pump life."
        },
        {
          question: "Should I run my pump year-round?",
          answer: "In Utah's climate, you can run your pump year-round, but you may need to adjust flow rates during winter. For ponds with fish, continuous circulation is important for oxygen levels. We'll help you set up the optimal pump schedule for your situation."
        },
        {
          question: "How do I know if my pump needs repair or replacement?",
          answer: "Signs of pump problems include reduced flow, unusual noises, overheating, or complete failure. If your pump is over 5 years old and showing issues, replacement is often more cost-effective than repair. We can diagnose and recommend the best solution."
        }
      ]}
      metaTitle="Pond Pumps Utah | Professional Pump Services"
      metaDescription="Professional pond pump services in Utah. Expert pump selection, installation, maintenance, and repair. Optimal water circulation for your pond. Call 801-590-8516 today!"
    >
      <div className="content-section">
        <h2>Expert Pond Pump Services</h2>
        <p>
          Proper water circulation is essential for a healthy, beautiful pond. Our professional pump 
          services ensure your water feature has the right pump for optimal performance. From pump 
          selection and installation to maintenance and repair, our experienced team provides 
          comprehensive pump solutions that keep your pond water flowing perfectly and your aquatic 
          life thriving.
        </p>

        <div className="info-box">
          <h3>Why Proper Pump Selection Matters</h3>
          <p>
            <strong>Water circulation:</strong> Ensures proper oxygen levels and water movement<br />
            <strong>Filtration efficiency:</strong> Powers your filter system for optimal performance<br />
            <strong>Feature operation:</strong> Drives waterfalls, streams, and other water features<br />
            <strong>Fish health:</strong> Maintains healthy environment for aquatic life
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Pump Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-calculator"></i>
            </div>
            <h3>Pump Sizing & Selection</h3>
            <p>
              Expert pump sizing based on your pond volume, desired flow rate, head height, and features. 
              We'll recommend the perfect pump for your specific needs and ensure optimal performance.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Pump Installation</h3>
            <p>
              Professional pump installation including proper positioning, plumbing connections, and 
              electrical setup. We ensure your pump is installed correctly for maximum efficiency and longevity.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h3>Pump Maintenance</h3>
            <p>
              Regular pump maintenance including cleaning, inspection, and performance optimization. 
              We'll create a maintenance schedule to keep your pump running efficiently year-round.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-wrench"></i>
            </div>
            <h3>Pump Repair</h3>
            <p>
              Expert diagnosis and repair of pump issues including reduced flow, unusual noises, and 
              mechanical problems. We can fix most pump issues quickly and get your system running again.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-arrow-up"></i>
            </div>
            <h3>Pump Upgrades</h3>
            <p>
              Upgrade your existing pump to improve performance, reduce energy consumption, or add new 
              features. We'll recommend upgrades that work with your current system or suggest complete replacements.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Flow Optimization</h3>
            <p>
              Optimize your pump's flow rate and pressure for maximum efficiency. We'll adjust settings 
              and plumbing to ensure your pump operates at peak performance while minimizing energy costs.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Types of Pond Pumps</h2>
        <div className="pump-types-grid">
          <div className="pump-type-card">
            <h3>Submersible Pumps</h3>
            <p>
              <strong>Best for:</strong> Small to medium ponds, waterfalls, streams<br />
              <strong>Advantages:</strong> Easy installation, quiet operation, space efficient<br />
              <strong>Flow range:</strong> 50-4,000 gallons per hour<br />
              <strong>Maintenance:</strong> Regular cleaning, occasional replacement
            </p>
            <ul>
              <li>Easy to install</li>
              <li>Quiet operation</li>
              <li>Space efficient</li>
              <li>Good for most applications</li>
            </ul>
          </div>

          <div className="pump-type-card">
            <h3>External Pumps</h3>
            <p>
              <strong>Best for:</strong> Large ponds, high head applications<br />
              <strong>Advantages:</strong> Higher efficiency, longer lifespan, easier maintenance<br />
              <strong>Flow range:</strong> 1,000-10,000+ gallons per hour<br />
              <strong>Maintenance:</strong> Regular inspection, occasional seal replacement
            </p>
            <ul>
              <li>Higher efficiency</li>
              <li>Longer lifespan</li>
              <li>Easier maintenance</li>
              <li>Better for large ponds</li>
            </ul>
          </div>

          <div className="pump-type-card">
            <h3>Magnetic Drive Pumps</h3>
            <p>
              <strong>Best for:</strong> Fish ponds, sensitive applications<br />
              <strong>Advantages:</strong> No seals to leak, fish safe, energy efficient<br />
              <strong>Flow range:</strong> 100-2,000 gallons per hour<br />
              <strong>Maintenance:</strong> Minimal, occasional cleaning
            </p>
            <ul>
              <li>No seals to leak</li>
              <li>Fish safe design</li>
              <li>Energy efficient</li>
              <li>Low maintenance</li>
            </ul>
          </div>

          <div className="pump-type-card">
            <h3>Solar Pumps</h3>
            <p>
              <strong>Best for:</strong> Remote locations, eco-friendly applications<br />
              <strong>Advantages:</strong> No electricity costs, environmentally friendly<br />
              <strong>Flow range:</strong> 50-500 gallons per hour<br />
              <strong>Maintenance:</strong> Solar panel cleaning, battery maintenance
            </p>
            <ul>
              <li>No electricity costs</li>
              <li>Environmentally friendly</li>
              <li>Good for remote locations</li>
              <li>Requires sunlight</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Signs Your Pump Needs Attention</h2>
        <div className="signs-grid">
          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Reduced Water Flow</h3>
            <p>
              <strong>Signs:</strong> Weak waterfall, slow stream flow<br />
              <strong>Causes:</strong> Clogged impeller, worn parts, insufficient power<br />
              <strong>Solution:</strong> Clean pump, check for blockages, assess pump size
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-volume-up"></i>
            </div>
            <h3>Unusual Noises</h3>
            <p>
              <strong>Signs:</strong> Grinding, rattling, or whining sounds<br />
              <strong>Causes:</strong> Worn bearings, damaged impeller, loose parts<br />
              <strong>Solution:</strong> Inspect pump, replace worn parts, tighten connections
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-thermometer-half"></i>
            </div>
            <h3>Overheating</h3>
            <p>
              <strong>Signs:</strong> Hot pump housing, reduced performance<br />
              <strong>Causes:</strong> Blocked intake, dry running, insufficient cooling<br />
              <strong>Solution:</strong> Check intake, ensure proper water level, clean pump
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Complete Failure</h3>
            <p>
              <strong>Signs:</strong> No water flow, pump won't start<br />
              <strong>Causes:</strong> Electrical issues, seized motor, severe damage<br />
              <strong>Solution:</strong> Check electrical connections, assess repair vs. replacement
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>High Energy Usage</h3>
            <p>
              <strong>Signs:</strong> Increased electricity bills, inefficient operation<br />
              <strong>Causes:</strong> Oversized pump, worn parts, poor efficiency<br />
              <strong>Solution:</strong> Right-size pump, upgrade to efficient model
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Frequent Cycling</h3>
            <p>
              <strong>Signs:</strong> Pump turns on/off frequently<br />
              <strong>Causes:</strong> Low water level, clogged intake, electrical issues<br />
              <strong>Solution:</strong> Check water level, clean intake, inspect electrical
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Pump Maintenance Schedule</h2>
        <div className="maintenance-schedule">
          <div className="schedule-card">
            <h3>Weekly Checks</h3>
            <ul>
              <li>Check water flow</li>
              <li>Listen for unusual noises</li>
              <li>Monitor water level</li>
              <li>Inspect for visible issues</li>
            </ul>
          </div>

          <div className="schedule-card">
            <h3>Monthly Maintenance</h3>
            <ul>
              <li>Clean pump intake</li>
              <li>Check electrical connections</li>
              <li>Inspect for leaks</li>
              <li>Test pump performance</li>
            </ul>
          </div>

          <div className="schedule-card">
            <h3>Seasonal Service</h3>
            <ul>
              <li>Deep clean pump</li>
              <li>Inspect all components</li>
              <li>Check pump efficiency</li>
              <li>Update maintenance schedule</li>
            </ul>
          </div>

          <div className="schedule-card">
            <h3>Annual Inspection</h3>
            <ul>
              <li>Professional pump inspection</li>
              <li>Performance testing</li>
              <li>Efficiency assessment</li>
              <li>Upgrade recommendations</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Pump Selection Guide</h2>
        <div className="selection-guide">
          <div className="guide-card">
            <h3>Small Ponds (Under 500 gallons)</h3>
            <p>
              <strong>Recommended:</strong> Submersible pump, 100-300 GPH<br />
              <strong>Features:</strong> Simple installation, low maintenance<br />
              <strong>Best for:</strong> Small water features, basic circulation
            </p>
          </div>

          <div className="guide-card">
            <h3>Medium Ponds (500-2,000 gallons)</h3>
            <p>
              <strong>Recommended:</strong> Submersible or magnetic drive, 300-1,000 GPH<br />
              <strong>Features:</strong> Good efficiency, fish safe options<br />
              <strong>Best for:</strong> Fish ponds, waterfalls, streams
            </p>
          </div>

          <div className="guide-card">
            <h3>Large Ponds (2,000+ gallons)</h3>
            <p>
              <strong>Recommended:</strong> External pump, 1,000+ GPH<br />
              <strong>Features:</strong> High efficiency, long lifespan<br />
              <strong>Best for:</strong> Large features, commercial applications
            </p>
          </div>

          <div className="guide-card">
            <h3>Special Applications</h3>
            <p>
              <strong>High Head:</strong> External pumps for tall waterfalls<br />
              <strong>Fish Ponds:</strong> Magnetic drive for safety<br />
              <strong>Remote Locations:</strong> Solar pumps for off-grid use<br />
              <strong>Commercial:</strong> Industrial grade pumps for heavy use
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Pump Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h4>Water Circulation</h4>
            <p>Maintains proper water movement and oxygen levels throughout your pond</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-filter"></i>
            </div>
            <h4>Filtration Power</h4>
            <p>Drives your filter system for optimal water quality and clarity</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h4>Fish Health</h4>
            <p>Provides oxygen and circulation essential for healthy aquatic life</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-mountain"></i>
            </div>
            <h4>Water Features</h4>
            <p>Powers waterfalls, streams, and other beautiful water features</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h4>Plant Health</h4>
            <p>Circulates nutrients and maintains optimal conditions for aquatic plants</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h4>Energy Efficiency</h4>
            <p>Modern pumps provide optimal performance with minimal energy consumption</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Related Services</h2>
        <p>
          Our pump services work together with our other pond services:
        </p>

        <div className="related-services">
          <Link href="/pond-pump-repair" className="service-link">
            <i className="fas fa-wrench"></i>
            Pump Repair
          </Link>
          <Link href="/pond-filters" className="service-link">
            <i className="fas fa-filter"></i>
            Pond Filters
          </Link>
          <Link href="/pond-maintenance" className="service-link">
            <i className="fas fa-cog"></i>
            Pond Maintenance
          </Link>
          <Link href="/pond-supplies" className="service-link">
            <i className="fas fa-tools"></i>
            Pond Supplies
          </Link>
          <Link href="/contact" className="service-link">
            <i className="fas fa-phone"></i>
            Get Service
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Need Pump Service?</h2>
        <p>
          Don't let pump problems compromise your pond's health and beauty. Contact us today for 
          professional pump installation, maintenance, or repair services.
        </p>
        
        <div className="cta-actions">
          <Link href="/contact" className="cta-button primary">
            <i className="fas fa-phone"></i>
            Get Pump Service
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

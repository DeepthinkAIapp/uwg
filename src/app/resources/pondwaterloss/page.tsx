import { PageTemplate } from '@/components/layout/PageTemplate';
import Image from 'next/image';
import Link from 'next/link';

export default function PondWaterLossPage() {
  return (
    <PageTemplate
      heroTitle="Causes of Pond Water Loss"
      heroSubtitle="Understanding why your pond is losing water and how to fix it"
      heroImage="/images/pondMaintenance.webp"
      heroAlt="Pond water loss causes and solutions in Utah"
      breadcrumbs={[
        { label: 'Resources', href: '/resources' },
        { label: 'Causes of Water Loss' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "How much water loss is normal for a pond?",
          answer: "Normal evaporation typically causes 1-2 inches of water loss per week during hot weather. If you're losing more than this, you likely have a leak or other issue that needs attention."
        },
        {
          question: "What's the most common cause of pond water loss?",
          answer: "Evaporation is the most common cause, especially during hot, dry weather. However, leaks in the liner, plumbing, or around the edges are also frequent causes that require professional repair."
        },
        {
          question: "How can I tell if my pond has a leak?",
          answer: "Monitor your water level daily. If you're losing more than 2 inches per week during moderate weather, or if the loss continues even during cool, humid conditions, you likely have a leak."
        },
        {
          question: "Should I be concerned about small amounts of water loss?",
          answer: "Small amounts of evaporation are normal, but any sudden or excessive water loss should be investigated. Even small leaks can become bigger problems and affect your pond's ecosystem."
        }
      ]}
      metaTitle="Causes of Pond Water Loss Utah | Leak Detection & Repair"
      metaDescription="Learn about the causes of pond water loss in Utah including evaporation, leaks, and structural issues. Professional leak detection and repair services available."
    >
      <div className="content-section">
        <h2>Understanding Pond Water Loss</h2>
        <p>
          Water loss in ponds is a common concern for pond owners, but understanding the causes can help 
          you determine whether the loss is normal or indicates a problem that needs attention. While some 
          water loss is natural and expected, excessive or sudden loss can signal issues that require 
          professional intervention.
        </p>

        <div className="info-box">
          <h3>Quick Assessment</h3>
          <p>
            <strong>Normal evaporation:</strong> 1-2 inches per week during hot weather<br />
            <strong>Potential leak:</strong> More than 2 inches per week or loss during cool weather<br />
            <strong>Emergency:</strong> Sudden, significant water loss
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Natural Causes of Water Loss</h2>
        <div className="causes-grid">
          <div className="cause-card">
            <div className="cause-icon">
              <i className="fas fa-sun"></i>
            </div>
            <h3>Evaporation</h3>
            <p>
              <strong>What it is:</strong> Water turning to vapor due to heat and wind<br />
              <strong>When it occurs:</strong> Hot, dry weather, especially in summer<br />
              <strong>Normal rate:</strong> 1-2 inches per week during peak summer<br />
              <strong>Solutions:</strong> Regular water top-offs, shade plants, wind barriers
            </p>
          </div>

          <div className="cause-card">
            <div className="cause-icon">
              <i className="fas fa-wind"></i>
            </div>
            <h3>Wind Effects</h3>
            <p>
              <strong>What it is:</strong> Wind carrying water droplets away from the pond<br />
              <strong>When it occurs:</strong> Windy conditions, especially with waterfalls<br />
              <strong>Normal rate:</strong> Varies with wind speed and pond design<br />
              <strong>Solutions:</strong> Wind barriers, adjusting waterfall flow, strategic landscaping
            </p>
          </div>

          <div className="cause-card">
            <div className="cause-icon">
              <i className="fas fa-thermometer-half"></i>
            </div>
            <h3>Temperature Changes</h3>
            <p>
              <strong>What it is:</strong> Water expansion/contraction and increased evaporation<br />
              <strong>When it occurs:</strong> Seasonal temperature fluctuations<br />
              <strong>Normal rate:</strong> Gradual changes throughout the year<br />
              <strong>Solutions:</strong> Seasonal monitoring, appropriate water levels
            </p>
          </div>

          <div className="cause-card">
            <div className="cause-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Splash Loss</h3>
            <p>
              <strong>What it is:</strong> Water splashing out from waterfalls or fountains<br />
              <strong>When it occurs:</strong> High flow rates, improper splash guards<br />
              <strong>Normal rate:</strong> Minimal with proper design<br />
              <strong>Solutions:</strong> Splash guards, flow adjustment, proper basin design
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Problematic Causes Requiring Attention</h2>
        <div className="problems-grid">
          <div className="problem-card urgent">
            <div className="problem-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Liner Leaks</h3>
            <p>
              <strong>Signs:</strong> Consistent water loss regardless of weather, wet areas around pond<br />
              <strong>Causes:</strong> Punctures, tears, UV damage, poor installation<br />
              <strong>Solutions:</strong> Professional leak detection and liner repair/replacement
            </p>
          </div>

          <div className="problem-card urgent">
            <div className="problem-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Plumbing Leaks</h3>
            <p>
              <strong>Signs:</strong> Water loss when pump is running, wet areas near equipment<br />
              <strong>Causes:</strong> Loose connections, cracked pipes, worn seals<br />
              <strong>Solutions:</strong> Professional plumbing inspection and repair
            </p>
          </div>

          <div className="problem-card urgent">
            <div className="problem-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Edge Seepage</h3>
            <p>
              <strong>Signs:</strong> Water loss around pond edges, soggy surrounding areas<br />
              <strong>Causes:</strong> Poor edge construction, settling, erosion<br />
              <strong>Solutions:</strong> Edge repair, proper sealing, structural reinforcement
            </p>
          </div>

          <div className="problem-card urgent">
            <div className="problem-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Equipment Malfunctions</h3>
            <p>
              <strong>Signs:</strong> Water loss when equipment is on, unusual noises<br />
              <strong>Causes:</strong> Pump leaks, filter issues, valve problems<br />
              <strong>Solutions:</strong> Equipment inspection and repair by professionals
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>How to Diagnose Water Loss</h2>
        <div className="diagnosis-steps">
          <div className="diagnosis-step">
            <div className="step-number">1</div>
            <h3>Monitor Water Level</h3>
            <p>
              Check your water level daily for a week. Mark the level and measure how much you lose each day. 
              This will help determine if the loss is consistent or varies with weather conditions.
            </p>
          </div>

          <div className="diagnosis-step">
            <div className="step-number">2</div>
            <h3>Check Weather Conditions</h3>
            <p>
              Note the temperature, humidity, and wind conditions during your monitoring period. 
              High temperatures and low humidity increase evaporation rates.
            </p>
          </div>

          <div className="diagnosis-step">
            <div className="step-number">3</div>
            <h3>Inspect Pond Edges</h3>
            <p>
              Look for wet areas around the pond, especially after the pump has been running. 
              Check for any visible damage to the liner or edge construction.
            </p>
          </div>

          <div className="diagnosis-step">
            <div className="step-number">4</div>
            <h3>Test Equipment</h3>
            <p>
              Run your pump and check for any leaks in the plumbing or equipment. 
              Look for water around pumps, filters, and pipe connections.
            </p>
          </div>

          <div className="diagnosis-step">
            <div className="step-number">5</div>
            <h3>Professional Assessment</h3>
            <p>
              If you suspect a leak or are losing more than 2 inches per week, contact us for 
              professional leak detection and diagnosis services.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Prevention and Maintenance</h2>
        <div className="prevention-grid">
          <div className="prevention-card">
            <h3>Regular Inspections</h3>
            <ul>
              <li>Check water levels weekly</li>
              <li>Inspect pond edges monthly</li>
              <li>Monitor equipment performance</li>
              <li>Look for signs of damage</li>
            </ul>
          </div>

          <div className="prevention-card">
            <h3>Proper Design</h3>
            <ul>
              <li>Ensure proper liner installation</li>
              <li>Use quality materials</li>
              <li>Design appropriate splash guards</li>
              <li>Plan for wind protection</li>
            </ul>
          </div>

          <div className="prevention-card">
            <h3>Seasonal Care</h3>
            <ul>
              <li>Adjust water levels seasonally</li>
              <li>Protect equipment in winter</li>
              <li>Monitor during extreme weather</li>
              <li>Maintain proper filtration</li>
            </ul>
          </div>

          <div className="prevention-card">
            <h3>Professional Maintenance</h3>
            <ul>
              <li>Annual professional inspection</li>
              <li>Regular equipment servicing</li>
              <li>Leak detection services</li>
              <li>Preventive repairs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>When to Call a Professional</h2>
        <div className="warning-signs">
          <div className="warning-item">
            <div className="warning-icon">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <h4>Excessive Water Loss</h4>
            <p>Losing more than 2 inches per week during moderate weather</p>
          </div>

          <div className="warning-item">
            <div className="warning-icon">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <h4>Sudden Changes</h4>
            <p>Rapid water level drops that don't correlate with weather</p>
          </div>

          <div className="warning-item">
            <div className="warning-icon">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <h4>Visible Damage</h4>
            <p>Cracks, tears, or other visible damage to pond structure</p>
          </div>

          <div className="warning-item">
            <div className="warning-icon">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <h4>Equipment Issues</h4>
            <p>Water loss that occurs only when equipment is running</p>
          </div>

          <div className="warning-item">
            <div className="warning-icon">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <h4>Wet Surrounding Areas</h4>
            <p>Soggy ground or water pooling around the pond</p>
          </div>

          <div className="warning-item">
            <div className="warning-icon">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <h4>Fish Health Issues</h4>
            <p>Fish stress or health problems related to water quality</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Leak Detection and Repair Services</h2>
        <p>
          If you're experiencing water loss issues, our professional team can help diagnose and 
          repair the problem quickly and effectively.
        </p>

        <div className="services-grid">
          <div className="service-item">
            <h4>Professional Leak Detection</h4>
            <p>Advanced equipment and techniques to locate leaks accurately</p>
          </div>

          <div className="service-item">
            <h4>Liner Repair and Replacement</h4>
            <p>Expert repair of damaged liners or complete replacement when needed</p>
          </div>

          <div className="service-item">
            <h4>Plumbing Repairs</h4>
            <p>Fix leaks in pumps, filters, and plumbing systems</p>
          </div>

          <div className="service-item">
            <h4>Edge and Structural Repairs</h4>
            <p>Repair pond edges, walls, and structural components</p>
          </div>

          <div className="service-item">
            <h4>Equipment Maintenance</h4>
            <p>Service and repair pond equipment to prevent leaks</p>
          </div>

          <div className="service-item">
            <h4>Preventive Maintenance</h4>
            <p>Regular inspections to catch problems before they become serious</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Related Resources</h2>
        <p>
          Learn more about pond maintenance and troubleshooting with these helpful resources:
        </p>

        <div className="related-resources">
          <Link href="/resources/finding-a-leak-in-your-pond" className="resource-link">
            <i className="fas fa-search"></i>
            Finding A Leak In Your Pond
          </Link>
          <Link href="/pond-maintenance" className="resource-link">
            <i className="fas fa-cog"></i>
            Pond Maintenance Services
          </Link>
          <Link href="/pond-pump-repair" className="resource-link">
            <i className="fas fa-wrench"></i>
            Pond Pump Repair
          </Link>
          <Link href="/contact" className="resource-link">
            <i className="fas fa-phone"></i>
            Get Professional Help
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Need Help with Water Loss?</h2>
        <p>
          Don't let water loss compromise your pond's health and beauty. Contact us today for 
          professional diagnosis and repair services.
        </p>
        
        <div className="cta-actions">
          <Link href="/contact" className="cta-button primary">
            <i className="fas fa-phone"></i>
            Get Leak Detection
          </Link>
          <Link href="/schedule" className="cta-button secondary">
            <i className="fas fa-calendar"></i>
            Schedule Inspection
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
}

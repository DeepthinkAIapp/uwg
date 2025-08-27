import { PageTemplate } from '@/components/layout/PageTemplate';
import Link from 'next/link';

export default function PondPumpRepairPage() {
  return (
    <PageTemplate
      heroTitle="Professional Pond Pump Repair Services"
      heroSubtitle="Expert diagnosis and repair of all pond pump systems to keep your water feature running smoothly"
      heroImage="/images/pumpRepair.webp"
      heroAlt="Professional pond pump repair service in Utah"
      breadcrumbs={[
        { label: 'Resources', href: '/resources' },
        { label: 'Pond Pump Repair' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "How do I know if my pond pump needs repair?",
          answer: "Common signs include reduced water flow, unusual noises, increased energy consumption, or complete failure. If you notice any of these issues, contact us immediately for professional diagnosis and repair."
        },
        {
          question: "Do you offer emergency pump repair services?",
          answer: "Yes, we provide 24/7 emergency pump repair services. A malfunctioning pump can quickly lead to water quality issues and fish health problems, so we prioritize urgent repairs."
        },
        {
          question: "Can you repair all types of pond pumps?",
          answer: "We service all major brands and types of pond pumps including submersible, external, and solar-powered pumps. Our technicians are certified to work with all leading manufacturers."
        },
        {
          question: "Is it better to repair or replace my pond pump?",
          answer: "We'll assess your pump's condition and provide honest recommendations. Often, timely repairs can extend pump life significantly, but we'll advise replacement when it's more cost-effective."
        }
      ]}
      metaTitle="Pond Pump Repair Utah | Professional Pump Service & Maintenance"
      metaDescription="Professional pond pump repair services in Utah. Expert diagnosis, repair, and maintenance of all pond pump systems. 24/7 emergency service available."
    >
      <div className="content-section">
        <h2>Expert Pond Pump Repair Services</h2>
        <p>
          Your pond pump is the heart of your water feature, circulating water through filters and creating 
          the beautiful flow that keeps your pond healthy and visually appealing. When your pump fails or 
          underperforms, it can quickly lead to water quality issues, algae growth, and fish health problems. 
          Our certified technicians provide expert diagnosis and repair services to get your pump running 
          efficiently again.
        </p>

        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Professional Diagnosis</h3>
            <p>
              Comprehensive testing and analysis to identify the root cause of pump issues. We use advanced 
              diagnostic equipment to pinpoint problems quickly and accurately, saving you time and money.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-wrench"></i>
            </div>
            <h3>Complete Pump Repair</h3>
            <p>
              Full repair services including motor replacement, impeller repair, seal replacement, and 
              electrical component repair. We restore your pump to optimal performance with quality parts.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Preventive Maintenance</h3>
            <p>
              Regular maintenance programs to prevent pump failures and extend equipment life. Our proactive 
              approach saves you money and prevents costly emergency repairs.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>Electrical Repairs</h3>
            <p>
              Professional electrical work including wiring repairs, control panel maintenance, and safety 
              system installation. All work meets local electrical codes and safety standards.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h3>Performance Optimization</h3>
            <p>
              Fine-tuning pump settings and flow rates to maximize efficiency and minimize energy consumption. 
              We ensure your pump operates at peak performance for your specific pond setup.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Warranty Protection</h3>
            <p>
              All our repairs come with comprehensive warranties on parts and labor. We stand behind our 
              work and ensure your pump continues to perform reliably after repair.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Common Pump Problems We Solve</h2>
        <div className="problems-grid">
          <div className="problem-card">
            <h3>Reduced Water Flow</h3>
            <p>
              <strong>Causes:</strong> Clogged impeller, worn seals, or restricted intake
            </p>
            <p>
              <strong>Solutions:</strong> Impeller cleaning, seal replacement, intake optimization
            </p>
          </div>

          <div className="problem-card">
            <h3>Unusual Noises</h3>
            <p>
              <strong>Causes:</strong> Worn bearings, loose components, or cavitation
            </p>
            <p>
              <strong>Solutions:</strong> Bearing replacement, component tightening, flow adjustment
            </p>
          </div>

          <div className="problem-card">
            <h3>High Energy Consumption</h3>
            <p>
              <strong>Causes:</strong> Inefficient operation, oversized pump, or electrical issues
            </p>
            <p>
              <strong>Solutions:</strong> Performance optimization, pump sizing, electrical repair
            </p>
          </div>

          <div className="problem-card">
            <h3>Complete Failure</h3>
            <p>
              <strong>Causes:</strong> Motor burnout, electrical failure, or mechanical damage
            </p>
            <p>
              <strong>Solutions:</strong> Motor replacement, electrical repair, or complete rebuild
            </p>
          </div>

          <div className="problem-card">
            <h3>Leaking Pump</h3>
            <p>
              <strong>Causes:</strong> Worn seals, cracked housing, or loose connections
            </p>
            <p>
              <strong>Solutions:</strong> Seal replacement, housing repair, connection tightening
            </p>
          </div>

          <div className="problem-card">
            <h3>Intermittent Operation</h3>
            <p>
              <strong>Causes:</strong> Electrical issues, overheating, or control problems
            </p>
            <p>
              <strong>Solutions:</strong> Electrical repair, cooling system maintenance, control replacement
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Repair Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Initial Assessment</h3>
            <p>
              We begin with a thorough visual inspection and performance testing to identify the specific 
              issues affecting your pump. This includes checking flow rates, electrical connections, and 
              overall system performance.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Detailed Diagnosis</h3>
            <p>
              Using professional diagnostic equipment, we pinpoint the exact cause of the problem. We&apos;ll 
              provide you with a detailed report and explain what needs to be repaired and why.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Repair Plan</h3>
            <p>
              We develop a comprehensive repair plan that addresses all issues found. You&apos;ll receive a 
              detailed quote with parts, labor, and timeline before we begin any work.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Professional Repair</h3>
            <p>
              Our certified technicians perform the repairs using quality parts and following manufacturer 
              specifications. We ensure all work meets safety standards and local codes.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Testing & Optimization</h3>
            <p>
              After repairs are complete, we thoroughly test the pump to ensure it&apos;s operating at peak 
              efficiency. We also optimize settings for your specific pond requirements.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">6</div>
            <h3>Follow-up Support</h3>
            <p>
              We provide ongoing support and maintenance recommendations to prevent future issues. Our 
              warranty ensures your pump continues to perform reliably.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Pump Brands We Service</h2>
        <p>
          Our technicians are certified to work with all major pond pump manufacturers. We maintain 
          an extensive inventory of genuine parts to ensure quick, reliable repairs.
        </p>

        <div className="brands-grid">
          <div className="brand-item">
            <h4>Laguna</h4>
            <p>Submersible and external pumps</p>
          </div>
          <div className="brand-item">
            <h4>Oase</h4>
            <p>Professional pond equipment</p>
          </div>
          <div className="brand-item">
            <h4>Pondmaster</h4>
            <p>Reliable water garden pumps</p>
          </div>
          <div className="brand-item">
            <h4>Cal Pump</h4>
            <p>Heavy-duty pond pumps</p>
          </div>
          <div className="brand-item">
            <h4>Little Giant</h4>
            <p>Commercial and residential pumps</p>
          </div>
          <div className="brand-item">
            <h4>All Other Major Brands</h4>
            <p>We service all leading manufacturers</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Emergency Repair Services</h2>
        <p>
          Pump failures can quickly lead to serious pond problems. That&apos;s why we offer 24/7 emergency 
          repair services to get your pump running again as quickly as possible.
        </p>

        <div className="emergency-features">
          <div className="emergency-feature">
            <div className="feature-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h4>24/7 Availability</h4>
            <p>Emergency service available around the clock</p>
          </div>

          <div className="emergency-feature">
            <div className="feature-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h4>Priority Response</h4>
            <p>Immediate dispatch for urgent pump failures</p>
          </div>

          <div className="emergency-feature">
            <div className="feature-icon">
              <i className="fas fa-truck"></i>
            </div>
            <h4>Mobile Service</h4>
            <p>On-site repairs to minimize downtime</p>
          </div>

          <div className="emergency-feature">
            <div className="feature-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h4>Parts Inventory</h4>
            <p>Extensive parts stock for quick repairs</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Preventive Maintenance Programs</h2>
        <p>
          Regular maintenance is the best way to prevent pump failures and extend equipment life. 
          Our maintenance programs include:
        </p>

        <div className="maintenance-features">
          <ul className="feature-list">
            <li>Quarterly pump inspections and cleaning</li>
            <li>Performance testing and optimization</li>
            <li>Electrical system safety checks</li>
            <li>Seal and bearing condition monitoring</li>
            <li>Flow rate and efficiency testing</li>
            <li>Preventive parts replacement</li>
            <li>Winter preparation and protection</li>
            <li>Priority scheduling for repairs</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Ready to Get Your Pump Fixed?</h2>
        <p>
          Don&apos;t let a malfunctioning pump compromise your pond&apos;s health and beauty. Contact us today 
          for professional pump repair services that will get your water feature running smoothly again.
        </p>
        
        <div className="cta-actions">
          <Link href="/contact" className="cta-button primary">
            <i className="fas fa-phone"></i>
            Get Emergency Repair
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

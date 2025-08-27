import { PageTemplate } from '@/components/layout/PageTemplate';
import Image from 'next/image';
import Link from 'next/link';

export default function PondMaintenancePage() {
  return (
    <PageTemplate
      heroTitle="Professional Pond Maintenance Services"
      heroSubtitle="Keep your pond healthy and beautiful year-round with our comprehensive maintenance programs"
      heroImage="/images/pondMaintenance.webp"
      heroAlt="Professional pond maintenance service in Utah"
      breadcrumbs={[
        { label: 'Pond Services', href: '/pond-services' },
        { label: 'Pond Maintenance' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "How often should I have my pond maintained?",
          answer: "We recommend quarterly maintenance visits for most ponds, with additional visits during peak seasons (spring and fall). This ensures optimal water quality and prevents major issues before they develop."
        },
        {
          question: "What's included in your pond maintenance service?",
          answer: "Our comprehensive maintenance includes water quality testing, filter cleaning, pump inspection, debris removal, plant trimming, fish health checks, and seasonal adjustments to keep your pond thriving."
        },
        {
          question: "Do you offer emergency pond maintenance?",
          answer: "Yes, we provide emergency maintenance services for urgent issues like pump failures, water quality problems, or fish health concerns. Contact us immediately for priority service."
        },
        {
          question: "Can you maintain ponds during winter months?",
          answer: "Absolutely! Winter maintenance is crucial for pond health. We provide specialized winter care including equipment protection, water quality monitoring, and preparation for spring thaw."
        }
      ]}
      metaTitle="Pond Maintenance Services Utah | Professional Pond Care"
      metaDescription="Professional pond maintenance services in Utah. Keep your pond healthy with our comprehensive maintenance programs including water quality testing, filter cleaning, and seasonal care."
    >
      <div className="content-section">
        <h2>Comprehensive Pond Maintenance Services</h2>
        <p>
          At Utah Water Gardens, we understand that a beautiful pond requires consistent care and attention. 
          Our professional maintenance services ensure your pond remains healthy, clean, and visually stunning 
          throughout all seasons. Whether you have a small backyard pond or a large commercial water feature, 
          our experienced team provides the expertise needed to keep your aquatic ecosystem thriving.
        </p>

        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Water Quality Management</h3>
            <p>
              Regular water testing and treatment to maintain optimal pH levels, ammonia, nitrite, and nitrate 
              balance. We use professional-grade testing equipment and treatments to ensure your pond water 
              stays crystal clear and healthy for fish and plants.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-filter"></i>
            </div>
            <h3>Filter System Maintenance</h3>
            <p>
              Complete filter cleaning and maintenance including mechanical, biological, and UV filtration systems. 
              We ensure your filtration system operates at peak efficiency to maintain water clarity and quality.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-pump-soap"></i>
            </div>
            <h3>Pump & Equipment Care</h3>
            <p>
              Regular inspection and maintenance of pumps, aerators, and other pond equipment. We identify 
              potential issues before they become costly problems and ensure all systems run smoothly.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Plant Care & Trimming</h3>
            <p>
              Seasonal plant maintenance including trimming, fertilizing, and replanting as needed. We help 
              maintain the perfect balance of aquatic plants for both aesthetics and water quality.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h3>Fish Health Monitoring</h3>
            <p>
              Regular health checks for your fish population, including parasite prevention, disease monitoring, 
              and feeding recommendations. We ensure your fish remain healthy and vibrant.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-broom"></i>
            </div>
            <h3>Debris Removal</h3>
            <p>
              Seasonal cleanup including leaf removal, algae control, and sediment management. We keep your 
              pond clean and prevent buildup that can affect water quality and equipment performance.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Maintenance Programs</h2>
        <p>
          We offer flexible maintenance programs designed to meet your specific needs and budget. 
          Each program includes our core services with additional benefits based on your chosen level.
        </p>

        <div className="program-grid">
          <div className="program-card">
            <h3>Basic Maintenance</h3>
            <div className="program-price">Starting at $150/visit</div>
            <ul className="program-features">
              <li>Water quality testing</li>
              <li>Basic filter cleaning</li>
              <li>Pump inspection</li>
              <li>Debris removal</li>
              <li>Seasonal recommendations</li>
            </ul>
            <Link href="/contact" className="program-button">
              Get Quote
            </Link>
          </div>

          <div className="program-card featured">
            <div className="featured-badge">Most Popular</div>
            <h3>Standard Maintenance</h3>
            <div className="program-price">Starting at $250/visit</div>
            <ul className="program-features">
              <li>Everything in Basic</li>
              <li>Complete filter maintenance</li>
              <li>Plant care & trimming</li>
              <li>Fish health monitoring</li>
              <li>Equipment optimization</li>
              <li>Priority scheduling</li>
            </ul>
            <Link href="/contact" className="program-button">
              Get Quote
            </Link>
          </div>

          <div className="program-card">
            <h3>Premium Maintenance</h3>
            <div className="program-price">Starting at $350/visit</div>
            <ul className="program-features">
              <li>Everything in Standard</li>
              <li>Advanced water treatments</li>
              <li>Fish feeding programs</li>
              <li>Seasonal pond preparation</li>
              <li>Emergency response</li>
              <li>Monthly check-ins</li>
            </ul>
            <Link href="/contact" className="program-button">
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Why Choose Our Maintenance Services?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <h4>Expert Knowledge</h4>
            <p>Our team has decades of combined experience in pond maintenance and aquatic ecosystem management.</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h4>Reliable Scheduling</h4>
            <p>We maintain consistent schedules and provide advance notice of all maintenance visits.</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h4>Professional Equipment</h4>
            <p>We use industry-leading tools and equipment to ensure thorough and efficient maintenance.</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4>Preventive Care</h4>
            <p>Our proactive approach prevents costly repairs and keeps your pond in optimal condition year-round.</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Seasonal Maintenance Considerations</h2>
        <div className="seasonal-grid">
          <div className="seasonal-card">
            <h3>Spring Maintenance</h3>
            <ul>
              <li>Remove winter debris and dead vegetation</li>
              <li>Restart and test all equipment</li>
              <li>Reintroduce beneficial bacteria</li>
              <li>Begin regular feeding schedules</li>
              <li>Plant new aquatic vegetation</li>
            </ul>
          </div>

          <div className="seasonal-card">
            <h3>Summer Maintenance</h3>
            <ul>
              <li>Monitor water temperature and oxygen levels</li>
              <li>Control algae growth</li>
              <li>Increase filtration during peak season</li>
              <li>Adjust feeding schedules for heat</li>
              <li>Maintain proper water circulation</li>
            </ul>
          </div>

          <div className="seasonal-card">
            <h3>Fall Maintenance</h3>
            <ul>
              <li>Remove falling leaves and debris</li>
              <li>Prepare fish for winter</li>
              <li>Trim back aquatic plants</li>
              <li>Install winter protection measures</li>
              <li>Test and winterize equipment</li>
            </ul>
          </div>

          <div className="seasonal-card">
            <h3>Winter Maintenance</h3>
            <ul>
              <li>Monitor ice formation and water levels</li>
              <li>Ensure proper aeration</li>
              <li>Check equipment in heated areas</li>
              <li>Minimize feeding during cold periods</li>
              <li>Prepare for spring thaw</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Ready to Get Started?</h2>
        <p>
          Don't wait until your pond has problems. Regular maintenance is the key to a healthy, 
          beautiful pond that you can enjoy year-round. Contact us today to discuss your maintenance 
          needs and get started with a customized care program.
        </p>
        
        <div className="cta-actions">
          <Link href="/contact" className="cta-button primary">
            <i className="fas fa-phone"></i>
            Get Free Consultation
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

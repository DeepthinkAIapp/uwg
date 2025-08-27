import { PageTemplate } from '@/components/layout/PageTemplate';
import Link from 'next/link';

export default function PondCleaningsPage() {
  return (
    <PageTemplate
      heroTitle="Professional Pond Cleaning Services"
      heroSubtitle="Expert cleaning and maintenance to keep your pond beautiful and healthy"
      heroImage="/images/pondCleaning1000x800.webp"
      heroAlt="Professional pond cleaning service in Utah"
      breadcrumbs={[
        { label: 'Pond Services', href: '/pond-services' },
        { label: 'Pond Cleanings' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "How often should I have my pond cleaned?",
          answer: "Most ponds benefit from professional cleaning 1-2 times per year, typically in spring and fall. Ponds with fish may need more frequent cleaning, while plant-only ponds may need less. We'll assess your specific situation and recommend the optimal schedule."
        },
        {
          question: "What's included in a professional pond cleaning?",
          answer: "Our cleaning service includes debris removal, algae control, filter cleaning, pump maintenance, water quality testing, and plant trimming. We also inspect equipment and provide recommendations for ongoing maintenance."
        },
        {
          question: "Do you clean ponds with fish?",
          answer: "Yes, we have extensive experience cleaning ponds with fish. We use fish-safe methods and can temporarily relocate fish if needed. We'll ensure your fish remain safe and healthy throughout the cleaning process."
        },
        {
          question: "How long does a pond cleaning take?",
          answer: "Cleaning time depends on pond size and condition. Small ponds (under 500 gallons) typically take 2-4 hours, medium ponds (500-2,000 gallons) take 4-8 hours, and large ponds (2,000+ gallons) can take a full day or more."
        }
      ]}
      metaTitle="Pond Cleaning Utah | Professional Pond Maintenance"
      metaDescription="Professional pond cleaning services in Utah. Expert algae removal, debris cleanup, and water quality maintenance. Keep your pond beautiful and healthy. Call 801-590-8516 today!"
    >
      <div className="content-section">
        <h2>Expert Pond Cleaning Services</h2>
        <p>
          Keep your pond beautiful and healthy with our professional cleaning services. Regular cleaning 
          is essential for maintaining water quality, preventing algae growth, and ensuring your aquatic 
          life thrives. Our experienced team uses specialized equipment and techniques to thoroughly 
          clean your pond while protecting fish and plants. From debris removal to water quality 
          optimization, we provide comprehensive cleaning solutions that restore your pond&apos;s natural beauty.
        </p>

        <div className="info-box">
          <h3>Why Professional Cleaning is Essential</h3>
          <p>
            <strong>Water quality:</strong> Removes harmful debris and improves water clarity<br />
            <strong>Fish health:</strong> Creates optimal conditions for aquatic life<br />
            <strong>Algae control:</strong> Prevents excessive algae growth and blooms<br />
            <strong>Equipment maintenance:</strong> Keeps pumps and filters working efficiently
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Cleaning Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-broom"></i>
            </div>
            <h3>Debris Removal</h3>
            <p>
              Complete removal of leaves, twigs, and other organic debris from the pond surface and 
              bottom. We use specialized equipment to ensure thorough cleaning without disturbing fish or plants.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h3>Algae Control</h3>
            <p>
              Professional algae removal and control using safe, effective methods. We address both 
              floating algae and string algae while maintaining water quality and protecting aquatic life.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-filter"></i>
            </div>
            <h3>Filter Cleaning</h3>
            <p>
              Thorough cleaning of all filter components including mechanical and biological media. 
              We ensure your filtration system operates at peak efficiency for optimal water quality.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h3>Pump Maintenance</h3>
            <p>
              Cleaning and inspection of pumps, including impeller cleaning and performance testing. 
              We ensure your pump operates efficiently and identify any potential issues before they become problems.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Water Quality Testing</h3>
            <p>
              Comprehensive water quality testing including pH, ammonia, nitrites, and nitrates. 
              We provide detailed reports and recommendations for maintaining optimal water conditions.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-cut"></i>
            </div>
            <h3>Plant Trimming</h3>
            <p>
              Professional trimming and maintenance of aquatic plants. We remove dead or overgrown 
              vegetation while preserving healthy plants and maintaining the pond&apos;s natural balance.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Cleaning Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Initial Assessment</h3>
            <p>
              We evaluate your pond&apos;s condition, identify cleaning needs, and develop a customized 
              cleaning plan. We&apos;ll assess water quality, equipment condition, and overall pond health.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Fish Protection</h3>
            <p>
              If needed, we safely relocate fish to temporary holding tanks with proper aeration and 
              water quality. We ensure fish remain comfortable and healthy throughout the cleaning process.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Debris Removal</h3>
            <p>
              We remove all visible debris from the pond surface and bottom using specialized equipment. 
              This includes leaves, twigs, and other organic matter that can affect water quality.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Algae Treatment</h3>
            <p>
              We address algae growth using safe, effective methods. This may include manual removal, 
              treatment with fish-safe products, and recommendations for ongoing algae control.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Equipment Cleaning</h3>
            <p>
              We thoroughly clean pumps, filters, and other equipment to ensure optimal performance. 
              This includes impeller cleaning, filter media maintenance, and performance testing.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">6</div>
            <h3>Final Inspection</h3>
            <p>
              We conduct a final inspection, test water quality, and ensure everything is functioning 
              properly. We provide detailed recommendations for ongoing maintenance and care.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Signs Your Pond Needs Cleaning</h2>
        <div className="signs-grid">
          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Poor Water Clarity</h3>
            <p>
              <strong>Signs:</strong> Cloudy or murky water, reduced visibility<br />
              <strong>Causes:</strong> Suspended debris, algae growth, poor filtration<br />
              <strong>Solution:</strong> Debris removal, filter cleaning, water quality improvement
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h3>Excessive Algae</h3>
            <p>
              <strong>Signs:</strong> Green water, algae mats, string algae<br />
              <strong>Causes:</strong> High nutrient levels, poor circulation, sunlight exposure<br />
              <strong>Solution:</strong> Algae removal, nutrient control, improved filtration
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h3>Fish Stress</h3>
            <p>
              <strong>Signs:</strong> Fish gasping, reduced activity, poor appetite<br />
              <strong>Causes:</strong> Poor water quality, low oxygen, high ammonia<br />
              <strong>Solution:</strong> Water quality improvement, aeration, debris removal
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Reduced Water Flow</h3>
            <p>
              <strong>Signs:</strong> Weak waterfall, slow circulation<br />
              <strong>Causes:</strong> Clogged pump, dirty filters, debris buildup<br />
              <strong>Solution:</strong> Pump cleaning, filter maintenance, debris removal
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Overgrown Plants</h3>
            <p>
              <strong>Signs:</strong> Plants covering water surface, dead vegetation<br />
              <strong>Causes:</strong> Lack of maintenance, nutrient imbalance<br />
              <strong>Solution:</strong> Plant trimming, dead material removal, balance restoration
            </p>
          </div>

          <div className="sign-card">
            <div className="sign-icon">
              <i className="fas fa-thermometer-half"></i>
            </div>
            <h3>Foul Odors</h3>
            <p>
              <strong>Signs:</strong> Unpleasant smells, stagnant water<br />
              <strong>Causes:</strong> Decaying organic matter, poor circulation<br />
              <strong>Solution:</strong> Debris removal, water circulation improvement, aeration
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Cleaning Schedule Recommendations</h2>
        <div className="schedule-grid">
          <div className="schedule-card">
            <h3>Spring Cleaning (March-May)</h3>
            <ul>
              <li>Remove winter debris</li>
              <li>Clean filters and pumps</li>
              <li>Test water quality</li>
              <li>Prepare for growing season</li>
              <li>Check equipment condition</li>
            </ul>
          </div>

          <div className="schedule-card">
            <h3>Summer Maintenance (June-August)</h3>
            <ul>
              <li>Monitor algae growth</li>
              <li>Clean surface debris</li>
              <li>Check water quality</li>
              <li>Trim overgrown plants</li>
              <li>Ensure proper circulation</li>
            </ul>
          </div>

          <div className="schedule-card">
            <h3>Fall Cleaning (September-November)</h3>
            <ul>
              <li>Remove falling leaves</li>
              <li>Clean filters thoroughly</li>
              <li>Prepare for winter</li>
              <li>Check equipment</li>
              <li>Winterize if necessary</li>
            </ul>
          </div>

          <div className="schedule-card">
            <h3>Winter Monitoring (December-February)</h3>
            <ul>
              <li>Monitor ice conditions</li>
              <li>Check equipment operation</li>
              <li>Remove snow if needed</li>
              <li>Plan spring cleaning</li>
              <li>Maintain aeration</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Cleaning Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h4>Improved Water Clarity</h4>
            <p>Remove debris and algae for crystal clear water that showcases your pond&apos;s beauty</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h4>Better Fish Health</h4>
            <p>Maintain optimal water quality and oxygen levels for healthy, thriving fish</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h4>Equipment Efficiency</h4>
            <p>Keep pumps and filters working at peak performance with regular cleaning</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h4>Algae Control</h4>
            <p>Prevent excessive algae growth and maintain a balanced ecosystem</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h4>Plant Health</h4>
            <p>Maintain healthy aquatic plants with proper trimming and debris removal</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h4>Peace of Mind</h4>
            <p>Enjoy your pond knowing it&apos;s properly maintained and healthy</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Related Services</h2>
        <p>
          Our cleaning services work together with our other pond services:
        </p>

        <div className="related-services">
          <Link href="/pond-maintenance" className="service-link">
            <i className="fas fa-cog"></i>
            Pond Maintenance
          </Link>
          <Link href="/pond-filters" className="service-link">
            <i className="fas fa-filter"></i>
            Pond Filters
          </Link>
          <Link href="/pond-pump-repair" className="service-link">
            <i className="fas fa-wrench"></i>
            Pump Repair
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
        <h2>Need Pond Cleaning?</h2>
        <p>
          Don&apos;t let your pond lose its beauty and health. Contact us today for professional cleaning 
          services that will restore your pond&apos;s natural beauty and ensure optimal water quality.
        </p>
        
        <div className="cta-actions">
          <Link href="/contact" className="cta-button primary">
            <i className="fas fa-phone"></i>
            Schedule Cleaning
          </Link>
          <Link href="/schedule" className="cta-button secondary">
            <i className="fas fa-calendar"></i>
            Book Appointment
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
}

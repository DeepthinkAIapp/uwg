import { PageTemplate } from '@/components/layout/PageTemplate';
import Link from 'next/link';

export default function PondConstructionPage() {
  return (
    <PageTemplate
      heroTitle="Professional Pond Construction"
      heroSubtitle="Custom water features designed and built to transform your outdoor space"
      heroImage="/images/pondConstruction1000x800.webp"
      heroAlt="Professional pond construction service in Utah"
      breadcrumbs={[
        { label: 'Pond Services', href: '/pond-services' },
        { label: 'Pond Construction' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "How long does pond construction take?",
          answer: "Construction time varies based on pond size and complexity. Small ponds (under 500 gallons) typically take 1-3 days, medium ponds (500-2,000 gallons) take 3-7 days, and large ponds (2,000+ gallons) can take 1-3 weeks. We'll provide a detailed timeline during consultation."
        },
        {
          question: "What's included in pond construction?",
          answer: "Our construction includes excavation, liner installation, rock work, waterfall construction, plumbing, electrical setup, pump and filter installation, and initial landscaping. We also provide detailed maintenance instructions and warranty on all workmanship."
        },
        {
          question: "Do you handle permits and regulations?",
          answer: "Yes, we handle all necessary permits and ensure compliance with local regulations. This includes building permits, electrical permits, and any environmental requirements. We'll coordinate with local authorities to ensure your project meets all requirements."
        },
        {
          question: "Can you build ponds in any location?",
          answer: "We can build ponds in most locations, but site conditions affect design and cost. We assess soil type, drainage, water availability, and access before construction. Some sites may require additional preparation or alternative designs."
        }
      ]}
      metaTitle="Pond Construction Utah | Custom Water Features"
      metaDescription="Professional pond construction in Utah. Custom water features, waterfalls, and koi ponds. Expert design and installation. Call 801-590-8516 for free consultation!"
    >
      <div className="content-section">
        <h2>Expert Pond Construction Services</h2>
        <p>
          Transform your outdoor space with a custom water feature designed and built by our experienced 
          team. From intimate garden ponds to grand koi ponds with waterfalls, we create beautiful, 
          functional water features that enhance your property's beauty and value. Our construction 
          process ensures your pond is built to last, with proper engineering, quality materials, and 
          attention to every detail.
        </p>

        <div className="info-box">
          <h3>Why Choose Professional Construction</h3>
          <p>
            <strong>Expert design:</strong> Custom plans tailored to your space and preferences<br />
            <strong>Quality materials:</strong> Premium liners, pumps, and equipment<br />
            <strong>Proper engineering:</strong> Correct sizing, plumbing, and electrical setup<br />
            <strong>Warranty protection:</strong> Guaranteed workmanship and materials
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Construction Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-pencil-ruler"></i>
            </div>
            <h3>Custom Design</h3>
            <p>
              Personalized pond design based on your space, style preferences, and budget. We'll create 
              detailed plans including dimensions, materials, and features that perfectly suit your needs.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-shovel"></i>
            </div>
            <h3>Excavation & Site Prep</h3>
            <p>
              Professional excavation using proper equipment and techniques. We handle soil removal, 
              leveling, and preparation to ensure a solid foundation for your water feature.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-layer-group"></i>
            </div>
            <h3>Liner Installation</h3>
            <p>
              Expert installation of high-quality pond liners with proper underlayment and protection. 
              We ensure watertight construction that will last for years to come.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-mountain"></i>
            </div>
            <h3>Rock Work & Waterfalls</h3>
            <p>
              Beautiful rock work and waterfall construction using natural stone. We create stunning 
              features that look natural and provide the perfect sound and visual appeal.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Plumbing & Electrical</h3>
            <p>
              Professional installation of pumps, filters, and electrical systems. We ensure proper 
              sizing, safe installation, and optimal performance for your water feature.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h3>Landscaping & Finishing</h3>
            <p>
              Complete landscaping around your pond including plants, edging, and decorative elements. 
              We create a cohesive design that integrates seamlessly with your existing landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Types of Ponds We Build</h2>
        <div className="pond-types-grid">
          <div className="pond-type-card">
            <h3>Garden Ponds</h3>
            <p>
              <strong>Size:</strong> 100-1,000 gallons<br />
              <strong>Features:</strong> Plants, small waterfalls, lighting<br />
              <strong>Best for:</strong> Decorative purposes, small spaces<br />
              <strong>Timeline:</strong> 1-3 days
            </p>
            <ul>
              <li>Perfect for small yards</li>
              <li>Low maintenance</li>
              <li>Beautiful plant displays</li>
              <li>Affordable option</li>
            </ul>
          </div>

          <div className="pond-type-card">
            <h3>Koi Ponds</h3>
            <p>
              <strong>Size:</strong> 1,000-10,000+ gallons<br />
              <strong>Features:</strong> Fish habitat, advanced filtration, deep zones<br />
              <strong>Best for:</strong> Fish enthusiasts, large spaces<br />
              <strong>Timeline:</strong> 1-3 weeks
            </p>
            <ul>
              <li>Designed for fish health</li>
              <li>Advanced filtration systems</li>
              <li>Proper depth zones</li>
              <li>Year-round enjoyment</li>
            </ul>
          </div>

          <div className="pond-type-card">
            <h3>Waterfall Ponds</h3>
            <p>
              <strong>Size:</strong> 500-5,000 gallons<br />
              <strong>Features:</strong> Multiple cascades, streams, dramatic drops<br />
              <strong>Best for:</strong> Visual impact, sound features<br />
              <strong>Timeline:</strong> 3-10 days
            </p>
            <ul>
              <li>Dramatic visual appeal</li>
              <li>Soothing water sounds</li>
              <li>Natural stone construction</li>
              <li>Customizable heights</li>
            </ul>
          </div>

          <div className="pond-type-card">
            <h3>Natural Ponds</h3>
            <p>
              <strong>Size:</strong> 2,000-20,000+ gallons<br />
              <strong>Features:</strong> Natural appearance, wildlife habitat<br />
              <strong>Best for:</strong> Large properties, natural settings<br />
              <strong>Timeline:</strong> 1-4 weeks
            </p>
            <ul>
              <li>Natural appearance</li>
              <li>Wildlife friendly</li>
              <li>Low maintenance</li>
              <li>Eco-friendly design</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Construction Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Initial Consultation</h3>
            <p>
              We visit your site to assess conditions, discuss your vision, and provide initial 
              recommendations. We'll evaluate soil, drainage, water availability, and access.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Design & Planning</h3>
            <p>
              We create detailed design plans including dimensions, materials, features, and timeline. 
              You'll receive a comprehensive proposal with pricing and specifications.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Permits & Preparation</h3>
            <p>
              We handle all necessary permits and coordinate with local authorities. We'll prepare 
              the site and schedule construction to minimize disruption to your property.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Excavation & Foundation</h3>
            <p>
              Professional excavation using proper equipment and techniques. We create the perfect 
              shape and depth for your water feature with proper drainage and support.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Construction & Installation</h3>
            <p>
              We install liners, build rock work and waterfalls, set up plumbing and electrical 
              systems, and install pumps and filters. Every detail is carefully executed.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">6</div>
            <h3>Landscaping & Finishing</h3>
            <p>
              Complete landscaping around your pond including plants, edging, and decorative elements. 
              We ensure everything looks perfect and functions properly.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Construction Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Waterfall Systems</h3>
            <ul>
              <li>Natural stone construction</li>
              <li>Multiple cascade levels</li>
              <li>Customizable heights</li>
              <li>Proper water flow design</li>
              <li>Sound optimization</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>Filtration Systems</h3>
            <ul>
              <li>Mechanical filtration</li>
              <li>Biological filtration</li>
              <li>UV sterilization</li>
              <li>Skimmer systems</li>
              <li>Bottom drains</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>Lighting Systems</h3>
            <ul>
              <li>Underwater lighting</li>
              <li>Waterfall lighting</li>
              <li>Landscape lighting</li>
              <li>LED technology</li>
              <li>Automated controls</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>Fish Features</h3>
            <ul>
              <li>Proper depth zones</li>
              <li>Fish caves and hiding spots</li>
              <li>Oxygenation systems</li>
              <li>Temperature regulation</li>
              <li>Feeding areas</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Construction Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-home"></i>
            </div>
            <h4>Property Value</h4>
            <p>Well-designed water features can increase your property value and appeal to potential buyers</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h4>Stress Relief</h4>
            <p>The sight and sound of water provides natural stress relief and creates a peaceful environment</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h4>Wildlife Habitat</h4>
            <p>Ponds attract beneficial wildlife including birds, butterflies, and beneficial insects</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-thermometer-half"></i>
            </div>
            <h4>Climate Control</h4>
            <p>Water features help cool surrounding areas and create microclimates for plants</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h4>Visual Appeal</h4>
            <p>Beautiful water features become the focal point of your landscape and create stunning views</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-users"></i>
            </div>
            <h4>Entertainment Space</h4>
            <p>Ponds create beautiful outdoor entertainment areas for family and friends</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Construction Considerations</h2>
        <div className="considerations-grid">
          <div className="consideration-card">
            <h3>Site Assessment</h3>
            <ul>
              <li>Soil type and composition</li>
              <li>Drainage patterns</li>
              <li>Water table levels</li>
              <li>Sun exposure</li>
              <li>Access for equipment</li>
            </ul>
          </div>

          <div className="consideration-card">
            <h3>Design Factors</h3>
            <ul>
              <li>Pond size and depth</li>
              <li>Waterfall height and flow</li>
              <li>Fish population needs</li>
              <li>Plant requirements</li>
              <li>Maintenance access</li>
            </ul>
          </div>

          <div className="consideration-card">
            <h3>Technical Requirements</h3>
            <ul>
              <li>Pump sizing and selection</li>
              <li>Filtration system design</li>
              <li>Electrical requirements</li>
              <li>Plumbing layout</li>
              <li>Safety considerations</li>
            </ul>
          </div>

          <div className="consideration-card">
            <h3>Maintenance Planning</h3>
            <ul>
              <li>Cleaning access points</li>
              <li>Equipment placement</li>
              <li>Water quality management</li>
              <li>Seasonal care requirements</li>
              <li>Long-term maintenance needs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Related Services</h2>
        <p>
          Our construction services work together with our other pond services:
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
          <Link href="/pond-repair-and-rebuild" className="service-link">
            <i className="fas fa-tools"></i>
            Pond Repair
          </Link>
          <Link href="/contact" className="service-link">
            <i className="fas fa-phone"></i>
            Get Quote
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Ready to Build Your Dream Pond?</h2>
        <p>
          Don't wait to transform your outdoor space. Contact us today for a free consultation and 
          let us help you create the water feature of your dreams.
        </p>
        
        <div className="cta-actions">
          <Link href="/contact" className="cta-button primary">
            <i className="fas fa-phone"></i>
            Get Free Quote
          </Link>
          <Link href="/schedule" className="cta-button secondary">
            <i className="fas fa-calendar"></i>
            Schedule Consultation
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
}

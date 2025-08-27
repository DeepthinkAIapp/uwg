import { PageTemplate } from '@/components/layout/PageTemplate';
import Link from 'next/link';

export default function PondConsultationsPage() {
  return (
    <PageTemplate
      heroTitle="Professional Pond Consultations"
      heroSubtitle="Expert advice and planning for your water feature projects"
      heroImage="/images/pondConsultation1000x800.webp"
      heroAlt="Professional pond consultation service in Utah"
      breadcrumbs={[
        { label: 'Pond Services', href: '/pond-services' },
        { label: 'Pond Consultations' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "What does a pond consultation include?",
          answer: "Our consultations include a thorough site assessment, discussion of your goals and budget, design recommendations, maintenance planning, and a detailed proposal. We'll evaluate your space, soil conditions, water availability, and provide expert guidance for your specific situation."
        },
        {
          question: "How long does a consultation take?",
          answer: "Initial consultations typically take 1-2 hours depending on the complexity of your project. We'll thoroughly assess your site, discuss your vision, and answer all your questions to ensure we understand your needs completely."
        },
        {
          question: "Do you charge for consultations?",
          answer: "We offer free initial consultations for most projects. For complex commercial projects or extensive design work, we may charge a consultation fee, but this is always discussed upfront and can often be applied toward your project."
        },
        {
          question: "What should I prepare for my consultation?",
          answer: "It's helpful to have photos of your space, any existing water features, your budget range, and a list of questions. We'll also need to know about your water source, drainage, and any specific features you'd like to include."
        }
      ]}
      metaTitle="Pond Consultations Utah | Expert Water Feature Planning"
      metaDescription="Professional pond consultations in Utah. Expert advice, site assessment, and planning for water features. Free consultations available. Call 801-590-8516 today!"
    >
      <div className="content-section">
        <h2>Expert Pond Consultations</h2>
        <p>
          Whether you're planning a new water feature or need help with an existing pond, our professional 
          consultations provide the expert guidance you need to make informed decisions. Our experienced 
          team will assess your space, understand your vision, and provide comprehensive recommendations 
          tailored to your specific needs and budget. From initial concept to final implementation, we're 
          here to help you create the water feature of your dreams.
        </p>

        <div className="info-box">
          <h3>What Our Consultations Include</h3>
          <p>
            <strong>Site Assessment:</strong> Thorough evaluation of your space, soil, and conditions<br />
            <strong>Design Planning:</strong> Custom recommendations based on your goals and budget<br />
            <strong>Maintenance Guidance:</strong> Long-term care and maintenance planning<br />
            <strong>Detailed Proposal:</strong> Comprehensive project outline and pricing
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Consultation Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-home"></i>
            </div>
            <h3>New Pond Planning</h3>
            <p>
              Comprehensive planning for new water features including site selection, design concepts, 
              material recommendations, and construction planning. We'll help you choose the perfect 
              location and design for your space.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Existing Pond Assessment</h3>
            <p>
              Evaluation of existing ponds to identify issues, improvement opportunities, and maintenance 
              needs. We'll provide recommendations for upgrades, repairs, or enhancements.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Landscaping Integration</h3>
            <p>
              Advice on integrating your water feature with existing landscaping, including plant selection, 
              hardscaping, and overall design coordination for a cohesive outdoor space.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h3>Equipment Selection</h3>
            <p>
              Expert guidance on pumps, filters, lighting, and other equipment based on your pond size, 
              fish population, and maintenance preferences. We'll recommend the best options for your needs.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h3>Fish & Plant Planning</h3>
            <p>
              Recommendations for fish species, aquatic plants, and ecosystem balance. We'll help you 
              create a healthy, thriving environment for your aquatic life.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-calendar"></i>
            </div>
            <h3>Maintenance Planning</h3>
            <p>
              Long-term maintenance planning including seasonal care, water quality management, and 
              preventive maintenance schedules to keep your pond healthy and beautiful.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Consultation Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Initial Contact</h3>
            <p>
              Contact us to discuss your project and schedule a consultation. We'll gather basic information 
              about your space, goals, and timeline to prepare for our visit.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Site Assessment</h3>
            <p>
              We'll visit your property to assess the site conditions, evaluate soil, drainage, water 
              availability, and discuss your vision in detail.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Design Discussion</h3>
            <p>
              Based on our assessment, we'll discuss design options, materials, features, and provide 
              recommendations tailored to your space and budget.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Proposal Development</h3>
            <p>
              We'll develop a detailed proposal including design concepts, material specifications, 
              timeline, and pricing for your project.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Follow-up Support</h3>
            <p>
              After the consultation, we're available to answer questions, provide additional information, 
              and help you move forward with your project.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>What We Assess During Consultations</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <h3>Site Conditions</h3>
            <ul>
              <li>Soil type and composition</li>
              <li>Drainage patterns</li>
              <li>Sun exposure and shade</li>
              <li>Existing landscaping</li>
              <li>Access for equipment</li>
            </ul>
          </div>

          <div className="assessment-card">
            <h3>Water Considerations</h3>
            <ul>
              <li>Water source availability</li>
              <li>Water quality testing</li>
              <li>Drainage requirements</li>
              <li>Water circulation needs</li>
              <li>Filtration requirements</li>
            </ul>
          </div>

          <div className="assessment-card">
            <h3>Design Elements</h3>
            <ul>
              <li>Pond size and depth</li>
              <li>Waterfall and stream design</li>
              <li>Planting zones</li>
              <li>Fish habitat areas</li>
              <li>Lighting and features</li>
            </ul>
          </div>

          <div className="assessment-card">
            <h3>Maintenance Access</h3>
            <ul>
              <li>Equipment placement</li>
              <li>Maintenance pathways</li>
              <li>Storage considerations</li>
              <li>Safety requirements</li>
              <li>Future expansion potential</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Consultation Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h4>Expert Guidance</h4>
            <p>Professional advice from experienced pond specialists who understand local conditions and requirements</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h4>Cost Savings</h4>
            <p>Avoid costly mistakes with proper planning and expert recommendations for materials and design</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h4>Time Efficiency</h4>
            <p>Streamlined planning process with clear timelines and organized project management</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h4>Peace of Mind</h4>
            <p>Confidence in your project with professional guidance and ongoing support throughout the process</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h4>Long-term Success</h4>
            <p>Proper planning ensures your water feature will be beautiful, functional, and easy to maintain</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-users"></i>
            </div>
            <h4>Ongoing Support</h4>
            <p>Continued relationship with our team for maintenance, upgrades, and future projects</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Preparing for Your Consultation</h2>
        <div className="preparation-grid">
          <div className="preparation-card">
            <h3>Before We Arrive</h3>
            <ul>
              <li>Take photos of your space from multiple angles</li>
              <li>Note any existing water features or landscaping</li>
              <li>Consider your budget range</li>
              <li>Think about your goals and preferences</li>
              <li>Prepare a list of questions</li>
            </ul>
          </div>

          <div className="preparation-card">
            <h3>Information to Have Ready</h3>
            <ul>
              <li>Property size and dimensions</li>
              <li>Water source availability</li>
              <li>Drainage patterns on your property</li>
              <li>Any existing utilities or irrigation</li>
              <li>Local building codes or restrictions</li>
            </ul>
          </div>

          <div className="preparation-card">
            <h3>Questions to Consider</h3>
            <ul>
              <li>What's your primary goal for the water feature?</li>
              <li>Do you want fish or just plants?</li>
              <li>How much maintenance are you willing to do?</li>
              <li>What's your timeline for completion?</li>
              <li>Are there any specific features you want?</li>
            </ul>
          </div>

          <div className="preparation-card">
            <h3>Inspiration Ideas</h3>
            <ul>
              <li>Collect photos of water features you like</li>
              <li>Note any specific styles or themes</li>
              <li>Consider how you'll use the space</li>
              <li>Think about seasonal considerations</li>
              <li>Plan for future landscaping changes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Related Services</h2>
        <p>
          Our consultation services work hand-in-hand with our other pond services:
        </p>

        <div className="related-services">
          <Link href="/pond-construction" className="service-link">
            <i className="fas fa-hammer"></i>
            Pond Construction
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
            Get Consultation
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Ready for Your Consultation?</h2>
        <p>
          Don't start your water feature project without expert guidance. Contact us today to schedule 
          your professional consultation and get started on creating the pond of your dreams.
        </p>
        
        <div className="cta-actions">
          <Link href="/contact" className="cta-button primary">
            <i className="fas fa-phone"></i>
            Schedule Consultation
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

import { PageTemplate } from '@/components/layout/PageTemplate';
import Image from 'next/image';
import Link from 'next/link';

export default function PondGalleryPage() {
  return (
    <PageTemplate
      heroTitle="Pond Gallery"
      heroSubtitle="Showcasing our beautiful water feature projects and transformations"
      heroImage="/images/pondConstruction1000x800.webp"
      heroAlt="Beautiful pond gallery showcase in Utah"
      breadcrumbs={[
        { label: 'Pond Gallery' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "What types of projects are featured in your gallery?",
          answer: "Our gallery showcases a wide variety of water features including garden ponds, koi ponds, waterfalls, streams, natural ponds, and commercial water features. We feature projects of all sizes from small garden ponds to large commercial installations."
        },
        {
          question: "Can I see before and after photos of projects?",
          answer: "Yes, many of our gallery projects include before and after photos to show the transformation. We document the entire process from initial site assessment through final completion to demonstrate our work quality."
        },
        {
          question: "Do you have examples of projects in my area?",
          answer: "Our gallery includes projects from throughout Utah, including Salt Lake City, Park City, Provo, and surrounding areas. We can show you examples of projects similar to what you're considering for your property."
        },
        {
          question: "Can I get a quote based on a gallery project I like?",
          answer: "Absolutely! If you see a project in our gallery that you like, we can provide a quote for a similar design adapted to your specific space and requirements. Contact us with the project details."
        }
      ]}
      metaTitle="Pond Gallery Utah | Beautiful Water Feature Projects"
      metaDescription="Explore our pond gallery showcasing beautiful water features, koi ponds, waterfalls, and pond transformations in Utah. Get inspired for your project. Call 801-590-8516 today!"
    >
      <div className="content-section">
        <h2>Our Pond Gallery</h2>
        <p>
          Welcome to our comprehensive gallery showcasing the beautiful water features we&apos;ve created 
          throughout Utah. From intimate garden ponds to grand koi ponds with waterfalls, our gallery 
          demonstrates the quality, creativity, and attention to detail that goes into every project. 
          Each image represents a unique transformation, carefully designed and built to enhance the 
          beauty and value of our clients&apos; properties. Browse through our projects to get inspired 
          for your own water feature.
        </p>

        <div className="info-box">
          <h3>What You&apos;ll Find in Our Gallery</h3>
          <p>
            <strong>Before & After:</strong> See the complete transformation from start to finish<br />
            <strong>Project Variety:</strong> Different styles, sizes, and types of water features<br />
            <strong>Quality Workmanship:</strong> Attention to detail in every project<br />
            <strong>Local Examples:</strong> Projects from throughout Utah and surrounding areas
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Gallery Categories</h2>
        <div className="gallery-categories">
          <div className="category-card">
            <h3>Garden Ponds</h3>
            <p>
              Beautiful garden ponds that enhance landscaping and create peaceful outdoor spaces. 
              These projects focus on natural beauty and plant integration.
            </p>
            <ul>
              <li>Small to medium ponds</li>
              <li>Plant-focused designs</li>
              <li>Natural stone features</li>
              <li>Landscape integration</li>
            </ul>
          </div>

          <div className="category-card">
            <h3>Koi Ponds</h3>
            <p>
              Specialized ponds designed for koi fish with proper depth, filtration, and habitat 
              features. These projects prioritize fish health and viewing enjoyment.
            </p>
            <ul>
              <li>Fish-friendly designs</li>
              <li>Advanced filtration</li>
              <li>Proper depth zones</li>
              <li>Viewing areas</li>
            </ul>
          </div>

          <div className="category-card">
            <h3>Waterfalls & Streams</h3>
            <p>
              Dynamic water features with cascading waterfalls and flowing streams that add 
              movement, sound, and visual interest to any landscape.
            </p>
            <ul>
              <li>Multiple cascade levels</li>
              <li>Natural stone construction</li>
              <li>Sound optimization</li>
              <li>Flow control systems</li>
            </ul>
          </div>

          <div className="category-card">
            <h3>Natural Ponds</h3>
            <p>
              Eco-friendly ponds designed to look and function like natural water bodies, 
              supporting local wildlife and requiring minimal maintenance.
            </p>
            <ul>
              <li>Wildlife-friendly design</li>
              <li>Native plant integration</li>
              <li>Natural appearance</li>
              <li>Low maintenance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Featured Projects</h2>
        <div className="featured-projects">
          <div className="project-card">
            <div className="project-image">
              <Image
                src="/images/pondDredging.webp"
                alt="Luxury koi pond with waterfall"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="project-content">
              <h3>Luxury Koi Pond - Salt Lake City</h3>
              <p>
                A stunning 5,000-gallon koi pond featuring multiple waterfalls, advanced filtration, 
                and beautiful landscaping. This project transformed a plain backyard into a 
                spectacular outdoor living space.
              </p>
              <div className="project-details">
                <span><strong>Size:</strong> 5,000 gallons</span>
                <span><strong>Features:</strong> Waterfalls, Koi, Advanced Filtration</span>
                <span><strong>Timeline:</strong> 3 weeks</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <Image
                src="/images/pondCleanings.webp"
                alt="Garden pond with natural stone"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="project-content">
              <h3>Garden Pond - Park City</h3>
              <p>
                A charming 800-gallon garden pond with natural stone edging and aquatic plants. 
                This project created a peaceful retreat that enhances the mountain landscape.
              </p>
              <div className="project-details">
                <span><strong>Size:</strong> 800 gallons</span>
                <span><strong>Features:</strong> Natural Stone, Aquatic Plants</span>
                <span><strong>Timeline:</strong> 1 week</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <Image
                src="/images/pondMaintenance.webp"
                alt="Commercial water feature"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="project-content">
              <h3>Commercial Water Feature - Provo</h3>
                <p>
                  A large-scale commercial water feature with multiple streams and waterfalls. 
                  This project serves as the centerpiece for a business complex, creating an 
                  impressive first impression.
                </p>
                <div className="project-details">
                  <span><strong>Size:</strong> 15,000 gallons</span>
                  <span><strong>Features:</strong> Multiple Streams, Lighting</span>
                  <span><strong>Timeline:</strong> 6 weeks</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Project Transformations</h2>
        <div className="transformations-grid">
          <div className="transformation-card">
            <h3>Before & After: Backyard Transformation</h3>
            <div className="transformation-images">
              <div className="before-image">
                <Image
                  src="/images/pondConstruction1000x800-300x240.webp"
                  alt="Before: Plain backyard"
                  width={200}
                  height={150}
                  className="rounded"
                />
                <span>Before</span>
              </div>
              <div className="after-image">
                <Image
                  src="/images/pondDredging-300x240.webp"
                  alt="After: Beautiful pond with waterfall"
                  width={200}
                  height={150}
                  className="rounded"
                />
                <span>After</span>
              </div>
            </div>
            <p>
              This project transformed a plain backyard into a stunning outdoor living space with 
              a beautiful pond, waterfall, and landscaping that increased property value and enjoyment.
            </p>
          </div>

          <div className="transformation-card">
            <h3>Before & After: Garden Enhancement</h3>
            <div className="transformation-images">
              <div className="before-image">
                <Image
                  src="/images/pondMaintenance-300x240.webp"
                  alt="Before: Basic garden"
                  width={200}
                  height={150}
                  className="rounded"
                />
                <span>Before</span>
              </div>
              <div className="after-image">
                <Image
                  src="/images/pondCleanings-300x240.webp"
                  alt="After: Enhanced garden with pond"
                  width={200}
                  height={150}
                  className="rounded"
                />
                <span>After</span>
              </div>
            </div>
            <p>
              A simple garden was enhanced with a natural pond that attracts wildlife and creates 
              a peaceful atmosphere for relaxation and enjoyment.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Design Styles</h2>
        <div className="design-styles-grid">
          <div className="style-card">
            <h3>Natural Style</h3>
            <p>
              Ponds designed to look like they belong in nature, with irregular shapes, 
              natural stone, and native plants.
            </p>
            <ul>
              <li>Irregular pond shapes</li>
              <li>Natural stone edging</li>
              <li>Native plant integration</li>
              <li>Wildlife-friendly features</li>
            </ul>
          </div>

          <div className="style-card">
            <h3>Formal Style</h3>
            <p>
              Geometric ponds with clean lines, formal landscaping, and architectural elements 
              that complement modern homes.
            </p>
            <ul>
              <li>Geometric shapes</li>
              <li>Clean, straight edges</li>
              <li>Formal landscaping</li>
              <li>Architectural elements</li>
            </ul>
          </div>

          <div className="style-card">
            <h3>Japanese Style</h3>
            <p>
              Inspired by traditional Japanese gardens with koi ponds, carefully placed rocks, 
              and Zen-like simplicity.
            </p>
            <ul>
              <li>Koi-friendly design</li>
              <li>Carefully placed rocks</li>
              <li>Minimalist approach</li>
              <li>Traditional elements</li>
            </ul>
          </div>

          <div className="style-card">
            <h3>Contemporary Style</h3>
            <p>
              Modern water features with sleek design, innovative materials, and cutting-edge 
              technology integration.
            </p>
            <ul>
              <li>Sleek, modern design</li>
              <li>Innovative materials</li>
              <li>Technology integration</li>
              <li>Contemporary aesthetics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Gallery Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h4>Visual Inspiration</h4>
            <p>See real examples of beautiful water features to inspire your own project design</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h4>Quality Assurance</h4>
            <p>View our work quality and attention to detail across different project types</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h4>Design Ideas</h4>
            <p>Get ideas for features, materials, and design elements that work well together</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-home"></i>
            </div>
            <h4>Property Value</h4>
            <p>See how water features can enhance property value and curb appeal</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-users"></i>
            </div>
            <h4>Client Satisfaction</h4>
            <p>View examples of completed projects that have delighted our clients</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <i className="fas fa-star"></i>
            </div>
            <h4>Proven Results</h4>
            <p>See before and after transformations that demonstrate our expertise</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Related Services</h2>
        <p>
          Ready to create your own beautiful water feature? Our services can make it happen:
        </p>

        <div className="related-services">
          <Link href="/pond-construction" className="service-link">
            <i className="fas fa-hammer"></i>
            Pond Construction
          </Link>
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
          <Link href="/contact" className="service-link">
            <i className="fas fa-phone"></i>
            Get Quote
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Ready to Create Your Dream Water Feature?</h2>
        <p>
          Inspired by our gallery? Contact us today to discuss your project and start creating 
          the water feature of your dreams.
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

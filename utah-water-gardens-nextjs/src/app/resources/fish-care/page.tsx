'use client';
import Link from 'next/link';


export default function FishCarePage() {
  return (
    <div className="fish-care-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1 className="entry-title">Fish Care Guide</h1>
          <p className="entry-subtitle">Essential Tips for Healthy Pond Fish</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="content-wrapper">
            {/* Primary Content */}
            <div className="content-primary">
              <div className="page-content">
                <p>
                  Fish are the heart of any pond ecosystem, providing movement, color, and life to your water garden. Proper fish care ensures they remain healthy, active, and beautiful for years to come. This comprehensive guide covers everything you need to know about caring for pond fish in Utah&apos;&apos;re hardy and perfect for beginners.
                </p>
                <ul>
                  <li><strong>Comet Goldfish:</strong> Fast swimmers, excellent for large ponds</li>
                  <li><strong>Shubunkin:</strong> Calico coloring, hardy and active</li>
                  <li><strong>Sarasa Comet:</strong> Red and white, very popular</li>
                  <li><strong>Fantail:</strong> Slower swimmers, better for smaller ponds</li>
                </ul>

                <h3>Other Pond Fish</h3>
                <ul>
                  <li><strong>Golden Orfe:</strong> Active surface swimmers, need good water quality</li>
                  <li><strong>Rosy Red Minnows:</strong> Small, great for natural ponds</li>
                  <li><strong>Weather Loach:</strong> Bottom feeders, help clean the pond</li>
                </ul>

                <h2>Feeding Guidelines</h2>

                <h3>What to Feed</h3>
                <p>
                  A balanced diet is essential for healthy fish. Different types of food provide different nutrients.
                </p>
                <ul>
                  <li><strong>High-Quality Pellets:</strong> Formulated for pond fish, float on surface</li>
                  <li><strong>Floating Sticks:</strong> Good for larger fish, easy to monitor</li>
                  <li><strong>Wheat Germ:</strong> Good for cooler water temperatures</li>
                  <li><strong>Fresh Vegetables:</strong> Lettuce, peas, zucchini (blanched)</li>
                  <li><strong>Live Foods:</strong> Bloodworms, brine shrimp (occasional treats)</li>
                </ul>

                <h3>Feeding Schedule</h3>
                <ul>
                  <li><strong>Spring (50-60°F):</strong> Feed once daily, wheat germ food</li>
                  <li><strong>Summer (60-75°F):</strong> Feed 2-3 times daily, regular food</li>
                  <li><strong>Fall (50-60°F):</strong> Feed once daily, wheat germ food</li>
                  <li><strong>Winter (Below 50°F):</strong> Stop feeding completely</li>
                </ul>

                <h3>Feeding Tips</h3>
                <ul>
                  <li>Feed only what fish can consume in 5 minutes</li>
                  <li>Feed at the same time each day</li>
                  <li>Observe fish behavior - adjust amounts as needed</li>
                  <li>Remove uneaten food after 10 minutes</li>
                  <li>Feed in the same location to establish routine</li>
                </ul>

                <h2>Water Quality Management</h2>

                <p>
                  Water quality is the most important factor in fish health. Poor water quality is the leading cause of fish illness and death.
                </p>

                <h3>Essential Water Parameters</h3>
                <ul>
                  <li><strong>pH:</strong> 6.8-8.2 (7.0-7.5 is ideal)</li>
                  <li><strong>Ammonia:</strong> 0 ppm (toxic to fish)</li>
                  <li><strong>Nitrite:</strong> 0 ppm (toxic to fish)</li>
                  <li><strong>Nitrate:</strong> Below 40 ppm (preferably below 20 ppm)</li>
                  <li><strong>Dissolved Oxygen:</strong> Above 6 ppm</li>
                  <li><strong>Temperature:</strong> Varies by season, avoid rapid changes</li>
                </ul>

                <h3>Testing Schedule</h3>
                <ul>
                  <li><strong>New Ponds:</strong> Test daily for first month</li>
                  <li><strong>Established Ponds:</strong> Test weekly during growing season</li>
                  <li><strong>Problem Situations:</strong> Test immediately if fish seem stressed</li>
                  <li><strong>Seasonal Changes:</strong> Test more frequently during temperature changes</li>
                </ul>

                <h2>Seasonal Fish Care</h2>

                <h3>Spring Care (March - May)</h3>
                <ul>
                  <li>Start feeding when water reaches 50°F</li>
                  <li>Begin with wheat germ food</li>
                  <li>Gradually increase feeding as water warms</li>
                  <li>Monitor for signs of illness after winter</li>
                  <li>Check fish for parasites or injuries</li>
                </ul>

                <h3>Summer Care (June - August)</h3>
                <ul>
                  <li>Feed 2-3 times daily</li>
                  <li>Monitor water temperature - avoid overheating</li>
                  <li>Ensure adequate oxygen levels</li>
                  <li>Watch for signs of stress in hot weather</li>
                  <li>Provide shade with floating plants</li>
                </ul>

                <h3>Fall Care (September - November)</h3>
                <ul>
                  <li>Switch to wheat germ food as temperatures drop</li>
                  <li>Reduce feeding frequency</li>
                  <li>Stop feeding when water drops below 50°F</li>
                  <li>Ensure pond is deep enough for winter</li>
                  <li>Check fish health before winter</li>
                </ul>

                <h3>Winter Care (December - February)</h3>
                <ul>
                  <li>Do not feed fish - they become dormant</li>
                  <li>Keep water moving to prevent complete ice coverage</li>
                  <li>Monitor water quality periodically</li>
                  <li>Check for signs of stress or illness</li>
                  <li>Ensure adequate depth for winter survival</li>
                </ul>

                <h2>Fish Health and Disease Prevention</h2>

                <h3>Signs of Healthy Fish</h3>
                <ul>
                  <li>Active swimming and normal behavior</li>
                  <li>Good appetite and feeding response</li>
                  <li>Clear eyes and smooth scales</li>
                  <li>Normal breathing rate</li>
                  <li>Good color and no visible injuries</li>
                </ul>

                <h3>Common Health Problems</h3>

                <h4>Parasites</h4>
                <p>
                  <strong>Symptoms:</strong> Flashing (rubbing against objects), scratching, visible spots
                </p>
                <ul>
                  <li>Ich (white spot disease)</li>
                  <li>Anchor worms</li>
                  <li>Fish lice</li>
                  <li>Gill flukes</li>
                </ul>

                <h4>Bacterial Infections</h4>
                <p>
                  <strong>Symptoms:</strong> Sores, fin rot, cloudy eyes, lethargy
                </p>
                <ul>
                  <li>Ulcers</li>
                  <li>Fin rot</li>
                  <li>Eye infections</li>
                  <li>Dropsy (swollen abdomen)</li>
                </ul>

                <h4>Water Quality Issues</h4>
                <p>
                  <strong>Symptoms:</strong> Gasping at surface, lethargy, loss of appetite
                </p>
                <ul>
                  <li>Low oxygen levels</li>
                  <li>High ammonia or nitrite</li>
                  <li>pH fluctuations</li>
                  <li>Temperature stress</li>
                </ul>

                <h3>Prevention Strategies</h3>
                <ul>
                  <li>Maintain excellent water quality</li>
                  <li>Quarantine new fish for 2-4 weeks</li>
                  <li>Feed high-quality food</li>
                  <li>Avoid overstocking</li>
                  <li>Regular health monitoring</li>
                  <li>Proper seasonal care</li>
                </ul>

                <h2>Pond Design for Fish Health</h2>

                <h3>Essential Features</h3>
                <ul>
                  <li><strong>Depth:</strong> Minimum 2-3 feet for winter survival</li>
                  <li><strong>Filtration:</strong> Mechanical and biological filtration</li>
                  <li><strong>Aeration:</strong> Water movement and oxygen</li>
                  <li><strong>Plants:</strong> Provide shade and natural filtration</li>
                  <li><strong>Hiding Places:</strong> Rocks, logs, plant roots</li>
                </ul>

                <h3>Stocking Guidelines</h3>
                <ul>
                  <li><strong>General Rule:</strong> 1 inch of fish per 10 gallons of water</li>
                  <li><strong>Koi:</strong> 1 koi per 250-500 gallons</li>
                  <li><strong>Goldfish:</strong> 1 goldfish per 50-100 gallons</li>
                  <li><strong>Consider Growth:</strong> Fish grow larger over time</li>
                  <li><strong>Start Small:</strong> Begin with fewer fish and add gradually</li>
                </ul>

                <h2>Utah-Specific Considerations</h2>

                <p>
                  Utah&apos;s climate presents unique challenges for pond fish. Here are important considerations for our region:
                </p>

                <ul>
                  <li><strong>Winter Depth:</strong> Ponds need 3-4 feet depth in most Utah locations</li>
                  <li><strong>Summer Heat:</strong> Provide shade and monitor water temperature</li>
                  <li><strong>Water Quality:</strong> Test for high pH and mineral content</li>
                  <li><strong>Evaporation:</strong> Regular water top-offs needed</li>
                  <li><strong>Freeze Protection:</strong> Ensure water movement in winter</li>
                </ul>

                <h2>Emergency Care</h2>

                <h3>When to Call a Professional</h3>
                <ul>
                  <li>Multiple fish showing signs of illness</li>
                  <li>Fish deaths without obvious cause</li>
                  <li>Persistent water quality problems</li>
                  <li>Unusual fish behavior</li>
                  <li>Equipment failures affecting fish health</li>
                </ul>

                <h3>Emergency Actions</h3>
                <ul>
                  <li>Test water quality immediately</li>
                  <li>Perform partial water change (25-30%)</li>
                  <li>Stop feeding if fish are stressed</li>
                  <li>Check equipment function</li>
                  <li>Isolate sick fish if possible</li>
                </ul>

                <div className="cta-box">
                  <h3>Need Help with Your Fish?</h3>
                  <p>
                    Our team at Utah Water Gardens can help you maintain healthy, happy fish. We offer fish health consultations, water quality testing, and emergency care services throughout Utah.
                  </p>
                  <div className="cta-actions">
                    <Link href="/fish-koi" className="cta-button primary">
                      <i className="fas fa-fish"></i>
                      View Our Fish
                    </Link>
                    <Link href="/contact" className="cta-button secondary">
                      <i className="fas fa-phone"></i>
                      Get Expert Advice
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="content-sidebar">
              {/* Quick Contact */}
              <div className="sidebar-widget contact-widget">
                <h3 className="widget-title">
                  <i className="fas fa-phone"></i>
                  Get In Touch
                </h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <strong>Address</strong>
                      <p>5911 S 1300 E<br />Salt Lake City, Utah 84121</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <div>
                      <strong>Phone</strong>
                      <a href="tel:8015908516">801-590-8516</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="far fa-envelope"></i>
                    <div>
                      <strong>Email</strong>
                      <a href="mailto:contact@utahwatergardens.com">contact@utahwatergardens.com</a>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="contact-button">
                  <i className="fas fa-envelope"></i>
                  Send Message
                </Link>
              </div>

              {/* Services Widget */}
              <div className="sidebar-widget services-widget">
                <h3 className="widget-title">
                  <i className="fas fa-tools"></i>
                  Our Services
                </h3>
                <ul className="services-list">
                  <li>
                    <Link href="/fish-koi">
                      <i className="fas fa-fish"></i>
                      Fish & Koi
                    </Link>
                  </li>
                  <li>
                    <Link href="/pond-maintenance">
                      <i className="fas fa-cog"></i>
                      Pond Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link href="/pond-cleanings">
                      <i className="fas fa-broom"></i>
                      Pond Cleanings
                    </Link>
                  </li>
                  <li>
                    <Link href="/pond-construction">
                      <i className="fas fa-hammer"></i>
                      Pond Construction
                    </Link>
                  </li>
                  <li>
                    <Link href="/pond-repair-and-rebuild">
                      <i className="fas fa-wrench"></i>
                      Pond Repair
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Related Resources */}
              <div className="sidebar-widget resources-widget">
                <h3 className="widget-title">
                  <i className="fas fa-book"></i>
                  Related Resources
                </h3>
                <ul className="resources-list">
                  <li>
                    <Link href="/resources/pond-care-guide">
                      <i className="fas fa-water"></i>
                      Pond Care Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/plant-care">
                      <i className="fas fa-seedling"></i>
                      Plant Care Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/faq">
                      <i className="fas fa-question-circle"></i>
                      Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link href="/plants-fish/fish-koi">
                      <i className="fas fa-fish"></i>
                      Fish & Koi
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Add Fish to Your Pond?</h2>
            <p className="cta-description">Contact us today for expert advice on fish care and professional pond services to keep your fish healthy and happy.</p>
            <div className="cta-actions">
              <Link href="/fish-koi" className="cta-button primary">
                <i className="fas fa-fish"></i>
                View Our Fish
              </Link>
              <Link href="/contact" className="cta-button secondary">
                <i className="fas fa-phone"></i>
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

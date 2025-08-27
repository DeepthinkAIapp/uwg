import { PageTemplate } from '@/components/layout/PageTemplate';
import Image from 'next/image';
import Link from 'next/link';

export default function FindingLeakInPondPage() {
  return (
    <PageTemplate
      heroTitle="Finding A Leak In Your Pond"
      heroSubtitle="Step-by-step guide to detecting and locating pond leaks"
      heroImage="/images/pondMaintenance.webp"
      heroAlt="Professional pond leak detection service in Utah"
      breadcrumbs={[
        { label: 'Resources', href: '/resources' },
        { label: 'Finding A Leak In Your Pond' }
      ]}
      showFAQ={true}
      faqs={[
        {
          question: "How do I know if my pond has a leak?",
          answer: "Monitor your water level daily. If you're losing more than 2 inches per week during moderate weather, or if the loss continues during cool, humid conditions, you likely have a leak. Also check for wet areas around the pond."
        },
        {
          question: "What's the most common place for pond leaks?",
          answer: "The most common leak locations are around the pond edges, in the liner seams, at plumbing connections, and where the liner meets the waterfall or stream. Edge leaks are particularly common due to settling and erosion."
        },
        {
          question: "Can I fix a pond leak myself?",
          answer: "Small liner tears can sometimes be patched by homeowners, but most leaks require professional repair to ensure proper sealing and prevent future issues. Complex leaks, plumbing issues, and edge problems should always be handled by professionals."
        },
        {
          question: "How long does leak detection take?",
          answer: "Professional leak detection typically takes 1-3 hours depending on pond size and complexity. The process involves systematic testing of different areas to pinpoint the exact location of the leak."
        }
      ]}
      metaTitle="Finding A Leak In Your Pond Utah | Professional Leak Detection"
      metaDescription="Learn how to find and fix leaks in your pond. Professional leak detection services in Utah. Step-by-step guide to locating pond leaks and repair solutions."
    >
      <div className="content-section">
        <h2>How to Find a Leak in Your Pond</h2>
        <p>
          Discovering that your pond has a leak can be frustrating, but with the right approach, 
          you can locate and fix the problem efficiently. This comprehensive guide will walk you 
          through the process of detecting leaks in your pond, from initial assessment to professional 
          repair options.
        </p>

        <div className="info-box">
          <h3>Before You Start</h3>
          <p>
            <strong>Rule out evaporation:</strong> Normal evaporation causes 1-2 inches of water loss per week during hot weather<br />
            <strong>Check weather conditions:</strong> High temperatures and low humidity increase evaporation<br />
            <strong>Monitor consistently:</strong> Check water levels daily for at least a week
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Step-by-Step Leak Detection Process</h2>
        <div className="detection-steps">
          <div className="detection-step">
            <div className="step-number">1</div>
            <h3>Initial Assessment</h3>
            <p>
              <strong>Monitor water level:</strong> Mark the water level and check daily for a week<br />
              <strong>Note weather conditions:</strong> Temperature, humidity, and wind speed<br />
              <strong>Calculate loss rate:</strong> Measure how much water you're losing per day<br />
              <strong>Check for patterns:</strong> Does loss vary with weather or equipment operation?
            </p>
          </div>

          <div className="detection-step">
            <div className="step-number">2</div>
            <h3>Visual Inspection</h3>
            <p>
              <strong>Check pond edges:</strong> Look for wet areas, erosion, or settling<br />
              <strong>Inspect liner:</strong> Look for visible tears, punctures, or UV damage<br />
              <strong>Examine equipment:</strong> Check pumps, filters, and plumbing connections<br />
              <strong>Look for water trails:</strong> Follow any water paths away from the pond
            </p>
          </div>

          <div className="detection-step">
            <div className="step-number">3</div>
            <h3>Equipment Testing</h3>
            <p>
              <strong>Test with pump off:</strong> Turn off all equipment and monitor water level<br />
              <strong>Test with pump on:</strong> Turn equipment back on and check for increased loss<br />
              <strong>Check individual components:</strong> Test each piece of equipment separately<br />
              <strong>Listen for unusual sounds:</strong> Leaks often make distinctive noises
            </p>
          </div>

          <div className="detection-step">
            <div className="step-number">4</div>
            <h3>Systematic Testing</h3>
            <p>
              <strong>Isolate sections:</strong> Test different areas of the pond separately<br />
              <strong>Check water features:</strong> Test waterfalls, streams, and fountains<br />
              <strong>Inspect plumbing:</strong> Check all pipes, fittings, and connections<br />
              <strong>Look for bubbles:</strong> Air bubbles can indicate leak locations
            </p>
          </div>

          <div className="detection-step">
            <div className="step-number">5</div>
            <h3>Professional Assessment</h3>
            <p>
              <strong>Contact professionals:</strong> If you can't locate the leak or need expert help<br />
              <strong>Advanced detection:</strong> Professional equipment can find hidden leaks<br />
              <strong>Comprehensive repair:</strong> Ensure the leak is properly fixed<br />
              <strong>Prevention planning:</strong> Learn how to prevent future leaks
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Common Leak Locations</h2>
        <div className="leak-locations">
          <div className="location-card">
            <h3>Pond Edges</h3>
            <div className="location-details">
              <p><strong>Why they leak:</strong> Settling, erosion, poor construction, animal damage</p>
              <p><strong>Signs:</strong> Wet areas around edges, soggy ground, visible gaps</p>
              <p><strong>Detection:</strong> Check for moisture around the entire perimeter</p>
            </div>
          </div>

          <div className="location-card">
            <h3>Liner Seams</h3>
            <div className="location-details">
              <p><strong>Why they leak:</strong> Poor installation, UV damage, stress over time</p>
              <p><strong>Signs:</strong> Visible separation, water trails from seams</p>
              <p><strong>Detection:</strong> Inspect all liner seams and overlaps carefully</p>
            </div>
          </div>

          <div className="location-card">
            <h3>Plumbing Connections</h3>
            <div className="location-details">
              <p><strong>Why they leak:</strong> Loose fittings, worn seals, cracked pipes</p>
              <p><strong>Signs:</strong> Water around equipment, loss when pump is running</p>
              <p><strong>Detection:</strong> Check all pipe connections and equipment seals</p>
            </div>
          </div>

          <div className="location-card">
            <h3>Waterfall/Stream Areas</h3>
            <div className="location-details">
              <p><strong>Why they leak:</strong> Poor construction, erosion, liner damage</p>
              <p><strong>Signs:</strong> Water loss in stream areas, wet spots around falls</p>
              <p><strong>Detection:</strong> Test waterfall operation and check stream liner</p>
            </div>
          </div>

          <div className="location-card">
            <h3>Equipment Housing</h3>
            <div className="location-details">
              <p><strong>Why they leak:</strong> Pump leaks, filter issues, valve problems</p>
              <p><strong>Signs:</strong> Water around equipment, unusual equipment sounds</p>
              <p><strong>Detection:</strong> Inspect all equipment for signs of leakage</p>
            </div>
          </div>

          <div className="location-card">
            <h3>Liner Punctures</h3>
            <div className="location-details">
              <p><strong>Why they leak:</strong> Sharp objects, animal damage, UV degradation</p>
              <p><strong>Signs:</strong> Visible holes, tears, or damage to liner</p>
              <p><strong>Detection:</strong> Thorough visual inspection of entire liner</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>DIY Leak Detection Methods</h2>
        <div className="detection-methods">
          <div className="method-card">
            <h3>Bucket Test</h3>
            <p>
              <strong>How to do it:</strong> Place a bucket in your pond and fill it to the same level as the pond water. 
              Mark both levels and check after 24 hours. If the pond loses more water than the bucket, you have a leak.
            </p>
            <p><strong>Best for:</strong> Confirming if you have a leak vs. evaporation</p>
          </div>

          <div className="method-card">
            <h3>Dye Test</h3>
            <p>
              <strong>How to do it:</strong> Add food coloring or pond dye near suspected leak areas. 
              Watch for the dye to flow out of the pond, indicating a leak location.
            </p>
            <p><strong>Best for:</strong> Locating specific leak points</p>
          </div>

          <div className="method-card">
            <h3>Equipment Isolation</h3>
            <p>
              <strong>How to do it:</strong> Turn off all equipment and monitor water level. 
              Then turn equipment on one piece at a time to identify which component is causing the leak.
            </p>
            <p><strong>Best for:</strong> Identifying equipment-related leaks</p>
          </div>

          <div className="method-card">
            <h3>Visual Inspection</h3>
            <p>
              <strong>How to do it:</strong> Systematically check all areas of your pond, 
              looking for wet spots, water trails, and visible damage.
            </p>
            <p><strong>Best for:</strong> Finding obvious leaks and damage</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>When to Call a Professional</h2>
        <div className="professional-signs">
          <div className="sign-item">
            <div className="sign-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h4>Can't Locate the Leak</h4>
            <p>If you've tried all DIY methods but still can't find the source of the leak</p>
          </div>

          <div className="sign-item">
            <div className="sign-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h4>Large or Complex Pond</h4>
            <p>Professional equipment is needed for large ponds or complex water features</p>
          </div>

          <div className="sign-item">
            <div className="sign-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h4>Structural Issues</h4>
            <p>If the leak appears to be related to pond structure or foundation problems</p>
          </div>

          <div className="sign-item">
            <div className="sign-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h4>Multiple Leaks</h4>
            <p>When you suspect there are multiple leaks or widespread damage</p>
          </div>

          <div className="sign-item">
            <div className="sign-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h4>Emergency Situation</h4>
            <p>If you're losing water rapidly or fish are at risk</p>
          </div>

          <div className="sign-item">
            <div className="sign-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h4>Warranty Concerns</h4>
            <p>If your pond is under warranty and you need professional documentation</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Professional Leak Detection Services</h2>
        <p>
          Our professional leak detection services use advanced equipment and techniques to 
          quickly and accurately locate leaks in your pond.
        </p>

        <div className="professional-services">
          <div className="service-item">
            <h4>Advanced Detection Equipment</h4>
            <p>Professional-grade equipment that can detect even the smallest leaks</p>
          </div>

          <div className="service-item">
            <h4>Systematic Testing</h4>
            <p>Thorough testing of all pond components and systems</p>
          </div>

          <div className="service-item">
            <h4>Accurate Diagnosis</h4>
            <p>Precise identification of leak location and cause</p>
          </div>

          <div className="service-item">
            <h4>Repair Recommendations</h4>
            <p>Expert advice on the best repair methods for your specific situation</p>
          </div>

          <div className="service-item">
            <h4>Prevention Planning</h4>
            <p>Guidance on preventing future leaks and maintaining pond integrity</p>
          </div>

          <div className="service-item">
            <h4>Warranty Documentation</h4>
            <p>Professional documentation for warranty claims and insurance purposes</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Preventing Future Leaks</h2>
        <div className="prevention-tips">
          <div className="tip-card">
            <h3>Regular Maintenance</h3>
            <ul>
              <li>Inspect pond edges monthly</li>
              <li>Check equipment regularly</li>
              <li>Monitor water levels weekly</li>
              <li>Clean filters and pumps</li>
            </ul>
          </div>

          <div className="tip-card">
            <h3>Proper Design</h3>
            <ul>
              <li>Use quality materials</li>
              <li>Ensure proper installation</li>
              <li>Design for your climate</li>
              <li>Plan for maintenance access</li>
            </ul>
          </div>

          <div className="tip-card">
            <h3>Seasonal Care</h3>
            <ul>
              <li>Winterize equipment properly</li>
              <li>Protect from freeze damage</li>
              <li>Adjust for seasonal changes</li>
              <li>Monitor during extreme weather</li>
            </ul>
          </div>

          <div className="tip-card">
            <h3>Professional Inspections</h3>
            <ul>
              <li>Annual professional check-ups</li>
              <li>Regular equipment servicing</li>
              <li>Preventive maintenance programs</li>
              <li>Expert advice and guidance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Related Resources</h2>
        <p>
          Learn more about pond maintenance and troubleshooting with these helpful resources:
        </p>

        <div className="related-resources">
          <Link href="/resources/pondwaterloss" className="resource-link">
            <i className="fas fa-tint"></i>
            Causes of Water Loss
          </Link>
          <Link href="/pond-maintenance" className="resource-link">
            <i className="fas fa-cog"></i>
            Pond Maintenance Services
          </Link>
          <Link href="/pond-pump-repair" className="resource-link">
            <i className="fas fa-wrench"></i>
            Pond Pump Repair
          </Link>
          <Link href="/pond-repair-and-rebuild" className="resource-link">
            <i className="fas fa-tools"></i>
            Pond Repair Services
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Need Professional Leak Detection?</h2>
        <p>
          Don't let a leak compromise your pond's health and beauty. Contact us today for 
          professional leak detection and repair services.
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

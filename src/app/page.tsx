'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Video Section */}
      <section className="hero-video">
        <div className="video-container">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="hero-video-element"
            poster="/images/waterLillies.webp"
          >
            <source src="/images/herouwg_prob4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <div className="hero-content">
              <h1>Utah Water Gardens - Premium Pond Services</h1>
              <p>Transform your outdoor space with beautiful custom ponds, waterfalls, and aquatic landscapes. Professional pond services throughout Utah.</p>
              <div className="hero-buttons">
                <Link href="/pond-services" className="hero-button primary">
                  <i className="fas fa-water"></i>
                  Explore Services
                </Link>
                <Link href="/contact" className="hero-button secondary">
                  <i className="fas fa-phone"></i>
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main>
        {/* Elevating Your Pond Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Elevating Your Pond</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            </div>
            
            {/* First Row - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href="/pond-cleanings">
                  <Image
                    src="/images/pondConstruction1000x800.webp"
                    alt="A pond under construction"
                    width={400}
                    height={320}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Pond Cleanings</h3>
                  <p className="text-gray-600 mb-4 text-sm">Regular pond cleanings are crucial for maintaining the health & appearance of your water feature</p>
                  <Link href="/pond-cleanings" className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors">
                    LEARN MORE
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href="/pond-and-lake-dredging">
                  <Image
                    src="/images/pondDredging.webp"
                    alt="Two workers dredging sludge and debris from the bottom of a drained pond using hand tools and hoses"
                    width={400}
                    height={320}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Pond Dredging</h3>
                  <p className="text-gray-600 mb-4 text-sm">We have the equipment and the scuba divers to dredge out the sediments and materials</p>
                  <Link href="/pond-and-lake-dredging" className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors">
                    LEARN MORE
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href="/pond-construction">
                  <Image
                    src="/images/pondMaintenance.webp"
                    alt="Beautiful backyard pond with a stone bridge, clear water, and lush landscaping"
                    width={400}
                    height={320}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Pond Construction</h3>
                  <p className="text-gray-600 mb-4 text-sm">We specialize in pond construction and design, helping homeowners to create a custom water feature</p>
                  <Link href="/pond-construction" className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Second Row - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href="/pond-maintenance">
                  <Image
                    src="/images/pondConsultation1000x800.webp"
                    alt="Natural pond surrounded by fall foliage and bare trees during a pond consultation site visit"
                    width={400}
                    height={320}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Pond Maintenance</h3>
                  <p className="text-gray-600 mb-4 text-sm">We offer a wide range of pond maintenance services to ensure that your pond stays in top condition</p>
                  <Link href="/pond-maintenance" className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors">
                    LEARN MORE
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href="/pond-repair-and-rebuild">
                  <Image
                    src="/images/pondConstruction1000x800.webp"
                    alt="Pond repair and rebuild services"
                    width={400}
                    height={320}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Pond Repair</h3>
                  <p className="text-gray-600 mb-4 text-sm">Expert repair and rebuild services for damaged ponds and water features</p>
                  <Link href="/pond-repair-and-rebuild" className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors">
                    LEARN MORE
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href="/pond-consultations">
                  <Image
                    src="/images/pondConsultation1000x800.webp"
                    alt="Professional pond consultation services"
                    width={400}
                    height={320}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Pond Consultation</h3>
                  <p className="text-gray-600 mb-4 text-sm">Get expert advice and planning for your water feature project from our experienced team</p>
                  <Link href="/pond-consultations" className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Third Row - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href="/pond-supplies">
                  <Image
                    src="/images/pondMaintenance.webp"
                    alt="Pond supplies and equipment"
                    width={400}
                    height={320}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Pond Supplies</h3>
                  <p className="text-gray-600 mb-4 text-sm">Quality supplies and equipment for maintaining and enhancing your pond</p>
                  <Link href="/pond-supplies" className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors">
                    LEARN MORE
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href="/pond-services">
                  <Image
                    src="/images/pondDredging.webp"
                    alt="Vacuum services for pond cleaning"
                    width={400}
                    height={320}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Vac Services</h3>
                  <p className="text-gray-600 mb-4 text-sm">Professional vacuum services for thorough pond cleaning and debris removal</p>
                  <Link href="/pond-services" className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors">
                    LEARN MORE
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href="/pumps">
                  <Image
                    src="/images/pondConstruction1000x800.webp"
                    alt="Pond pump repair and maintenance"
                    width={400}
                    height={320}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Pump Repair</h3>
                  <p className="text-gray-600 mb-4 text-sm">Expert pump repair and maintenance services to keep your water feature running smoothly</p>
                  <Link href="/pumps" className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Compressed */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About Utah Water Gardens</h2>
                <p className="text-base text-gray-600 mb-4">
                  We&apos;re Utah&apos;s premier pond and water feature specialists, serving the Salt Lake Valley and surrounding areas. 
                  With years of experience and a passion for creating beautiful outdoor spaces, we bring your vision to life.
                </p>
                <p className="text-base text-gray-600 mb-6">
                  From initial design to ongoing maintenance, we provide comprehensive solutions for all your water feature needs. 
                  Our team is dedicated to quality craftsmanship and exceptional customer service.
                </p>
                <Link href="/contact" className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm">
                  Get Started Today
                </Link>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-6">
                  <div className="text-4xl text-gray-400 mb-3">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Serving Utah</h3>
                  <p className="text-gray-600 text-sm">Salt Lake Valley and surrounding areas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Compressed */}
        <section className="py-10 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-lg mb-6 opacity-90">Contact us today for a free consultation and quote.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                Contact Us
              </Link>
              <Link href="/schedule" className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors text-sm">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

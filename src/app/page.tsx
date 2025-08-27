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
        {/* Services Overview - 3x3 Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Services</h2>
              <p className="text-lg text-gray-600">Comprehensive pond and water feature solutions for Utah</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="text-3xl text-red-600 mb-3">
                  <i className="fas fa-water"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Pond Construction</h3>
                <p className="text-gray-600 mb-3 text-sm">Custom pond design and construction tailored to your landscape.</p>
                <Link href="/pond-services" className="text-red-600 hover:text-red-700 font-semibold text-sm">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="text-3xl text-red-600 mb-3">
                  <i className="fas fa-tools"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Pond Maintenance</h3>
                <p className="text-gray-600 mb-3 text-sm">Regular cleaning and care to keep your pond healthy and beautiful.</p>
                <Link href="/pond-services" className="text-red-600 hover:text-red-700 font-semibold text-sm">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="text-3xl text-red-600 mb-3">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Plants & Fish</h3>
                <p className="text-gray-600 mb-3 text-sm">Aquatic plants, koi, and pond fish to enhance your water feature.</p>
                <Link href="/plants-fish" className="text-red-600 hover:text-red-700 font-semibold text-sm">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="text-3xl text-red-600 mb-3">
                  <i className="fas fa-broom"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Pond Cleanings</h3>
                <p className="text-gray-600 mb-3 text-sm">Professional cleaning services to restore clarity to your pond.</p>
                <Link href="/pond-cleanings" className="text-red-600 hover:text-red-700 font-semibold text-sm">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="text-3xl text-red-600 mb-3">
                  <i className="fas fa-wrench"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Pond Repair</h3>
                <p className="text-gray-600 mb-3 text-sm">Expert repair and rebuild services for damaged ponds.</p>
                <Link href="/pond-repair-and-rebuild" className="text-red-600 hover:text-red-700 font-semibold text-sm">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="text-3xl text-red-600 mb-3">
                  <i className="fas fa-truck"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Plant Delivery</h3>
                <p className="text-gray-600 mb-3 text-sm">Convenient delivery of aquatic plants and koi to your location.</p>
                <Link href="/plant-delivery" className="text-red-600 hover:text-red-700 font-semibold text-sm">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="text-3xl text-red-600 mb-3">
                  <i className="fas fa-filter"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Pond Filters</h3>
                <p className="text-gray-600 mb-3 text-sm">High-quality filtration systems for crystal clear water.</p>
                <Link href="/pond-filters" className="text-red-600 hover:text-red-700 font-semibold text-sm">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="text-3xl text-red-600 mb-3">
                  <i className="fas fa-pump-soap"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Pond Pumps</h3>
                <p className="text-gray-600 mb-3 text-sm">Essential pump systems for water circulation and aeration.</p>
                <Link href="/pumps" className="text-red-600 hover:text-red-700 font-semibold text-sm">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="text-3xl text-red-600 mb-3">
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Consultations</h3>
                <p className="text-gray-600 mb-3 text-sm">Expert advice and planning for your water feature project.</p>
                <Link href="/pond-consultations" className="text-red-600 hover:text-red-700 font-semibold text-sm">
                  Learn More →
                </Link>
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

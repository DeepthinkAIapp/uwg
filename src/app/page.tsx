'use client';
import Link from 'next/link';
import { HeroSlideshow } from '@/components/layout/HeroSlideshow';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSlideshow />
      
      {/* Main Content */}
      <main>
        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">Comprehensive pond and water feature solutions for Utah</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl text-red-600 mb-4">
                  <i className="fas fa-water"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Pond Construction</h3>
                <p className="text-gray-600 mb-4">Custom pond design and construction tailored to your landscape and needs.</p>
                <Link href="/pond-services" className="text-red-600 hover:text-red-700 font-semibold">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl text-red-600 mb-4">
                  <i className="fas fa-tools"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Pond Maintenance</h3>
                <p className="text-gray-600 mb-4">Regular cleaning, maintenance, and care to keep your pond healthy and beautiful.</p>
                <Link href="/pond-services" className="text-red-600 hover:text-red-700 font-semibold">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl text-red-600 mb-4">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Plants & Fish</h3>
                <p className="text-gray-600 mb-4">Aquatic plants, koi, and pond fish to enhance your water feature.</p>
                <Link href="/plants-fish" className="text-red-600 hover:text-red-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">About Utah Water Gardens</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We&apos;re Utah&apos;s premier pond and water feature specialists, serving the Salt Lake Valley and surrounding areas. 
                  With years of experience and a passion for creating beautiful outdoor spaces, we bring your vision to life.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  From initial design to ongoing maintenance, we provide comprehensive solutions for all your water feature needs. 
                  Our team is dedicated to quality craftsmanship and exceptional customer service.
                </p>
                <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Get Started Today
                </Link>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 rounded-lg p-8">
                  <div className="text-6xl text-gray-400 mb-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Serving Utah</h3>
                  <p className="text-gray-600">Salt Lake Valley and surrounding areas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-xl mb-8 opacity-90">Contact us today for a free consultation and quote.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
              <Link href="/schedule" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

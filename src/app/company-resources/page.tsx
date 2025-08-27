'use client';
import Link from 'next/link';

export default function CompanyResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Company Resources</h1>
          <p className="text-xl opacity-90">Everything You Need to Know About Utah Water Gardens</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Company Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Utah Water Gardens</h2>
              <p className="text-lg text-gray-600">Your trusted partner for beautiful water features throughout Utah</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl text-red-600 mb-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-600">5911 S 1300 E<br />Salt Lake City, Utah 84121</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl text-red-600 mb-4">
                  <i className="fas fa-phone"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">801-590-8516</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl text-red-600 mb-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">contact@utahwatergardens.com</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl text-red-600 mb-4">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Hours</h3>
                <p className="text-gray-600">Mon-Fri: 8AM-6PM<br />Sat: 9AM-5PM<br />Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-4">Pond Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Pond Construction & Design</li>
                  <li>Pond Maintenance & Cleaning</li>
                  <li>Pond Repair & Rebuild</li>
                  <li>Pond Dredging</li>
                  <li>Lake Dredging</li>
                  <li>Pond Consultations</li>
                  <li>Pond Filters & Pumps</li>
                  <li>Pond Supplies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-4">Plants & Fish</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Aquatic Plants</li>
                  <li>Koi & Pond Fish</li>
                  <li>Plant Delivery</li>
                  <li>Fish Health Care</li>
                  <li>Seasonal Plant Care</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-4">Additional Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Water Feature Design</li>
                  <li>Landscape Integration</li>
                  <li>Winterization Services</li>
                  <li>Emergency Repairs</li>
                  <li>Educational Workshops</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Company Policies */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Company Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-semibold mb-3">Service Guarantee</h3>
                <p className="text-gray-600">We stand behind all our work with a comprehensive service guarantee. If you&apos;re not completely satisfied with our work, we&apos;ll make it right.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-semibold mb-3">Insurance & Licensing</h3>
                <p className="text-gray-600">Utah Water Gardens is fully licensed and insured. We carry comprehensive liability insurance to protect our clients and their property.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-semibold mb-3">Payment Terms</h3>
                <p className="text-gray-600">We offer flexible payment options including payment plans for larger projects. We accept cash, check, and major credit cards.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-semibold mb-3">Scheduling</h3>
                <p className="text-gray-600">We schedule appointments based on project scope and urgency. Emergency services are available for critical situations.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-6 opacity-90">Contact us today to discuss your water feature project and learn how we can bring your vision to life.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                <i className="fas fa-phone mr-2"></i>
                Get Started
              </Link>
              <Link href="/schedule" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors">
                <i className="fas fa-calendar mr-2"></i>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

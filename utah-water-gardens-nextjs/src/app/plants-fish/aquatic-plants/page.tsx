import Link from 'next/link';

export default function AquaticPlantsPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Aquatic Plants
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Beautiful aquatic plants to enhance your pond&apos;s ecosystem and create a natural, thriving environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get a Quote
              </Link>
              <Link 
                href="/plants-fish"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View All Plants & Fish
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Aquatic Plant Collection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl text-green-600 mb-4">
                <i className="fas fa-seedling"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Floating Plants</h3>
              <p className="text-gray-600 mb-4">
                Water lettuce, water hyacinth, and duckweed for natural filtration and shade.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Water Lettuce</li>
                <li>• Water Hyacinth</li>
                <li>• Duckweed</li>
                <li>• Frogbit</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl text-green-600 mb-4">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Submerged Plants</h3>
              <p className="text-gray-600 mb-4">
                Oxygenating plants that help maintain water quality and provide habitat.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Anacharis</li>
                <li>• Hornwort</li>
                <li>• Cabomba</li>
                <li>• Vallisneria</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl text-green-600 mb-4">
                <i className="fas fa-flower"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Marginal Plants</h3>
              <p className="text-gray-600 mb-4">
                Beautiful flowering plants for pond edges and shallow water areas.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Water Iris</li>
                <li>• Cattails</li>
                <li>• Pickerel Weed</li>
                <li>• Arrowhead</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Aquatic Plants</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl text-blue-600 mb-4">
                <i className="fas fa-tint"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Water Filtration</h3>
              <p className="text-gray-600">Natural filtration removes excess nutrients and improves water clarity.</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl text-blue-600 mb-4">
                <i className="fas fa-fish"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fish Habitat</h3>
              <p className="text-gray-600">Provides shelter and spawning areas for fish and other aquatic life.</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl text-blue-600 mb-4">
                <i className="fas fa-sun"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Shade & Cooling</h3>
              <p className="text-gray-600">Reduces water temperature and provides shade for fish during hot weather.</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl text-blue-600 mb-4">
                <i className="fas fa-eye"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Natural Beauty</h3>
              <p className="text-gray-600">Enhances the visual appeal of your pond with natural colors and textures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Add Aquatic Plants to Your Pond?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us for expert advice on selecting the perfect plants for your pond ecosystem.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Expert Advice
          </Link>
        </div>
      </section>
    </div>
  );
}

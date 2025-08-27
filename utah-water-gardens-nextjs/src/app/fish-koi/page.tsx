'use client';
import Image from 'next/image';

export default function FishKoiPage() {
  return (
    <div className="fish-koi-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1 className="entry-title">Fish & Koi</h1>
          <p className="entry-subtitle">Professional Pond Services in Utah</p>
        </div>
      </header>

      <div className="page-content">
        <div className="container">
          {/* Main Content */}
          <div className="content-section">
            <p className="intro-text">
              We offer a variety of colorful Winter Hardy Fish for your Pond/Water Features including Comets, Sarasa, Shubunkin, Lemon Metallic, Golden Orfes, and Koi. A great time to introduce new Fish to a Pond is in Late Spring and Early Summer when temperatures aren&apos;t too cold or too warm.
            </p>

            <div className="content-with-image">
              <div className="text-content">
                <p>
                  Fish and Koi are important members of Ponds and Water Features. Fish not only provide visual interest, but also perform functions them important members of any healthy Aquatic Ecosystem. Fish will naturally eat many types of algae and insects that can accumulate in Ponds and Water Features. Fish forage for their food in the wild and can help keep Ponds clean and free from pests like Mosquito that deposit their larvae in water.
                </p>
              </div>
              <div className="image-content">
                <figure className="enhanced-image">
                  <Image
                    width={768}
                    height={576}
                    src="/images/20140919_105345-768x576-1.webp"
                    alt="Koi fish swimming among aquatic plants and lily pads in a natural backyard pond"
                    style={{ objectFit: 'cover' }}
                  />
                </figure>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="benefits-section">
            <h2 className="section-heading">Benefits of fish in your pond</h2>
            <p>
              Fish can also provide benefits for Aquatic Plants in Ponds and Water Features. Fish waste contains nutrients that fertilize Aquatic Plants and add to a more complete Aquatic Ecosystem. Fish waste will not benefit plants that are kept potted in containers. Plants that are free-floating or bare root will benefit from the nutrients in Fish waste.
            </p>
          </div>

          {/* Winter Survival Tips */}
          <div className="winter-tips-section">
            <h2 className="section-heading">Tips for fish survival in winter weather</h2>
            <p>
              Although the Fish we carry are Winter Hardy, certain conditions must be met to ensure their survival. To prevent Fish from dying in the Winter months here in Utah, Ponds should be 2-3 feet in depth in the Valley and 3-4 along the Benches and higher elevations. Greater depths can provide Fish with more protection from elements. Fish go dormant in Winter months, which means that their metabolism slows down and they do not eat. While they are dormant they are still breathing and require gas exchange to ensure their survival. In order for them to get the oxygen they need, Pond Surfaces should not ice over and freeze completely. A hole in the ice is necessary for the exchange of gases. This can be done by running the pump through the Winter, using a pond aerator, or using a floating Pond Heater that it thermostatically controlled.
            </p>
          </div>

          {/* Fish Types Grid */}
          <div className="fish-types-section">
            <h2 className="section-heading">Types of Fish We Offer</h2>
            <div className="fish-grid">
              <div className="fish-card">
                <div className="fish-icon">??</div>
                <h3>Comets</h3>
                <p>Beautiful, hardy fish with long flowing tails perfect for ponds.</p>
              </div>
              <div className="fish-card">
                <div className="fish-icon">??</div>
                <h3>Sarasa</h3>
                <p>Colorful red and white fish that add vibrant beauty to your pond.</p>
              </div>
              <div className="fish-card">
                <div className="fish-icon">??</div>
                <h3>Shubunkin</h3>
                <p>Calico-patterned fish with stunning multi-colored scales.</p>
              </div>
              <div className="fish-card">
                <div className="fish-icon">??</div>
                <h3>Lemon Metallic</h3>
                <p>Bright yellow fish that shine beautifully in sunlight.</p>
              </div>
              <div className="fish-card">
                <div className="fish-icon">??</div>
                <h3>Golden Orfes</h3>
                <p>Active, schooling fish that create dynamic movement in ponds.</p>
              </div>
              <div className="fish-card">
                <div className="fish-icon">??</div>
                <h3>Koi</h3>
                <p>Majestic, long-lived fish known for their beauty and personality.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="call-to-action">
            <div className="cta-content">
              <h2>Ready to Add Fish to Your Pond?</h2>
              <p>Contact us today to discuss your fish needs and get expert advice on creating the perfect aquatic ecosystem.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="cta-button primary">Get Started</Link>
                <Link href="/plant-delivery" className="cta-button secondary">Fish Delivery</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fish-koi-page {
          min-height: 100vh;
        }

        /* Page Header */
        .page-header {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
          color: white;
          padding: 4rem 0 2rem;
          text-align: center;
        }

        .entry-title {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .entry-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Page Content */
        .page-content {
          padding: 4rem 0;
        }

        .content-section {
          margin-bottom: 4rem;
        }

        .intro-text {
          font-size: 1.25rem;
          color: var(--gray-600);
          line-height: 1.6;
          margin-bottom: 3rem;
          text-align: center;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Content with Image */
        .content-with-image {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
          margin-bottom: 3rem;
        }

        .text-content p {
          font-size: 1.125rem;
          color: var(--gray-600);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .image-content {
          display: flex;
          justify-content: center;
        }

        .enhanced-image {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          max-width: 100%;
        }

        .enhanced-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Benefits Section */
        .benefits-section {
          background: var(--gray-50);
          padding: 3rem;
          border-radius: 12px;
          margin-bottom: 3rem;
        }

        .section-heading {
          color: var(--primary-blue);
          font-size: 2rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .benefits-section p {
          font-size: 1.125rem;
          color: var(--gray-600);
          line-height: 1.6;
        }

        /* Winter Tips Section */
        .winter-tips-section {
          background: white;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          margin-bottom: 3rem;
        }

        .winter-tips-section p {
          font-size: 1.125rem;
          color: var(--gray-600);
          line-height: 1.6;
        }

        /* Fish Types Section */
        .fish-types-section {
          margin-bottom: 4rem;
        }

        .fish-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .fish-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .fish-card:hover {
          transform: translateY(-5px);
        }

        .fish-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .fish-card h3 {
          color: var(--primary-blue);
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .fish-card p {
          color: var(--gray-600);
          line-height: 1.6;
        }

        /* Call to Action */
        .call-to-action {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
          color: white;
          padding: 4rem 0;
          text-align: center;
          border-radius: 12px;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .cta-content p {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 1rem 2rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .cta-button.primary {
          background: white;
          color: var(--primary-blue);
        }

        .cta-button.primary:hover {
          background: var(--gray-100);
          transform: translateY(-2px);
        }

        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-button.secondary:hover {
          background: white;
          color: var(--primary-blue);
          transform: translateY(-2px);
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .entry-title {
            font-size: 2rem;
          }

          .content-with-image {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .fish-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .benefits-section,
          .winter-tips-section {
            padding: 2rem;
          }
        }

        @media (max-width: 480px) {
          .entry-title {
            font-size: 1.75rem;
          }

          .section-heading {
            font-size: 1.5rem;
          }

          .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}

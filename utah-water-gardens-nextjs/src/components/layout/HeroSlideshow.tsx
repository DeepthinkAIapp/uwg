'use client';
import Image from 'next/image';
import  from ''/images/pondServices-2.webp''Professional pond services in Utah''Pond Services''Professional Pond Care''We handle everything from maintaining to repairing and constructing your pond''View Services''/pond-services''Pond Services''/images/plants.webp''Aquatic plants for water gardens''Aquatic Plants''Enhance Your Water Feature''High-quality aquatic plants to beautify and maintain your pond ecosystem''Explore Plants''/plants-fish/aquatic-plants''Aquatic Plants''/images/pondConstruction1000x800.webp''Custom pond construction services''Pond Construction''Custom Water Features''Design and build your dream pond with our expert construction services''Get Quote''/pond-construction''Pond Construction''/images/pondMaintenance.webp''Pond maintenance and care''Pond Maintenance''Keep Your Pond Beautiful''Regular maintenance programs to ensure your pond stays healthy and beautiful''Learn More''/pond-maintenance''Pond Maintenance''/images/pondCleanings.webp''Professional pond cleaning services''Pond Cleanings''Crystal Clear Water''Professional cleaning services to restore clarity and health to your pond''Schedule Cleaning''/pond-cleanings''Pond Cleanings''/images/koi.webp''Koi fish and pond fish''Fish & Koi''Beautiful Pond Fish''Add life and color to your pond with our selection of koi and pond fish''View Fish''/fish-koi''Fish & Koi''active'''}`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
                opacity: index === currentSlide ? 1 : 0
              }}
            >
              <div className="slide-background">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                />
                <div className="slide-overlay"></div>
              </div>
              
              <div className="slide-content">
                <div className="container">
                  <div className="slide-text">
                    <div className="service-badge">
                      <i className="fas fa-star"></i>
                      {slide.service}
                    </div>
                    <h1 className="slide-title">{slide.title}</h1>
                    <h2 className="slide-subtitle">{slide.subtitle}</h2>
                    <p className="slide-description">{slide.description}</p>
                    <div className="slide-actions">
                      <Link href={slide.buttonLink} className="slide-button primary">
                        <i className="fas fa-arrow-right"></i>
                        {slide.buttonText}
                      </Link>
                      <Link href="/contact" className="slide-button secondary">
                        <i className="fas fa-phone"></i>
                        Get Free Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {showControls && (
          <>
            <button
              className="slideshow-control prev"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="slideshow-control next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </>
        )}

        {/* Indicators */}
        {showIndicators && (
          <div className="slideshow-indicators">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`indicator ${index === currentSlide ? '' : ''width 0.1s linear&apos;
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

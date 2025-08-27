'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  service: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/pondServices-2.webp',
    alt: 'Professional pond services in Utah',
    title: 'Pond Services',
    subtitle: 'Professional Pond Care',
    description: 'We handle everything from maintaining to repairing and constructing your pond',
    buttonText: 'View Services',
    buttonLink: '/pond-services',
    service: 'Pond Services'
  },
  {
    id: 2,
    image: '/images/plants.webp',
    alt: 'Aquatic plants for water gardens',
    title: 'Aquatic Plants',
    subtitle: 'Enhance Your Water Feature',
    description: 'High-quality aquatic plants to beautify and maintain your pond ecosystem',
    buttonText: 'Explore Plants',
    buttonLink: '/plants-fish/aquatic-plants',
    service: 'Aquatic Plants'
  },
  {
    id: 3,
    image: '/images/pondConstruction1000x800.webp',
    alt: 'Custom pond construction services',
    title: 'Pond Construction',
    subtitle: 'Custom Water Features',
    description: 'Design and build your dream pond with our expert construction services',
    buttonText: 'Get Quote',
    buttonLink: '/pond-construction',
    service: 'Pond Construction'
  },
  {
    id: 4,
    image: '/images/pondMaintenance.webp',
    alt: 'Pond maintenance and care',
    title: 'Pond Maintenance',
    subtitle: 'Keep Your Pond Beautiful',
    description: 'Regular maintenance programs to ensure your pond stays healthy and beautiful',
    buttonText: 'Learn More',
    buttonLink: '/pond-maintenance',
    service: 'Pond Maintenance'
  },
  {
    id: 5,
    image: '/images/pondCleanings.webp',
    alt: 'Professional pond cleaning services',
    title: 'Pond Cleanings',
    subtitle: 'Crystal Clear Water',
    description: 'Professional cleaning services to restore clarity and health to your pond',
    buttonText: 'Schedule Cleaning',
    buttonLink: '/pond-cleanings',
    service: 'Pond Cleanings'
  },
  {
    id: 6,
    image: '/images/koi.webp',
    alt: 'Koi fish and pond fish',
    title: 'Fish & Koi',
    subtitle: 'Beautiful Pond Fish',
    description: 'Add life and color to your pond with our selection of koi and pond fish',
    buttonText: 'View Fish',
    buttonLink: '/fish-koi',
    service: 'Fish & Koi'
  }
];

interface HeroSlideshowProps {
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showControls?: boolean;
}

export function HeroSlideshow({
  autoPlay = true,
  interval = 5000,
  showIndicators = true,
  showControls = true
}: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [currentSlide, autoPlay, interval]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className="hero-slideshow">
      <div className="slideshow-container">
        {/* Slides */}
        <div className="slides-wrapper">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
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
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className="indicator-dot"></span>
                <span className="indicator-label">{slide.service}</span>
              </button>
            ))}
          </div>
        )}

        {/* Progress Bar */}
        <div className="slideshow-progress">
          <div 
            className="progress-bar"
            style={{ 
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
              transition: 'width 0.1s linear'
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

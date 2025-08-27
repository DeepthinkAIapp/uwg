'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PageTemplateProps {
  children: ReactNode;
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: string;
  heroAlt?: string;
  showBreadcrumbs?: boolean;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  showTestimonials?: boolean;
  showServices?: boolean;
  showCTA?: boolean;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  showFAQ?: boolean;
  faqs?: Array<{ question: string; answer: string }>;
  showGallery?: boolean;
  galleryImages?: Array<{ src: string; alt: string; title?: string }>;
  showContactForm?: boolean;
  metaTitle?: string;
  metaDescription?: string;
}

export function PageTemplate({
  children,
  heroTitle,
  heroSubtitle,
  heroImage,
  heroAlt,
  showBreadcrumbs = true,
  breadcrumbs = [],
  showTestimonials = true,
  showServices = true,
  showCTA = true,
  ctaTitle = "Ready to Transform Your Outdoor Space?",
  ctaDescription = "Contact us today for a free consultation and let us help you create the water garden of your dreams.",
  ctaButtonText = "Get Free Quote",
  ctaButtonLink = "/contact",
  showFAQ = false,
  faqs = [],
  showGallery = false,
  galleryImages = [],
  showContactForm = false,
  metaTitle,
  metaDescription
}: PageTemplateProps) {
  return (
    <div className="page-template">
      {/* Hero Section */}
      {heroTitle && (
        <section className="hero-section">
          <div className="hero-background">
            {heroImage && (
              <Image
                src={heroImage}
                alt={heroAlt || heroTitle}
                fill
                style={{ objectFit: 'cover' }}
                priority
                onError={(e) => {
                  console.error(`Failed to load image: ${heroImage}`);
                  // Fallback to a default background color if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            )}
            <div className="hero-overlay"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">{heroTitle}</h1>
              {heroSubtitle && (
                <p className="hero-subtitle">{heroSubtitle}</p>
              )}
              <div className="hero-actions">
                <Link href="/contact" className="hero-button primary">
                  <i className="fas fa-phone"></i>
                  Get Free Quote
                </Link>
                <Link href="/schedule" className="hero-button secondary">
                  <i className="fas fa-calendar"></i>
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Breadcrumbs */}
      {showBreadcrumbs && breadcrumbs.length > 0 && (
        <section className="breadcrumbs-section">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <ol className="breadcrumb-list">
                <li className="breadcrumb-item">
                  <Link href="/" className="breadcrumb-link">
                    <i className="fas fa-home"></i>
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="breadcrumb-item">
                    {crumb.href ? (
                      <Link href={crumb.href} className="breadcrumb-link">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="breadcrumb-current">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="content-wrapper">
            {/* Primary Content */}
            <div className="content-primary">
              {children}
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
              {showServices && (
                <div className="sidebar-widget services-widget">
                  <h3 className="widget-title">
                    <i className="fas fa-tools"></i>
                    Our Services
                  </h3>
                  <ul className="services-list">
                    <li>
                      <Link href="/pond-cleanings">
                        <i className="fas fa-broom"></i>
                        Pond Cleanings
                      </Link>
                    </li>
                    <li>
                      <Link href="/pond-maintenance">
                        <i className="fas fa-cog"></i>
                        Pond Maintenance
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
                    <li>
                      <Link href="/pond-dredging">
                        <i className="fas fa-water"></i>
                        Pond Dredging
                      </Link>
                    </li>
                    <li>
                      <Link href="/lake-dredging">
                        <i className="fas fa-water"></i>
                        Lake Dredging
                      </Link>
                    </li>
                    <li>
                      <Link href="/pond-harvesting">
                        <i className="fas fa-fish"></i>
                        Pond Harvesting
                      </Link>
                    </li>
                    <li>
                      <Link href="/lake-harvesting">
                        <i className="fas fa-fish"></i>
                        Lake Harvesting
                      </Link>
                    </li>
                    <li>
                      <Link href="/plant-delivery">
                        <i className="fas fa-seedling"></i>
                        Plant Delivery
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

              {/* Testimonials Widget */}
              {showTestimonials && (
                <div className="sidebar-widget testimonials-widget">
                  <h3 className="widget-title">
                    <i className="fas fa-star"></i>
                    What Our Clients Say
                  </h3>
                  <div className="testimonial-item">
                    <div className="testimonial-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="testimonial-text">
                      &quot;Utah Water Gardens did an amazing job on our pond. It&apos;s truly the centerpiece of our backyard now!&quot;
                    </p>
                    <div className="testimonial-author">
                      <strong>Joe</strong>
                      <span>Salt Lake City, UT</span>
                    </div>
                  </div>
                  <Link href="/testimonials" className="testimonials-link">
                    View All Reviews
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              )}

              {/* Gallery Widget */}
              {showGallery && galleryImages.length > 0 && (
                <div className="sidebar-widget gallery-widget">
                  <h3 className="widget-title">
                    <i className="fas fa-images"></i>
                    Recent Projects
                  </h3>
                  <div className="gallery-grid">
                    {galleryImages.slice(0, 6).map((image, index) => (
                      <div key={index} className="gallery-item">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={100}
                          height={100}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    ))}
                  </div>
                  <Link href="/pond-gallery" className="gallery-link">
                    View Full Gallery
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      {showFAQ && faqs.length > 0 && (
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Get answers to common questions about our services</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      {showCTA && (
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">{ctaTitle}</h2>
              <p className="cta-description">{ctaDescription}</p>
              <div className="cta-actions">
                <Link href={ctaButtonLink} className="cta-button primary">
                  <i className="fas fa-phone"></i>
                  {ctaButtonText}
                </Link>
                <Link href="/schedule" className="cta-button secondary">
                  <i className="fas fa-calendar"></i>
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Form */}
      {showContactForm && (
        <section className="contact-form-section">
          <div className="container">
            <div className="contact-form-wrapper">
              <div className="contact-form-content">
                <h2 className="contact-form-title">Get Your Free Quote</h2>
                <p className="contact-form-description">
                  Fill out the form below and we&apos;ll get back to you within 24 hours with a personalized quote.
                </p>
                <form className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select id="service" name="service" className="form-select">
                      <option value="">Select a service</option>
                      <option value="pond-cleanings">Pond Cleanings</option>
                      <option value="pond-maintenance">Pond Maintenance</option>
                      <option value="pond-construction">Pond Construction</option>
                      <option value="pond-repair">Pond Repair</option>
                      <option value="lake-dredging">Lake Dredging</option>
                      <option value="plant-delivery">Plant Delivery</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="form-textarea"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button type="submit" className="form-submit">
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

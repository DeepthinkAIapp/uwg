'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`site-header ${isMounted && isScrolled ? 'scrolled' : ''}`} id="site-header">
      {/* Top Contact Bar */}
      <div className="header-top-bar">
        <div className="container">
          <div className="contact-info">
            <a href="https://maps.app.goo.gl/RjUYzSwfXJTqpxFH6" target="_blank" className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>5911 S 1300 E, Salt Lake City, Utah, 84121</span>
            </a>
            <a href="tel:8015908516" className="contact-item">
              <i className="fas fa-phone"></i>
              <span>801-590-8516</span>
            </a>
            <a href="mailto:contact@utahwatergardens.com" className="contact-item">
              <i className="far fa-envelope"></i>
              <span>contact@utahwatergardens.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="site-logo">
              <Link href="/">
                <Image
                  src="/images/utahWaterGardensLogoHoriz.webp"
                  alt="Utah Water Gardens logo with stylized text and red and blue water lily"
                  width={200}
                  height={60}
                  className="logo-image"
                  priority
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className={`main-navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`} id="main-navigation">
              <ul className="nav-menu">
                <li className="menu-item has-dropdown">
                  <Link href="/plants-fish" className="nav-link">Plants & Fish</Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/aquatic-plants" className="dropdown-link">Aquatic Plants</Link></li>
                    <li><Link href="/fish-koi" className="dropdown-link">Fish & Koi</Link></li>
                  </ul>
                </li>
                <li className="menu-item has-dropdown">
                  <Link href="/pond-services" className="nav-link">Pond Services</Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/pond-cleanings" className="dropdown-link">Pond Cleanings</Link></li>
                    <li><Link href="/pond-maintenance" className="dropdown-link">Pond Maintenance</Link></li>
                    <li><Link href="/pond-construction" className="dropdown-link">Pond Construction</Link></li>
                    <li><Link href="/pond-repair-and-rebuild" className="dropdown-link">Pond Repair and Rebuild</Link></li>
                    <li><Link href="/pond-and-lake-dredging" className="dropdown-link">Pond and Lake Dredging</Link></li>
                    <li><Link href="/pond-consultations" className="dropdown-link">Pond Consultations</Link></li>
                    <li><Link href="/dredging-a-pond-in-utah" className="dropdown-link">Dredging a Pond in Utah</Link></li>
                    <li><Link href="/plant-delivery" className="dropdown-link">Plant and Koi Delivery</Link></li>
                    <li><Link href="/schedule" className="dropdown-link">Schedule a Pond Service</Link></li>
                  </ul>
                </li>
                <li className="menu-item has-dropdown">
                  <Link href="/pond-supplies" className="nav-link">Pond Supplies</Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/pond-filters" className="dropdown-link">Pond Filters</Link></li>
                    <li><Link href="/pumps" className="dropdown-link">The Importance of Pond Pumps</Link></li>
                  </ul>
                </li>
                <li className="menu-item has-dropdown">
                  <Link href="/resources" className="nav-link">Resources</Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/pond-pump-repair" className="dropdown-link">Pond Pump Repair</Link></li>
                    <li><Link href="/resources/pondwaterloss" className="dropdown-link">Causes of Water Loss</Link></li>
                    <li><Link href="/resources/finding-a-leak-in-your-pond" className="dropdown-link">Finding A Leak In Your Pond</Link></li>
                    <li><Link href="/company-resources" className="dropdown-link">Company Resources</Link></li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href="/pond-gallery" className="nav-link">Pond Gallery</Link>
                </li>
                <li className="menu-item has-dropdown">
                  <Link href="/contact" className="nav-link">Contact</Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/privacy-and-legal-info" className="dropdown-link">Privacy and legal info</Link></li>
                  </ul>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle" 
              id="mobile-menu-toggle" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-sections">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <Image
                  src="/images/utahWaterGardensLogoHoriz.webp"
                  alt="Utah Water Gardens logo"
                  width={200}
                  height={60}
                  className="footer-logo-image"
                />
              </div>
              <p className="footer-description">
                Professional pond services and aquatic solutions in Utah. 
                We specialize in pond maintenance, construction, and aquatic plant care.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li><Link href="/plants-fish">Plants & Fish</Link></li>
                <li><Link href="/pond-services">Pond Services</Link></li>
                <li><Link href="/pond-supplies">Pond Supplies</Link></li>
                <li><Link href="/resources">Resources</Link></li>
                <li><Link href="/pond-gallery">Pond Gallery</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3 className="footer-heading">Our Services</h3>
              <ul className="footer-links">
                <li><Link href="/pond-cleanings">Pond Cleanings</Link></li>
                <li><Link href="/pond-maintenance">Pond Maintenance</Link></li>
                <li><Link href="/pond-construction">Pond Construction</Link></li>
                <li><Link href="/pond-repair-and-rebuild">Pond Repair</Link></li>
                <li><Link href="/pond-and-lake-dredging">Lake Dredging</Link></li>
                <li><Link href="/plant-delivery">Plant Delivery</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-heading">Contact Us</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>5911 S 1300 E<br />Salt Lake City, Utah 84121</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <a href="tel:8015908516">801-590-8516</a>
                </div>
                <div className="contact-item">
                  <i className="far fa-envelope"></i>
                  <a href="mailto:contact@utahwatergardens.com">contact@utahwatergardens.com</a>
                </div>
              </div>
              <div className="footer-cta">
                <Link href="/contact" className="footer-button">Get Free Quote</Link>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                © 2025 Utah Water Gardens. All rights reserved.
              </p>
              <div className="footer-bottom-links">
                <Link href="/privacy-and-legal-info">Privacy Policy</Link>
                <Link href="/company-resources">Company Resources</Link>
                <a href="https://www.utahwatergardens.com/" target="_blank" rel="noopener">
                  Site designed by Utah Water Gardens
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

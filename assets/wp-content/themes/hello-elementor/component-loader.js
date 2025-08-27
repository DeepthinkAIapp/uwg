/**
 * Component Loader for Utah Water Gardens
 * Enhances existing Elementor header and footer with additional functionality
 */

class ComponentLoader {
    constructor() {
        this.init();
    }

    init() {
        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        this.enhanceHeader();
        this.enhanceFooter();
        this.addComponentStyles();
    }

    enhanceHeader() {
        const header = document.querySelector('[data-elementor-type="header"]');
        if (!header) return;

        // Add mobile menu functionality to existing header
        this.addMobileMenuFunctionality(header);
        
        // Add scroll effects
        this.addScrollEffects(header);
        
        // Add dropdown enhancements
        this.enhanceDropdowns(header);
    }

    enhanceFooter() {
        const footer = document.querySelector('[data-elementor-type="footer"]');
        if (!footer) return;

        // Add smooth scroll to footer links
        const footerLinks = footer.querySelectorAll('a[href^="#"]');
        footerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    addMobileMenuFunctionality(header) {
        // Find existing mobile menu toggle
        const mobileToggle = header.querySelector('.elementor-menu-toggle');
        const navigation = header.querySelector('.elementor-nav-menu--main');
        const dropdownNav = header.querySelector('.elementor-nav-menu--dropdown');
        
        if (mobileToggle && navigation) {
            mobileToggle.addEventListener('click', () => {
                navigation.classList.toggle('mobile-open');
                dropdownNav.classList.toggle('mobile-open');
                mobileToggle.classList.toggle('active');
                
                // Update aria-expanded
                const isExpanded = navigation.classList.contains('mobile-open');
                mobileToggle.setAttribute('aria-expanded', isExpanded);
            });
        }
    }

    addScrollEffects(header) {
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide/show header on scroll
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
            
            lastScrollTop = scrollTop;
        });
    }

    enhanceDropdowns(header) {
        // Enhance existing dropdowns with better hover effects
        const dropdownItems = header.querySelectorAll('.menu-item-has-children');
        dropdownItems.forEach(item => {
            const link = item.querySelector('a');
            const dropdown = item.querySelector('.sub-menu');
            
            if (link && dropdown) {
                // Desktop hover enhancements
                item.addEventListener('mouseenter', () => {
                    if (window.innerWidth > 768) {
                        dropdown.style.display = 'block';
                        dropdown.style.opacity = '1';
                        dropdown.style.visibility = 'visible';
                        dropdown.style.transform = 'translateY(0)';
                    }
                });
                
                item.addEventListener('mouseleave', () => {
                    if (window.innerWidth > 768) {
                        dropdown.style.display = 'none';
                        dropdown.style.opacity = '0';
                        dropdown.style.visibility = 'hidden';
                        dropdown.style.transform = 'translateY(-10px)';
                    }
                });
                
                // Mobile click enhancements
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        const isOpen = dropdown.style.display === 'block';
                        dropdown.style.display = isOpen ? 'none' : 'block';
                        
                        // Close other dropdowns
                        dropdownItems.forEach(otherItem => {
                            if (otherItem !== item) {
                                const otherDropdown = otherItem.querySelector('.sub-menu');
                                if (otherDropdown) {
                                    otherDropdown.style.display = 'none';
                                }
                            }
                        });
                    }
                });
            }
        });
    }

    addComponentStyles() {
        // Add enhancement styles if not already present
        if (!document.getElementById('component-enhancement-styles')) {
            const style = document.createElement('style');
            style.id = 'component-enhancement-styles';
            style.textContent = `
                /* Header Enhancement Styles */
                [data-elementor-type="header"] {
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    z-index: 1000 !important;
                    transition: all 0.3s ease !important;
                }
                
                [data-elementor-type="header"].scrolled {
                    box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important;
                }
                
                [data-elementor-type="header"].header-hidden {
                    transform: translateY(-100%) !important;
                }
                
                /* Add margin to body to account for fixed header */
                body {
                    padding-top: 120px !important;
                }
                
                /* Enhanced Dropdown Styles - Make dropdowns visible on hover */
                .elementor-nav-menu .sub-menu {
                    display: none !important;
                    position: absolute !important;
                    top: 100% !important;
                    left: 0 !important;
                    background: #fff !important;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important;
                    border-radius: 8px !important;
                    padding: 16px !important;
                    min-width: 200px !important;
                    list-style: none !important;
                    margin: 0 !important;
                    opacity: 0 !important;
                    visibility: hidden !important;
                    transform: translateY(-10px) !important;
                    transition: all 0.3s ease !important;
                    z-index: 1001 !important;
                }
                
                .elementor-nav-menu .sub-menu li {
                    margin: 0 !important;
                    padding: 0 !important;
                }
                
                .elementor-nav-menu .sub-menu a {
                    display: block !important;
                    padding: 8px 16px !important;
                    color: #333 !important;
                    text-decoration: none !important;
                    transition: all 0.3s ease !important;
                    border-radius: 4px !important;
                }
                
                .elementor-nav-menu .sub-menu a:hover {
                    background: #f5f5f5 !important;
                    color: #d32f2f !important;
                }
                
                /* Ensure menu items with dropdowns have proper positioning */
                .menu-item-has-children {
                    position: relative !important;
                }
                
                /* Mobile Menu Enhancements */
                @media (max-width: 768px) {
                    body {
                        padding-top: 100px !important;
                    }
                    
                    .elementor-nav-menu--main.mobile-open {
                        display: block !important;
                        position: absolute !important;
                        top: 100% !important;
                        left: 0 !important;
                        right: 0 !important;
                        background: #fff !important;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important;
                        z-index: 1001 !important;
                    }
                    
                    .elementor-nav-menu--dropdown.mobile-open {
                        display: block !important;
                    }
                    
                    .elementor-nav-menu .sub-menu {
                        opacity: 1 !important;
                        visibility: visible !important;
                        background: #f8f9fa !important;
                        margin-left: 20px !important;
                        border-left: 2px solid #e9ecef !important;
                        position: static !important;
                        box-shadow: none !important;
                        transform: none !important;
                    }
                    
                    .elementor-menu-toggle.active .elementor-menu-toggle__icon--open {
                        display: none !important;
                    }
                    
                    .elementor-menu-toggle.active .elementor-menu-toggle__icon--close {
                        display: block !important;
                    }
                }
                
                /* Smooth transitions for all interactive elements */
                .elementor-nav-menu a,
                .elementor-icon-list-item a {
                    transition: all 0.3s ease !important;
                }
                
                /* Enhanced hover effects */
                .elementor-nav-menu a:hover {
                    transform: translateY(-1px) !important;
                }
                
                .elementor-icon-list-item a:hover {
                    opacity: 0.8 !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Initialize component loader
new ComponentLoader();

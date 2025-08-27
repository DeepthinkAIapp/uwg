/**
 * Advanced Interactions & Animations for Utah Water Gardens
 * Modern JavaScript for enhanced user experience
 */

(function() {
    'use strict';

    // ===== UTILITY FUNCTIONS =====
    const utils = {
        // Debounce function for performance
        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // Throttle function for scroll events
        throttle: function(func, limit) {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        // Check if element is in viewport
        isInViewport: function(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },

        // Smooth scroll to element
        smoothScrollTo: function(element, offset = 0) {
            const targetPosition = element.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    // ===== SCROLL ANIMATIONS =====
    class ScrollAnimations {
        constructor() {
            this.animatedElements = document.querySelectorAll('.fade-in, .wp-block-columns, .wp-block-image');
            this.init();
        }

        init() {
            this.setupIntersectionObserver();
            this.setupScrollEffects();
        }

        setupIntersectionObserver() {
            const options = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            this.animatedElements.forEach(el => {
                el.classList.add('fade-in');
                observer.observe(el);
            });
        }

        setupScrollEffects() {
            // Parallax effect for images
            const images = document.querySelectorAll('.wp-block-image img');
            
            window.addEventListener('scroll', utils.throttle(() => {
                const scrolled = window.pageYOffset;
                images.forEach(img => {
                    const rate = scrolled * -0.5;
                    img.style.transform = `translateY(${rate}px)`;
                });
            }, 16));

            // Header background opacity on scroll
            const header = document.querySelector('.elementor-742');
            if (header) {
                window.addEventListener('scroll', utils.throttle(() => {
                    const scrolled = window.pageYOffset;
                    const opacity = Math.min(scrolled / 200, 0.95);
                    header.style.backgroundColor = `rgba(37, 99, 235, ${opacity})`;
                }, 16));
            }
        }
    }

    // ===== ENHANCED NAVIGATION =====
    class EnhancedNavigation {
        constructor() {
            this.nav = document.querySelector('.elementor-nav-menu--main');
            this.navItems = document.querySelectorAll('.elementor-nav-menu a');
            this.init();
        }

        init() {
            this.setupHoverEffects();
            this.setupActiveStates();
            this.setupMobileMenu();
        }

        setupHoverEffects() {
            this.navItems.forEach(item => {
                item.addEventListener('mouseenter', (e) => {
                    this.createRippleEffect(e);
                });
            });
        }

        createRippleEffect(event) {
            const ripple = document.createElement('span');
            const rect = event.target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

            event.target.style.position = 'relative';
            event.target.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        }

        setupActiveStates() {
            const currentPage = window.location.pathname.split('/').pop();
            this.navItems.forEach(item => {
                if (item.getAttribute('href') === currentPage) {
                    item.classList.add('active');
                }
            });
        }

        setupMobileMenu() {
            const mobileToggle = document.querySelector('.elementor-menu-toggle');
            const mobileMenu = document.querySelector('.elementor-nav-menu--dropdown');

            if (mobileToggle && mobileMenu) {
                mobileToggle.addEventListener('click', () => {
                    const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
                    mobileToggle.setAttribute('aria-expanded', !isExpanded);
                    mobileMenu.classList.toggle('active');
                });
            }
        }
    }

    // ===== ENHANCED IMAGES =====
    class EnhancedImages {
        constructor() {
            this.images = document.querySelectorAll('.wp-block-image img');
            this.init();
        }

        init() {
            this.setupLazyLoading();
            this.setupLightbox();
            this.setupZoomEffects();
        }

        setupLazyLoading() {
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src || img.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    });
                });

                this.images.forEach(img => {
                    if (img.dataset.src) {
                        img.classList.add('lazy');
                        imageObserver.observe(img);
                    }
                });
            }
        }

        setupLightbox() {
            this.images.forEach(img => {
                img.addEventListener('click', () => {
                    this.openLightbox(img);
                });
            });
        }

        openLightbox(image) {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${image.src}" alt="${image.alt}">
                    <button class="lightbox-close">&times;</button>
                </div>
            `;

            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;

            document.body.appendChild(lightbox);
            setTimeout(() => lightbox.style.opacity = '1', 10);

            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                    lightbox.style.opacity = '0';
                    setTimeout(() => lightbox.remove(), 300);
                }
            });
        }

        setupZoomEffects() {
            this.images.forEach(img => {
                img.addEventListener('mouseenter', () => {
                    img.style.transform = 'scale(1.05)';
                });

                img.addEventListener('mouseleave', () => {
                    img.style.transform = 'scale(1)';
                });
            });
        }
    }

    // ===== ENHANCED FORMS =====
    class EnhancedForms {
        constructor() {
            this.forms = document.querySelectorAll('form');
            this.init();
        }

        init() {
            this.setupFormValidation();
            this.setupFloatingLabels();
            this.setupSubmitAnimations();
        }

        setupFormValidation() {
            this.forms.forEach(form => {
                const inputs = form.querySelectorAll('input, textarea, select');
                
                inputs.forEach(input => {
                    input.addEventListener('blur', () => {
                        this.validateField(input);
                    });

                    input.addEventListener('input', () => {
                        if (input.classList.contains('error')) {
                            this.validateField(input);
                        }
                    });
                });

                form.addEventListener('submit', (e) => {
                    if (!this.validateForm(form)) {
                        e.preventDefault();
                    }
                });
            });
        }

        validateField(field) {
            const value = field.value.trim();
            let isValid = true;
            let errorMessage = '';

            // Remove existing error styling
            field.classList.remove('error');
            this.removeErrorMessage(field);

            // Validation rules
            if (field.hasAttribute('required') && !value) {
                isValid = false;
                errorMessage = 'This field is required';
            } else if (field.type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
            } else if (field.type === 'tel' && value) {
                const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                    isValid = false;
                    errorMessage = 'Please enter a valid phone number';
                }
            }

            if (!isValid) {
                field.classList.add('error');
                this.showErrorMessage(field, errorMessage);
            }

            return isValid;
        }

        validateForm(form) {
            const inputs = form.querySelectorAll('input, textarea, select');
            let isValid = true;

            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isValid = false;
                }
            });

            return isValid;
        }

        showErrorMessage(field, message) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = message;
            errorDiv.style.cssText = `
                color: #dc2626;
                font-size: 0.875rem;
                margin-top: 0.25rem;
                animation: slideDown 0.3s ease;
            `;

            field.parentNode.appendChild(errorDiv);
        }

        removeErrorMessage(field) {
            const existingError = field.parentNode.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
        }

        setupFloatingLabels() {
            const inputs = document.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (input.placeholder) {
                    const label = document.createElement('label');
                    label.textContent = input.placeholder;
                    label.className = 'floating-label';
                    label.style.cssText = `
                        position: absolute;
                        left: 0.75rem;
                        top: 50%;
                        transform: translateY(-50%);
                        color: #6b7280;
                        transition: all 0.3s ease;
                        pointer-events: none;
                        background: white;
                        padding: 0 0.25rem;
                    `;

                    input.parentNode.style.position = 'relative';
                    input.parentNode.appendChild(label);

                    input.addEventListener('focus', () => {
                        label.style.top = '0';
                        label.style.fontSize = '0.75rem';
                        label.style.color = '#2563eb';
                    });

                    input.addEventListener('blur', () => {
                        if (!input.value) {
                            label.style.top = '50%';
                            label.style.fontSize = '1rem';
                            label.style.color = '#6b7280';
                        }
                    });
                }
            });
        }

        setupSubmitAnimations() {
            this.forms.forEach(form => {
                form.addEventListener('submit', (e) => {
                    const submitBtn = form.querySelector('button[type="submit"]');
                    if (submitBtn) {
                        submitBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';
                        submitBtn.disabled = true;
                    }
                });
            });
        }
    }

    // ===== PERFORMANCE OPTIMIZATIONS =====
    class PerformanceOptimizer {
        constructor() {
            this.init();
        }

        init() {
            this.setupResourceHints();
            this.optimizeImages();
            this.setupServiceWorker();
        }

        setupResourceHints() {
            // Preload critical resources
            const criticalResources = [
                '/assets/wp-content/themes/hello-elementor/fonts/inter.woff2',
                '/assets/wp-content/themes/hello-elementor/fonts/poppins.woff2'
            ];

            criticalResources.forEach(resource => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = resource;
                link.as = 'font';
                link.type = 'font/woff2';
                link.crossOrigin = 'anonymous';
                document.head.appendChild(link);
            });
        }

        optimizeImages() {
            // Add loading="lazy" to non-critical images
            const images = document.querySelectorAll('img:not([loading])');
            images.forEach((img, index) => {
                if (index > 2) { // Skip first 3 images
                    img.loading = 'lazy';
                }
            });
        }

        setupServiceWorker() {
            if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                    navigator.serviceWorker.register('/sw.js')
                        .then(registration => {
                            console.log('SW registered: ', registration);
                        })
                        .catch(registrationError => {
                            console.log('SW registration failed: ', registrationError);
                        });
                });
            }
        }
    }

    // ===== ACCESSIBILITY ENHANCEMENTS =====
    class AccessibilityEnhancer {
        constructor() {
            this.init();
        }

        init() {
            this.setupKeyboardNavigation();
            this.setupSkipLinks();
            this.setupARIALabels();
        }

        setupKeyboardNavigation() {
            document.addEventListener('keydown', (e) => {
                // Escape key to close modals/menus
                if (e.key === 'Escape') {
                    const openMenus = document.querySelectorAll('.elementor-nav-menu--dropdown.active');
                    openMenus.forEach(menu => {
                        menu.classList.remove('active');
                        const toggle = menu.previousElementSibling;
                        if (toggle) {
                            toggle.setAttribute('aria-expanded', 'false');
                        }
                    });
                }
            });
        }

        setupSkipLinks() {
            const skipLink = document.createElement('a');
            skipLink.href = '#content';
            skipLink.textContent = 'Skip to main content';
            skipLink.className = 'skip-link';
            skipLink.style.cssText = `
                position: absolute;
                top: -40px;
                left: 6px;
                background: #2563eb;
                color: white;
                padding: 8px;
                text-decoration: none;
                border-radius: 4px;
                z-index: 10000;
                transition: top 0.3s;
            `;

            skipLink.addEventListener('focus', () => {
                skipLink.style.top = '6px';
            });

            skipLink.addEventListener('blur', () => {
                skipLink.style.top = '-40px';
            });

            document.body.insertBefore(skipLink, document.body.firstChild);
        }

        setupARIALabels() {
            // Add ARIA labels to interactive elements
            const buttons = document.querySelectorAll('button:not([aria-label])');
            buttons.forEach(button => {
                if (button.textContent.trim()) {
                    button.setAttribute('aria-label', button.textContent.trim());
                }
            });
        }
    }

    // ===== INITIALIZATION =====
    document.addEventListener('DOMContentLoaded', () => {
        // Initialize all classes
        new ScrollAnimations();
        new EnhancedNavigation();
        new EnhancedImages();
        new EnhancedForms();
        new PerformanceOptimizer();
        new AccessibilityEnhancer();

        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .loading-spinner {
                display: inline-block;
                width: 20px;
                height: 20px;
                border: 3px solid rgba(255,255,255,.3);
                border-radius: 50%;
                border-top-color: #fff;
                animation: spin 1s ease-in-out infinite;
            }
            
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            
            .error {
                border-color: #dc2626 !important;
                box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1) !important;
            }
        `;
        document.head.appendChild(style);
    });

})();

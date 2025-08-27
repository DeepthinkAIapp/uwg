# Component System Documentation

## Overview

Utah Water Gardens now uses a modular component system that allows you to update the header and footer across all pages by editing just two files. This ensures consistency and makes maintenance much easier.

## How It Works

The component system consists of:

1. **Component Files**: HTML templates for header and footer
2. **Component Loader**: JavaScript that dynamically loads and replaces components
3. **Automatic Updates**: Changes to components automatically apply to all pages

## Component Files

### Header Component
**File**: `components/header.html`

This file contains the complete header structure including:
- Top contact bar with address, phone, and email
- Main navigation with dropdown menus
- Logo and mobile menu toggle
- Responsive design elements

### Footer Component
**File**: `components/footer.html`

This file contains the complete footer structure including:
- Company information and logo
- Quick links to main pages
- Service links
- Contact information
- Social media links
- Copyright and legal links

## Making Changes

### To Update the Header:
1. Edit `components/header.html`
2. Save the file
3. Refresh any page on the site
4. Changes will appear on all pages automatically

### To Update the Footer:
1. Edit `components/footer.html`
2. Save the file
3. Refresh any page on the site
4. Changes will appear on all pages automatically

## Component Features

### Header Features:
- **Responsive Design**: Adapts to mobile, tablet, and desktop
- **Dropdown Menus**: Hover on desktop, click on mobile
- **Mobile Menu**: Hamburger menu for mobile devices
- **Scroll Effects**: Header hides/shows on scroll
- **Contact Information**: Always visible contact details

### Footer Features:
- **Grid Layout**: Responsive grid with company info, links, and contact
- **Social Links**: Facebook, Instagram, YouTube (ready for actual URLs)
- **Quick Links**: Easy access to main pages
- **Service Links**: Direct links to all services
- **Contact CTA**: "Get Free Quote" button

## Technical Details

### Component Loader
**File**: `assets/wp-content/themes/hello-elementor/component-loader.js`

The component loader:
1. Fetches header and footer HTML from component files
2. Replaces existing Elementor header/footer elements
3. Initializes interactive features (dropdowns, mobile menu, scroll effects)
4. Adds component-specific styles
5. Handles responsive behavior

### Styling
Component styles are automatically injected and include:
- CSS Variables integration with existing design system
- Responsive breakpoints
- Hover effects and transitions
- Mobile-first design approach

## File Structure

```
components/
├── header.html          # Header component template
└── footer.html          # Footer component template

assets/wp-content/themes/hello-elementor/
├── component-loader.js  # Component loading and initialization
├── advanced-styles.css  # Main design system
└── advanced-interactions.js # Enhanced interactions

scripts/
├── add-component-loader.ps1  # Script to add loader to pages
└── revamp-all-pages.ps1     # Script to update all pages
```

## Benefits

1. **Consistency**: All pages automatically stay in sync
2. **Maintenance**: Update once, applies everywhere
3. **Performance**: Components are cached and load efficiently
4. **Flexibility**: Easy to modify without touching individual pages
5. **SEO**: Maintains proper HTML structure and accessibility

## Troubleshooting

### Components Not Loading:
1. Check that `component-loader.js` is included in the page
2. Verify component file paths are correct
3. Check browser console for JavaScript errors
4. Ensure server is running and files are accessible

### Styling Issues:
1. Verify `advanced-styles.css` is loaded
2. Check that CSS variables are defined
3. Inspect element to see if component styles are applied

### Mobile Menu Not Working:
1. Check that mobile menu toggle button exists
2. Verify JavaScript event listeners are attached
3. Test on actual mobile device or responsive mode

## Future Enhancements

Potential improvements to the component system:
- Add more components (sidebar, breadcrumbs, etc.)
- Implement component caching for better performance
- Add component versioning for rollback capability
- Create component editor interface
- Add analytics tracking to component interactions

## Support

For issues with the component system:
1. Check browser console for errors
2. Verify all files are in correct locations
3. Test on different browsers and devices
4. Review component HTML structure for syntax errors

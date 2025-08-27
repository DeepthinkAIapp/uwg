# 🚀 Next.js Migration Plan for Utah Water Gardens

## 🎯 **Migration Overview**

Converting your current HTML/Elementor site to Next.js React while preserving 100% of your styling and functionality, enabling advanced features for 1000+ pages.

---

## 📋 **Phase 1: Project Setup & Structure**

### **1.1 Next.js Project Initialization**
```bash
npx create-next-app@latest utah-water-gardens-nextjs --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd utah-water-gardens-nextjs
```

### **1.2 Project Structure**
```
utah-water-gardens-nextjs/
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   ├── plants-fish/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── aquatic-plants/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── fish-koi/
│   │   │   │       └── page.tsx
│   │   │   ├── pond-services/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── pond-cleanings/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [service]/
│   │   │   │       └── page.tsx
│   │   │   ├── pond-supplies/
│   │   │   ├── resources/
│   │   │   ├── pond-gallery/
│   │   │   └── contact/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Container.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       └── Testimonials.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── types.ts
│   └── styles/
│       ├── globals.css
│       └── components.css
├── public/
│   ├── images/
│   └── assets/
└── content/
    ├── pages/
    ├── services/
    └── blog/
```

---

## 🎨 **Phase 2: Styling Migration**

### **2.1 Preserve Your CSS Variables**
```css
/* src/styles/globals.css */
:root {
  /* Your exact color palette */
  --primary-blue: #2563eb;
  --primary-blue-dark: #1d4ed8;
  --primary-blue-light: #3b82f6;
  --accent-green: #10b981;
  --accent-green-light: #34d399;
  --accent-orange: #f59e0b;
  --accent-orange-light: #fbbf24;
  
  /* Your exact neutral colors */
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  
  /* Your exact typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-heading: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* Your exact spacing system */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  
  /* Your exact shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  
  /* Your exact border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-full: 9999px;
  
  /* Your exact transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;
  
  /* Your exact z-index scale */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
}
```

### **2.2 Migrate Your Header Styling**
```css
/* src/styles/components.css */
.header {
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
  box-shadow: var(--shadow-lg);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-top-bar {
  background: linear-gradient(90deg, var(--gray-800) 0%, var(--gray-700) 100%);
  padding: var(--spacing-sm) 0;
}

.navigation {
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  padding: var(--spacing-sm);
  backdrop-filter: blur(10px);
}

.nav-link {
  color: var(--white);
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-lg);
  transition: var(--transition-fast);
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}
```

---

## ⚛️ **Phase 3: Component Migration**

### **3.1 Header Component**
```tsx
// src/components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from './Navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Contact Bar */}
      <div className="header-top-bar">
        <div className="container">
          <div className="contact-info">
            <a href="https://maps.app.goo.gl/RjUYzSwfXJTqpxFH6" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt"></i>
              <span>5911 S 1300 E, Salt Lake City, Utah, 84121</span>
            </a>
            <a href="tel:8015908516">
              <i className="fas fa-phone"></i>
              <span>801-590-8516</span>
            </a>
            <a href="mailto:contact@utahwatergardens.com">
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
            <Link href="/" className="logo">
              <Image
                src="/images/utahWaterGardensLogoHoriz.webp"
                alt="Utah Water Gardens logo"
                width={1500}
                height={296}
                priority
              />
            </Link>

            {/* Navigation */}
            <Navigation 
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
```

### **3.2 Navigation Component with Dynamic Routes**
```tsx
// src/components/layout/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationData } from '@/lib/constants';

interface NavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export function Navigation({ isMobileMenuOpen, setIsMobileMenuOpen }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={`navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <ul className="nav-menu">
        {navigationData.map((item) => (
          <li key={item.href} className={`nav-item ${item.children ? 'has-dropdown' : ''}`}>
            <Link 
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
            
            {item.children && (
              <ul className="dropdown-menu">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link 
                      href={child.href}
                      className="dropdown-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

### **3.3 Navigation Data Structure**
```tsx
// src/lib/constants.ts
export const navigationData = [
  {
    label: 'Plants & Fish',
    href: '/plants-fish',
    children: [
      { label: 'Aquatic Plants', href: '/plants-fish/aquatic-plants' },
      { label: 'Fish & Koi', href: '/plants-fish/fish-koi' },
    ],
  },
  {
    label: 'Pond Services',
    href: '/pond-services',
    children: [
      { label: 'Pond Cleanings', href: '/pond-services/pond-cleanings' },
      { label: 'Pond Maintenance', href: '/pond-services/pond-maintenance' },
      { label: 'Pond Construction', href: '/pond-services/pond-construction' },
      { label: 'Pond Repair and Rebuild', href: '/pond-services/pond-repair-and-rebuild' },
      { label: 'Pond and Lake Dredging', href: '/pond-services/pond-and-lake-dredging' },
      { label: 'Pond Consultations', href: '/pond-services/pond-consultations' },
      { label: 'Dredging a Pond in Utah', href: '/pond-services/dredging-a-pond-in-utah' },
      { label: 'Plant and Koi Delivery', href: '/pond-services/plant-delivery' },
      { label: 'Schedule a Pond Service', href: '/pond-services/schedule' },
    ],
  },
  {
    label: 'Pond Supplies',
    href: '/pond-supplies',
    children: [
      { label: 'Pond Filters', href: '/pond-supplies/pond-filters' },
      { label: 'The Importance of Pond Pumps', href: '/pond-supplies/pumps' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Pond Pump Repair', href: '/resources/pond-pump-repair' },
      { label: 'Causes of Water Loss', href: '/resources/pondwaterloss' },
      { label: 'Finding A Leak In Your Pond', href: '/resources/finding-a-leak-in-your-pond' },
      { label: 'Company Resources', href: '/resources/company-resources' },
    ],
  },
  {
    label: 'Pond Gallery',
    href: '/pond-gallery',
  },
  {
    label: 'Contact',
    href: '/contact',
    children: [
      { label: 'Privacy and Legal Info', href: '/contact/privacy-and-legal-info' },
    ],
  },
];
```

---

## 🚀 **Phase 4: Advanced Features for 1000+ Pages**

### **4.1 Dynamic Page Generation**
```tsx
// src/app/pond-services/[service]/page.tsx
import { notFound } from 'next/navigation';
import { getServiceData, getAllServices } from '@/lib/services';

interface ServicePageProps {
  params: { service: string };
}

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({
    service: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getServiceData(params.service);
  
  if (!service) {
    notFound();
  }

  return (
    <div className="service-page">
      <h1>{service.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: service.content }} />
    </div>
  );
}
```

### **4.2 Content Management System**
```tsx
// src/lib/content.ts
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface PageContent {
  title: string;
  description: string;
  content: string;
  slug: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
}

export function getAllPages(): PageContent[] {
  const pagesDirectory = join(process.cwd(), 'content/pages');
  const filenames = readdirSync(pagesDirectory);
  
  const pages = filenames.map((filename) => {
    const filePath = join(pagesDirectory, filename);
    const fileContents = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      description: data.description,
      content,
      category: data.category,
      tags: data.tags || [],
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
    };
  });
  
  return pages;
}

export function getPageBySlug(slug: string): PageContent | null {
  try {
    const filePath = join(process.cwd(), 'content/pages', `${slug}.md`);
    const fileContents = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title,
      description: data.description,
      content,
      category: data.category,
      tags: data.tags || [],
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
    };
  } catch {
    return null;
  }
}
```

### **4.3 SEO Optimization**
```tsx
// src/app/layout.tsx
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Utah Water Gardens | Custom Ponds, Waterfalls & Aquatics',
    template: '%s | Utah Water Gardens',
  },
  description: 'We design, build, and maintain beautiful custom ponds, waterfalls, and aquatic plant features. Serving Utah with expert pond cleaning, repair, and dredging.',
  keywords: ['pond services', 'aquatic plants', 'koi fish', 'pond maintenance', 'utah water gardens'],
  authors: [{ name: 'Utah Water Gardens' }],
  creator: 'Utah Water Gardens',
  publisher: 'Utah Water Gardens',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://utahwatergardens.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://utahwatergardens.com',
    title: 'Utah Water Gardens | Custom Ponds, Waterfalls & Aquatics',
    description: 'We design, build, and maintain beautiful custom ponds, waterfalls, and aquatic plant features.',
    siteName: 'Utah Water Gardens',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Utah Water Gardens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utah Water Gardens | Custom Ponds, Waterfalls & Aquatics',
    description: 'We design, build, and maintain beautiful custom ponds, waterfalls, and aquatic plant features.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

### **4.4 Performance Optimization**
```tsx
// src/app/page.tsx
import { Suspense } from 'react';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { Loading } from '@/components/ui/Loading';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <Services />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Testimonials />
      </Suspense>
    </>
  );
}
```

---

## 🔧 **Phase 5: Development Tools & Workflow**

### **5.1 Package.json Dependencies**
```json
{
  "dependencies": {
    "next": "14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "gray-matter": "^4.0.3",
    "remark": "^15.0.1",
    "remark-html": "^16.0.1",
    "date-fns": "^2.30.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "14.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

### **5.2 Content Management Workflow**
```bash
# Create new page
npm run create:page "New Service Name"

# Build for production
npm run build

# Start development server
npm run dev

# Generate static pages
npm run export
```

---

## 📈 **Phase 6: Scaling to 1000+ Pages**

### **6.1 Automated Page Generation**
```tsx
// scripts/generate-pages.ts
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

interface PageTemplate {
  title: string;
  slug: string;
  category: string;
  content: string;
}

const pageTemplates: PageTemplate[] = [
  // Your 1000+ page templates
];

pageTemplates.forEach((template) => {
  const content = `---
title: "${template.title}"
description: "Professional ${template.category} services in Utah"
category: "${template.category}"
tags: ["${template.category}", "utah", "pond services"]
publishedAt: "${new Date().toISOString()}"
updatedAt: "${new Date().toISOString()}"
---

${template.content}
`;

  const filePath = join(process.cwd(), 'content/pages', `${template.slug}.md`);
  writeFileSync(filePath, content);
});
```

### **6.2 Advanced Search & Filtering**
```tsx
// src/components/Search.tsx
'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { getAllPages } from '@/lib/content';

export function Search() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const pages = getAllPages();

  const filteredPages = useMemo(() => {
    return pages.filter((page) =>
      page.title.toLowerCase().includes(query.toLowerCase()) ||
      page.content.toLowerCase().includes(query.toLowerCase()) ||
      page.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query, pages]);

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search services, plants, or topics..."
        className="search-input"
      />
      
      {query && (
        <div className="search-results">
          {filteredPages.map((page) => (
            <div
              key={page.slug}
              className="search-result"
              onClick={() => router.push(`/${page.category}/${page.slug}`)}
            >
              <h3>{page.title}</h3>
              <p>{page.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

---

## 🎯 **Benefits of This Migration**

### **Performance**
- ⚡ Static generation for all pages
- 🚀 Automatic code splitting
- 📱 Optimized images with Next.js Image component
- 🔄 Incremental Static Regeneration

### **SEO & Marketing**
- 🔍 Built-in SEO optimization
- 📊 Structured data support
- 🌐 Sitemap generation
- 📱 Social media optimization

### **Development Experience**
- 🛠️ Hot reloading
- 📝 TypeScript support
- 🎨 CSS-in-JS or Tailwind CSS
- 🔧 Advanced debugging tools

### **Scalability**
- 📄 Easy content management
- 🔄 Automated page generation
- 🗃️ Database integration ready
- 📈 Analytics integration

---

## 🚀 **Next Steps**

1. **Set up Next.js project** with the structure above
2. **Migrate your CSS** to preserve exact styling
3. **Convert components** to React/TypeScript
4. **Set up content management** for 1000+ pages
5. **Implement advanced features** (search, filtering, etc.)
6. **Deploy and test** performance improvements

Would you like me to start with any specific phase of this migration plan?

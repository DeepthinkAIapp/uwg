import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Utah Water Gardens - Custom Ponds & Water Features',
  description: 'We design, build, and maintain beautiful custom ponds, water features, and aquatic landscapes throughout Utah. Professional pond services, aquatic plants, and koi fish.',
  keywords: 'pond design, pond construction, pond maintenance, aquatic plants, koi fish, water features, Utah pond services',
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
    title: 'Utah Water Gardens - Custom Ponds & Water Features',
    description: 'Professional pond design, construction, and maintenance services in Utah. Beautiful aquatic plants and koi fish for your water garden.',
    url: 'https://utahwatergardens.com',
    siteName: 'Utah Water Gardens',
    images: [
      {
        url: '/images/utahWaterGardensLogoHoriz.webp',
        width: 1200,
        height: 630,
        alt: 'Utah Water Gardens Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utah Water Gardens - Custom Ponds & Water Features',
    description: 'Professional pond design, construction, and maintenance services in Utah.',
    images: ['/images/utahWaterGardensLogoHoriz.webp'],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

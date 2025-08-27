/* eslint-disable @next/next/no-html-link-for-pages */
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPageBySlug, getAllPages } from '@/lib/content';

interface ServicePageProps {
  params: { service: string };
}

export async function generateStaticParams() {
  const pages = getAllPages();
  return pages
    .filter(page => page.category === 'pond-services')
    .map((page) => ({
      service: page.slug,
    }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const page = getPageBySlug(params.service);
  
  if (!page || page.category !== 'pond-services') {
    notFound();
  }

  return (
    <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: 'var(--spacing-xl)' }}>
          <Link href="/" style={{ color: 'var(--gray-500)' }}>Home</Link>
          <span style={{ margin: '0 var(--spacing-sm)', color: 'var(--gray-400)' }}>/</span>
          <Link href="/pond-services" style={{ color: 'var(--gray-500)' }}>Pond Services</Link>
          <span style={{ margin: '0 var(--spacing-sm)', color: 'var(--gray-400)' }}>/</span>
          <span style={{ color: 'var(--primary-blue)' }}>{page.title}</span>
        </nav>

        {/* Page Header */}
        <header style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            color: 'var(--primary-blue)', 
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 'bold'
          }}>
            {page.title}
          </h1>
          {page.description && (
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--gray-600)', 
              lineHeight: '1.8'
            }}>
              {page.description}
            </p>
          )}
        </header>

        {/* Featured Image */}
        {page.featuredImage && (
          <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
            <Image 
              src={page.featuredImage} 
              alt={page.title}
              width={800}
              height={600}
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)'
              }}
            />
          </div>
        )}

        {/* Page Content */}
        <div 
          className="page-content"
          style={{ 
            fontSize: '1.125rem', 
            lineHeight: '1.8', 
            color: 'var(--gray-700)'
          }}
          dangerouslySetInnerHTML={{ __html: page.content }}
        />

        {/* Tags */}
        {page.tags.length > 0 && (
          <div style={{ marginTop: 'var(--spacing-3xl)', paddingTop: 'var(--spacing-xl)', borderTop: '1px solid var(--gray-200)' }}>
            <h3 style={{ color: 'var(--gray-600)', marginBottom: 'var(--spacing-lg)' }}>Related Topics:</h3>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
              {page.tags.map((tag) => (
                <span 
                  key={tag}
                  style={{ 
                    background: 'var(--gray-100)', 
                    color: 'var(--gray-700)', 
                    padding: 'var(--spacing-xs) var(--spacing-md)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.875rem'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div style={{ 
          background: 'var(--gray-50)', 
          padding: 'var(--spacing-2xl)', 
          borderRadius: 'var(--radius-lg)',
          marginTop: 'var(--spacing-3xl)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: 'var(--spacing-lg)' }}>
            Ready to Get Started?
          </h3>
          <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--spacing-xl)' }}>
            Contact us today to schedule your {page.title.toLowerCase()} service.
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ 
              background: 'var(--primary-blue)', 
              color: 'var(--white)', 
              padding: 'var(--spacing-md) var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              fontWeight: '600',
              textDecoration: 'none'
            }}>
              Contact Us
            </Link>
            <Link href="/pond-services/schedule" style={{ 
              background: 'var(--white)', 
              color: 'var(--primary-blue)', 
              padding: 'var(--spacing-md) var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              fontWeight: '600',
              textDecoration: 'none',
              border: '2px solid var(--primary-blue)'
            }}>
              Schedule Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
